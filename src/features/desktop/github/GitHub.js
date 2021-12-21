import BasicApplication from "../utilityComponents/BasicApplication/BasicApplication";
import ResponsiveAppContent from "../utilityComponents/ResponsiveAppContent/ResponsiveAppContent";
import "./github.module.css";
import GitHubMain from "./githubMain/GitHubMain";
import PersistantTopBar from "./persistantTopBar/PersistantTopBar";

const GitHub = () => {
    return (
        <BasicApplication className="resize-drag-github" title="GitHub Abridged" target="github">
            <div className="github-container">
                <PersistantTopBar />
                <GitHubMain />
            </div>
        </BasicApplication>
    )
}

export default GitHub;