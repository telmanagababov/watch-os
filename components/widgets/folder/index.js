import FolderController from "./controller/FolderController";

const BrowserComponent = {
    templateUrl: "templates/folderTemplate.tmpl",
    controller: FolderController,
    bindings: {
        data: "<"
    }
};

export default BrowserComponent;