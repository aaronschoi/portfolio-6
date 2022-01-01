import "./terminaltopbar.module.css";

const TerminalTopBar = () => {
	return (
		<div className="terminal-topbar-container">
			<div className="terminal-topbar-left-options">
				<div className="terminal-topbar-picked">TERMINAL</div>
				<div className="terminal-topbar-left-option">PROBLEMS</div>
				<div className="terminal-topbar-left-option">OUTPUT</div>
				<div className="terminal-topbar-left-option">DEBUG CONSOLE</div>
			</div>
			<div className="terminal-topbar-right-options">
				<div>box</div>
				<div>bash</div>
				<div>plus</div>
				<div>down chev</div>
				<div>double</div>
				<div>trash</div>
				<div>up chev</div>
				<div>x</div>
			</div>
		</div>
	);
};

export default TerminalTopBar;
