const title = "I'm Nikola";
const subtitle = "Browse the projects I worked on";
const Hero = ({ title: heroTitle = title, subtitle: heroSubtitle = subtitle }) => {
	return (
		<section className='bg-slate-800 py-20 mb-4'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
				<div className='text-center'>
					<h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>{heroTitle}</h1>
					<p className='my-4 text-xl text-slate-200'>{heroSubtitle}</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
