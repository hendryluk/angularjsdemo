angular.module('beerDemo', []).config(function($routeProvider) {
    $routeProvider.when("/buy", { templateUrl: "Scripts/Templates/BuyBeer.html", controller: BeerController })
        .when("/cart", { templateUrl: "Scripts/Templates/Cart.html", controller: CartController })
        .otherwise({ redirectTo: "/buy" });
});

var shoppingCart = [];

function BeerController($scope, $http) {
    $scope.Price = 100;
    $scope.GST = 10;
    $scope.NettPrice = function () { return this.Price * (1 - this.GST / 100); };
    
    $scope.Discount = function () {
        this.Price--;
    };
    $scope.FetchPrice = function() {
        $http.get("/home/BeerPrice").success(function (data) {
            console.log("Lalala");
            $scope.Price = data.MarketPrice;
        });
    };

    $scope.AddToCart = function() {
        shoppingCart.push({ Price: this.Price, Nett: this.NettPrice() });
    };
}


function CartController($scope) {
    $scope.Items = shoppingCart;
}