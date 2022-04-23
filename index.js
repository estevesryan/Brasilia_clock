function clock() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (minutes < 10) {
        minutes = "o" + minutes
    }

    const hourBlock = document.getElementById('hour')
    const minutesBlock = document.getElementById('minutes');
    const secondsBlock = document.getElementById('seconds');

    hourBlock.innerHTML = hour
    minutesBlock.innerHTML = minutes
    secondsBlock.innerHTML = seconds
}
timer = setInterval(clock, 1000);