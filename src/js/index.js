var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
// buttons

let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");

let firstMusic = document.querySelector("#firstMusic");

let firstMusicBtn = document.querySelector("#firstMusicBtn");

firstMusicBtn.addEventListener("click", () => {
  firstMusic.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  pauseBtn.classList.add("flex");
});

pauseBtn.addEventListener("click", () => {
  firstMusic.pause();
  pauseBtn.classList.remove("flex");
  pauseBtn.classList.add("hidden");

  playBtn.classList.remove("hidden");
  playBtn.classList.add("flex");
});

playBtn.addEventListener("click", () => {
  firstMusic.play();
  pauseBtn.classList.remove("hidden");
  pauseBtn.classList.add("flex");

  playBtn.classList.remove("flex");
  playBtn.classList.add("hidden");
});
