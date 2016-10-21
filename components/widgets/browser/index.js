import BrowserController from "./controller/BrowserController";

const BrowserComponent = {
    templateUrl: "templates/browserTemplate.tmpl",
    controller: BrowserController,
    bindings: {
        data: "<"
    }
};

export default BrowserComponent;