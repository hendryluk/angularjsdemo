angular.module("presso", []).config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/hello/:msg', { templateUrl: "/Scripts/Templates/hello.html", controller: BeerController })
        .otherwise({redirectTo: "/hello/Waddup"});
})
    .directive("datepicker", function () {
    return {
        link: function($scope, element) {
            element.datepicker();
        }
    };
})
    .directive("alert", function() {
        return {
            restrict:"E",
            templateUrl: "/Scripts/Templates/alert.html",
            scope: {
                title: "@",
                text: "=",
                onOk: "&"
            }
        };
    });

function BeerController($scope, $http, $routeParams) {
    $scope.message = $routeParams.msg;

    $scope.partyDate = '1/1/2014';

    $scope.shout = function () {
        this.message = this.message.toUpperCase() + "!!";
    };

    $scope.beerPrice = function () {
        $http.get("/Home/BeerPrice").success(function (data) {
            $scope.message = "Beer price: " + data.MarketPrice;
        });
    }
}
