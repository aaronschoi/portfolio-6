import ExplorerComponent from "./explorerComponent/ExplorerComponent";
import { v4 } from "uuid";

const NestedOptions = ({ dir : { title, icon = "", subdir = [] } }) => {
    const expDir = {
        title,
        icon
    }
	return (
		<>
			{subdir.length > 0 ? (
				subdir.map((sub) => {
					return (
						<ExplorerComponent key={v4()} dir={expDir}>
							<NestedOptions dir={sub} />
						</ExplorerComponent>
					);
				})
			) : (
				<ExplorerComponent dir={expDir} />
			)}
		</>
	);
};
