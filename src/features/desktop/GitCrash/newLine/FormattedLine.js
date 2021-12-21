import { gitCrashStore } from "../../../../store/gitCrashStore";
import { makeString } from "../util";
import NewGitLine from "./NewGitLine";

const FormattedLine = ({
	line,
	bound
}) => {
	const {pcb, currentLine, letter} = gitCrashStore.use();
	const { path, command, branch } = pcb[bound+1]
	return (
		<>
			{currentLine > bound ? (
				<NewGitLine
					path={path}
					branch={branch}
					command={makeString(
						command,
						letter,
						command.length,
						line,
						currentLine
					)}
					bound={bound+1}
				/>
			) : null}
		</>
	);
};

export default FormattedLine;
