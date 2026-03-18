import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ProjectListings from "../components/ProjectListings";
import ViewAllProjects from "../components/ViewAllProjects";

const HomePage = () => {
	return (
		<>
			<Hero />
			<HomeCards />
			<ProjectListings isHome={true} />
			<ViewAllProjects />
		</>
	);
};

export default HomePage;
