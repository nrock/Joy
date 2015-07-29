angular.module('Joy')
    .factory('httpFactory', ['$http', function ($http) {
        return function Person(name) {
            this.name = name;
            this.create = function () {
                return $http.post('/person', this);
            };
        };
    }]);
