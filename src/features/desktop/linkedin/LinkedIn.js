import BasicApplication from "../utilityComponents/BasicApplication/BasicApplication";
import "./linkedin.module.css";
import fakers from "./fakers/fakers.json";
import Faker from "./fakers/Faker";
import You from "./you/You";
import RightBlob from "./rightBlob/RightBlob";
import ResponsiveAppContent from "../utilityComponents/ResponsiveAppContent/ResponsiveAppContent";

const LinkedIn = () => {
	return (
		<BasicApplication
			className="resize-drag-linkedin"
			title="BlinkedIn"
			target="linkedin"
		>
			<ResponsiveAppContent className="linkedin-container" target="linkedin">
				<div></div>
				<div>
					<You />
				</div>
				<div className="linkedin-posts">
					{fakers.map((faker) => (
						<Faker key={faker.id} faker={faker} />
					))}
				</div>
				<div>
					<RightBlob />
				</div>
				<div></div>
			</ResponsiveAppContent>
		</BasicApplication>
	);
};

export default LinkedIn;
