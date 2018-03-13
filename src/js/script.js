// Infos about the game
let numberPlayers = 1;
let gameType = "normal";
let numberRound = 1;
let currentRound = 1;

// DOM elements to listen to
const GRID = document.getElementById('grid');

// Get values from starting popup
const INPUT_PLAYER = document.querySelector('input[value="one-player"]');
const INPUT_GAME = document.querySelector('input[value="normal-game"]');

const FORM_START = document.getElementById('form-start');
FORM_START.addEventListener('submit', function(event) {
  event.preventDefault();
  // Game with one player
  if (INPUT_PLAYER.checked === true) numberPlayers = 1;
  // Game with 2 players
  else numberPlayers = 2;
  // Normal game
  if (INPUT_GAME.checked === true) gameType = "normal";
  // Round game
  else gameType = "round";
  // Get the number of rounds
  numberRound = document.querySelector('input[type="range"]').value;
});

do {
  GRID.addEventListener('click', function(event) {
    // Click on a card
    if (event.target.nodeName === 'ARTICLE') console.log('Event listener on grid');
  });
} while (currentRound < numberRound); // Continue until reach numberRound
