const SOUND_TYPES = {
    CLICK: "CLICK"
};
const SOUND_RESOURCES = {
    [SOUND_TYPES.CLICK]: "assets/click-sound.wav"
};

class SoundManager {

    constructor() {
        this._sounds = {};
        this._load();
    }

    _load() {
        for(let soundType in SOUND_RESOURCES) {
            this._sounds[soundType] = new Audio(SOUND_RESOURCES[soundType]);
        }
    }

    play(soundType) {
        let sound = this._sounds[soundType];
        sound.play();
    }

    mute() {
        let sound = null;
        for(let soundType in SOUND_RESOURCES) {
            sound = this._sounds[soundType];
            sound.muted = true;
        }
    }

    unmute() {
        let sound = null;
        for(let soundType in SOUND_RESOURCES) {
            sound = this._sounds[soundType];
            sound.muted = false;
        }
    }

    playClickSound() {
        this.play(SOUND_TYPES.CLICK);
    }
}

export const soundTypes = SOUND_TYPES;
export const soundManager = new SoundManager();
