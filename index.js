import MainController from "./MainController";
import EventBusService from "./service/EventBusService";

import PreloaderComponent from "./components/preloader/index";
import ContentComponent from "./components/content/index";
import PanelComponent from "./components/panel/index";

import FolderIconComponent from "./components/icons/folderIcon/index";
import FileIconComponent from "./components/icons/fileIcon/index";
import GameIconComponent from "./components/icons/gameIcon/index";

import WidgetContainerComponent from "./components/widgets/widgetContainer/index";
import SettingsPanelComponent from "./components/widgets/settingsPanel/index";
import GameCreatorComponent from "./components/widgets/gameCreator/index";
import GameComponent from "./components/widgets/game/index";
import BrowserComponent from "./components/widgets/browser/index";
import YoutubeComponent from "./components/widgets/youtube/index";

angular.module("watchos", [])
    .controller("Main", MainController)
    .service("eventBusSvc", EventBusService)
    .component("preloader", PreloaderComponent)
    .component("content", ContentComponent)
    .component("panel", PanelComponent)
    .component("folderIcon", FolderIconComponent)
    .component("fileIcon", FileIconComponent)
    .component("gameIcon", GameIconComponent)
    .component("widgetContainer", WidgetContainerComponent)
    .component("settingsPanel", SettingsPanelComponent)
    .component("gameCreator", GameCreatorComponent)
    .component("game", GameComponent)
    .component("browser", BrowserComponent)
    .component("youtube", YoutubeComponent);