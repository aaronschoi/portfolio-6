import "./keyword.module.css";

const SpaceFilter = ({ string, dependent }) => {
	switch (string) {
		case "]":
		case "}":
		case "{":
		case "<":
		case "/":
		case "props":
		case "...":
			return <></>;
		default:
			return dependent === "element" ? <></> : <div className="space"></div>;
	}
};

const KeywordFinder = ({ string }) => {
	switch (string) {
		case "const":
		case "return":
		case "=>":
		case "props":
			return <span className="keyword-purple">{string}</span>;
		case "=":
		case ":":
		case ";":
		case "<":
		case ">":
		case ",":
		case "/":
			return <span className="keyword-cyan">{string}</span>;
		case "(":
		case ")":
		case "{":
		case "}":
		case "[":
		case "]":
			return <span className="keyword-yellow">{string}</span>;
		case "...":
			return <span className="keyword-white">{string}</span>
		default:
			return <span className="keyword-green">{string}</span>;
	}
};

const dependencyFinder = (string) => {
	switch (string) {
		case "const":
			return /^[A-Z]*$/.test(string.charAt(0)) ? "blue" : "red";
		case "<":
			return "yellow";
		case "(":
			return "orange";
		default:
			return "none";
	}
};

const RecursiveKeywordFinder = ({ strArr, i = 0, dependent = "none" }) => {
	if (strArr.length === i) return <></>;
	const word = strArr[i];
	if (word.includes("indent:"))
		return <RecursiveKeywordFinder strArr={strArr} i={i + 1} />;
	const dependency = dependencyFinder(word);
	if (dependent !== "none") {
		return (
			<>
				<span className={`keyword-${dependent}`}>{word}</span>
				<SpaceFilter dependent={dependent} string={word} />
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
			<SpaceFilter dependent={dependent} string={word} />
			<RecursiveKeywordFinder
				strArr={strArr}
				i={i + 1}
				dependent={dependency}
			/>
		</>
	);
};

const Indent = ({ numberOfTimes }) => {
	if (numberOfTimes === 1) return <div className="indent"></div>;
	return (
		<>
			<div className="indent"></div>
			<Indent numberOfTimes={numberOfTimes - 1} />
		</>
	);
};

const ColoredKeywords = ({ codeString, id }) => {
	const splitString = codeString.split(" ");
	const indentPresent = splitString[0].includes("indent:");

	const focusOnClickHandler = (event) => {
		document.getElementById(id).focus();
	};

	return (
		<div
			className="coloredkeyword-container"
			tabIndex={0}
			id={id}
			onClick={focusOnClickHandler}
		>
			{indentPresent ? (
				<Indent numberOfTimes={parseInt(splitString[0].split(":")[1])} />
			) : null}
			<RecursiveKeywordFinder strArr={splitString} />
		</div>
	);
};

export default ColoredKeywords;
