import GameCreatorController from "./controller/GameCreatorController";

const GameCreatorComponent = {
    templateUrl: "templates/gameCreatorTemplate.tmpl",
    controller: GameCreatorController,
    bindings: {
        items: "<",
        widgets: "<"
    }
};

export default GameCreatorComponent;