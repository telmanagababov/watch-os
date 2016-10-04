import PreloadController from "./controller/PreloaderController.js";

const PreloaderComponent = {
    templateUrl: "templates/preloaderTemplate.tmpl",
    controller: PreloadController,
    bindings: {
        version: "<"
    }
};

export default PreloaderComponent;