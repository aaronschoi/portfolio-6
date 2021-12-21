import ResponsiveAppContent from "../../utilityComponents/ResponsiveAppContent/ResponsiveAppContent";
import "./githubMain.module.css";
import GitHubPersonal from "./GithubPersonal/GitHubPersonal";
import GitHubProjects from "./GithubProjects/GitHubProjects";

const GitHubMain = () => {
	return (
		<ResponsiveAppContent className="githubmain-container" target="github">
			<div></div>
			<GitHubPersonal />
			<GitHubProjects />
		</ResponsiveAppContent>
	);
};

export default GitHubMain;
