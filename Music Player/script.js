const audio = document.querySelector("#audio");
const progress = document.querySelector("#progress-bar");
const playPauseBtn = document.querySelector("#play-pause");
const backwardBtn = document.querySelector("#backward");
const forwardBtn = document.querySelector("#forward");
const playIcon = document.querySelector("#play-icon");

function playPause() {
    if (audio.paused) {
        audio.play();
        playIcon.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        playIcon.classList.replace("fa-pause", "fa-play");
    }
}

audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
});

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

audio.addEventListener("ended", () => {
    playIcon.classList.replace("fa-pause", "fa-play");
    progress.value = 0;
});

playPauseBtn.addEventListener("click", playPause);

backwardBtn.addEventListener("click", () => {
    audio.currentTime -= 10;
});

forwardBtn.addEventListener("click", () => {
    audio.currentTime += 10;
});