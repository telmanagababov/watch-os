import { soundManager } from "../../../../utils/SoundManager"
import widgetTypes from "../../../widgets/enum/WidgetTypes";

class FileIconController {

    constructor() {
    }

    openGame() {
        this.widgets.active = widgetTypes.FILE;
        soundManager.playClickSound();
    }
}

export default FileIconController;