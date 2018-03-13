// Infos about the game
let numberPlayers = 1;
let gameType = "normal";
let numberRound = 1;
let currentRound = 1;

// DOM elements to listen to
const GRID = document.getElementById('grid');

do {
  GRID.addEventListener('click', function(event) {
    // Click on a card
    if (event.target.nodeName === 'ARTICLE') console.log('Event listener on grid');
  });
} while (currentRound < numberRound); // Continue until reach numberRound
