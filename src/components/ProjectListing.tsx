import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

type Project = {
	type: string;
	title: string;
	description: string;
	location: string;
	id: number;
};

interface ProjectListingProps {
	project: Project;
}

const ProjectListing = ({ project }: ProjectListingProps) => {
	const [showFullDescription, setShowFullDescription] = useState(false);

	let description = project.description;
	if (!showFullDescription && description.length > 90) {
		description = description.substring(0, 90) + "...";
	}
	return (
		<div className='bg-white rounded-xl shadow-md relative'>
			<div className='p-4'>
				<div className='mb-6'>
					<div className='text-slate-600 my-2'>{project.type}</div>
					<h3 className='text-xl font-bold'>{project.title}</h3>
				</div>

				<div className='mb-5'>{description}</div>

				<button
					className='text-slate-700 mb-5 hover:text-slate-900 font-semibold'
					onClick={() => setShowFullDescription((prevState) => !prevState)}
				>
					{showFullDescription ? "Show Less" : "Show More"}
				</button>

				<div className='border border-slate-200 mb-5'></div>

				<div className='flex flex-col lg:flex-row justify-between mb-4'>
					<div className='text-amber-600 mb-3'>
						<FaMapMarker className='text-lg inline mb-1 mr-1' />
						{project.location}
					</div>
					<Link
						to={`/projects/${project.id}`}
						className='h-[36px] bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-center text-sm'
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectListing;
