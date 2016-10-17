import PreloadController from "./controller/PreloaderController.js";

const PreloaderComponent = {
    templateUrl: "templates/preloaderTemplate.tmpl",
    controller: PreloadController,
    bindings: {
        info: "<",
        state: "<"
    }
};

export default PreloaderComponent;