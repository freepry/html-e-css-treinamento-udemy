const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const starBtn = document.querySelector("#starBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

starBtn.addEventListener("click", starTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTime);
resetBtn.addEventListener("click", resetTimer);

function starTimer() {
    interval = setInterval(() => {

        if(!isPaused) {
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            milisecondsEl.textContent = formatMileseconds(miliseconds);
        }
    }, 10);

    starBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = "none";
    resetBtn.style.display = "block";
}

function resumeTime(){
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    starBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMileseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}