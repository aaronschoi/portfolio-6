import { changeToDesktop } from "../../store/currentWindowStore";
import { goArounds } from "../../store/goAroundStore";
import "./loading.module.css";
import LoadingAnimation from "./loadingAnimation/LoadingAnimation";
import LoadingText from "./loadingText/LoadingText";
import Picrosoft from "./picrosoftSymbol/Picrosoft";

const Loading = () => {
    const again = goArounds.use()

    React.useEffect(() => {
        if(again > 0) {
            document.getElementsByClassName("loading-container")[0].focus();
        }
    }, [])

    const spacebarKeyDownHandler = (event) => {
        if(again > 0) {
            if(event.keyCode === 32) {
                changeToDesktop();
            }
        }
    }

    return (
        <div className="loading-container" tabIndex="0" onKeyDown={spacebarKeyDownHandler}>
            <Picrosoft />
            <LoadingText />
            <LoadingAnimation />
        </div>
    )
}

export default Loading;