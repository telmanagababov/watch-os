import PanelController from "./controller/PanelController";

const PanelComponent = {
    templateUrl: "templates/panelTemplate.tmpl",
    controller: PanelController,
    bindings: {
        state: "<",
        items: "<",
        widgets: "<"
    }
};

export default PanelComponent;