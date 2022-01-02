import "./App.css";
import BSCode from "./features/BSCode/BSCode";
import Desktop from "./features/desktop/Desktop";
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
			<div className="App">
				{cwindow === windows.DESKTOP ? <Desktop /> : cwindow === windows.BSCODE ? <BSCode /> : <Loading />}
			</div>
		</>
	);
}
