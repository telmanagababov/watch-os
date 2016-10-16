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
    }

    addFile() {
        this.files.push("new file");
    }

    addGame() {
        this.games.push("new game");
    }

    openBrowser() {

    }

    openYoutube() {

    }

    openSettings() {

    }
}

export default PanelController;