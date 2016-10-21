import WidgetContainerController from "./controller/WidgetContainerController";

const WidgetContainerComponent = {
    templateUrl: "templates/widgetContainerTemplate.tmpl",
    controller: WidgetContainerController,
    bindings: {
        state: "<",
        items: "<",
        widgets: "<"
    }
};

export default WidgetContainerComponent;