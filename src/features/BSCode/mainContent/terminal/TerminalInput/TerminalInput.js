import "./terminalInput.module.css";

const TerminalInput = () => {
	const [indicator, setIndicator] = React.useState(false);

	const pressEnterHandler = (event) => {

	}

	return (
		<div className="bscode-font">
			<div className="new-git-line-title">
				<span className="new-git-line-computer-name new-git-line-font">
					aaron@MyKompyuter
				</span>
				<span className="new-git-line-system-label new-git-line-font">
					MINGW64
				</span>
				<span className="new-git-line-path new-git-line-font">
					c/extraPretentiousPortfolios/portfolio-6/frontend/src
				</span>
				<span className="new-git-line-branch new-git-line-font">(main)</span>
			</div>
			<div
				className="terminal-input-container"
				tabIndex={0}
				onClick={() => setIndicator(true)}
				onBlur={() => setIndicator(false)}
				onKeyPress={pressEnterHandler}
			>
				<div className="terminal-dollar">$</div>
				<div>npm start</div>
				<div
					className={`terminal-input-indicator ${
						indicator ? "indicator-on" : ""
					}`}
				></div>
			</div>
		</div>
	);
};

export default TerminalInput;
