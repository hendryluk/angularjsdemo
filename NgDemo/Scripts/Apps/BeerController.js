angular.module("presso", []).config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/hello/:msg', { templateUrl: "/Scripts/Templates/hello.html", controller: BeerController })
        .otherwise({redirectTo: "/hello/Waddup"});
});

function BeerController($scope, $http, $routeParams) {
    $scope.message = $routeParams.msg;

    $scope.shout = function () {
        this.message = this.message.toUpperCase() + "!!";
    };

    $scope.beerPrice = function () {
        $http.get("/Home/BeerPrice").success(function (data) {
            $scope.message = "Beer price: " + data.MarketPrice;
        });
    }
}
