const game = new Game();

let gameStart = false;
let paused = false;
let gameOver = false;


function preload() {
	game.preload()
	scoreFont = loadFont('assets/font/PressStart2P-Regular.ttf');
}

function setup() {
	createCanvas(840, 510)
	game.setup()
}

function draw() {
	game.draw()
}

function keyPressed() {
	// if we press space the player jumps
	if (gameStart === false && keyCode === 32) {
		gameStart = true;
	  }
	
	  if (keyCode === 32) {
		game.player.jump()
	}

	// at game over: use ENTER to reload page
	if (keyCode === 13) {
    if (game.gameOver) {
      document.location.reload();
    } else {
      // if not game over, use ENTER to pause and unpause game
      paused = !paused;
      if (paused) {
        noLoop();
      } else {
        loop();
      }
    }
  }
  
}