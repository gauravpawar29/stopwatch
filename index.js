// let timer = document.querySelector('.timer');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
let displayTime = document.getElementById("getTime");
console.log(displayTime);
let timer = null;
let inputTimer = document.getElementById("getInputTimer");
let timerValue = null;
let myAudio = document.querySelector('#audio')
let myEndAudio = document.querySelector("#myEndAudio")

function setTimer(){
  var inputTimerValue = inputTimer.value;
  timerValue = inputTimerValue < 10 ? "0" + inputTimerValue : inputTimerValue;
  startBtn()
}

let [msec, sec, min, hrs] = [0, 0, 0, 0];

function stopWatch() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min == 0;
        hrs++;
      }
    }
  }
  
  myAudio.play();
  let hours = hrs < 10 ? "0" + hrs : hrs;
  var minutes = min < 10 ? "0" + min : min;
  let seconds = sec < 10 ? "0" + sec : sec;
  let miliseconds = msec < 10 ? "0" + msec : msec;
  
  if(minutes == timerValue){
    stopBtn();
  }

  displayTime.innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
}

function startBtn() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 10);
}

function stopBtn() {
  inputTimer.value = "";
  clearInterval(timer);
  myAudio.pause()
  myEndAudio.play()

}
function resetBtn() {
  myAudio.pause()
  myEndAudio.pause()
  clearInterval(timer);
  [msec, sec, min, hrs] = [0, 0, 0, 0];
  displayTime.innerHTML = "00 : 00 : 00 : 00";
}
