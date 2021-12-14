import "./bscodeTopBar.module.css";

const BSCodeTopBar = () => {
	return (
		<div className="bscode-topbar-container">
			<div className="bscode-topbar-options">
				<div>Icon</div>
				<div>File</div>
				<div>Edit</div>
				<div>Selection</div>
				<div>View</div>
				<div>Go</div>
				<div>Run</div>
				<div>Terminal</div>
				<div>Help</div>
			</div>
			<div className="bscode-topbar-options bscode-topbar-middle">
				<div>App.js - frontend - BS Code</div>
			</div>
			<div className="bscode-topbar-options bscode-topbar-right">
				<div>-</div>
				<div>square behind square</div>
				<div>x</div>
			</div>
		</div>
	);
};

export default BSCodeTopBar;
