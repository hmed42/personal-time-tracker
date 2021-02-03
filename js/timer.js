var startTime, currentTime, endTime, timeDiff, totalSeconds, seconds, minutes, hours;
var btnStart = document.getElementById("start");
var clicked = false;

btnStart.addEventListener("click", function () {
    clicked = true;
});

var currentTime = setInterval(function () {
    currentTime = Date.now();
}, 1000);

function timerButtonStart() {
    startTime = new Date();
    document.getElementById("end").disabled = false; 
};

function timerVariables() {
    // strip the ms
    timeDiff /= 1000;
    // get seconds 
    totalSeconds = Math.floor(timeDiff +1);
    minutes = Math.floor(totalSeconds / 60);
    hours = Math.floor(totalSeconds / 60 /60);
    seconds = Math.floor(totalSeconds - minutes * 60);
    document.getElementById("display-time").innerHTML = hours+" : "+minutes+" : "+seconds;
}

var timerUpdate = setInterval(function () {
    if (clicked == false) {
        // document.getElementById("display-time").innerHTML = "Timer will start when the Start button is clicked";
        document.getElementById("display-time").innerHTML = "::";
    } else {
        timeDiff = currentTime - startTime; //in ms
        timerVariables();
    };
}, 100);


function timerButtonEnd() {
    document.getElementById("reset").disabled = false;
    document.getElementById("display-time").style.animationPlayState = "paused";
    clearInterval(timerUpdate);
    endTime = new Date();
    timeDiff = endTime - startTime; //in ms
    timer();
};

function timerButtonReset() {
    $('#display-time').load(document.URL + ' #display-time');
    window.clearInterval(currentTime);
    window.clearInterval(timerUpdate);
    document.getElementById("display-time").innerHTML = "::";
    clicked = false;
    window.location.href = window.location.href;
}