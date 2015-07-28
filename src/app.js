var app = angular.module('Joy', []);

app.factory('Person', [function () {
    return function Persion(name) {
        this.name = name;
    };
}]);
