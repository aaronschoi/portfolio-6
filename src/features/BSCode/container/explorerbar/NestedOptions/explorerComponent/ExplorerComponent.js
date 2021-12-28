import "./bscodeExplorerComponent.module.css";
import FileIconSelector from "./FileIconSelector/FileIconSelector";

const ExplorerComponent = ({
	dir: { title, icon = "" },
	children,
	className = "",
	spacer,
}) => {
	const [arrow, setArrow] = React.useState(false);
	const handleExpand = (event) => {
		if (icon === "") {
			setArrow((current) => !current);
		}
	};
	const fileView = arrow ? (
		<div className="bscode-explorer-expander">{children}</div>
	) : null;
	const tab = {
		transform: `translate(${className === "" ? `${spacer}` : ""}0px)`,
	};
	return (
		<div>
			<div
				tabIndex="0"
				className={`bscode-explorer-highlight ${
					className === "" ? "highlight-file" : "highlight-title"
				}`}
			>
				<div
					onClick={handleExpand}
					className={`bscode-explorer-component-container ${className}`}
					style={tab}
				>
					<FileIconSelector icon={icon} arrow={arrow} />
					{title}
				</div>
			</div>
			{fileView}
		</div>
	);
};

export default ExplorerComponent;
