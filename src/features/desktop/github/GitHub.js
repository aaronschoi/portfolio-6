import BasicApplication from "../utilityComponents/BasicApplication";
import "./github.module.css";
import PersistantTopBar from "./persistantTopBar/PersistantTopBar";

const GitHub = () => {
    return (
        <BasicApplication className="resize-drag-github" title="GitHub" target="github">
            <div className="github-container">
                <PersistantTopBar />
            </div>
        </BasicApplication>
    )
}

export default GitHub;