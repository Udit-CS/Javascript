console.log("welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let turnsound = new Audio("ting.mp3");
let gameoversound = new Audio("gameover.mp3");
let turn = "X";
let gameover = false
const changeturn = () => {
    return turn === "X" ? "0" : "X" // Changed from "0" to "O" for clarity.
}

const checkwin = () => {
    // Implement win logic
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.span').innerText = boxtext[e[0]].innerText + " won"
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    }
    )
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') { // Changed from `innertext` to `innerText`
            boxtext.innerText = turn; // Changed from `innertext` to `innerText`
            turn = changeturn();
            turnsound.play();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("span")[0].innerText = "Turn for " + turn;
            }

        }
    }, false);
});

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
})


