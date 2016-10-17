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
    }

    removeFile(index) {
        this.files.splice(index, 1);
        localStorage.setItems(this.items);
    }

    removeGame(index) {
        this.games.splice(index, 1);
        localStorage.setItems(this.items);
    }
}

export default ContentController;