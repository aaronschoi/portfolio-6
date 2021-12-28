import ChevDown from "./icons/ChevDown";
import ChevLeft from "./icons/ChevLeft";
import ChevRight from "./icons/ChevRight";
import ChevUp from "./icons/ChevUp"

const Chevron = ({ orientation }) => {
    switch(orientation) {
        case "up":
            return <ChevUp />;
        case "down":
            return <ChevDown />;
        case "right":
            return <ChevRight />;
        case "left":
            return <ChevLeft />;
        default:
            return null;
    }
}

export default Chevron;