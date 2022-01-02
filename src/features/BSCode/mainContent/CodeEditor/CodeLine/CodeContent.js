import { Fragment } from "react";
import { v4 } from "uuid";
import "./codeContent.module.css";
import ColoredKeywords from "./EditorMain/Keyword/ColoredKeywords";
import LineNumber from "./EditorMain/LineNumber/LineNumbers";

const data = [
	"const App = () => {",
	"indent:1 const aaronchoi = {",
	"indent:2 'interests' : [ 'code' , 'aquaponics' , 'web dev' ] ,",
	"indent:2 'location' : 'Las Vegas, Nevada' ,",
	"indent:2 'residentStatus' : 'U.S. Citizen' ,",
	"indent:2 'email' : 'connect@aaronschoi.com' ,",
	"indent:2 'twitter' : '@AarSaChoi' ,",
	"indent:1 } ;",
	"",
	"indent:1 const specialThanks = {",
	"indent:2 'Huy' : 'visionary artist and fullstack developer' ,",
	"indent:2 'Zaydek' : 'creator of retro and seasoned web dev' ,",
	"indent:2 'feathericons.com : 'icons used in this portfolio'",
	"indent:1 } ;",
	"",
	"indent:1 return < Portfolio props = { ... aaronchoi ,  ... specialThanks } / >",
	"} ;"
];

const CodeContent = () => {
	return (
		<div className="codecontent-container">
			{data.map((line, index) => (
				<Fragment key={v4()}>
					<LineNumber lineNumber={index + 1} />
					<ColoredKeywords codeString={line} id={`codeline-${index}`} />
				</Fragment>
			))}
		</div>
	);
};

export default CodeContent;
