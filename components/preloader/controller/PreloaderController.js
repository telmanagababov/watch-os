const UPDATE_TIMEOUT = 400,
    MAX_POSITION = 600,
    STEP_POSITION = 100,
    ANIMATE_DURATION = 1000,
    FADE_DURATION = 500;

class PreloaderController {

    constructor($scope, $interval, $timeout) {
        this.active = true;
        this.start($timeout);
    }

    start($timeout) {
        let position = 0,
            progressInterval = 0;
        progressInterval = setInterval(() => {
            let preloader = document.querySelector("#preloader"),
                progressBar = document.querySelector("#preloader-progress"),
                progressBarShadow = document.querySelector("#preloader-progress-shadow");
            position += STEP_POSITION;
            progressBarShadow.style.left = position + "px";
            if(position >= MAX_POSITION) {
                clearInterval(progressInterval);
                progressBar.classList.add("animate");
                setTimeout(() => {
                    preloader.classList.add("hide");
                    $timeout(() => {
                        this.active = false;
                    }, FADE_DURATION);
                }, ANIMATE_DURATION);
            }
        }, UPDATE_TIMEOUT);
    }
}

PreloaderController.$inject = ["$scope", "$interval", "$timeout"];

export default PreloaderController;