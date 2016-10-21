import YoutubeController from "./controller/YoutubeController";

const YoutubeComponent = {
    templateUrl: "templates/youtubeTemplate.tmpl",
    controller: YoutubeController,
    bindings: {
        data: "<"
    }
};

export default YoutubeComponent;