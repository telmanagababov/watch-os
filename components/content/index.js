import ContentController from "./controller/ContentController";

const ContentComponent = {
    templateUrl: "templates/contentTemplate.tmpl",
    controller: ContentController,
    bindings: {
        state: "<",
        items: "<"
    }
};

export default ContentComponent;