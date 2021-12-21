import { currentWindow, windows } from "../../../../../store/currentWindowStore";
import { gitCrashStore } from "../../../../../store/gitCrashStore";
import "./typeLine.module.css";

const TypeLine = ({ bound }) => {
	const { currentLine } = gitCrashStore.use();
    const windowState = currentWindow.use();
    const { DESKTOP } = windows;

	return <>{currentLine === bound ? <span className={windowState === DESKTOP ? "typeline" : "bscode-typeline"}></span> : null}</>;
};

export default TypeLine;
