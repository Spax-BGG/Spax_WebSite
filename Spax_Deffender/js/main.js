const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
    })
}

const bgmArr = [
    './src/sounds/bgm1.mp3',
];
const bgMusic = new Audio();
bgMusic.src = bgmArr[ Math.floor( Math.random() * bgmArr.length ) ];
bgMusic.volume = 0.3;

const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
startButton.onclick = function() {
    document.body.style.overflowY = 'scroll';
    startScreen.classList.add("hide");
    bgMusic.play();
    setTimeout( () => startScreen.style.display = 'none', 1200 );
}