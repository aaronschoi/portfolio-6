import CloseIcon from "../../../../../desktop/utilityComponents/BasicApplication/icons/CloseIcon";
import "./tab.module.css";

const Tab = ({ icon, title }) => {

    const [ closeIcon, setCloseIcon ] = React.useState(false);

    const closeIconMouseOver = event => setCloseIcon(false);
    const closeIconMouseOut = event => setCloseIcon(true);

    return (
        <div className="tab-container" onMouseOut={closeIconMouseOut} onMouseOver={closeIconMouseOver}>
            <div className="tab-title-container">
            <div className={`bs-${icon.toLowerCase()}`}>{icon}</div>
            <div>{title}</div>
            </div>
            <div className={`${closeIcon ? "tab-close-hide" : ""}`}>
            <CloseIcon />
            </div>
        </div>
    )
}

export default Tab;