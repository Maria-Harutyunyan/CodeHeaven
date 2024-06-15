let timeRemaining;
let timer;
let isPaused = false;

function startTimer() {
  if (isPaused) {
    isPaused = false;
    return;
  }
  const input = document.querySelector("#timeInput").value;
  timeRemaining = parseInt(input);
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    return;
  }
  if (timer) clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timeRemaining = 0;
  document.querySelector("#timer").textContent = "00:00";
  document.querySelector("#timeInput").value = "";
  isPaused = false;
}

function updateTimer() {
  if (timeRemaining <= 0) {
    clearInterval(timer);
    return;
  }
  timeRemaining--;
  document.querySelector("#timer").textContent = formatTimer(timeRemaining);
}

function formatTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
