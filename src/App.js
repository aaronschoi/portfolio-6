import React from "react";
import "./App.css";
import BSCode from "./features/BSCode/BSCode";
import Main from "./features/BSCode/mainContent/Main";
import Desktop from "./features/desktop/Desktop";
import Loading from "./features/loadingScreen/Loading";
import { currentWindow, windows } from "./store/currentWindowStore";
import { screenWidth, setScreenWidth } from "./store/screenWidthStore";

export function App() {
	const cwindow = currentWindow.use();
	const sWidth = screenWidth.use();

	React.useEffect(() => {
		const sSW = () => setScreenWidth();

		window.addEventListener("resize", sSW);
		return () => window.removeEventListener("resize", sSW);
	}, []);

	React.useEffect(() => {
		localStorage.setItem("z", 0);
		return () => localStorage.clear();
	}, []);

	return (
		<>
			<div className="App">
				{sWidth > 1200 ? (
					cwindow === windows.DESKTOP ? (
						<Desktop />
					) : cwindow === windows.BSCODE ? (
						<BSCode />
					) : (
						<Loading />
					)
				) : (
					<Main />
				)}
			</div>
		</>
	);
}
