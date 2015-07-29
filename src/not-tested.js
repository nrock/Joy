angular.module('Joy')
    .directive('world', [function () {
        return {
            restrict: 'A',
            link: function (scope, iElement, iAttrs) {
                scope.value = 'Haha';
            }
        };
    }]);
