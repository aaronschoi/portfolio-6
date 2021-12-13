import BasicApplication from "../utilityComponents/BasicApplication";
import "./linkedin.module.css";
import fakers from "./fakers/fakers.json";
import Faker from "./fakers/Faker";
import You from "./you/You";

const LinkedIn = () => {
	return (
		<BasicApplication
			className="resize-drag-linkedin"
			title="LinkedIn"
			target="linkedin"
		>
			<div className="linkedin-container">
				<div></div>
				<div>
					<You />
				</div>
				<div className="linkedin-posts">
					{fakers.map((faker) => (
						<Faker key={faker.id} faker={faker} />
					))}
				</div>
				<div></div>
				<div></div>
			</div>
		</BasicApplication>
	);
};

export default LinkedIn;
