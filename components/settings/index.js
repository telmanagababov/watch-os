import SettingsController from "./controller/SettingsController";

const SettingsComponent = {
    templateUrl: "templates/settingsTemplate.tmpl",
    controller: SettingsController,
    bindings: {
        state: "<"
    }
};

export default SettingsComponent;