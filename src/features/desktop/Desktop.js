import RecycleBin from "./files/recycleBin/RecycleBin";
import GitCrash from "./GitCrash/GitCrash";

const Desktop = () => {
	//GitCrash
	//Trash Can

	return (
		<>
			{/* desktop container */}
			<div>
				{/* GitCrash Container to position the icon */}
				<div>
					<GitCrash />
					<RecycleBin />
					<div></div>
				</div>
			</div>
			{/* Taskbar */}
			<div>{/*windows 11 icons... link to github, linkedin, etc */}</div>
		</>
	);
};

export default Desktop;
