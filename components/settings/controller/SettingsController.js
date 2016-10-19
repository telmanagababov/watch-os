import { soundManager } from "./../../../utils/SoundManager";
import localStorage from "./../../../utils/LocalStorage";

class SettingsController {

    constructor() {
    }

    $onInit() {
    }

    toggleSoundsState() {
        if(this.state.sounds === true) {
            soundManager.unmute();
            soundManager.playClickSound();
            localStorage.setSoundState(true);
        } else {
            soundManager.playClickSound();
            soundManager.mute();
            localStorage.setSoundState(false);
        }
    }
}

export default SettingsController;