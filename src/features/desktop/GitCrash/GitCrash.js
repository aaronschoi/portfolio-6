import BasicApplication from "../utilityComponents/BasicApplication";
import NewGitLine from "./newLine/NewGitLine";
import "./gitCrash.module.css";

const GitCrash = () => {
    return (
        <BasicApplication>
            <div className="gitCrash-container">
                <NewGitLine />
            </div>
        </BasicApplication>
    )
}

export default GitCrash;