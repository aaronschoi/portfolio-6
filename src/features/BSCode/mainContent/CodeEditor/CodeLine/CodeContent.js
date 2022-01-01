import "./codeContent.module.css";
import ColoredKeywords from "./EditorMain/Keyword/ColoredKeywords";
import LineNumber from "./EditorMain/LineNumber/LineNumbers";

const CodeContent = () => {
    return (
        <div className="codecontent-container">
            <LineNumber lineNumber={1} />
            <ColoredKeywords codeString="hello sam" />
        </div>
    )
}

export default CodeContent;