import ContentController from "./controller/ContentController";

const ContentComponent = {
    templateUrl: "templates/contentTemplate.tmpl",
    controller: ContentController,
    bindings: {
        loading: "<",
        items: "<"
    }
};

export default ContentComponent;