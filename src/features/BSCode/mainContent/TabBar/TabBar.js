import ThreeDots from "../../utilityComponents/ThreeDots/ThreeDots";
import "./tabbar.module.css";
import Tabs from "./Tabs/Tabs";

const TabBar = () => {
	return (
		<div className="tabbar-container">
			<Tabs />
			<div>
				<ThreeDots />
			</div>
		</div>
	);
};

export default TabBar;
