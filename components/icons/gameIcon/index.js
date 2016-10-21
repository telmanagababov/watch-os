import GameIconController from "./controller/GameIconController";

const GameIconComponent = {
    templateUrl: "templates/gameIconTemplate.tmpl",
    controller: GameIconController,
    bindings: {
        data: "<",
        widgets: "<",
        onRemove: "&"
    }
};

export default GameIconComponent;