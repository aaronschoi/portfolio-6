import "./you.module.css";

const You = () => {
	return (
		<div className="you-container">
			<div className="you-icon-container">
				<div className="you-top"></div>
				<img className="you-icon" src="https://i.pravatar.cc/100" />
				<div className="you-content"></div>
			</div>
			<div className="you-line"></div>
			<div className="you-bottom"></div>
		</div>
	);
};

export default You;
