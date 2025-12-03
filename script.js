let aud1 = new Audio("28.mp3")
let aud2 = new Audio('29.mp3')
let aud3 = new Audio('30.mp3')
let aud4 = new Audio('31.mp3')
let aud5 = new Audio('32.mp3')
let aud6 = new Audio('33.mp3')
let aud7 = new Audio('34.mp3')
let aud8 = new Audio('44.mp3')
let aud9 = new Audio('45.mp3')
let aud10 = new Audio('60.mp3')

let sounds = [
    aud1, aud2, aud3, aud4, aud5,
    aud6, aud7, aud8, aud9, aud10
];

let btns = document.querySelectorAll("button")

btns.forEach((btns,index) =>{
    btns.addEventListener("click",function(){
       let audio = sounds[index];
       audio.currentTime=0;
       audio.play();
    
});
});



let keyMap = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "a": 7,
    "b": 8,
    "c": 9
};

document.addEventListener("keydown", function(e) {
    let key = e.key.toLowerCase();

    if (key === "a") {
        aud1.currentTime = 0;
        aud1.play();
    }
    else if (key === "b") {
        aud2.currentTime = 0;
        aud2.play();
    }
    else if (key === "c") {
        aud3.currentTime = 0;
        aud3.play();
    }
    else if (key === "d") {
        aud4.currentTime = 0;
        aud4.play();
    }
    else if (key === "e") {
        aud5.currentTime = 0;
        aud5.play();
    }
    else if (key === "f") {
        aud6.currentTime = 0;
        aud6.play();
    }
    else if (key === "g") {
        aud7.currentTime = 0;
        aud7.play();
    }
    else if (key === "a") {
        aud1.currentTime = 0;
        aud1.play();
    }
    else if (key === "b") {
        aud2.currentTime = 0;
        aud2.play();
    }
    else if (key === "c") {
        aud3.currentTime = 0;
        aud3.play();
    }
});