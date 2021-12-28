import "./topBarChoice.module.css";
import TopBarIconPicker from "./TopBarIconPicker/TopBarIconPicker";

const TopBarChoice = ({ title }) => {

    return (
        <div className="topbarchoice-container" tabIndex="0">
            <TopBarIconPicker title={title} />
            <div>{title}</div>
            {title === "Repositories" ? <div className="reponumber">51</div> : null}
        </div>
    )
}

export default TopBarChoice;