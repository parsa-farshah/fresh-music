// buttons

let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");

let musicItems = document.querySelectorAll("li");

musicItems.forEach((item) => {
  item.addEventListener("click", () => {
    // تمام آهنگ ها
    let _audioAll = document.querySelectorAll("audio");

    let MusicClickOn = item.querySelector("audio");

    let dataNumberMusicClickOn = MusicClickOn.getAttribute("data-number");
    console.log(dataNumberMusicClickOn);

    // آهنگ های قبلی pause میشن
    _audioAll.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });

    // آهنگی که پلی کردیم
    let _audio = item.querySelector(".musics");
    _audio.play();

    // دکمه ها بیاد و انگار آهنگ پلی هست
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
    pauseBtn.classList.add("flex");

    // play btn
    playBtn.addEventListener("click", () => {
      // برای آهنگ های قبلی ریست شه
      _audioAll.forEach((audio) => {
        audio.pause();
      });
      // آهنگ پلی شه
      _audio.play();
      // دکمه ها درست شن
      playBtn.classList.remove("block");
      playBtn.classList.add("hidden");
      // ///////////////
      pauseBtn.classList.remove("hidden");
      pauseBtn.classList.add("flex");
    });

    // pause btn
    pauseBtn.addEventListener("click", () => {
      // برای آهنگ های قبلی ریست شه
      _audioAll.forEach((audio) => {
        audio.pause();
      });
      // آهنگ پلی شه
      _audio.pause();
      // دکمه ها درست شن
      playBtn.classList.remove("hidden");
      playBtn.classList.add("block");
      // /////////////////
      pauseBtn.classList.remove("flex");
      pauseBtn.classList.add("hidden");
    });

    let covers = document.querySelector(".slideNumber2");

    // covers.forEach((cover) => {
    //   let slideNumbers = cover.getAttribute("data-number");
    // });

    if (dataNumberMusicClickOn == 2) {
      covers.classList.remove("z-40");
      covers.classList.add("z-50");
      console.log("hello");
    }
  });
});
