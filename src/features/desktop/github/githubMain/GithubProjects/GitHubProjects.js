import Project from "./Project/Project";
import data from "./projects.json";
import "./githubProject.module.css";

const GitHubProjects = () => {
	return (
		<div className="githubprojects-container">
			{data.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</div>
	);
};

export default GitHubProjects;
