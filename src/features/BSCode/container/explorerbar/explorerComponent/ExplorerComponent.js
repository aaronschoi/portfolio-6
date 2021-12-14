const ExplorerComponent = ({title, children}) => {
    const [ arrow, setArrow ] = React.useState(false);
    const handleExpand = (event) => {
        setArrow(current => !current)
    }
    const caret = <div onClick={handleExpand}>{arrow ? ">" : "v"}</div>
    const fileView = arrow ? <div>{children}</div> : null;
    return (
        <div>
            <div>{caret} {title}</div>
            {fileView}
        </div>
    )
}

export default ExplorerComponent;