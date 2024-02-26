new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Tum Todo Na (Male Version) - I",
          artist: " Bela Shende, Ash King",
          cover: "img/1.jpg",
          source: "mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=AEucICiRvhc",
          favorited: false
        },
        {
          name: "Heeriye",
          artist: "Arijit Singh and Jasleen Royal",
          cover: "img/2.jpg",
          source: "mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=RLzC55ai0eo",
          favorited: true
        },
        {
          name: "Agar Tum Mil Jao- Unplugged Cover",
          artist: "Digvijay Singh",
          cover: "img/3.jpg",
          source: "mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=bE-Xk5BvAEU",
          favorited: false
        },
        {
          name: "Dil se Dil tak",
          artist: "Akashdeep Sengupta, Laqshay Kapoor, Suvarna Tiwari",
          cover: "img/4.jpg",
          source: "mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=RdVK0_LljRo",
          favorited: false
        },
        {
          name: "Jaaniye",
          artist: "Rashmeet Kaur and Vishal Mishra",
          cover: "img/5.jpg",
          source: "mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=BJM-Gs0taqA",
          favorited: true
        },
        {
          name: "Olper Porichoy",
          artist: "Debayan Banerjee",
          cover: "img/6.jpg",
          source: "mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=je00k4kTUaw",
          favorited: false
        },
        {
          name: "Zehnaseeb",
          artist: "Chinmayi, Shekhar Ravjiani, and Vishal–Shekhar",
          cover: "img/7.jpg",
          source: "mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=WnU0lH6C0EA",
          favorited: true
        },
        {
          name: "Piya O Re Piya",
          artist: "Atif Aslam, Shreya Ghosal",
          cover: "img/8.jpg",
          source: "mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=f6EmxM8_XPk",
          favorited: false
        },
        {
          name: "Heer Ranjha",
          artist: "Rito Riba",
          cover: "img/9.jpg",
          source: "mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=QhNwq_z7eI4",
          favorited: false
        },
        {
          name: "Jeena Jeena",
          artist: "Atif Aslam",
          cover: "img/10.jpg",
          source: "mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=zFdi834FiZ4",
          favorited: false
        },
        {
          name: "Mast Magan",
          artist: "Arijit Singh, Chinmayi",
          cover: "img/11.jpg",
          source: "mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=xitd9mEZIHk",
          favorited: false
        },
        {
          name: "Saathiyaa",
          artist: " Ajay Gogavale and Shreya Ghoshal",
          cover: "img/12.jpg",
          source: "mp3/12.mp3",
          url: "https://www.youtube.com/watch?v=2ibPLYwVM38",
          favorited: false
        },
        {
          name: "Humnava",
          artist: "Mithoon and Papon",
          cover: "img/13.jpg",
          source: "mp3/13.mp3",
          url: "https://www.youtube.com/watch?v=ktPD6TMovxs",
          favorited: false
        },
        {
          name: "Labon Ko",
          artist: "KK",
          cover: "img/14.jpg",
          source: "mp3/14.mp3",
          url: "https://www.youtube.com/watch?v=-FP2Cmc7zj4",
          favorited: false
        },
        {
          name: "Tu Hi Meri Shab Hai",
          artist: "KK, Pritam Chakraborty",
          cover: "img/15.jpg",
          source: "mp3/15.mp3",
          url: "https://www.youtube.com/watch?v=OxO2mVfEYbs",
          favorited: false
        },
        {
          name: "Dil Kyun Yeh Mera",
          artist: "Rajesh Roshan",
          cover: "img/16.jpg",
          source: "mp3/16.mp3",
          url: "https://www.youtube.com/watch?v=maKDIvUVkQo",
          favorited: false
        },
        {
          name: "Egiye De-Unplugged",
          artist: "Somlata",
          cover: "img/17.jpg",
          source: "mp3/17.mp3",
          url: "https://www.youtube.com/watch?v=cRE4dQmhNBc",
          favorited: false
        },
        {
          name: "Khuda Jaane",
          artist: "KK and Shilpa Rao",
          cover: "img/18.jpg",
          source: "mp3/18.mp3",
          url: "https://www.youtube.com/watch?v=cmMiyZaSELo",
          favorited: false
        },
        {
          name: "Dil Ko Karar Aya",
          artist: "Yaseer Desai,Neha Kakkar",
          cover: "img/19.jpg",
          source: "mp3/19.mp3",
          url: "https://www.youtube.com/watch?v=lX3vT_Gm_HE",
          favorited: false
        },
        {
          name: "Jeno Tomari Kache",
          artist: "Ash King and Somlata Acharyya Chowdhury",
          cover: "img/20.jpg",
          source: "mp3/20.mp3",
          url: "https://www.youtube.com/watch?v=1LKTbCJDZaw",
          favorited: false
        },
        {
          name: "Tomake",
          artist: "Shreya Ghosal",
          cover: "img/21.jpg",
          source: "mp3/21.mp3",
          url: "https://www.youtube.com/watch?v=Whr3M4P2RKE",
          favorited: false
        },
        {
          name: "Oboseshe",
          artist: "Arijit Singh",
          cover: "img/22.jpg",
          source: "mp3/22.mp3",
          url: "https://www.youtube.com/watch?v=mAjLa0s2UJA",
          favorited: false
        },
        {
          name: "Parbona",
          artist: "Arijit,Prashmita",
          cover: "img/23.jpg",
          source: "mp3/23.mp3",
          url: "https://www.youtube.com/watch?v=5L4ZLPKSVlY",
          favorited: false
        },
        {
          name: "Sang Hoon Tere",
          artist: "KK",
          cover: "img/24.jpg",
          source: "mp3/24.mp3",
          url: "https://www.youtube.com/watch?v=QT2am7JIdgw",
          favorited: false
        },
        {
          name: "Zindegi Do Pal ki",
          artist: "KK, NASIR FARAAZ, and Rajesh Roshan",
          cover: "img/25.jpg",
          source: "mp3/25.mp3",
          url: "https://www.youtube.com/watch?v=r-XG86T2jNc",
          favorited: false
        },
        {
          name: "Soniyo",
          artist: "Sonu Nigam,Shreya Ghosal",
          cover: "img/26.jpg",
          source: "mp3/26.mp3",
          url: "https://www.youtube.com/watch?v=N57zVA-cRUM",
          favorited: false
        },
        {
          name: "Tui Chunli Jakhan",
          artist: "Arijit Singh,Shreya Ghosal",
          cover: "img/27.jpg",
          source: "mp3/27.mp3",
          url: "https://www.youtube.com/watch?v=r-XG86T2jNc",
          favorited: false
        },
        {
          name: "Takey Olpo Kachhe Dakchhi",
          artist: "Mahtim Shakib",
          cover: "img/28.jpg",
          source: "mp3/28.mp3",
          url: "https://www.youtube.com/watch?v=Nly8TUAGyYI",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
