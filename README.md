# FEND Memory Game

This is a **matching game** where you have to find the matching cards (Vanilla JS).

## Get Started
### To Play

- Go to the [website](http://www.maeva-contact.com/matching-game/index.html)
- Press **START**
- Click on the cards to try to find the matching ones

### To Develop

- **Fork** this repository
- **Clone** it into your own machine
- You can find the _index.html_ file inside the folder _src_
- You can find the _style.css_ file inside the folder _src/css_
- You can find the _script.js_ file inside the folder _src/js_
- All the images are stored inside the folder _src/images_

### Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- [FontAwesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- Icons made by [Good Ware](https://www.flaticon.com/authors/good-ware) from [Flaticon](https://www.flaticon.com/)

## Game Rules
### Winning condition

You win the game when you have found the **8 pairs of matching cards**.

### Flipping cards

To flip the card and reveal its symbol, you should **click on it**. You can only have **2 active cards** at the same time.

### Matching cards

If the pair of cards you have revealed matched, the cards **stay face up** and you can click on 2 other cards to reveal their symbols.

If the pair of cards you have revealed doesn't match, the cards **flip once again to be face down** and you can make another attempt.

### Moves

Every time you **reveal 2 cards**, you make a move. Thoses moves are tracked and you can watch them at any time (next to the hash icon).

### Stars / Lifes

You start with **3 stars** (lives, represented by the heart's icon). If you make a perfect game, you keep those 3 stars, but if you do more than 8 moves but less than 15, you will end with **2 stars**. If you do more than 15 moves, you will end with **1 star**.

### Timer

When you **start the game** (press the button _START_) the timer starts and you can watch the time you spend to finish the game. The timer ends when you have **found the 8 pairs of matching cards**.

### Reset

You can **reset the game** at any time pressing the button _RESET_. It will restart the full game (stars, moves, timer and re-organized the grid of cards).

### Winning screen

Once you have found the 8 pairs of matching cards, the **winning screen appears** with a summary of your game (moves, stars, time), you can play again by pressing _RESTART GAME_.

## Author

Original game made by **Maeva NGUYEN ANH PHUONG (PELLET)** for a **Udacity project** (FEND Nanodegree).
