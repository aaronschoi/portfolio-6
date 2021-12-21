import {
	close,
	windowStates,
	minimize,
} from "../../../../store/windowStatesStore";
import "./basicApplication.module.css";

const BasicApplication = ({ className, children, title, target }) => {
	const winState = windowStates.use();

	React.useEffect(() => {
		localStorage.setItem("z", parseInt(localStorage.getItem("z")) + 1);
		document.getElementsByClassName(`resize-drag-${target}`)[0].style.zIndex =
			localStorage.getItem("z");
	}, []);

	React.useEffect(() => {
		let selected = 2000000;
		function dragMoveListener(event) {
			const target = event.target;
			// keep the dragged position in the data-x/data-y attributes
			let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
			let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

			// translate the element
			target.style.webkitTransform = target.style.transform =
				"translate(" + x + "px, " + y + "px)";

			// update the posiion attributes
			target.setAttribute("data-x", x);
			target.setAttribute("data-y", y);
		}
		function resizeDrag(event) {
			const target = event.target;
			let x = parseFloat(target.getAttribute("data-x")) || 0;
			let y = parseFloat(target.getAttribute("data-y")) || 0;

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
		}
		function incZIndex(event) {
			const target = event.target;
			target.style.zIndex = selected;
		}
		function decZIndex(event) {
			const target = event.target;
			localStorage.setItem("z", parseInt(localStorage.getItem("z")) + 1);
			target.style.zIndex = localStorage.getItem("z");
		}
		interact("." + className)
			.draggable({
				onstart: incZIndex,
				onmove: dragMoveListener,
				onend: decZIndex,
				cursorChecker() {
					return null;
				}
			})
			.resizable({
				preserveAspectRatio: false,
				edges: { left: true, right: true, bottom: true, top: false }
			})
			.on("resizemove", resizeDrag)
			.on("resizestart", incZIndex)
			.on("resizeend", decZIndex);
		return () => interact("." + className).unset();
	}, []);

	const closeClickHandler = (event) => {
		close(target);
	};

	const minimizeClickHandler = (event) => {
		minimize(target);
	};

	const clickSelectHandler = (event) => {
		localStorage.setItem("z", parseInt(localStorage.getItem("z")) + 1);
		document.getElementsByClassName(`resize-drag-${target}`)[0].style.zIndex =
			localStorage.getItem("z");
	};

	return (
		<div
			id={target}
			className={`basic-application-container ${className} ${
				winState[target].minimized ? "hide-app" : ""
			} ${winState[target].maximized ? "max" : ""}`}
			onClick={clickSelectHandler}
		>
			<div className="basic-application-topbar">
				<div className="basic-application-topbar-sub-container">
					<div className="basic-application">
						<div className="basic-application-icon-container">
							<img
								className="basic-application-icon"
								src={`http://localhost:8000/www/${target}.png`}
							/>
						</div>
					</div>
					<div className="basic-application-title">
						<div>{title}</div>
					</div>
				</div>
				{/* minimize maximize exit buttons */}
				<div className="basic-application-topbar-sub-container">
					<div
						className="basic-application-button"
						onClick={minimizeClickHandler}
					>
						-
					</div>
					<div className="basic-application-exit" onClick={closeClickHandler}>
						x
					</div>
				</div>
			</div>
			{children && children}
		</div>
	);
};

export default BasicApplication;
