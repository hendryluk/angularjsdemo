function BeerController($scope, $http) {
    $scope.message = "hello world";

    $scope.shout = function() {
        this.message = this.message.toUpperCase() + "!!";
    };
}