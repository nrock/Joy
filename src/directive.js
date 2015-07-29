angular.module('Joy')
    .directive('hello', [function () {
        return {
            restrict: 'AE',
            scope: {
                person: '='
            },
            template: '<span>{{person.greet()}} Welcome to Joy coding!</span>',
            link: function (scope, iElement, attrs, ctrl) {
                var original = iElement.css('color');
                iElement.on('mouseenter', function () {
                    iElement.css('color', scope.person.color);
                });

                iElement.on('mouseleave', function () {
                    iElement.css('color', original);
                });
            }
        };
    }]);