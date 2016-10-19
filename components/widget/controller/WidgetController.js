import widgetTypes from "../enum/WidgetTypes";

class WidgetController {

    constructor() {
        this.widgetTypes = widgetTypes;
    }

    $onInit() {
    }

    close() {
        this.widgets.active = null;
    }
}

export default WidgetController;