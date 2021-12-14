import { changeToDesktop } from "../../../store/currentWindowStore"
import { goArounds } from "../../../store/goAroundStore"
import "./loadingText.module.css"

const LoadingText = () => {

    const again = goArounds.use();

    React.useEffect(() => {
        const timeLine = gsap.timeline({onComplete: changeToDesktop})
        timeLine.to("#loading-text", {duration: 3, text: `${ again === 0 ? "for the most immersive experience, press F11" : "it's still F11 for the best experience"}`, delay: 3})
        .to("#loading-text", {duration: 3, text: `thank you ${again > 0 ? "again " : " "}for visiting my portfolio!`, delay: 3})
        .to("#loading-text", {duration: 3})

        return () => timeLine.kill()
    }, [])

    return (
        <div className="loading-text-container">
            <div id="loading-text">{again > 0 ? "going again? you can skip this by pressing the space bar if you'd like" : "loading"}</div>
        </div>
    )
}

export default LoadingText;