import "./bscodeIconBar.module.css"

const BSCodeIconBar = () => {
	return (
		<div className="bscode-iconbar-container">
			<div className="bscode-iconbar-icons">
				<div>papers</div>
				<div>magnifying glass</div>
				<div>git thing</div>
				<div>debug</div>
				<div>addons</div>
				<div>liveshare</div>
			</div>
			<div className="bscode-iconbar-icons">
				<div>account</div>
				<div>settings</div>
			</div>
		</div>
	);
};

export default BSCodeIconBar;