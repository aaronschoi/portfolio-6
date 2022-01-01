import "./terminal.module.css"
import TerminalInput from "./TerminalInput/TerminalInput"
import TerminalTopBar from "./TerminalTopBar/TerminalTopBar"

const Terminal = () => {
    return (
        <div className="bscode-terminal-container">
            <TerminalTopBar />
            <TerminalInput />
        </div>
    )
}

export default Terminal;