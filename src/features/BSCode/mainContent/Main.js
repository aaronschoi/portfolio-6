import "./main.module.css";
import TabBar from "./TabBar/TabBar";
import CodeEditor from "./CodeEditor/CodeEditorContainer";
import Terminal from "./terminal/Terminal";

const Main = () => {
	return (
		<div className="bscode-main-container">
			<div>
			<TabBar />
			<CodeEditor />
			</div>
			<Terminal />
		</div>
	);
};

export default Main;
