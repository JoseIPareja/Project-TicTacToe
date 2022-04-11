// FACTORY of PLAYERS:
const playerFactory = (name, mark) => {
    return {name, mark};
}

// ----------------------------------------------

// CHARACTER SELECTION
let ghosts1 = [];
const p1sel1btn = document.querySelector('#p1sel1');
const p1sel2btn = document.querySelector('#p1sel2');
const p1sel3btn = document.querySelector('#p1sel3');

p1sel1btn.addEventListener('click', () => {
    ghosts1.push('p1sel1');
})

p1sel2btn.addEventListener('click', () => {
    ghosts1.push('p1sel2');
})

p1sel3btn.addEventListener('click', () => {
    ghosts1.push('p1sel3');
})

let ghosts2 = [];
const p2sel1btn = document.querySelector('#p2sel1');
const p2sel2btn = document.querySelector('#p2sel2');
const p2sel3btn = document.querySelector('#p2sel3');

p2sel1btn.addEventListener('click', () => {
    ghosts2.push('p2sel1');
})

p2sel2btn.addEventListener('click', () => {
    ghosts2.push('p2sel2');
})

p2sel3btn.addEventListener('click', () => {
    ghosts2.push('p2sel3');
})


// ----------------------------------------------

// CREATE PLAYERS
let player1turn;
const input1 = document.querySelector('.nameinput1');
const input2 = document.querySelector('.nameinput2');
let player1 = playerFactory(input1.value, ghosts1.slice(-1)[0]);
let player2 = playerFactory(input2.value, ghosts2.slice(-1)[0]);


// ----------------------------------------------

// READY BUTTONS
const readybtn1 = document.querySelector('.ready1');
const readybtn2 = document.querySelector('.ready2');

readybtn1.addEventListener('click', () => {
    player1.name = input1.value;
    player1.mark = ghosts1.slice(-1)[0];
})

readybtn2.addEventListener('click', () => {
    player2.name = input2.value;
    player2.mark = ghosts2.slice(-1)[0];
})


// ----------------------------------------------

// SQUARE GAMEPLAY

function play(e) {
    const cell = e.target;
    const currentClass = player1turn ? player2.mark : player1.mark;
    displayMark(cell, currentClass);
    if (declareWinner(currentClass)) {
        endGame(false)
    } else if (declareDraw()) {
        endGame(true)
    } else {
        changeTurn();
    }
}

function displayMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function changeTurn() {
    player1turn = !player1turn;
}

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]
const endingmessage = document.querySelector('[data-ending-message-text]');
const message = document.querySelector('.ending-message');

function declareWinner(currentClass) {
    return winning_combinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function declareDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(player1.mark) || cell.classList.contains(player2.mark)
    })
}


function endGame(draw) {
    if (draw) {
        endingmessage.innerText = 'Draw!'
    } else {
        endingmessage.innerText = `${player1turn ? player1.name : player2.name}  wins!`
    }
    message.classList.add('show');
}

const cellElements = document.querySelectorAll('[data-cell]');
cellElements.forEach(cell => {
    cell.addEventListener('click', play, {once: true})
});
