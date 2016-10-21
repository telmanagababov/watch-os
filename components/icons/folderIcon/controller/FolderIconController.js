import { soundManager } from "../../../../utils/SoundManager"
import widgetTypes from "../../../widgets/enum/WidgetTypes";

class FolderIconController {

    constructor() {
    }
    
    openGame() {
        this.widgets.active = widgetTypes.FOLDER;
        soundManager.playClickSound();
    }
}

export default FolderIconController;