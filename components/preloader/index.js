angular.module("watchos").component("preloader", {
    templateUrl: "./components/preloader/template/preloaderTemplate.html",
    controller: PreloaderController,
    bindings: {
        version: "<"
    }
});