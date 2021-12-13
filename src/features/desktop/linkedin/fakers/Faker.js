import "./fakers.module.css";

const Faker = ({ faker: { name, message, title } }) => {
	return (
		<div className="faker-container">
			<div className="faker-info-container">
				<div className="faker-info-left">
					<img className="faker-icon" src="https://picsum.photos/200" />
					<div className="faker-info-id">
						<div className="faker-info-name">{name}</div>
						<div className="faker-info-title">{title}</div>
					</div>
				</div>
				<div className="faker-info-follow">+ follow</div>
			</div>
			<div>{message}</div>
			<div className="faker-line-break"></div>
			<div className="faker-bottom-buttons">
				<div className="faker-button">
					<div>Like</div>
				</div>
				<div className="faker-button">
					<div>Comment</div>
				</div>
				<div className="faker-button">
					<div>Share</div>
				</div>
				<div className="faker-button">
					<div>Send</div>
				</div>
			</div>
		</div>
	);
};

export default Faker;
