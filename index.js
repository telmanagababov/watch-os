import MainController from "./MainController";
import PreloaderComponent from "./components/preloader/index";
import ContentComponent from "./components/content/index";
import PanelComponent from "./components/panel/index";
import FolderComponent from "./components/folder/index";
import FileComponent from "./components/file/index";
import GameComponent from "./components/game/index";

angular.module("watchos", [])
    .controller("Main", MainController)
    .component("preloader", PreloaderComponent)
    .component("content", ContentComponent)
    .component("panel", PanelComponent)
    .component("folder", FolderComponent)
    .component("file", FileComponent)
    .component("game", GameComponent);