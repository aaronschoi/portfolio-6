import "./bscodeExplorerComponent.module.css";

const ExplorerComponent = ({ title, icon = "", children }) => {
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
	const tab = { transform: `translate(${icon === "" ? "1" : ""}0px)` };
	return (
		<div style={tab}>
			<div
				onClick={handleExpand}
				className="bscode-explorer-component-container"
				tabIndex="0"
			>
				{caret}
				{title}
			</div>
			{fileView}
		</div>
	);
};

export default ExplorerComponent;
