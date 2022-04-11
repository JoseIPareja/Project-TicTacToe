// FACTORY of PLAYERS:
const playerFactory = (name, mark) => {
    return {name, mark};
}


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

p1sel1btn.addEventListener('click', () => {
    ghosts2.push('p2sel1');
})

p1sel2btn.addEventListener('click', () => {
    ghosts2.push('p2sel2');
})

p1sel3btn.addEventListener('click', () => {
    ghosts2.push('p2sel3');
})


// READY BUTTONS ACTIONS
const readyBtn1 = document.querySelector('.ready1');
const readyBtn2 = document.querySelector('.ready2');

readyBtn1.addEventListener('click', () => {
    const input1 = document.querySelector('.nameinput1');
    const player1 = playerFactory(input1.value, ghosts1.slice(-1)[0]);
    console.log(player1.name);
    console.log(player1.mark);
})

readyBtn2.addEventListener('click', () => {
    const input2 = document.querySelector('.nameinput2');
    const player2 = playerFactory(input2.value, ghosts2.slice(-1)[0]);
    console.log(player2.name);
    console.log(player2.mark);
})

//function play(e) {
    //const cell = e.target;
    //const currentClass = 
//}

//const cellElements = document.querySelectorAll('[data-cell]');
//cellElements.forEach(cell => {
    //cell.addEventListener('click', play, {once: true})
//});
