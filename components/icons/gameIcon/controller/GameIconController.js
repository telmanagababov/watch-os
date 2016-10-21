import widgetTypes from "../../../widgets/enum/WidgetTypes";

class GameIconController {

    constructor() {
    }

    openGame() {
        this.widgets.data = this.data;
        this.widgets.active = widgetTypes.GAME;
    }
}

export default GameIconController;