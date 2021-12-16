import ExplorerComponent from "./explorerComponent/ExplorerComponent";
import { v4 } from "uuid";

const NestedOptions = ({
	dir: { title, icon = "", subdir = [] },
	className,
	spacer = 0,
}) => {
	const expDir = {
		title,
		icon,
	};
	return (
		<>
			<ExplorerComponent dir={expDir} className={className} spacer={spacer}>
				{subdir.length > 0
					? subdir.map((sub) => (
							<NestedOptions key={v4()} dir={sub} spacer={spacer + 1} />
					  ))
					: null}
			</ExplorerComponent>
		</>
	);
};

export default NestedOptions;
