import "./main.module.css";
import TabBar from "./TabBar/TabBar";
import CodeEditor from "./CodeEditor/CodeEditorContainer";
import Terminal from "./terminal/Terminal";
import { screenWidth } from "../../../store/screenWidthStore";

const Main = () => {

	const sWidth = screenWidth.use();

	return (
		<div className="bscode-main-container">
			<div>
			<TabBar />
			<CodeEditor />
			</div>
			{ sWidth > 1200 ? <Terminal /> : null}
		</div>
	);
};

export default Main;
