const UPDATE_TIMEOUT = 250,
    MAX_POSITION = 600,
    STEP_POSITION = 100,
    ANIMATE_DURATION = 500,
    FADE_DURATION = 1500;
const ANIMATE_CLASS = "animate",
    FADE_CLASS = "fade";
const PRELOADER_SELECTOR = "#preloader",
    PRELOADER_PROGRESS_SELECTOR = "#preloader-progress",
    PRELOADER_PROGRESS_SHADOW_SELECTOR = "#preloader-progress-shadow";

class PreloaderController {

    constructor($scope) {
        this.$scope = $scope;
        this.preloader = null;
        this.progressBar = null;
        this.animating = false;
    }

    $onInit() {
        this.preloader = document.querySelector(PRELOADER_SELECTOR);
        this.progressBar = document.querySelector(PRELOADER_PROGRESS_SELECTOR);
        this.start();
    }

    start() {
        this.animating = true;
        this.load()
            .then(this.animate.bind(this))
            .then(this.fade.bind(this))
            .then(this.stop.bind(this));
    }

    load() {
        let progressBarShadow = document.querySelector(PRELOADER_PROGRESS_SHADOW_SELECTOR);
        return new Promise(resolve => {
            let progressBarPosition = 0,
                progressInterval = setInterval(() => {
                    progressBarPosition += STEP_POSITION;
                    progressBarShadow.style.left = progressBarPosition + "px";
                    if (progressBarPosition >= MAX_POSITION) {
                        clearInterval(progressInterval);
                        resolve();
                    }
                }, UPDATE_TIMEOUT);
        });
    }

    animate() {
        return new Promise(resolve => {
            this.progressBar.classList.add(ANIMATE_CLASS);
            setTimeout(() => resolve(), ANIMATE_DURATION);
        });
    }

    fade() {
        return new Promise(resolve => {
            this.preloader.classList.add(FADE_CLASS);
            this.$scope.$apply(
                this.state.loading = false
            );
            setTimeout(() => resolve(), FADE_DURATION);
        });
    }

    stop() {
        this.$scope.$apply(
            this.animating = false
        );
    }
}

PreloaderController.$inject = ["$scope"];

export default PreloaderController;