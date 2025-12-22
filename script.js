const reels = [
  {
    ismuted:true,
    video: "./vid/1.mp4",
    username: "arjun.dev",
    userprofilepic: "https://i.pravatar.cc/150?img=1",
    isliked: true,
    likeCount: 1240,
    commentCount: 86,
    shareCount: 42,
    isFollowed: true,
    caption: "Late night coding vibes 💻🔥"
  },
  {
    ismuted:true,
    video: "./vid/2.mp4",
    username: "neha.creates",
    userprofilepic: "https://i.pravatar.cc/150?img=2",
    isliked: false,
    likeCount: 980,
    commentCount: 54,
    shareCount: 21,
    isFollowed: false,
    caption: "Creativity takes courage ✨"
  },
  { 
    ismuted:true,
    video: "./vid/3.mp4",
    username: "rahul.fit",
    userprofilepic: "https://i.pravatar.cc/150?img=3",
    isliked: true,
    likeCount: 2310,
    commentCount: 143,
    shareCount: 88,
    isFollowed: true,
    caption: "Consistency beats motivation 💪"
  },
  { 
    ismuted:true,
    video: "./vid/4.mp4",
    username: "aisha.travels",
    userprofilepic: "https://i.pravatar.cc/150?img=4",
    isliked: false,
    likeCount: 1765,
    commentCount: 97,
    shareCount: 65,
    isFollowed: true,
    caption: "Wander more, worry less 🌍"
  },
  { 
    ismuted:true,
    video: "./vid/5.mp4",
    username: "code.with.sam",
    userprofilepic: "https://i.pravatar.cc/150?img=5",
    isliked: true,
    likeCount: 3120,
    commentCount: 210,
    shareCount: 134,
    isFollowed: false,
    caption: "JavaScript makes life easier 😄"
  },
  { 
    ismuted:true,
    video: "./vid/6.mp4",
    username: "foodie.kiran",
    userprofilepic: "https://i.pravatar.cc/150?img=6",
    isliked: false,
    likeCount: 890,
    commentCount: 61,
    shareCount: 19,
    isFollowed: false,
    caption: "Street food = happiness 😋"
  },
  { 
    ismuted:true,
    video: "./vid/7.mp4",
    username: "megha.art",
    userprofilepic: "https://i.pravatar.cc/150?img=7",
    isliked: true,
    likeCount: 1540,
    commentCount: 112,
    shareCount: 73,
    isFollowed: true,
    caption: "Turning imagination into art 🎨"
  },
  {
    ismuted:true,
    video: "./vid/8.mp4",
    username: "tech.by.adi",
    userprofilepic: "https://i.pravatar.cc/150?img=8",
    isliked: false,
    likeCount: 2670,
    commentCount: 189,
    shareCount: 120,
    isFollowed: true,
    caption: "Tech news you should know ⚡"
  },
  { 
    ismuted:true,
    video: "./vid/9.mp4",
    username: "daily.motivation",
    userprofilepic: "https://i.pravatar.cc/150?img=9",
    isliked: true,
    likeCount: 4980,
    commentCount: 356,
    shareCount: 290,
    isFollowed: true,
    caption: "Believe in yourself every day 🌟"
  },
  { 
    ismuted:true,
    video: "./vid/10.mp4",
    username: "snapshots.by.ravi",
    userprofilepic: "https://i.pravatar.cc/150?img=10",
    isliked: false,
    likeCount: 1320,
    commentCount: 78,
    shareCount: 44,
    isFollowed: false,
    caption: "Captured moments 📸"
  }
];

var allReels = document.querySelector('.all-reels')
let globalMuted = true;   // 🔊 remembers mute across reels
const heartGradients = [
  // ❤️ Instagram Classic (MOST COMMON)
  ["#feda75", "#fa7e1e", "#d62976", "#962fbf"],

  // 💗 Pink → Purple (very common)
  ["#ff7ab6", "#d62976", "#962fbf"],

  // 💜 Purple dominant (less yellow)
  ["#d62976", "#962fbf", "#4f5bd5"],

  // 🟡 Yellow → Pink (subtle)
  ["#feda75", "#fa7e1e", "#ff7ab6"],

  // 💙 Blue accent (rare but real)
  ["#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"]
];





function addData(){

  var sum = ''
reels.forEach(function(elem,idx){
    sum = sum + `<div class="reel">
                <video id="${idx}" class="video" autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
                 <div id="${idx}" class="muted">${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
            
                 </div>
                <div class="big-heart">
                   <i class="ri-heart-3-fill"></i>
                      </div>

                
                <div class="bottom">
                    <div class="user">
                    <img src="${elem.userprofilepic}" alt="">
                    <h4>${elem.username}</h4>
                    <button id="${idx}" class="follow" >${elem.isFollowed?'Unfollow':'Follow'}</button>
                    </div>
                    <h3>${elem.caption}</h3>
                </div>
                <div class="right">
                    <div id=${idx} class="like">
                        <h4 class="like-icon  icon" >${elem.isliked?'<i class="ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon icon" ><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>
                    <div class="menu">
                        <h4 class="menu-icon icon"> <i class="ri-more-2-line"></i></h4>
                    </div>
                </div>
            </div>`
    
})


allReels.innerHTML = sum
observeVideos();   // 👈 ADD THIS LINE

}




// ================= AUTO PLAY & AUTO MUTE =================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      const id = video.id;
      const muteIcon = video.nextElementSibling;

     if (entry.isIntersecting) {
  video.play();

  // 🔥 APPLY GLOBAL MUTE STATE
  video.muted = globalMuted;
  reels[id].ismuted = globalMuted;

  muteIcon.innerHTML = globalMuted
    ? `<i class="ri-volume-mute-fill"></i>`
    : `<i class="ri-volume-up-fill"></i>`;
} else {
  video.pause();
  video.muted = true;
  reels[id].ismuted = true;
  muteIcon.innerHTML = `<i class="ri-volume-mute-fill"></i>`;
}

    });
  },
  { threshold: 0.75 }
);

function observeVideos() {
  document.querySelectorAll(".video").forEach((video) => {
    observer.observe(video);
  });
}

addData();
let lastTap = 0;
let tapTimeout = null;

allReels.addEventListener('click',function(dets){

  
  if(dets.target.className == 'like'){

  if(!reels[dets.target.id].isliked){
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isliked  = true
  }else{
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isliked  = false
  }
  addData();
  }

  if(dets.target.className == 'follow'){

   if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }else{
      reels[dets.target.id].isFollowed = false
    }
    addData();
  }

  

 if (dets.target.classList.contains("video")) {
  const video = dets.target;
  const id = video.id;
  const reel = video.closest(".reel");
  const heart = reel.querySelector(".big-heart");
  const muteIcon = video.nextElementSibling;
  const now = Date.now();

  // DOUBLE TAP ❤️
if (now - lastTap < 300) {
  clearTimeout(tapTimeout);

  // 🎨 PICK RANDOM 3–4 COLOR GRADIENT
  const colors =
    heartGradients[Math.floor(Math.random() * heartGradients.length)];

  heart.style.background = `linear-gradient(45deg, ${colors.join(",")})`;
  heart.style.webkitBackgroundClip = "text";
  heart.style.webkitTextFillColor = "transparent";

  heart.classList.add("show");
  setTimeout(() => heart.classList.remove("show"), 600);

  if (!reels[id].isliked) {
    reels[id].isliked = true;
    reels[id].likeCount++;

    const likeBtn = reel.querySelector(".like i");
    const likeCountEl = reel.querySelector(".like h6");

    likeBtn.className = "ri-heart-3-fill";
    likeCountEl.textContent = reels[id].likeCount;
  }
}

   else {
    // SINGLE TAP (wait before muting)
    tapTimeout = setTimeout(() => {
      globalMuted = !globalMuted;
      video.muted = globalMuted;

      muteIcon.innerHTML = globalMuted
        ? `<i class="ri-volume-mute-fill"></i>`
        : `<i class="ri-volume-up-fill"></i>`;

      muteIcon.style.opacity = 1;
      muteIcon.style.transform = "translate(-50%, -50%) scale(1)";

      setTimeout(() => {
        muteIcon.style.opacity = 0;
        muteIcon.style.transform = "translate(-50%, -50%) scale(0.8)";
      }, 600);
    }, 300);
  }

  lastTap = now;
}

  
  
});

