import { changeToDesktop } from "../../../store/currentWindowStore"
import "./loadingText.module.css"

const LoadingText = () => {

    React.useEffect(() => {
        const timeLine = gsap.timeline({onComplete: changeToDesktop})
        timeLine.to("#loading-text", {duration: 3, text: "for the most immersive experience, press F11", delay: 3})
        .to("#loading-text", {duration: 3, text: "thank you for visiting my portfolio!", delay: 3})
        .to("#loading-text", {duration: 3})

        return () => timeLine.kill()
    }, [])

    return (
        <div className="loading-text-container">
            <div id="loading-text">loading</div>
        </div>
    )
}

export default LoadingText;