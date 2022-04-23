function clock() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    const hourBlock = document.getElementById('hour');
    const minutesBlock = document.getElementById('minutes');
    const secondsBlock = document.getElementById('seconds');

    hourBlock.innerHTML = hour;
    minutesBlock.innerHTML = minutes;
    secondsBlock.innerHTML = seconds;
}

timer = setInterval(clock, 1000);