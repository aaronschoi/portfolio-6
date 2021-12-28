import "./maximizeIcon.module.css";

const MaximizeIcon = ({className}) => {
    return (
        <div className="maximize-icon-container">
            <div className={`maximize-icon maximize-icon-behind ${className}`}></div>
            <div className={`maximize-icon maximize-icon-front ${className}`}></div>
        </div>
    )
}

export default MaximizeIcon;