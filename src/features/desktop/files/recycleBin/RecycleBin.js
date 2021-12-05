import TrashFiles from "./TrashFiles";

const RecycleBin = () => {
	const [fileOpen, setFileOpen] = React.useState(false);
	const [testData, __test__] = React.useState([
		{
			icon: "Icon 1",
			fileName: "MyHopesAndDreams.js",
		},
		{
			icon: "Icon 2",
			fileName: "GoodIdea.js",
		},
		{
			icon: "Icon 3",
			fileName: "mySocialLife.js",
		},
	]);

	const open = (
		<div>
			{testData.map((data) => (
				<TrashFiles icon={data.icon} fileName={data.fileName} />
			))}
		</div>
	);

	const icon = <img src="https://dummyimage.com/250/ffffff/123456" />;

	return <>{fileOpen ? open : icon}</>;
};

export default RecycleBin;
