import "./keyword.module.css";

const SpaceFilter = ({ string }) => {
	switch (string) {
		case "]":
		case "[":
		case "}":
		case "{":
			return <span></span>;
		default:
			return <span> </span>;
	}
};

const KeywordFinder = ({ string }) => {
	switch (string) {
		case "const":
		case "return":
		case "=>":
			return <span className="keyword-purple">{string}</span>;
		case "=":
		case ":":
		case ";":
		case "<":
		case ">":
		case ",":
			return <span className="keyword-cyan">{string}</span>;
		case "(":
		case ")":
		case "{":
		case "}":
		case "[":
		case "]":
			return <span className="keyword-yellow">{string}</span>;
		default:
			return <span className="keyword-green">{string}</span>;
	}
};

const dependencyFinder = (string) => {
	switch (string) {
		case "const":
			return /A-Z/.test(string.charAt(0)) ? "blue" : "red";
		case "<":
			return "red";
		case "(":
			return "orange";
		default:
			return "none";
	}
};

const RecursiveKeywordFinder = ({ strArr, i = 0, dependent = "none" }) => {
	if (strArr.length === i) return <></>;
	const word = strArr[i];
	const dependency = dependencyFinder(word);
	if (dependent !== "none") {
		return (
			<>
				<span className={`keyword-${dependency}`}>{word}</span>
				<SpaceFilter string={word} />
				<RecursiveKeywordFinder
					strArr={strArr}
					i={i + 1}
					dependent={dependency}
				/>
			</>
		);
	}
	return (
		<>
			<KeywordFinder string={word} />
			<SpaceFilter string={word} />
			<RecursiveKeywordFinder
				strArr={strArr}
				i={i + 1}
				dependent={dependency}
			/>
		</>
	);
};

const ColoredKeywords = ({ codeString }) => (
	<div>
		<RecursiveKeywordFinder strArr={codeString.split(" ")} />
	</div>
);

export default ColoredKeywords;
