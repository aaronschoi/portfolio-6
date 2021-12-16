import ExplorerComponent from "./explorerComponent/ExplorerComponent";
import { v4 } from "uuid";

const NestedOptions = ({ dir: { title, icon = "", subdir = [] } , className }) => {
	const expDir = {
		title,
		icon,
	};
	return (
		<>
			<ExplorerComponent dir={expDir} className={className}>
				{subdir.length > 0 ? subdir.map(sub => <NestedOptions key={v4()} dir={sub} />) : null}
			</ExplorerComponent>
		</>
	);
};

export default NestedOptions;
