describe('Mock $http', function () {
    var httpFactory, $httpBackend;
    beforeEach(module('Joy'));
    beforeEach(inject(function (_httpFactory_, _$httpBackend_) {
        httpFactory = _httpFactory_;
        $httpBackend = _$httpBackend_;
    }));
    it('creats a new person on the server', function () {
        $httpBackend.expectPOST('/person', {
            name: 'Ben'
        }).respond(200);

        var success;
        (new httpFactory('Ben')).create().then(function () {
            success = true;
        });
        $httpBackend.flush();
        expect(success).to.be.true;
    });
});