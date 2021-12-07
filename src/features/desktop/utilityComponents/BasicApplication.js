import "./basicApplication.module.css";

const BasicApplication = ({ className, children }) => {

	const [ startingPosition, setStartingPosition ] = React.useState({
		x: 0,
		y: 0
	})

	React.useEffect(() => {
		if (className) {
			const position = { x: startingPosition.x, y: startingPosition.y };

			interact(".draggable").styleCursor(false);
			interact(".draggable").draggable({
				ignoreFrom: ".gitCrash-container",
				listeners: {
					// start(event) {
					// 	console.log(event.type, event.target);
					// },
					move(event) {
						position.x += event.dx;
						position.y += event.dy;

						event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
					},
				},
			});

			interact(".resizable").resizable({
				edges: { top: true, left: true, bottom: true, right: true },
				modifiers: [
					interact.modifiers.restrictSize({ max: '.desktop-top-fixer' }),
				  ],
				listeners: {
					move: function (event) {
						let x = position.x
						let y = position.y

						x = (parseFloat(x) || 0) + event.deltaRect.left;
						y = (parseFloat(y) || 0) + event.deltaRect.top;
						console.log(event)
						Object.assign(event.target.style, {
							width: `${event.rect.width}px`,
							height: `${event.rect.height}px`,
							transform: `translate(${y}px, ${x}px)`,
							//transformOrigin: "bottom right"
						});

						//Object.assign(event.target.dataset, { x, y });
						setStartingPosition({ x, y })

					},
				},
			});
		}
	}, []);

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
