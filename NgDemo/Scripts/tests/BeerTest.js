///<reference path="../Apps/BeerController.js"/>
describe("Beer controller", function() {
    it("Can shout", function() {
        var $scope = {};
        BeerController($scope);

        $scope.message = "sheep";
        $scope.shout();
        expect($scope.message).toBe("SHEEP!!");
    });
})