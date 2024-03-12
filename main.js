let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let wm = document.getElementById("w_minutes");
let ws = document.getElementById("w_seconds");

let bm = document.getElementById("b_minutes");
let bs = document.getElementById("b_seconds");

let sBtnDecrease = document.getElementById("s-btn-decrease");
let sBtnIncrease = document.getElementById("s-btn-increase");
let mBtnDecrease = document.getElementById("m-btn-decrease");
let mBtnIncrease = document.getElementById("m-btn-increase");

//store a reference to a timer variable
let startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", function () {
  wm.innerText = 25;
  ws.innerText = "00";

  bm.innerText = 5;
  bs.innerText = "00";

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

//Start Timer Function
function timer() {
  //Work Timer Countdown
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }
}

//Buttons add and decrease functions
function sIncreaseTimer() {
  ws.innerText++;
}
function sDecreaseTimer() {
  if (ws.innerText <= 0) 
  ws.innerText = 0;
  else {
    ws.innerText--;
  }
}
function mIncreaseTimer() {
  wm.innerText++;
}
function mDecreaseTimer() {
  if (wm.innerText <= 0) 
  wm.innerText = 0;
  else {
    wm.innerText--;
  }
}


//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}