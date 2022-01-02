import "./App.css";
import BSCode from "./features/BSCode/BSCode";
import Desktop from "./features/desktop/Desktop";
import LinkedIn from "./features/desktop/linkedin/LinkedIn";
import Loading from "./features/loadingScreen/Loading";
import { currentWindow, windows } from "./store/currentWindowStore";

export function App() {
	const cwindow = currentWindow.use();

	React.useEffect(() => {
		localStorage.setItem('z', 0);
		return () => localStorage.clear();
	}, [])

	return (
		<>
			{/* this will be the container for the whole page */}
			<div className="App">
				{/* {cwindow === windows.DESKTOP ? <Desktop /> : cwindow === windows.BSCODE ? <BSCode /> : <Loading />} */}
				<LinkedIn />
			</div>
		</>
	);
}
