import "./loading.module.css";
import LoadingAnimation from "./loadingAnimation/LoadingAnimation";
import LoadingText from "./loadingText/LoadingText";
import Picrosoft from "./picrosoftSymbol/Picrosoft";

const Loading = () => {
    return (
        <div className="loading-container">
            <Picrosoft />
            <LoadingText />
            <LoadingAnimation />
        </div>
    )
}

export default Loading;