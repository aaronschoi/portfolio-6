import BasicApplication from "../utilityComponents/BasicApplication";
import "./github.module.css";
import GitHubMain from "./githubMain/GitHubMain";
import PersistantTopBar from "./persistantTopBar/PersistantTopBar";

const GitHub = () => {
    return (
        <BasicApplication className="resize-drag-github" title="GitHub" target="github">
            <div className="github-container">
                <PersistantTopBar />
                <GitHubMain />
            </div>
        </BasicApplication>
    )
}

export default GitHub;