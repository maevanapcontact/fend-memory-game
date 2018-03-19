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
