describe('Person', function () {
    var PersonUK, visitor;
    beforeEach(module('Joy'));
    beforeEach(module(function ($provide) {
        visitor = {};
        $provide.value('visitor', visitor);
    }));
    beforeEach(inject(function (_PersonUK_) {
        PersonUK = _PersonUK_;
    }));

    describe('#greet', function () {
        it('greets UK visitors formally', function () {
            visitor.country = 'UK';
            expect((new PersonUK('Nigel')).greet()).to.equal('Good day to you, Nigel.');
        });

        it('greets others visitors informally', function () {
            visitor.country = 'US';
            expect((new PersonUK('Ben')).greet()).to.equal('Hey Ben!');
        });
    });

});
