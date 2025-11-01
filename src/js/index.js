// buttons

let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");

let musicItems = document.querySelectorAll("li");

let _forward = document.querySelector("#forward");
let _backward = document.querySelector("#backward");

let soundLine = document.querySelector("#soundLine");

let _audioAll = document.querySelectorAll("audio");

let shuffle = document.querySelector("#shuffle");

// shuffle play
shuffle.addEventListener("click", () => {
  // آهنگ های قبلی pause میشن
  _audioAll.forEach((audio) => {
    audio.currentTime = 0;
  });
  let shuffleNumber = Math.floor(Math.random() * _audioAll.length);
  _audioAll[shuffleNumber].click();
});

let musicsLi = document.querySelectorAll(".musicsLi");

musicItems.forEach((item) => {
  item.addEventListener("click", () => {
    let dataNumberMusicClickOn = "";
    // تمام آهنگ ها

    let MusicClickOn = item.querySelector("audio");

    dataNumberMusicClickOn = MusicClickOn.getAttribute("data-number");

    // آهنگ های قبلی pause میشن
    _audioAll.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });

    musicsLi.forEach((itemsLi) => {
      itemsLi.classList.remove("bg-[#d1d1d12c]");
    });

    item.classList.add("bg-[#d1d1d12c]");

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

      let timeNowMinute = Math.floor(_audio.currentTime / 60);
      let timeNowSeconds = Math.floor(_audio.currentTime % 60);

      let nowPlay = document.querySelector("#nowPlay");
      nowPlay.textContent = `${timeNowMinute}:${
        timeNowSeconds < 10 ? "0" + timeNowSeconds : timeNowSeconds
      }`;

      if (parseInt(_audio.currentTime) == parseInt(_audio.duration)) {
        if (parseInt(dataNumberMusicClickOn) == 7) {
          musicItems[0].click();
        } else {
          _forward.click();
        }
      }
    });

    let TimeLineMusicWrapper = document.querySelector("#TimeLineMusicWrapper");
    TimeLineMusicWrapper.addEventListener("click", (e) => {
      let widthWrapper = TimeLineMusicWrapper.clientWidth;
      let click = e.offsetX;
      let _durationWrapper = _audio.duration;

      let newTimeClick = (click / widthWrapper) * _durationWrapper;

      _audio.currentTime = newTimeClick;
    });

    //////////////////////////////////////////////////////////// covers Slide
    let coverMusic0 = document.querySelector(".slideNumber0");
    let coverMusic1 = document.querySelector(".slideNumber");
    let coverMusic2 = document.querySelector(".slideNumber2");
    let coverMusic3 = document.querySelector(".slideNumber3");
    let coverMusic4 = document.querySelector(".slideNumber4");
    let coverMusic5 = document.querySelector(".slideNumber5");
    let coverMusic6 = document.querySelector(".slideNumber6");
    let coverMusic7 = document.querySelector(".slideNumber7");

    if (dataNumberMusicClickOn == 1) {
      coverMusic0.classList.remove("z-50");
      coverMusic1.classList.remove("z-40");
      coverMusic2.classList.remove("z-50");
      coverMusic3.classList.remove("z-50");
      coverMusic4.classList.remove("z-50");
      coverMusic5.classList.remove("z-50");
      coverMusic6.classList.remove("z-50");
      coverMusic7.classList.remove("z-50");

      coverMusic1.classList.add("z-50");
    }
    if (dataNumberMusicClickOn == 2) {
      coverMusic0.classList.remove("z-50");

      coverMusic2.classList.remove("z-40");
      coverMusic3.classList.remove("z-50");
      coverMusic4.classList.remove("z-50");
      coverMusic5.classList.remove("z-50");
      coverMusic6.classList.remove("z-50");
      coverMusic7.classList.remove("z-50");

      coverMusic2.classList.add("z-50");
    }
    if (dataNumberMusicClickOn == 3) {
      coverMusic0.classList.remove("z-50");

      coverMusic1.classList.remove("z-50");
      coverMusic2.classList.remove("z-50");
      coverMusic4.classList.remove("z-50");
      coverMusic5.classList.remove("z-50");
      coverMusic6.classList.remove("z-50");
      coverMusic7.classList.remove("z-50");

      coverMusic3.classList.add("z-50");
    }
    if (dataNumberMusicClickOn == 4) {
      coverMusic0.classList.remove("z-50");

      coverMusic1.classList.remove("z-50");
      coverMusic2.classList.remove("z-50");
      coverMusic3.classList.remove("z-50");
      coverMusic5.classList.remove("z-50");
      coverMusic6.classList.remove("z-50");
      coverMusic7.classList.remove("z-50");

      coverMusic4.classList.add("z-50");
    }
    if (dataNumberMusicClickOn == 5) {
      coverMusic0.classList.remove("z-50");

      coverMusic1.classList.remove("z-50");
      coverMusic2.classList.remove("z-50");
      coverMusic3.classList.remove("z-50");
      coverMusic4.classList.remove("z-50");
      coverMusic6.classList.remove("z-50");
      coverMusic7.classList.remove("z-50");

      coverMusic5.classList.add("z-50");
    }
    if (dataNumberMusicClickOn == 6) {
      coverMusic0.classList.remove("z-50");

      coverMusic1.classList.remove("z-50");
      coverMusic2.classList.remove("z-50");
      coverMusic3.classList.remove("z-50");
      coverMusic4.classList.remove("z-50");
      coverMusic5.classList.remove("z-50");
      coverMusic7.classList.remove("z-50");
      coverMusic6.classList.add("z-50");
    }
    if (dataNumberMusicClickOn == 7) {
      coverMusic0.classList.remove("z-50");

      coverMusic1.classList.remove("z-50");
      coverMusic2.classList.remove("z-50");
      coverMusic3.classList.remove("z-50");
      coverMusic4.classList.remove("z-50");
      coverMusic5.classList.remove("z-50");
      coverMusic6.classList.remove("z-50");
      coverMusic7.classList.add("z-50");
    }

    // forward music
    _forward.addEventListener("click", () => {
      _audioAll.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      dataNumberForward = parseInt(dataNumberMusicClickOn) + 1;
      if (dataNumberForward == 1) {
        musicItems[0].click();
      }
      if (dataNumberForward == 2) {
        musicItems[1].click();
      }
      if (dataNumberForward == 3) {
        musicItems[2].click();
      }
      if (dataNumberForward == 4) {
        musicItems[3].click();
      }
      if (dataNumberForward == 5) {
        musicItems[4].click();
      }
      if (dataNumberForward == 6) {
        musicItems[5].click();
      }
      if (dataNumberForward == 7) {
        musicItems[6].click();
      }
    });

    // backward music
    _backward.addEventListener("click", () => {
      _audioAll.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      dataNumberForward = parseInt(dataNumberMusicClickOn) - 1;
      if (dataNumberForward == 1) {
        musicItems[0].click();
      }
      if (dataNumberForward == 2) {
        musicItems[1].click();
      }
      if (dataNumberForward == 3) {
        musicItems[2].click();
      }
      if (dataNumberForward == 4) {
        musicItems[3].click();
      }
      if (dataNumberForward == 5) {
        musicItems[4].click();
      }
      if (dataNumberForward == 6) {
        musicItems[5].click();
      }
      if (dataNumberForward == 7) {
        musicItems[6].click();
      }
    });

    ////////////////////////////////////////////////// sound

    let clickSound = 0;
    let dotSound = document.querySelector("#dotSound");
    let dotLine = document.querySelector("#dotLine");

    soundLine.addEventListener("click", (e) => {
      clickSound = e.offsetX;

      // select dot for sound

      dotSound.style.left = `${clickSound}px`;

      _audio.volume = `${clickSound / 100}`;

      dotLine.style.width = `${clickSound}px`;
    });

    let noAudio = document.querySelector("#noAudio");
    let audioVolume = document.querySelector("#audio");

    /////////////////////////// go to mute

    audioVolume.addEventListener("click", () => {
      audioVolume.classList.remove("flex");
      audioVolume.classList.add("hidden");

      noAudio.classList.remove("hidden");
      noAudio.classList.add("flex");

      dotLine.style.width = "0px";

      _audio.volume = 0;
      dotSound.style.left = "0px";
    });

    noAudio.addEventListener("click", () => {
      audioVolume.classList.remove("hidden");
      audioVolume.classList.add("flex");

      noAudio.classList.remove("flex");
      noAudio.classList.add("hidden");
      dotLine.style.width = `${clickSound}px`;
      dotSound.style.left = `${clickSound}px`;

      _audio.volume = `${clickSound / 100}`;
    });
  });
});

// ///////// for pwa
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceWorker.js")
    .then((reg) => {
      console.log("Service worker registred successfully", reg);
    })
    .catch((err) => {
      console.log("service worker not registred !!", err);
    });
}
