var app = angular.module('Joy', []);

app.factory('Person', [function () {
    return function Person(name) {
        this.name = name;
    };
}]);
