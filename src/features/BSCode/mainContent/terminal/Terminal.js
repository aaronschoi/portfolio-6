import TerminalInput from "./TerminalInput/TerminalInput"
import TerminalTopBar from "./TerminalTopBar/TerminalTopBar"

const Terminal = () => {
    return (
        <div>
            <TerminalTopBar />
            <TerminalInput />
        </div>
    )
}

export default Terminal;