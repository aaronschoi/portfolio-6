import "./main.module.css";
import ColoredKeywords from "./codeEditor/Keyword/Code";
import TabBar from "./TabBar/TabBar";

const Main = () => {
	return (
		<div className="bscode-main-container">
			<TabBar />
			<ColoredKeywords codeString="const hello = 'Yo'" />
			{/*terminal*/}
		</div>
	);
};

export default Main;
