import "./newGitLine.module.css";

const NewGitLine = ({ path = ["/c"], command = "", branch = "" }) => {
	return (
		<div className="new-git-line-container">
			<div className="new-git-line-title">
				<span className="new-git-line-computer-name">aaron@MyKompyuter</span>
				<span className="new-git-line-system-label">MINGW64</span>
				<span className="new-git-line-path">{path.join("/")}</span>
				<span className="new-git-line-branch">{branch}</span>
			</div>
			<div className="new-git-line-command">{`$ ${command}`}</div>
		</div>
	);
};

export default NewGitLine;
