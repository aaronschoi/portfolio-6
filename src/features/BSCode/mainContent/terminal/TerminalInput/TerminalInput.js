import "./terminalInput.module.css";

const TerminalInput = () => {
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
					c/extraPretentiousPortfolios/portfolio-6/frontend
				</span>
				<span className="new-git-line-branch new-git-line-font">(main)</span>
			</div>
            <div>
                <div>$</div>
                <div>npm start</div>
            </div>
		</div>
	);
};


export default TerminalInput;