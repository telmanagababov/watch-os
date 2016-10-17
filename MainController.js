import localStorage from "./utils/LocalStorage";

class MainController {

    constructor($scope) {
        this.$scope = $scope;
        this._init();
        this._addListeners();
    }

    _init() {
        this.info = {
            version: "1.0"
        };
        this.state = {
            loading: true
        };
        this.items = localStorage.getItems();
    }

    _addListeners() {
    }
}

MainController.$inject = ["$scope"];

export default MainController;