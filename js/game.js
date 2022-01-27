class Game {
	constructor() {
		this.backgroundImages
		this.score = 0;
		this.lives = 3;
	}

	setup() {
		this.player = new Player()
		this.background = new Background()
		this.obstacles = []
		this.broccolis = []
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/1BG.png'), x: 0, speed: 0.1 },
			{ src: loadImage('assets/background/2Mountain.png'), x: 0, speed: 0.2 },
			{ src: loadImage('assets/background/3MountainCloser.png'), x: 0, speed: 0.3 },
			{ src: loadImage('assets/background/4Factories.png'), x: 0, speed: 1.5 },
			{ src: loadImage('assets/background/5Buildings.png'), x: 0, speed: 1.8 },
            { src: loadImage('assets/background/6BlueBuildings.png'), x: 0, speed: 2.1 },
            { src: loadImage('assets/background/7FireDept.png'), x: 0, speed: 2.3 },
            { src: loadImage('assets/background/8Player.png'), x: 0, speed: 2.5 },
		]
		this.playerImage = loadImage('assets/player/dog.png');
		this.hamImage = loadImage('assets/flyingObj/ham.png');
		this.livesImage = loadImage('assets/player/heart.png');
		this.broccoliImage = loadImage('assets/flyingObj/broccoli.png');

	}

	draw() {
		clear()
		this.background.draw()
		this.player.draw()
		// we want to do sth every x frames -> frameCount (set by P5)
		

		// start screen
		if (gameStart === false) {
			push();
			textSize(30);
			textAlign(CENTER);
			text("Collect the treat!\n\nPress SPACE to start", 420, 210);
			pop();
		}
		
		

		if (gameStart === true && frameCount % 120 === 0) {
			// console.log(frameCount)
			// we add coins to the obstacles array
			this.obstacles.push(new Obstacle(this.hamImage))
			console.log(this.obstacles)
		}

		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

		this.obstacles = this.obstacles.filter(obstacle => {
			console.log(this)
			// also id the coin leaves the screen we remove it from the array
			if (obstacle.collision(this.player) || obstacle.x < 0) {
				return false
			} else {
				return true
			}
		})

		if (gameStart === true && frameCount % 280 === 0) {
			// console.log(frameCount)
			// we add coins to the obstacles array
			this.broccolis.push(new Broccoli(this.broccoliImage))
			console.log(this.broccolis)
		}

		this.broccolis.forEach(function (broccoli) {
			broccoli.draw()
		})

		this.broccolis = this.broccolis.filter(broccoli => {
			console.log(this)
			// also id the broccoli leaves the screen we remove it from the array
			if (broccoli.collision(this.player) || broccoli.x < 0) {
				return false
			} else {
				return true
			}
		})
		
		if (this.lives === 0) {
			textSize(60);
			textAlign(CENTER);
			text(`GAME OVER`, 420, 200);
	  
			textSize(30);
			text("Press ENTER to restart", 420, 260);
			this.gameOver = true;
			noLoop();
		  }

	}
}