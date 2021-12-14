import "./bscodeExplorerComponent.module.css";

const ExplorerComponent = ({ title, children }) => {
	const [arrow, setArrow] = React.useState(false);
	const handleExpand = (event) => {
		setArrow((current) => !current);
	};
	const caret = <div>{arrow ? ">" : "v"}</div>;
	const fileView = arrow ? <div>{children}</div> : null;
	return (
		<div>
			<div onClick={handleExpand} className="bscode-explorer-component-container" tabIndex="0">
				{caret} {title}
			</div>
			{fileView}
		</div>
	);
};

export default ExplorerComponent;
