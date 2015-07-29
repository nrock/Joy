describe('Test controller', function () {
    var Person, scope, controller;
    beforeEach(module('Joy'));
    beforeEach(inject(function (_Person_, $controller, $rootScope) {
        Person = _Person_;
        scope = $rootScope.$new();
        controller = $controller('PersonCtrl', {
            $scope: scope
        });
    }));

    it('injects the controller', function () {
        expect(controller.person).to.be.an.instanceOf(Person);
    });
});
