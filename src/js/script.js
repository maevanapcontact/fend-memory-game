/* Function which randomly define the cards
 * get randomly the values of the gridIDs array
 * use those values as IDs for the cards elements
*/
window.onload = function() {
  let gridIDs = ['1a', '1b', '2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b', '7a', '7b', '8a', '8b'];
  let min = 0, max = 15;
  for (i = 0; i < 16; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementsByTagName('article')[i].id = gridIDs[randomNumber];
    gridIDs.splice(randomNumber, 1);
    max--;
  }
};

/* Click on a card
 * flip the card if face down
 */
const GRID = document.getElementById('grid');

GRID.addEventListener('click', function(event) {
  if (event.target.className === 'card-back') {
    let cardBack = event.target;
    let cardFront = event.target.nextSibling.nextSibling;

    cardBack.className = 'card-back card-back-flip';
    cardFront.className = 'card-front card-front-flip';
  }
});
