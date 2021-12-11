import "./App.css";
import Desktop from "./features/desktop/Desktop";
import Loading from "./features/loadingScreen/Loading";
import { currentWindow, windows } from "./store/currentWindowStore";

export function App() {
	const cwindow = currentWindow.use();

	return (
		<>
			{/* this will be the container for the whole page */}
			<div className="App">
				{cwindow === windows.DESKTOP ? <Desktop /> : <Loading />}
			</div>
		</>
	);
}
