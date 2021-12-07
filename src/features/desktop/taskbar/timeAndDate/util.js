export const makeTime = (time) => {
    const min = time.getMinutes();
    if(time.getHours() > 12) {
        return `${time.getHours() - 12}:${min < 10 ? `0${min}` : min} PM`
    }
    return `${time.getHours()}:${time.getMinutes()} AM`
}

export const makeDate = (time) => `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`