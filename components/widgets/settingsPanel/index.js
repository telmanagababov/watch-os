import SettingsPanelController from "./controller/SettingsPanelController";

const SettingsPanelComponent = {
    templateUrl: "templates/settingsPanelTemplate.tmpl",
    controller: SettingsPanelController,
    bindings: {
        state: "<"
    }
};

export default SettingsPanelComponent;