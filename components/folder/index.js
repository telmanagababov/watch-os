import FolderController from "./controller/FolderController";

const FolderComponent = {
    templateUrl: "templates/folderTemplate.tmpl",
    controller: FolderController,
    bindings: {
        caption: "<",
        onRemove: "&"
    }
};

export default FolderComponent;