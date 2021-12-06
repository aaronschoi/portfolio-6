import BasicApplication from "../utilityComponents/BasicApplication";
import NewGitLine from "./newLine/NewGitLine";
import "./gitCrash.module.css";

const GitCrash = () => {
    return (
        <BasicApplication>
            <div className="gitCrash-container">
                <NewGitLine command="cd extraPretentious/Portfolio"/>
                <NewGitLine path="c/extraPretentious/Portfolio" command="code ." branch="(main)" />
            </div>
        </BasicApplication>
    )
}

export default GitCrash;