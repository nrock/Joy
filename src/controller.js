angular.module('Joy')
    .controller('PersonCtrl', ['$scope', 'Person', function ($scope, Person) {
        $scope.person = this.person = new Person('Joy');
    }]);