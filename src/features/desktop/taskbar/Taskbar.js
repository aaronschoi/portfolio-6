import TimeAndDate from "./timeAndDate/TimeAndDate";

const Taskbar = () => {
    return (
        <div className="taskbar">
            <div>
            {/*YO YOU SHOULD MAKE YOUR OWN PAGES FOR THESE LOL*/}
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>Resume</div>
            <div>GitCrash</div>
            </div>
            <div>
                {/* create notifications */}
                <div>^</div>
                <div>ENG</div>
                <div>
                    <div>wifi</div>
                    <div>sound</div>
                    <div>battery</div>
                </div>
                <div>
                    <TimeAndDate />
                </div>
            </div>
        </div>
    )
}

export default Taskbar;