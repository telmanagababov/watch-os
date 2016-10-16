import FolderController from "./controller/FolderController";

const FolderComponent = {
    templateUrl: "templates/folderTemplate.tmpl",
    controller: FolderController,
    bindings: {
        caption: "<"
    }
};

export default FolderComponent;