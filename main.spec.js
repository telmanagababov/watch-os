describe("Main", function() {
    let $controller;

    beforeEach(module("watchos"));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe("app version", function() {
        it("should be set to 1.00", function() {
            let $scope = {};
            $controller("Main", { $scope: $scope });
            expect($scope.version).toEqual("1.00");
        });
    });
});