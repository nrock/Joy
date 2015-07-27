angular.module('Joy', ['ui.codemirror', 'sui'])
    .run(function ($rootScope) {
        $rootScope.codeMirrorOptions = {
            lineWrapping: true,
            styleActiveLine: true,
            lineNumbers: true,
            readOnly: 'nocursor',
            mode: 'javascript',
            theme: 'mdn-like',
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        };
    })
    .filter('beautify', function () {
        return function (code, language) {
            code = code.trim();
            switch (language) {
                case 'javascript':
                    return js_beautify(code);
                case 'css':
                    return css_beautify(code);
                case 'html':
                    return html_beautify(code);
                default:
                    return js_beautify(code);
            }
        };
    })
    .directive('backToHome', [function () {
        return {
            restrict: 'A',
            link: function (scope, iElement, iAttrs) {
                scope.back = function () {
                    window.location.href = "/";
                };
            }
        };
    }])
    .directive('codeOnCurrentPage', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            scope: {
                language: "@",
                codeMirrorOptions: "@"
            },
            template: '<ui-codemirror ui-codemirror-mode="{{language}}" ui-codemirror-opts="{{codeMirrorOptions}}" ng-model="code"></ui-codemirror>',
            link: function (scope, iElement, iAttrs) {
                angular.element('.menu .item').tab();
                switch (scope.language) {
                    case 'javascript':
                        var $codeNodes = angular.element('script');
                        scope.code = js_beautify(angular.element($codeNodes[$codeNodes.length - 1]).html().trim());
                        break;
                    case 'css':
                        var $codeNodes = angular.element('style');
                        scope.code = css_beautify(angular.element($codeNodes[$codeNodes.length - 1]).html().trim());
                        break;
                    case 'xml':
                        scope.code = htmlCode || '';
                        break;
                }
            }
        };
    }]);

window.addEventListener('DOMContentLoaded', function () {
    var $playGround = angular.element('#play-ground');
    if ($playGround.length > 0) {
        window.htmlCode = html_beautify($playGround.clone().wrap('<p/>').parent().html().trim());
    }
    angular.bootstrap(document, ['Joy']);
});
