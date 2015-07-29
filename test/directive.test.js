describe('Test directives', function () {
    var element, scope;
    beforeEach(module('Joy'));
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile('<div hello person="person"></div>')(scope);
    }));

    it("greets from directive", function () {
        scope.person = {
            greet: function () {
                return 'Hello!';
            },
            color: 'blue'
        };
        scope.$digest();
        expect(element.find('span').text()).to.equal('Hello! Welcome to Joy coding!');

        element.triggerHandler('mouseenter');
        expect(element.css('color')).to.equal('blue');

        element.triggerHandler('mouseleave');
        expect(element.css('color')).to.be.empty;
    });
});
