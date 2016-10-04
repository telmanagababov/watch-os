import PreloaderComponent from "./components/preloader/index";
import ContentComponent from "./components/content/index";

angular.module("watchos", [])
    .controller("Main", function() {
        this.version = "1.0";
    })
    .component("preloader", PreloaderComponent)
    .component("content", ContentComponent);