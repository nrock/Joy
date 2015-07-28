var app = angular.module('Joy');

app.factory('PersonUK', ['visitor', function (visitor) {
    return function PersonUK(name) {
        this.name = name;
        this.greet = function () {
            if (visitor.country === 'UK') {
                return 'Good day to you, ' + this.name + '.';
            } else {
                return 'Hey ' + this.name + '!';
            }
        };
    };
}]);
