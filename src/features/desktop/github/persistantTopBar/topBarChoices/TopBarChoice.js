import "./topBarChoice.module.css";

const TopBarChoice = ({ icon, title }) => {
    return (
        <div className="topbarchoice-container" tabIndex="0">
            <div>{icon}</div>
            <div>{title}</div>
            {title === "Repositories" ? <div className="reponumber">51</div> : null}
        </div>
    )
}

export default TopBarChoice;