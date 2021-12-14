import "./githubMain.module.css";
import GitHubPersonal from "./GithubPersonal/GitHubPersonal";
import GitHubProjects from "./GithubProjects/GitHubProjects";

const GitHubMain = () => {
	return (
		<div className="githubmain-container">
			<div></div>
			<GitHubPersonal />
			<GitHubProjects />
		</div>
	);
};

export default GitHubMain;
