import "./newGitLine.module.css";

const NewGitLine = ({ path = "/c", command = "", branch = "" }) => {
	return (
		<div className="new-git-line-container">
			<div className="new-git-line-title">
				<span className="new-git-line-computer-name new-git-line-font">
					aaron@MyKompyuter
				</span>
				<span className="new-git-line-system-label new-git-line-font">
					MINGW64
				</span>
				<span className="new-git-line-path new-git-line-font">
					{path}
				</span>
				<span className="new-git-line-branch new-git-line-font">{branch}</span>
			</div>
			<div className="new-git-line-command new-git-line-font">{`$ ${command}`}</div>
		</div>
	);
};

export default NewGitLine;
