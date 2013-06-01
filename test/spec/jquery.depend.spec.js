/// <reference path="../lib/jquery/jquery-1.7.2.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine-html.js" />

describe('jquery.depend public static method.', function () {

    beforeEach(function () {
    });

    afterEach(function () {
    });

    describe('when there is one argument,', function () {
    
        beforeEach(function () {
        });

        afterEach(function () {
        });

        it('Get the return value of first condition, when the first condition is matched.', function () {
            expect($.depend({
                on: true,
                exe: function () {
                    return '0';
                }
            })).toBe('0');
        });

        it('Get the undefined return value, when the first condition is not matched.', function () {
            expect($.depend({
                on: false,
                exe: function () {
                    return '0';
                }
            })).toBeUndefined();
        });

        it('Get the default return value, when the first condition has not "on" property.', function () {
            expect($.depend({
                exe: function () {
                    return '0';
                }
            })).toBe('0');
        });

    });
    

    describe('when there is two argument,', function () {

        beforeEach(function () {
        });

        afterEach(function () {
        });

        it('Get the return value of first condition, when the first condition is matched.', function () {
            expect($.depend({
                on: true,
                exe: function () {
                    return '0';
                }
            }, {
                on: false,
                exe: function () {
                    return '1';
                }
            })).toBe('0');
        });

        it('Get the return value of second condition, when the second condition is matched. ', function () {
            expect($.depend({
                on: false,
                exe: function () {
                    return '0';
                }
            }, {
                on: true,
                exe: function () {
                    return '1';
                }
            })).toBe('1');
        });

        it('Get the undefined return value, when there is not matched condition.', function () {
            expect($.depend({
                on: false,
                exe: function () {
                    return '0';
                }
            }, {
                on: true,
                exe: function () {
                    return '1';
                }
            })).toBe('1');
        });

    });

});


