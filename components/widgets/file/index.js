import FileController from "./controller/FileController";

const FileComponent = {
    templateUrl: "templates/fileTemplate.tmpl",
    controller: FileController,
    bindings: {
        data: "<"
    }
};

export default FileComponent;