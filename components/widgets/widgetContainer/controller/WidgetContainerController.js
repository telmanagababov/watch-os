import widgetTypes from "../../enum/WidgetTypes";

class WidgetContainerController {

    constructor() {
        this.widgetTypes = widgetTypes;
    }

    $onInit() {
    }

    close() {
        this.widgets.active = null;
    }
}

export default WidgetContainerController;