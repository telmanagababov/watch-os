import FolderIconController from "./controller/FolderIconController";

const FolderIconComponent = {
    templateUrl: "templates/folderIconTemplate.tmpl",
    controller: FolderIconController,
    bindings: {
        caption: "<",
        widgets: "<",
        onRemove: "&"
    }
};

export default FolderIconComponent;