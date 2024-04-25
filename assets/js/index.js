/**
 * Main module:
 * This is the main js file.
 * Contains the main block to be called when the site loads
 */

// Imports - Add all imported functions and classes underneather this line.
import { SETTINGS, GAME_CONTAINER, HERO_CONTAINER } from "./game.js";

// Constants
const START_BTN = document.getElementById('start-game-btn');
const INSTRUCTIONS_BTN = document.getElementById('instructions-btn');
const INSTRUCTIONS_FORM = document.getElementById('instructions-form');
const INSTRUCTIONS_CLOSE_BTN = document.getElementById('instructions-close-btn');

// *** CODE IN THIS BLOCK WILL ONLY RUN IF THE CONTAINER DISPLAY IS NOT NONE ***
if (HERO_CONTAINER.style.display != 'none') {

  // Event listeners
  START_BTN.addEventListener('click', () => {
    startGame();
  });

  INSTRUCTIONS_BTN.addEventListener('click', () => {
    INSTRUCTIONS_FORM.style.display = 'block';
  });

  INSTRUCTIONS_CLOSE_BTN.addEventListener('click', () => {
    INSTRUCTIONS_FORM.style.display = 'none';
  });
}

/**Function to log all game settings and switch to the game container */
function startGame() {

  // Switch container
  HERO_CONTAINER.style.display = 'none';
  GAME_CONTAINER.style.display = 'flex';

  // game loop
  requestAnimationFrame(gameLoop);
}