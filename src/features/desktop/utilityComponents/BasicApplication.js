import "./basicApplication.module.css"

const BasicApplication = ( { className, children } ) => {
    return (
        <div className={`basic-application-container ${className}`}>
            <div className="basic-application-topbar">
                <div className="basic-application-topbar-sub-container">
                    <div>icon</div>
                    <div>GitCrash</div>
                </div>
                {/* minimize maximize exit buttons */}
                <div className="basic-application-topbar-sub-container">
                <div>-</div>
                <div>square</div>
                <div>x</div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default BasicApplication;