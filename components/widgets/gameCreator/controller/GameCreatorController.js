import { soundManager } from "./../../../../utils/SoundManager";
import localStorage from "./../../../../utils/LocalStorage";
import availableGames from "../enum/AvailableGames";

class GameCreatorController {

    constructor() {
        this.availableGames = availableGames.map(game => {
            return {type: game.type, name: game.name};
        });
        this.selectedGame = null;
    }

    $onInit() {
    }

    playClickSound() {
        soundManager.playClickSound();
    }

    addGame(gameType) {
        let game = availableGames.filter(item => item.type === gameType)[0];
        this.items.games.push(game);
        this.widgets.active = null;
        soundManager.playClickSound();
        localStorage.setItems(this.items);
    }
}

export default GameCreatorController;