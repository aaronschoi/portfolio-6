import "./bscodeExplorerComponent.module.css";

const ExplorerComponent = ({ dir : {title, icon = ""}, children, className = "" }) => {
	const [arrow, setArrow] = React.useState(false);
	const handleExpand = (event) => {
		if (icon === "") {
			setArrow((current) => !current);
		}
	};
	const caret =
		icon === "" ? <div>{arrow ? ">" : "v"}</div> : <div>{icon}</div>;
	const fileView = arrow ? (
		<div className="bscode-explorer-expander">{children}</div>
	) : null;
	const tab = { transform: `translate(${className === "" ? "1" : ""}0px)` };
	return (
		<div className="noselect">
		<div tabIndex="0" className="bscode-explorer-highlight">
			<div
				onClick={handleExpand}
				className={`bscode-explorer-component-container ${className}`}
				style={tab}
			>
				{caret}
				{title}
			</div>
			</div>
			{fileView}
		</div>
	);
};

export default ExplorerComponent;
