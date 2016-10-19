import WidgetController from "./controller/WidgetController";

const WidgetComponent = {
    templateUrl: "templates/widgetTemplate.tmpl",
    controller: WidgetController,
    bindings: {
        state: "<",
        widgets: "<"
    }
};

export default WidgetComponent;