const APP_PREFIX = "watch.os",
    ITEMS_KEY = APP_PREFIX + "." + "items",
    SOUND_STATE_KEY = APP_PREFIX + "." + "soundState";

class LocalStorage {

    constructor() {
        this._init();
    }

    _init() {
        let items = this.getItems(),
            soundState = this.getSoundState();
        if(items === null || items === undefined) {
            this.setItems({ folders: [], files: [], games: [] });
        }
        if(soundState === null || soundState === undefined) {
            this.setSoundState(true);
        }
    }

    setItems(items) {
        let data = JSON.stringify(items);
        localStorage.setItem(ITEMS_KEY, data);
    }

    getItems() {
        let data = localStorage.getItem(ITEMS_KEY);
        return JSON.parse(data);
    }

    setSoundState(value) {
        let data = JSON.stringify(value);
        localStorage.setItem(SOUND_STATE_KEY, data);
    }

    getSoundState() {
        let data = localStorage.getItem(SOUND_STATE_KEY);
        return JSON.parse(data);
    }
}

export default new LocalStorage();