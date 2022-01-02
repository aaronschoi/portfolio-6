import { terminalState } from "../../../../store/terminalStateStore"
import NPMStart from "./npmStart/NPMStart"
import "./terminal.module.css"
import TerminalInput from "./TerminalInput/TerminalInput"
import TerminalTopBar from "./TerminalTopBar/TerminalTopBar"

const Terminal = () => {

    const npmStart = terminalState.use()

    return (
        <div className="bscode-terminal-container">
            <TerminalTopBar />
            { npmStart ? <NPMStart /> : <TerminalInput />}
        </div>
    )
}

export default Terminal;