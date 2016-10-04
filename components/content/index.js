import ContentController from "./controller/ContentController";

const ContentComponent = {
    templateUrl: "templates/contentTemplate.tmpl",
    controller: ContentController,
    bindings: {
        version: "<"
    }
};

export default ContentComponent;