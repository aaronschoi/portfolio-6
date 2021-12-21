import BasicApplication from "../utilityComponents/BasicApplication/BasicApplication";
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
import React from "react";
import { changeToBSCode } from "../../../store/currentWindowStore";

const GitCrash = () => {
	const { letter, currentLine } = gitCrashStore.use();

	const backspaceHandler = (event) => {
		event.preventDefault();
		if (event.keyCode === 8) {
			decLetter();
		} else if (event.keyCode === 13) {
			if (currentLine === 2) {
				{
					changeToBSCode();
				}
			} else {
				incCurrentLine();
				resetLetter();
			}
		} else {
			incLetter();
		}
	};

	React.useEffect(() => {
		document.getElementsByClassName("gitCrash-container")[0].focus();
		console.log(document.activeElement)
	}, []);

	return (
		<BasicApplication
			className="resize-drag-gitcrash"
			title="GitCrash"
			target="gitcrash"
		>
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
					bound={0}
				/>
				<FormattedLine line={1} bound={0} />
				<FormattedLine line={2} bound={1} />
			</div>
		</BasicApplication>
	);
};

export default GitCrash;
