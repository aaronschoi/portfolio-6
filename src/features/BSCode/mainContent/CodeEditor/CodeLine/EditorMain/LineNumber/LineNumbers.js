import "./linenumber.module.css";

const LineNumber = ({ lineNumber }) => {

    const [dot, setDot] = React.useState(false);

    return (
        <div className="linenumber-container">
            <div className={`${dot ? "reddot-on" : "reddot-off"}`} onClick={(e) => setDot(current => !current)}></div>
            <div>{lineNumber}</div>
        </div>
    )
}

export default LineNumber;