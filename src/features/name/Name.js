const Name = () => {
    const [ name, setName ] = React.useState("Aaron Choi")
    return (
        <>
            {name.split("").map(letter => <span>{letter}</span>)}
        </>
    )
}

export default Name;