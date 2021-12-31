import Chevron from "../../../../../../desktop/utilityComponents/Chevrons/Chevron";
import WrenchButActuallyAKeyIcon from "./icons/WrenchButActuallyAKeyIcon";

const NotChevron = ({icon}) => {
    switch(icon) {
        case "wrench":
            return <WrenchButActuallyAKeyIcon />;
        default:
            return <div className={`bs-${icon.toLowerCase()}`}>{icon}</div>
    }
}

const FileIconSelector = ({ icon, arrow }) => {

	return (
		<>
			{icon === "" ? (
				<Chevron orientation={`${arrow ? "right" : "down"}`} />
			) : (
				<NotChevron icon={icon}/>
			)}
		</>
	);
};

export default FileIconSelector;
