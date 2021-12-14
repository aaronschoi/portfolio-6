import BSCodeExplorerBar from "./explorerbar/BSCodeExplorerBar"
import BSCodeIconBar from "./iconbar/BSCodeIconbar"
import BSCodeTopBar from "./topbar/BSCodeTopBar"

const BSCodeContainer = ({children}) => {
    return (
        <div>
            <BSCodeTopBar />
            <BSCodeIconBar />
            <BSCodeExplorerBar />
            {children}
        </div>
    )
}

export default BSCodeContainer;