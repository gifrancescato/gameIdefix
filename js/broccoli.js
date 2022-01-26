class Broccoli {


	constructor(image) {
		this.image = image
		this.x = width
		this.y = 450
		this.width = 50
		this.height = 50
	}

	collision(playerInfo) {
		// here the coin detects a collision with the player
		// the middle of the obstacle
		let broccoliX = this.x + this.width / 2
		let broccoliY = this.y + this.height / 2
		// the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		// console.log('collision', playerInfo)
		if (dist(broccoliX, broccoliY, playerX, playerY) > 25) {
			return false
		} else {
			// change the score
			game.lives -= 1
			console.log(game.score)
			return true
		}
	}

	draw() {
		this.x--
		image(this.image, this.x, this.y, this.width, this.height)
	}
} 