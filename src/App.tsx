import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AddProjectPage from "./pages/AddProjectPage.tsx";
import ProjectPage, { projectLoader } from "./pages/ProjectPage.tsx";
import EditProjectPage from "./pages/EditProjectPage.tsx";

const App = () => {
	const addProject = async (newProject: Record<string, unknown>) => {
		console.log("New Project:", newProject);
		const res = await fetch("/api/projects", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProject),
		});
		if (!res.ok) {
			console.error("Failed to add project:", res.statusText);
			return;
		}
		const data = await res.json();
		console.log("Project added successfully:", data);
	};

	const deleteProject = async (projectId: string) => {
		const res = await fetch(`/api/projects/${projectId}`, {
			method: "DELETE",
		});
		if (!res.ok) {
			console.error("Failed to delete project:", res.statusText);
			return;
		}
		console.log(`Project ${projectId} deleted successfully`);
	};

	const updateProject = async (project: Record<string, unknown>) => {
		const res = await fetch(`/api/projects/${project.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(project),
		});
		if (!res.ok) {
			console.error("Failed to update project:", res.statusText);
			return;
		}
		const data = await res.json();
		console.log("Project updated successfully:", data);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route
					path='/projects/:id'
					element={<ProjectPage deleteProject={deleteProject} />}
					loader={projectLoader}
				/>
				<Route path='/add-project' element={<AddProjectPage addProjectSubmit={addProject} />} />
				<Route
					path='/edit-project/:id'
					element={<EditProjectPage updateProjectSubmit={updateProject} />}
					loader={projectLoader}
				/>
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
};

export default App;
