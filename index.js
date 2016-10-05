import PreloaderComponent from "./components/preloader/index";
import ContentComponent from "./components/content/index";
import PanelComponent from "./components/panel/index";

angular.module("watchos", [])
    .controller("Main", function() {
        this.version = "1.0";
        this.loading = true;
    })
    .component("preloader", PreloaderComponent)
    .component("content", ContentComponent)
    .component("panel", PanelComponent);