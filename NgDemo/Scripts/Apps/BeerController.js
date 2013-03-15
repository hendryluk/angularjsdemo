function BeerController($scope, $http) {
    $scope.message = "hello world";

    $scope.shout = function() {
        this.message = this.message.toUpperCase() + "!!";
    };
    
    $scope.beerPrice = function() {
        $http.get("/Home/BeerPrice").success(function(data) {
            $scope.message = "Beer price: " + data.MarketPrice;
        });
    }
}