import { makeDate, makeTime } from "./util";
import "./timeAndDate.module.css";

const TimeAndDate = () => {
	const [time, setTime] = React.useState(new Date());

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setTime(new Date());
		}, 30000);

		return () => clearTimeout(timeout);
	});

	return (
		<div className="time-and-date taskbar-right-icon">
			<div>{makeTime(time)}</div>
			<div>{makeDate(time)}</div>
		</div>
	);
};

export default TimeAndDate;
