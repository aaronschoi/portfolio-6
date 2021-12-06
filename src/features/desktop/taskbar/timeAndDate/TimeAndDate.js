const TimeAndDate = () => {
    const [ time, setTime ] = React.useState(new Date())

    return (
        <div>{time}</div>
    )
}