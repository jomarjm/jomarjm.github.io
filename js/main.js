const sfx = new Audio();
const playBtn = document.querySelector(".img-cont");
const btnBgImg = document.querySelector("#bg-btn");
const btnPlayImg = document.querySelector("#play-btn");

const sfxArr = [
  {
    track: 1,
    url: "/assets/augh_01.mp3"
  },
  {
    track: 2,
    url: "/assets/augh_02.mp3"
  }
];

let sfxArrCounter = 0;

const playSound = () => {
  sfx.addEventListener("canplaythrough", () => {
    sfx.play();
  })
}

playBtn.addEventListener("mousedown", () => {
  btnBgImg.src = "/assets/Hover.png";
});

playBtn.addEventListener("mouseup", () => {
  setTimeout(() => {
    btnBgImg.src = "/assets/Default.png";
  }, 100);
  
});

playBtn.addEventListener("click", () => {
  sfx.src = sfxArr[sfxArrCounter].url;
  sfx.load();
  console.log(`track loaded: ${sfxArr[sfxArrCounter].url}`);
  playSound();
  playBtn.disabled = true;
  playBtn.style.cursor = "not-allowed";
  if (sfxArrCounter >= sfxArr.length - 1) {
    sfxArrCounter = 0;
  } else {
    sfxArrCounter++;
  }
});

sfx.addEventListener("ended", () => {
  playBtn.disabled = false;
  playBtn.style.cursor = "pointer";
})