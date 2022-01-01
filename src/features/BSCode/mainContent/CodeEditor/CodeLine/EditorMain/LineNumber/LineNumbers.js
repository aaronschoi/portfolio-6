import "./linenumber.module.css";

const LineNumber = ({ lineNumber }) => {
    return (
        <div className="linenumber-container">
            <div className="reddot-off"></div>
            <div>{lineNumber}</div>
        </div>
    )
}

export default LineNumber;