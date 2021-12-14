import TopBarChoice from "./topBarChoices/TopBarChoice";
import "./persistantTopBar.module.css";

const PersistantTopBar = () => {
	const [topBarOptions, ___] = React.useState([
		"Overview",
		"Repositories",
		"Projects",
		"Packages",
		"Stars",
	]);

	return (
		<div className="persistanttopbar-container">
			<div></div>
			<div className="persistanttopbar-choices">
				{topBarOptions.map((option) => (
					<TopBarChoice icon={option.toLowerCase()} title={option} />
				))}
			</div>
		</div>
	);
};

export default PersistantTopBar;
