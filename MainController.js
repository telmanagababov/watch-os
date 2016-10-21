import { soundManager } from "./utils/SoundManager";
import localStorage from "./utils/LocalStorage";

class MainController {

    constructor($scope) {
        this.$scope = $scope;
        this._initValues();
        this._initState();
        this._addListeners();
    }

    _initValues() {
        this.info = {
            version: "1.0"
        };
        this.state = {
            loading: true,
            sounds: localStorage.getSoundState()
        };
        this.widgets = {
            active: null,
            data: null
        };
        this.items = localStorage.getItems();
    }

    _initState() {
        if(this.state.sounds === false) {
            soundManager.mute();
        }
    }

    _addListeners() {
    }
}

MainController.$inject = ["$scope"];

export default MainController;