const GAME_CONTAINER_SELECTOR = "#miniclip-game-embed";

class GameController {

    constructor() {
    }

    $onInit() {
        setTimeout(() => {
            this.loadGame();
            this.updateSize();
        }, 0);
    }

    loadGame() {
        window.build_miniclip_game();
    }

    updateSize() {
        let gameContainer = document.querySelector(GAME_CONTAINER_SELECTOR),
            scaleX = gameContainer.offsetWidth / this.data.width,
            scaleY = gameContainer.offsetHeight / this.data.height;
        gameContainer.style.transform = "scale(" + scaleX + "," + scaleY + ")";
    }
}

export default GameController;