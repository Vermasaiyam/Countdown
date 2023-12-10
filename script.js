let timesUp = new Audio("times up.mp3");
let days;
let hours;
let minutes;
let seconds;
let end;
let endDate;
let diff;
let currentDate;
let time;

function start() {
    endDate = document.getElementById("endDate").value;
    currentDate = new Date();
    end = new Date(endDate);
    diff = (end - currentDate) / 1000;
    if (endDate === "") {
        alert("Enter the Date and Time!!!");
        return;
    }
    // if (diff < 0){
    //     alert("Sale Ends!!!");
    //     clearInterval(time);
    //     return;
    // }
    time = setInterval(() => {
        timer()
    }, 1000);
}
function reset() {
    endDate = "";
    diff = 0;
    clearInterval(time);
    document.getElementById("endDate").value = "";
    document.getElementById("days").value = "00";
    document.getElementById("hours").value = "00";
    document.getElementById("minutes").value = "00";
    document.getElementById("seconds").value = "00";
}

function timer() {
    currentDate = new Date();
    end = new Date(endDate);
    diff = (end - currentDate) / 1000;

    console.log(diff);
    if (diff < 0) {
        timesUp.play();
        alert("Countdown Ends!!!")
        endDate = "";
        diff = 0;
        clearInterval(time);
        return;
    }

    // getting days
    days = Math.floor(diff / 3600 / 24);
    hours = Math.floor(diff / 3600) % 24;
    minutes = Math.floor(diff / 60) % 60;
    seconds = Math.floor(diff) % 60;


    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (days === NaN || hours === NaN || minutes === NaN || seconds === NaN) {
        days = "00";
        hours = "00";
        minutes = "00";
        seconds = "00";
    }


    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;



    // 1 day = 24hrs
    // 1hr = 60 min
    // 60 min = 3600 sec
}

