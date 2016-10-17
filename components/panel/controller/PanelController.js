import localStorage from "./../../../utils/LocalStorage";

class PanelController {

    constructor() {
    }

    $onInit() {
        this.folders = this.items.folders;
        this.files = this.items.files;
        this.games = this.items.games;
    }

    addFolder() {
        this.folders.push("new folder");
        localStorage.setItems(this.items);
    }

    addFile() {
        this.files.push("new file");
        localStorage.setItems(this.items);
    }

    addGame() {
        this.games.push("new game");
        localStorage.setItems(this.items);
    }

    openBrowser() {

    }

    openYoutube() {

    }

    openSettings() {

    }
}

export default PanelController;