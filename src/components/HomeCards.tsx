import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
	return (
		<section className='py-4'>
			<div className='container-xl lg:container m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
					<Card>
						<h2 className='text-2xl font-bold'>Current project</h2>
						<p className='mt-2 mb-4'>Browse my current project</p>
						<Link
							to='/projects'
							className='inline-block bg-slate-800 text-white rounded-lg px-4 py-2 hover:bg-slate-900'
						>
							View current project
						</Link>
					</Card>
					<Card bg='bg-slate-100'>
						<h2 className='text-2xl font-bold'>Past projects</h2>
						<p className='mt-2 mb-4'>Browse my past projects</p>
						<Link
							to='/projects'
							className='inline-block bg-slate-600 text-white rounded-lg px-4 py-2 hover:bg-slate-700'
						>
							View past projects
						</Link>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default HomeCards;
