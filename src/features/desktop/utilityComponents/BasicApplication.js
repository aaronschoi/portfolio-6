import "./basicApplication.module.css";

const BasicApplication = ({ className, children }) => {
	return (
		<div className={`basic-application-container ${className}`}>
			<div className="basic-application-topbar">
				<div className="basic-application-topbar-sub-container">
					<div className="basic-application">icon</div>
					<div className="basic-application">GitCrash</div>
				</div>
				{/* minimize maximize exit buttons */}
				<div className="basic-application-topbar-sub-container">
					<div className="basic-application-button">-</div>
					<div className="basic-application-button">square</div>
					<div className="basic-application-exit">x</div>
				</div>
			</div>
			{children && children}
		</div>
	);
};

export default BasicApplication;
