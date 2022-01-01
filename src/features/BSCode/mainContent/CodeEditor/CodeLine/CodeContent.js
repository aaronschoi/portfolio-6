import { Fragment } from "react";
import { v4 } from "uuid";
import "./codeContent.module.css";
import ColoredKeywords from "./EditorMain/Keyword/ColoredKeywords";
import LineNumber from "./EditorMain/LineNumber/LineNumbers";

const data = ["const hello = 'world'", "const aaron = 'poop'"];

const CodeContent = () => {
	return (
		<div className="codecontent-container">
			{data.map((line, index) => (
				<Fragment key={v4()}>
					<LineNumber lineNumber={index + 1} />
					<ColoredKeywords codeString={line} />
				</Fragment>
			))}
		</div>
	);
};

export default CodeContent;
