import "./main.module.css";
import TabBar from "./TabBar/TabBar";
import CodeEditor from "./CodeEditor/CodeEditorContainer";
import Terminal from "./terminal/Terminal";

const Main = () => {
	return (
		<div className="bscode-main-container">
			<TabBar />
			<CodeEditor />
			<Terminal />
		</div>
	);
};

export default Main;
