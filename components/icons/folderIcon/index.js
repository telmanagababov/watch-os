import FolderIconController from "./controller/FolderIconController";

const FolderIconComponent = {
    templateUrl: "templates/folderIconTemplate.tmpl",
    controller: FolderIconController,
    bindings: {
        caption: "<",
        onRemove: "&"
    }
};

export default FolderIconComponent;