import "./npmstart.module.css";

const NPMStart = () => {
	return (
		<div className="bscode-font">
			<div>
				<span className="npm-limegreen">Compiled successfully!</span>{" "}
				<span className="npm-version">(v0.1.1-alpha.23)</span>
			</div>
			<div className="npm-spacer"></div>
			<div>You can now view frontend in the browser.</div>
			<div className="npm-spacer"></div>
			<div>From Aaron: Thank you for visiting!</div>
			<div className="npm-spacer"></div>
			<div>Note that the development build is not optimized.</div>
			<div>
				To create a production build, use{" "}
				<span className="npm-cyan">npm run build</span> or{" "}
				<span className="npm-cyan">yarn build</span>.
			</div>
			<div className="npm-spacer"></div>
			<div>
				<span>24ms</span>
			</div>
		</div>
	);
};

export default NPMStart;
