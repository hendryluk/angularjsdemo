///<reference path="../angular-mocks.js"/>
///<reference path="../Apps/BeerController.js"/>
describe("Beer controller", function () {
    it("Can shout", function() {
        var $scope = {};
        BeerController($scope, null, {});

        $scope.message = "sheep";
        $scope.shout();
        expect($scope.message).toBe("SHEEP!!");
    });
    

    it("Can get beer price", function() {
        inject(function($http, _$httpBackend_) {
            _$httpBackend_.expectGET("/Home/BeerPrice").respond({ MarketPrice: 50 });

            var $scope = {};
            BeerController($scope, $http, {});

            $scope.beerPrice();
            
            _$httpBackend_.flush();
            expect($scope.message).toBe("Beer price: 50");
        });
    })
})