// !1
const textTimer1Ref = document.querySelector("[data-text=timer1]");

let hours = 0;
let minutes = 60;
let seconds = 0;

const timer1Id = setInterval(() => {
  seconds--;

  textTimer1Ref.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  if (seconds === -1) {
    minutes--;
    seconds = 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    textTimer1Ref.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  if (minutes === -1) {
    hours--;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    textTimer1Ref.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timer1Id);
  }

  if (hours === 0 && minutes === 59 && seconds === 30) {
    alert("Залишилося половина часу!");
  }
}, 1000);

// !2
const textTimer2Ref = document.querySelector("[data-text=timer2]");
const btnTimerRef = document.querySelector("[data-button=animation]");

let hours2 = 0;
let minutes2 = 0;
let seconds2 = 30;

btnTimerRef.addEventListener("click", (evt) => {
  evt.target.setAttribute("disabled", "");
  evt.target.style.cursor = "default";
  evt.target.style.color = "black";

  const timer2Id = setInterval(() => {
    seconds2--;
    textTimer2Ref.textContent = `${hours2
      .toString()
      .padStart(2, "0")}:${minutes2.toString().padStart(2, "0")}:${seconds2
      .toString()
      .padStart(2, "0")}`;

    if (seconds2 === 10) {
      // evt.target.style.transform = "rotate(360deg)";
      // evt.target.style.backgroundColor = 'black';
      evt.target.style.transform = "rotate(0.5turn)";
    }

    if (seconds2 === 0) {
      clearInterval(timer2Id);
      textTimer2Ref.innerHTML = ``;
      evt.target.removeAttribute("disabled");
      evt.target.style.color = "#fff";
      seconds2 = 30;
    }
  }, 1000);
});
