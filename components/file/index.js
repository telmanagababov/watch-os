import FileController from "./controller/FileController";

const FileComponent = {
    templateUrl: "templates/fileTemplate.tmpl",
    controller: FileController,
    bindings: {
        caption: "<",
        onRemove: "&"
    }
};

export default FileComponent;