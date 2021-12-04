import "./App.css"
import Name from "./features/name/Name"

export function App() {
	return (
		<>
		{ /* this will be the container for the whole page */ }
		<div className="App">
			<div>Hi, I'm {<Name />}.</div>
			<div>If you're looking for another pretentious portfolio...</div>
			<div>Then look no further!</div>
		</div>
		</>
	)
}
