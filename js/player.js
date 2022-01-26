class Player {

	constructor() {
		this.width = 100
		this.height = 75
		this.x = 30
		this.y = height - this.height
		this.gravity = 0.4
		this.velocity = 0;
	}

	jump() {
		this.velocity = - 10
	}

	draw() {
		this.velocity += this.gravity // 0.2
		this.y += this.velocity
		// if the player moves out of the screen at the bottom then we reposition him
		if (this.y >= height - this.height) {
			this.y = height - this.height
		}
		// console.log('this is the player drawing')
		image(game.playerImage, this.x, this.y, this.width, this.height)
	}
}