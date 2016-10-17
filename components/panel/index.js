import PanelController from "./controller/PanelController";

const PanelComponent = {
    templateUrl: "templates/panelTemplate.tmpl",
    controller: PanelController,
    bindings: {
        state: "<",
        items: "<"
    }
};

export default PanelComponent;