const whiteKey = document.querySelectorAll(".white-key");
const blackKey = document.querySelectorAll(".black-key");


const whiteTriggerKeys = "zxcvbnm,./asdfghjkl;'\"".split("");


const blackTriggerKeys = "qwertyuiop12345".split("");


document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();


  const whiteKeyIndex = whiteTriggerKeys.indexOf(key);
  if (whiteKeyIndex !== -1 && whiteKeyIndex < whiteKey.length) {
    whiteKey[whiteKeyIndex].classList.add("active");
    ran_col(whiteKey[whiteKeyIndex]);
    let sound = new Audio(`sounds/white-keys/${whiteKeyIndex}.mp3`);
    playSound(sound);
  }


  const blackKeyIndex = blackTriggerKeys.indexOf(key);
  if (blackKeyIndex !== -1 && blackKeyIndex < blackKey.length) {
    blackKey[blackKeyIndex].classList.add("active");
    ran_col(blackKey[blackKeyIndex]);
    let sound = new Audio(`sounds/black-keys/${blackKeyIndex}.mp3`);
    playSound(sound);
  }
});


document.addEventListener("keyup", (event) => {
  const key = event.key.toLowerCase();


  const whiteKeyIndex = whiteTriggerKeys.indexOf(key);
  if (whiteKeyIndex !== -1 && whiteKeyIndex < whiteKey.length) {
    whiteKey[whiteKeyIndex].classList.remove("active");
    whiteKey[whiteKeyIndex].style.background = "white";
  }


  const blackKeyIndex = blackTriggerKeys.indexOf(key);
  if (blackKeyIndex !== -1 && blackKeyIndex < blackKey.length) {
    blackKey[blackKeyIndex].classList.remove("active");
    blackKey[blackKeyIndex].style.background = "black";
  }
});


blackKey.forEach((black, index) => {
  black.addEventListener("click", () => {
    let sound = new Audio(`sounds/black-keys/${index}.mp3`);
    playSound(sound);
    let originalBg = black.style.backgroundColor;
    ran_col(black);
    setTimeout(() => {
      black.style.backgroundColor = originalBg;
    }, 300);

  });
});

whiteKey.forEach((white, index) => {
  white.addEventListener("click", () => {
    let sound = new Audio(`sounds/white-keys/${index}.mp3`);
    playSound(sound);

    let originalBg = white.style.backgroundColor;
    ran_col(white);
    setTimeout(() => {
      white.style.backgroundColor = originalBg;
    }, 300);

  });
});

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

function ran_col(elem) {

  var color = "#"; 
  var letters = [
    "4169e1",
    "ffff00",
    "32cd32",
    "2e8b57",
    "40e0d0",
    "ff7f50",
    "ff6b8a",
  ]; 
  color += letters[Math.floor(Math.random() * letters.length)];
  elem.style.background = color; 
}
