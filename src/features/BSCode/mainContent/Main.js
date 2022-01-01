import "./main.module.css";
import ColoredKeywords from "./CodeEditor/CodeLine/EditorMain/Keyword/ColoredKeywords";
import TabBar from "./TabBar/TabBar";
import CodeEditor from "./CodeEditor/CodeEditorContainer";

const Main = () => {
	return (
		<div className="bscode-main-container">
			<TabBar />
			<CodeEditor />
			{/*terminal*/}
		</div>
	);
};

export default Main;
