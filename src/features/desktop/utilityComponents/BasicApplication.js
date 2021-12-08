import "./basicApplication.module.css";

const BasicApplication = ({ className, children }) => {
	React.useEffect(() => {
		if(className){
		function dragMoveListener(event) {
			var target = event.target,
				// keep the dragged position in the data-x/data-y attributes
				x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
				y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

			// translate the element
			target.style.webkitTransform = target.style.transform =
				"translate(" + x + "px, " + y + "px)";

			// update the posiion attributes
			target.setAttribute("data-x", x);
			target.setAttribute("data-y", y);
		}
		interact(".resize-drag")
			.draggable({
				onmove: dragMoveListener,
				cursorChecker() {
					return null;
				},
			})
			.resizable({
				preserveAspectRatio: false,
				edges: { left: true, right: true, bottom: true, top: true },
			})
			.on("resizemove", function (event) {
				var target = event.target,
					x = parseFloat(target.getAttribute("data-x")) || 0,
					y = parseFloat(target.getAttribute("data-y")) || 0;

				// update the element's style
				target.style.width = event.rect.width + "px";
				target.style.height = event.rect.height + "px";

				// translate when resizing from top or left edges
				x += event.deltaRect.left;
				y += event.deltaRect.top;

				target.style.webkitTransform = target.style.transform =
					"translate(" + x + "px," + y + "px)";

				target.setAttribute("data-x", x);
				target.setAttribute("data-y", y);
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
