import FileController from "./controller/FileController";

const FileComponent = {
    templateUrl: "templates/fileTemplate.tmpl",
    controller: FileController,
    bindings: {
        caption: "<"
    }
};

export default FileComponent;