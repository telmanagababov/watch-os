const APP_PREFIX = "watch.os",
    ITEMS_KEY = APP_PREFIX + "." + "items";

class LocalStorage {

    constructor() {
        this._init();
    }

    _init() {
        let items = this.getItems();
        if(items === null || items === undefined) {
            this.setItems({ folders: [], files: [], games: [] });
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
}

export default new LocalStorage();