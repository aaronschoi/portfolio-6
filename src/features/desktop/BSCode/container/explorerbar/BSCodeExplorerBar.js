import ExplorerComponent from "./explorerComponent/ExplorerComponent"

const BSCodeExplorerBar = () => {
    //it's actually 5 of the same components with different data in each
    return (
        <div>
            <div>
                <div>EXPLORER</div>
                <div>...</div>
            </div>
            <ExplorerComponent title="OPEN EDITORS">
                <div>someFile.js</div>
                <div>someOtherFile.js</div>
                <div>yetAnotherFile.js</div>
            </ExplorerComponent>
            <ExplorerComponent title="PORTFOLIO-6">
                <div>someFile.js</div>
                <div>someOtherFile.js</div>
                <div>yetAnotherFile.js</div>
            </ExplorerComponent>
            <ExplorerComponent title="OUTLINE">
                <div>someFile.js</div>
                <div>someOtherFile.js</div>
                <div>yetAnotherFile.js</div>
            </ExplorerComponent>
            <ExplorerComponent title="TIMELINE">
                <div>Uncommited Changes</div>
            </ExplorerComponent>
            <ExplorerComponent title="NPM SCRIPTS">
                <div>dev</div>
                <div>build</div>
                <div>serve</div>
                <div>start</div>
            </ExplorerComponent>
        </div>
    )
}