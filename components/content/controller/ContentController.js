import { soundManager } from "./../../../utils/SoundManager";
import localStorage from "./../../../utils/LocalStorage";

class ContentController {

    constructor() {
    }

    $onInit() {
        this.folders = this.items.folders;
        this.files = this.items.files;
        this.games = this.items.games;
    }

    removeFolder(index) {
        this.folders.splice(index, 1);
        localStorage.setItems(this.items);
        soundManager.playClickSound();
    }

    removeFile(index) {
        this.files.splice(index, 1);
        localStorage.setItems(this.items);
        soundManager.playClickSound();
    }

    removeGame(index) {
        this.games.splice(index, 1);
        localStorage.setItems(this.items);
        soundManager.playClickSound();
    }
}

export default ContentController;