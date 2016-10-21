import FileIconController from "./controller/FileIconController";

const FileIconComponent = {
    templateUrl: "templates/fileIconTemplate.tmpl",
    controller: FileIconController,
    bindings: {
        caption: "<",
        onRemove: "&"
    }
};

export default FileIconComponent;