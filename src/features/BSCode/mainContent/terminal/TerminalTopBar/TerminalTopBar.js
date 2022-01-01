import "./terminaltopbar.module.css";
import CloseIcon from "../../../../desktop/utilityComponents/BasicApplication/icons/CloseIcon";
import Chevron from "../../../../desktop/utilityComponents/Chevrons/Chevron";
import TrashIcon from "../../icons/TrashIcon";
import SplitPageButActuallyABookIcon from "../../icons/SplitPageButActuallyABookIcon";
import TerminalIcon from "../../icons/TerminalIcon";
import PlusIcon from "../../icons/PlusIcon";

const TerminalTopBar = () => {
	return (
		<div className="terminal-topbar-container">
			<div className="terminal-topbar-left-options">
				<div className="terminal-topbar-picked">TERMINAL</div>
				<div className="terminal-topbar-left-option">PROBLEMS</div>
				<div className="terminal-topbar-left-option">OUTPUT</div>
				<div className="terminal-topbar-left-option">DEBUG CONSOLE</div>
			</div>
			<div className="terminal-topbar-right-options">
				<div className="terminal-bash">
					<TerminalIcon />
					<div>bash</div>
				</div>
				<div className="terminal-plus">
					<PlusIcon />
					<Chevron orientation="down" />
				</div>
				<div>
					<SplitPageButActuallyABookIcon />
				</div>
				<div>
					<TrashIcon />
				</div>
				<div>
					<Chevron orientation="up" />
				</div>
				<div>
					<CloseIcon />
				</div>
			</div>
		</div>
	);
};

export default TerminalTopBar;
