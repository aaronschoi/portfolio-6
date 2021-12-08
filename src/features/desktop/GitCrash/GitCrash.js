import BasicApplication from "../utilityComponents/BasicApplication";
import NewGitLine from "./newLine/NewGitLine";
import "./gitCrash.module.css";
import { makeString } from "./util";
import FormattedLine from "./newLine/FormattedLine";

const GitCrash = () => {
	const [letter, setLetter] = React.useState(0);
	const [currentLine, setCurrentLine] = React.useState(0);
	const [pcb, setPCB] = React.useState({
		1: {
			path: "c/",
			command: "cd extraPretentiousPortfolios/portfolio-6/frontend",
			branch: "",
		},
		2: {
			path: "c/extraPretentiousPortfolios/portfolio-6/frontend",
			command: "code .",
			branch: "(main)",
		},
	});

	const backspaceHandler = (event) => {
		event.preventDefault();
		if (event.keyCode === 8) {
			setLetter((current) => current - 1);
		} else if (event.keyCode === 13) {
			setCurrentLine((current) => current + 1);
			setLetter(0);
		} else {
			setLetter((current) => current + 1);
		}
	};

	return (
		<BasicApplication className="draggable resizable resize-drag">
			<div
				className="gitCrash-container"
				tabIndex="0"
				onKeyDown={backspaceHandler}
			>
				<NewGitLine
					path="c/"
					command={`start typing ${makeString(
						"and then press enter",
						letter,
						33,
						0,
						currentLine
					)}`}
				/>
				{currentLine > 0 ? (
					<FormattedLine
						pcb={pcb[1]}
						line={1}
						letter={letter}
						currentLine={currentLine}
					/>
				) : null}
				{currentLine > 1 ? (
					<FormattedLine
						pcb={pcb[2]}
						line={2}
						letter={letter}
						currentLine={currentLine}
					/>
				) : null}
			</div>
		</BasicApplication>
	);
};

export default GitCrash;
