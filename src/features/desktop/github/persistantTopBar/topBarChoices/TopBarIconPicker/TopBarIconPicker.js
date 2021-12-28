import OverviewIcon from "../../icons/OverviewIcon"
import PackagesIcon from "../../icons/PackagesIcon";
import ProjectsIcon from "../../icons/ProjectsIcon";
import ReposIcon from "../../icons/ReposIcon"

const TopBarIconPicker = ({title}) => {
    switch(title) {
        case "Overview":
            return <OverviewIcon />;
        case "Repositories":
            return <ReposIcon />;
        case "Projects":
            return <ProjectsIcon />;
        case "Packages":
            return <PackagesIcon />;
        default:
            return null;
    }
}

export default TopBarIconPicker;