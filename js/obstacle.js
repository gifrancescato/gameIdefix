class Obstacle {


	constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 1.5
		this.width = 50
		this.height = 50
	}

	collision(playerInfo) {
		// here the coin detects a collision with the player
		// the middle of the obstacle
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2
		// the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		// console.log('collision', playerInfo)
		if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
			return false
		} else {
			// change the score
			game.score += 10
			console.log(game.score)
			return true
		}
	}

	draw() {
		this.x--
		image(this.image, this.x, this.y, this.width, this.height)
	}
} 