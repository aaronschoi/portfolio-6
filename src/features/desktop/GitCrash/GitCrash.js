import BasicApplication from "../utilityComponents/BasicApplication";
import NewGitLine from "./newLine/NewGitLine";
import "./gitCrash.module.css";
import { makeString } from "./util";
import FormattedLine from "./newLine/FormattedLine";
import {
	gitCrashStore,
	decLetter,
	incCurrentLine,
	incLetter,
	resetLetter,
} from "../../../store/gitCrashStore";

const GitCrash = () => {
	const { pcb, letter, currentLine } = gitCrashStore.use((state) => state);

	const backspaceHandler = (event) => {
		event.preventDefault();
		if (event.keyCode === 8) {
			decLetter();
		} else if (event.keyCode === 13) {
			if (currentLine === 2) {
				{
					/* open bsCODe */
				}
			} else {
				incCurrentLine();
				resetLetter();
			}
		} else {
			incLetter();
		}
	};

	return (
		<BasicApplication className="resize-drag-gitcrash" title="GitCrash" target="gitcrash">
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
