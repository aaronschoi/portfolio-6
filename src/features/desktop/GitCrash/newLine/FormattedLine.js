import { makeString } from "../util";
import NewGitLine from "./NewGitLine";

const FormattedLine = ({
	pcb: { path, command, branch },
	letter,
	line,
	currentLine,
}) => {
	return (
		<NewGitLine
			path={path}
			branch={branch}
			command={makeString(command, letter, command.length, line, currentLine)}
		/>
	);
};

export default FormattedLine;