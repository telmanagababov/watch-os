import { soundManager } from "./../../../utils/SoundManager";
import localStorage from "./../../../utils/LocalStorage";
import widgetTypes from "./../../widget/enum/WidgetTypes";
import defaultIconCaptions from "../enum/DefaultIconCaptions";

class PanelController {

    constructor() {
    }

    $onInit() {
        this.folders = this.items.folders;
        this.files = this.items.files;
        this.games = this.items.games;
    }

    addFolder() {
        this.folders.push(defaultIconCaptions.FOLDER);
        soundManager.playClickSound();
        localStorage.setItems(this.items);
    }

    addFile() {
        this.files.push(defaultIconCaptions.FILE);
        soundManager.playClickSound();
        localStorage.setItems(this.items);
    }

    addGame() {
        this.games.push(defaultIconCaptions.GAME);
        soundManager.playClickSound();
        localStorage.setItems(this.items);
    }

    openBrowser() {
        if(this.widgets.active === widgetTypes.BROWSER) {
            this.widgets.active = null;
        } else {
            this.widgets.active = widgetTypes.BROWSER;
        }
        soundManager.playClickSound();
    }

    openYoutube() {
        if(this.widgets.active === widgetTypes.YOUTUBE) {
            this.widgets.active = null;
        } else {
            this.widgets.active = widgetTypes.YOUTUBE;
        }
        soundManager.playClickSound();
    }

    openSettings() {
        if(this.widgets.active === widgetTypes.SETTINGS) {
            this.widgets.active = null;
        } else {
            this.widgets.active = widgetTypes.SETTINGS;
        }
        soundManager.playClickSound();
    }
}

export default PanelController;