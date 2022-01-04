import { Fragment } from "react";
import { v4 } from "uuid";
import "./codeContent.module.css";
import ColoredKeywords from "./EditorMain/Keyword/ColoredKeywords";
import LineNumber from "./EditorMain/LineNumber/LineNumbers";
import { screenWidth } from "../../../../../store/screenWidthStore";
import { codeArray } from "../../../../../store/codeArrayStore";

const CodeContent = () => {
	const sWidth = screenWidth.use();

	const data = codeArray.use();

	const output = sWidth < 1200 ? [...data, "", "const disclaimer = 'The desktop version is much better :3'"] : data;

	return (
		<div className="codecontent-container">
			{output.map((line, index) => (
				<Fragment key={v4()}>
					<LineNumber lineNumber={index + 1} />
					<ColoredKeywords codeString={line} id={`codeline-${index}`} />
				</Fragment>
			))}
		</div>
	);
};

export default CodeContent;
