// OBJECT GAMEBOARD, that contains an array[]. Where X and O will gather.


// OBJECT displayController, in order to control the flow of the game


// FACTORY of PLAYERS:
const factoryPlayers = (name) => {
    const sayName = () => console.log(`I am ${name}`);
    return {sayName};
}

// write a function that will display the contents of the gameboard array to the webpage