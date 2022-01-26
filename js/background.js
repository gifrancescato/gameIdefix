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
		text(`Score: ${game.score}`, 10, 50);
		image(game.livesImage, 10, 50);
		text(`${game.lives}`, 50, 80);
	}
}