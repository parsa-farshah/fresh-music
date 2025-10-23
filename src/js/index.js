// buttons

let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");

let musicItems = document.querySelectorAll("li");

let _forward = document.querySelector("#forward");
let _backward = document.querySelector("#backward");

musicItems.forEach((item) => {
  item.addEventListener("click", () => {
    let dataNumberMusicClickOn = "";
    // تمام آهنگ ها
    let _audioAll = document.querySelectorAll("audio");
    let MusicClickOn = item.querySelector("audio");

    dataNumberMusicClickOn = MusicClickOn.getAttribute("data-number");

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

    _audio.addEventListener("timeupdate", () => {
      let playLinePercent = (_audio.currentTime / _audio.duration) * 100;
      let TimeLineMusic = document.querySelector("#TimeLineMusic");
      TimeLineMusic.style.left = `${playLinePercent}%`;
    });

    // click update time line
    let TimeLineMusicWrapper = document.querySelector("#TimeLineMusicWrapper");
    TimeLineMusicWrapper.addEventListener("click", (e) => {
      let widthWrapper = TimeLineMusicWrapper.clientWidth;
      let click = e.offsetX;
      let _durationWrapper = _audio.duration;

      let newTimeClick = (click / widthWrapper) * _durationWrapper;

      _audio.currentTime = newTimeClick;
    });

    let coverMusic1 = document.querySelector(".slideNumber");
    let coverMusic2 = document.querySelector(".slideNumber2");

    // covers.forEach((cover) => {
    //   let slideNumbers = cover.getAttribute("data-number");
    // });
    if (dataNumberMusicClickOn == 1) {
      coverMusic1.classList.remove("z-40");
      coverMusic2.classList.remove("z-50");
      coverMusic1.classList.add("z-50");
      console.log("hello");
    }
    if (dataNumberMusicClickOn == 2) {
      coverMusic2.classList.remove("z-40");
      coverMusic2.classList.add("z-50");
    }

    // forward music
    _forward.addEventListener("click", () => {
      dataNumberForward = parseInt(dataNumberMusicClickOn) + 1;
      if (dataNumberForward == 1) {
        musicItems[0].click();
      }
      if (dataNumberForward == 2) {
        musicItems[1].click();
      }
    });

    // backward music
    _backward.addEventListener("click", () => {
      dataNumberForward = parseInt(dataNumberMusicClickOn) - 1;
      if (dataNumberForward == 1) {
        musicItems[0].click();
      }
      if (dataNumberForward == 2) {
        musicItems[1].click();
      }
    });
  });
});
