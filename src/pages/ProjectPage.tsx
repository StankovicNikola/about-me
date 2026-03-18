import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";

const ProjectPage = ({ deleteProject }: { deleteProject: (projectId: string) => void }) => {
	useParams();
	const navigate = useNavigate();
	const project = useLoaderData();

	const onDeleteClick = (projectId: string) => {
		const confirm = window.confirm("Are you sure you want to delete this project?");
		if (!confirm) {
			return;
		}
		deleteProject(projectId);
		toast.success("Project deleted successfully!");
		navigate("/projects");
	};

	return (
		<>
			<section>
				<div className='container m-auto py-6 px-6'>
					<Link to='/projects' className='text-emerald-500 hover:text-emerald-600 flex items-center'>
						<FaArrowLeft className='mr-2' /> Back to Project Listings
					</Link>
				</div>
			</section>
			<section className='bg-slate-50'>
				<div className='container m-auto py-10 px-6'>
					<div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
						<main>
							<div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
								<div className='text-slate-500 mb-4'>{project?.type}</div>
								<h1 className='text-3xl font-bold mb-4 text-slate-800'>{project?.title}</h1>
								<div className='text-slate-500 mb-4 flex align-middle justify-center md:justify-start'>
									<FaMapMarker className='text-amber-600 mr-1'></FaMapMarker>
									<p className='text-amber-600'>{project?.location}</p>
								</div>
							</div>

							<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
								<h3 className='text-slate-800 text-lg font-bold mb-6'>Project Description</h3>
								<p className='mb-4 text-slate-700'>{project?.description}</p>
							</div>
						</main>

						<aside>
							<div className='bg-white p-6 rounded-lg shadow-md'>
								<h3 className='text-xl font-bold mb-6 text-slate-800'>Company Info</h3>

								<h2 className='text-2xl text-slate-800'>{project?.company?.name}</h2>

								<p className='my-2 text-slate-600'>{project?.company?.description}</p>

								<hr className='my-4 border-slate-200' />

								<h3 className='text-xl text-slate-800'>Contact Email:</h3>

								<p className='my-2 bg-slate-100 p-2 font-bold text-slate-700'>
									{project?.company?.contactEmail}
								</p>

								<h3 className='text-xl text-slate-800'>Contact Phone:</h3>

								<p className='my-2 bg-slate-100 p-2 font-bold text-slate-700'>
									{project?.company?.contactPhone}
								</p>
							</div>

							<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
								<h3 className='text-xl font-bold mb-6 text-slate-800'>Manage Project</h3>
								<Link
									to={`/edit-project/${project?.id}`}
									className='bg-emerald-500 hover:bg-emerald-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
								>
									Edit Project
								</Link>
								<button
									onClick={() => onDeleteClick(project?.id)}
									className='bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
								>
									Delete Project
								</button>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};

const projectLoader = async ({ params }: { params: { id?: string } }) => {
	if (!params.id) {
		throw new Response("Project ID is required", { status: 400 });
	}
	const res = await fetch(`/api/projects/${params.id}`);
	if (!res.ok) {
		throw new Response("Failed to load project", { status: res.status });
	}
	const data = await res.json();
	if (!data || !data.company) {
		throw new Response("Invalid project data", { status: 500 });
	}
	return data;
};

export { ProjectPage as default, projectLoader };
