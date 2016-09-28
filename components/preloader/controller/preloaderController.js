function PreloaderController($scope, $interval, $timeout) {

    let ctrl = this,
        position = 0;

    ctrl.active = true;

    let progressInterval = setInterval(function moveProgress() {
        "use strict";
        let preloader = document.querySelector("#preloader"),
            progressBar = document.querySelector("#preloader-progress"),
            progressBarShadow = document.querySelector("#preloader-progress-shadow");
        position += 100;
        progressBarShadow.style.left = position + "px";
        if(position >= 600) {
            clearInterval(progressInterval);
            progressBar.classList.add("animate");
            setTimeout(function hidePreloader() {
                preloader.classList.add("hide"); 
                $timeout(function closePreloader() {
                    ctrl.active = false;
                }, 1000);
            }, 2000);
        }
    }, 600);
}

PreloaderController.$inject = ["$scope", "$interval", "$timeout"];