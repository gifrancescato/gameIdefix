class Background {
	draw() {
		console.log('this is the background')
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, width, height)
			image(img.src, img.x + width, 0, width, height)
			if (img.x <= -width) {
				img.x = 0
			}
		})
		
		textSize(20);
		textFont(scoreFont);
		textStyle(BOLD);
		fill(255,255,255)
		text(`Score: ${game.score}`, 30, 50);
		image(game.livesImage, 30, 50);
		text(`${game.lives}`, 70, 80);
	}
}