import GameController from "./controller/GameController";

const GameComponent = {
    templateUrl: "templates/gameTemplate.tmpl",
    controller: GameController,
    bindings: {
        caption: "<",
        onRemove: "&"
    }
};

export default GameComponent;