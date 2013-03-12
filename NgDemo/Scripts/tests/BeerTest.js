///<reference path="../angular-mocks.js"/>
///<reference path="../Apps/BeerController.js"/>

describe("BeerController", function () {
    var scope = {};

    it("should discount price", function() {
        BeerController(scope);

        scope.Discount();
        expect(scope.Price).toBe(99);
    });

    it("should fetch price from server", function() {
        inject(function(_$httpBackend_, $controller) {
            var $httpBackend = _$httpBackend_;

            $httpBackend.expectGET("/home/BeerPrice").respond({ MarketPrice: 50 });

            $controller(BeerController, { $scope: scope });
            scope.FetchPrice();
            
            $httpBackend.flush();
            expect(scope.Price).toBe(50);
        });
    });
})