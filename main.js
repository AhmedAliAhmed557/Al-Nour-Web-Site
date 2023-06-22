// let nums = document.querySelectorAll(".stats .number");
// let section = document.querySelector(".stats");
// let started = false;

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
//   let sectionStats = document.querySelector(".our-skills");
//   let spans = document.querySelectorAll(".the-progress span");
//   if (window.scrollY >= sectionStats.offsetTop + 100) {
//     spans.forEach((ele) => {
//       ele.style.width = ele.dataset.width;
//     });
//   }
// };

// Events Time
let countDowndate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dataNow = new Date().getTime();
  let diffData = countDowndate - dataNow;
  let days = Math.floor(diffData / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffData % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffData % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (diffData < 0) {
    clearInterval(counter);
  }
}, 1000);

// Silder In Profile Page
///////////////////////////////////////////
///////////////////////////////////////////
let img = document.querySelector(".slider-container img");

let arr = [
  "imgs/1.jpg",
  "imgs/2.jpg",
  "imgs/3.jpg",
  "imgs/4.jpg",
  "imgs/5.jpg",
];
let i = 1;
function imgsChange() {
  setInterval(() => {
    img.setAttribute("src", arr[i]);
    i++;
    if (i > 5) {
      i++;
    } else if (i === 5) {
      i = 0;
    }
  }, 1500);
}
imgsChange();

// generatePass Password In Settings Page
let input = document.querySelector(".password");
let generatePass = document.getElementById("generatePass");

generatePass.addEventListener("click", generate);

function generate() {
  if (generatePass.getAttribute("data-text") === "show") {
    input.setAttribute("type", "text");
    generatePass.setAttribute("data-text", "hide");
    generatePass.value = "Hide";
  } else {
    input.setAttribute("type", "password");
    generatePass.setAttribute("data-text", "show");
    generatePass.value = "Show";
  }
}
