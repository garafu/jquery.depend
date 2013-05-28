/// <reference path="../lib/jquery/jquery-1.7.2.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine-html.js" />

describe('jquery.browser.version', function () {
    var userAgent;

    beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22';
        $.browser.initialize(userAgent);
    });

    afterEach(function () {
    });

    // ------------------------------------------
    // Describe "initialize" method.
    // ------------------------------------------
    describe('"initialize" private static method : ', function () {

        describe('when given version is "10.11.12.13",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11.12.13');
            });

            afterEach(function () {
            });

            it('"original" property is "10.11.12.13"', function () {
                expect($.browser.version.original).toBe('10.11.12.13');
            });

            it('"major" property is 10', function () {
                expect($.browser.version.major).toBe(10);
            });

            it('"minor" property is 11', function () {
                expect($.browser.version.minor).toBe(11);
            });

            it('"build" property is 12', function () {
                expect($.browser.version.build).toBe(12);
            });

            it('"revision" property is 13', function () {
                expect($.browser.version.revision).toBe(13);
            });

        });

        describe('when given version is "10.11.12",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11.12');
            });

            afterEach(function () {
            });

            it('"original" property is "10.11.12"', function () {
                expect($.browser.version.original).toBe('10.11.12');
            });

            it('"major" property is 10', function () {
                expect($.browser.version.major).toBe(10);
            });

            it('"minor" property is 11', function () {
                expect($.browser.version.minor).toBe(11);
            });

            it('"build" property is 12', function () {
                expect($.browser.version.build).toBe(12);
            });

            it('"revision" property is null', function () {
                expect($.browser.version.revision).toBeNull();
            });

        });

        describe('when given version is "10.11",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11');
            });

            afterEach(function () {
            });

            it('"original" property is "10.11"', function () {
                expect($.browser.version.original).toBe('10.11');
            });

            it('"major" property is 10', function () {
                expect($.browser.version.major).toBe(10);
            });

            it('"minor" property is 11', function () {
                expect($.browser.version.minor).toBe(11);
            });

            it('"build" property is null', function () {
                expect($.browser.version.build).toBeNull();
            });

            it('"revision" property is null', function () {
                expect($.browser.version.revision).toBeNull();
            });

        });

        describe('when given version is "10",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10');
            });

            afterEach(function () {
            });

            it('"original" property is "10"', function () {
                expect($.browser.version.original).toBe('10');
            });

            it('"major" property is 10', function () {
                expect($.browser.version.major).toBe(10);
            });

            it('"minor" property is null', function () {
                expect($.browser.version.minor).toBeNull();
            });

            it('"build" property is null', function () {
                expect($.browser.version.build).toBeNull();
            });

            it('"revision" property is null', function () {
                expect($.browser.version.revision).toBeNull();
            });

        });

        describe('when given version is "10.0",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.0');
            });

            afterEach(function () {
            });

            it('"original" property is "10.0"', function () {
                expect($.browser.version.original).toBe('10.0');
            });

            it('"major" property is 10', function () {
                expect($.browser.version.major).toBe(10);
            });

            it('"minor" property is 0', function () {
                expect($.browser.version.minor).toBe(0);
            });

            it('"build" property is null', function () {
                expect($.browser.version.build).toBeNull();
            });

            it('"revision" property is null', function () {
                expect($.browser.version.revision).toBeNull();
            });

        });

    });

    // ------------------------------------------
    // Describe "isEqual" method.
    // ------------------------------------------
    describe('"isEqual(number[, number][, number][, number])" public method :', function () {

        describe('when given version is "10.11.12.13",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11.12.13');
            });

            afterEach(function () {
            });

            it('and argument is 10, return true', function () {
                expect($.browser.version.isEqual(10)).toBeTruthy();
            });

            it('and argument is 9, return false', function () {
                expect($.browser.version.isEqual(9)).toBeFalsy();
            });

            it('and argument is 10.11, return true', function () {
                expect($.browser.version.isEqual(10, 11)).toBeTruthy();
            });

            it('and argument is 10.10, return false', function () {
                expect($.browser.version.isEqual(10, 10)).toBeFalsy();
            });

            it('and argument is 10.11.12, return true', function () {
                expect($.browser.version.isEqual(10, 11, 12)).toBeTruthy();
            });

            it('and argument is 10.11.11, return false', function () {
                expect($.browser.version.isEqual(10, 11, 11)).toBeFalsy();
            });

            it('and argument is 10.11.12.13, return true', function () {
                expect($.browser.version.isEqual(10, 11, 12, 13)).toBeTruthy();
            });

            it('and argument is 10.11.12.12, return false', function () {
                expect($.browser.version.isEqual(10, 11, 12, 12)).toBeFalsy();
            });

        });

    });

    // ------------------------------------------
    // Describe "isOrLess" method.
    // ------------------------------------------
    describe('"isOrLess(number[, number][, number][, number])" public method :', function () {

        describe('when given current version is "10.11.12.13",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11.12.13');
            });

            afterEach(function () {
            });

            it('and argument is 11, return true', function () {
                expect($.browser.version.isOrLess(11)).toBeTruthy();
            });

            it('and argument is 10, return true', function () {
                expect($.browser.version.isOrLess(10)).toBeTruthy();
            });

            it('and argument is 9, return false', function () {
                expect($.browser.version.isOrLess(9)).toBeFalsy();
            });

            it('and argument is 11.12, return true', function () {
                expect($.browser.version.isOrLess(11, 12)).toBeTruthy();
            });

            it('and argument is 11.11, return true', function () {
                expect($.browser.version.isOrLess(11, 11)).toBeTruthy();
            });

            it('and argument is 11.10, return true', function () {
                expect($.browser.version.isOrLess(11, 10)).toBeTruthy();
            });

            it('and argument is 10.12, return true', function () {
                expect($.browser.version.isOrLess(10, 12)).toBeTruthy();
            });

            it('and argument is 10.11, return true', function () {
                expect($.browser.version.isOrLess(10, 11)).toBeTruthy();
            });

            it('and argument is 10.10, return false', function () {
                expect($.browser.version.isOrLess(10, 10)).toBeFalsy();
            });

            it('and argument is 9.12, return false', function () {
                expect($.browser.version.isOrLess(9, 12)).toBeFalsy();
            });

            it('and argument is 9.11, return false', function () {
                expect($.browser.version.isOrLess(9, 11)).toBeFalsy();
            });

            it('and argument is 9.10, return false', function () {
                expect($.browser.version.isOrLess(9, 10)).toBeFalsy();
            });

            it('and argument is 10.12.13, return true', function () {
                expect($.browser.version.isOrLess(10, 12, 13)).toBeTruthy();
            });

            it('and argument is 10.12.12, return true', function () {
                expect($.browser.version.isOrLess(10, 12, 12)).toBeTruthy();
            });

            it('and argument is 10.12.11, return true', function () {
                expect($.browser.version.isOrLess(10, 12, 11)).toBeTruthy();
            });

            it('and argument is 10.11.13, return true', function () {
                expect($.browser.version.isOrLess(10, 11, 13)).toBeTruthy();
            });

            it('and argument is 10.11.12, return true', function () {
                expect($.browser.version.isOrLess(10, 11, 12)).toBeTruthy();
            });

            it('and argument is 10.11.11, return false', function () {
                expect($.browser.version.isOrLess(10, 11, 11)).toBeFalsy();
            });

            it('and argument is 10.10.13, return false', function () {
                expect($.browser.version.isOrLess(10, 10, 13)).toBeFalsy();
            });

            it('and argument is 10.10.12, return false', function () {
                expect($.browser.version.isOrLess(10, 10, 12)).toBeFalsy();
            });

            it('and argument is 10.10.11, return false', function () {
                expect($.browser.version.isOrLess(10, 10, 11)).toBeFalsy();
            });

            it('and argument is 10.11.13.14, return true', function () {
                expect($.browser.version.isOrLess(10, 11, 13, 14)).toBeTruthy();
            });

            it('and argument is 10.11.13.13, return true', function () {
                expect($.browser.version.isOrLess(10, 11, 13, 13)).toBeTruthy();
            });

            it('and argument is 10.11.13.12, return true', function () {
                expect($.browser.version.isOrLess(10, 11, 13, 12)).toBeTruthy();
            });

            it('and argument is 10.11.12.14, return true', function () {
                expect($.browser.version.isOrLess(10, 11, 12, 14)).toBeTruthy();
            });

            it('and argument is 10.11.12.13, return true', function () {
                expect($.browser.version.isOrLess(10, 11, 12, 13)).toBeTruthy();
            });

            it('and argument is 10.11.12.12, return false', function () {
                expect($.browser.version.isOrLess(10, 11, 12, 12)).toBeFalsy();
            });

            it('and argument is 10.11.11.14, return false', function () {
                expect($.browser.version.isOrLess(10, 11, 11, 14)).toBeFalsy();
            });

            it('and argument is 10.11.11.13, return false', function () {
                expect($.browser.version.isOrLess(10, 11, 11, 13)).toBeFalsy();
            });

            it('and argument is 10.11.11.12, return false', function () {
                expect($.browser.version.isOrLess(10, 11, 11, 12)).toBeFalsy();
            });

        });

    });

    // ------------------------------------------
    // Describe "isLessThan" method.
    // ------------------------------------------
    describe('"isLessThan(number[, number][, number][, number])" public method :', function () {

        describe('when given current version is "10.11.12.13",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11.12.13');
            });

            afterEach(function () {
            });

            it('and argument is 11, return true', function () {
                expect($.browser.version.isLessThan(11)).toBeTruthy();
            });

            it('and argument is 10, return false', function () {
                expect($.browser.version.isLessThan(10)).toBeFalsy();
            });

            it('and argument is 9, return false', function () {
                expect($.browser.version.isLessThan(9)).toBeFalsy();
            });

            it('and argument is 11.12, return true', function () {
                expect($.browser.version.isLessThan(11, 12)).toBeTruthy();
            });

            it('and argument is 11.11, return true', function () {
                expect($.browser.version.isLessThan(11, 11)).toBeTruthy();
            });

            it('and argument is 11.10, return true', function () {
                expect($.browser.version.isLessThan(11, 10)).toBeTruthy();
            });

            it('and argument is 10.12, return true', function () {
                expect($.browser.version.isLessThan(10, 12)).toBeTruthy();
            });

            it('and argument is 10.11, return false', function () {
                expect($.browser.version.isLessThan(10, 11)).toBeFalsy();
            });

            it('and argument is 10.10, return false', function () {
                expect($.browser.version.isLessThan(10, 10)).toBeFalsy();
            });

            it('and argument is 9.12, return false', function () {
                expect($.browser.version.isLessThan(9, 12)).toBeFalsy();
            });

            it('and argument is 9.11, return false', function () {
                expect($.browser.version.isLessThan(9, 11)).toBeFalsy();
            });

            it('and argument is 9.10, return false', function () {
                expect($.browser.version.isLessThan(9, 10)).toBeFalsy();
            });

            it('and argument is 10.12.13, return true', function () {
                expect($.browser.version.isLessThan(10, 12, 13)).toBeTruthy();
            });

            it('and argument is 10.12.12, return true', function () {
                expect($.browser.version.isLessThan(10, 12, 12)).toBeTruthy();
            });

            it('and argument is 10.12.11, return true', function () {
                expect($.browser.version.isLessThan(10, 12, 11)).toBeTruthy();
            });

            it('and argument is 10.11.13, return true', function () {
                expect($.browser.version.isLessThan(10, 11, 13)).toBeTruthy();
            });

            it('and argument is 10.11.12, return false', function () {
                expect($.browser.version.isLessThan(10, 11, 12)).toBeFalsy();
            });

            it('and argument is 10.11.11, return false', function () {
                expect($.browser.version.isLessThan(10, 11, 11)).toBeFalsy();
            });

            it('and argument is 10.10.13, return false', function () {
                expect($.browser.version.isLessThan(10, 10, 13)).toBeFalsy();
            });

            it('and argument is 10.10.12, return false', function () {
                expect($.browser.version.isLessThan(10, 10, 12)).toBeFalsy();
            });

            it('and argument is 10.10.11, return false', function () {
                expect($.browser.version.isLessThan(10, 10, 11)).toBeFalsy();
            });

            it('and argument is 10.11.13.14, return true', function () {
                expect($.browser.version.isLessThan(10, 11, 13, 14)).toBeTruthy();
            });

            it('and argument is 10.11.13.13, return true', function () {
                expect($.browser.version.isLessThan(10, 11, 13, 13)).toBeTruthy();
            });

            it('and argument is 10.11.13.12, return true', function () {
                expect($.browser.version.isLessThan(10, 11, 13, 12)).toBeTruthy();
            });

            it('and argument is 10.11.12.14, return true', function () {
                expect($.browser.version.isLessThan(10, 11, 12, 14)).toBeTruthy();
            });

            it('and argument is 10.11.12.13, return false', function () {
                expect($.browser.version.isLessThan(10, 11, 12, 13)).toBeFalsy();
            });

            it('and argument is 10.11.12.12, return false', function () {
                expect($.browser.version.isLessThan(10, 11, 12, 12)).toBeFalsy();
            });

            it('and argument is 10.11.11.14, return false', function () {
                expect($.browser.version.isLessThan(10, 11, 11, 14)).toBeFalsy();
            });

            it('and argument is 10.11.11.13, return false', function () {
                expect($.browser.version.isLessThan(10, 11, 11, 13)).toBeFalsy();
            });

            it('and argument is 10.11.11.12, return false', function () {
                expect($.browser.version.isLessThan(10, 11, 11, 12)).toBeFalsy();
            });

        });

    });

    // ------------------------------------------
    // Describe "isOrMore" method.
    // ------------------------------------------
    describe('"isOrMore(number[, number][, number][, number])" public method :', function () {

        describe('when given current version is "10.11.12.13",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11.12.13');
            });

            afterEach(function () {
            });

            it('and argument is 11, return false', function () {
                expect($.browser.version.isOrMore(11)).toBeFalsy();
            });

            it('and argument is 10, return true', function () {
                expect($.browser.version.isOrMore(10)).toBeTruthy();
            });

            it('and argument is 9, return true', function () {
                expect($.browser.version.isOrMore(9)).toBeTruthy();
            });

            it('and argument is 11.12, return false', function () {
                expect($.browser.version.isOrMore(11, 12)).toBeFalsy();
            });

            it('and argument is 11.11, return false', function () {
                expect($.browser.version.isOrMore(11, 11)).toBeFalsy();
            });

            it('and argument is 11.10, return false', function () {
                expect($.browser.version.isOrMore(11, 10)).toBeFalsy();
            });

            it('and argument is 10.12, return false', function () {
                expect($.browser.version.isOrMore(10, 12)).toBeFalsy();
            });

            it('and argument is 10.11, return true', function () {
                expect($.browser.version.isOrMore(10, 11)).toBeTruthy();
            });

            it('and argument is 10.10, return true', function () {
                expect($.browser.version.isOrMore(10, 10)).toBeTruthy();
            });

            it('and argument is 9.12, return true', function () {
                expect($.browser.version.isOrMore(9, 12)).toBeTruthy();
            });

            it('and argument is 9.11, return true', function () {
                expect($.browser.version.isOrMore(9, 11)).toBeTruthy();
            });

            it('and argument is 9.10, return true', function () {
                expect($.browser.version.isOrMore(9, 10)).toBeTruthy();
            });

            it('and argument is 10.12.13, return false', function () {
                expect($.browser.version.isOrMore(10, 12, 13)).toBeFalsy();
            });

            it('and argument is 10.12.12, return false', function () {
                expect($.browser.version.isOrMore(10, 12, 12)).toBeFalsy();
            });

            it('and argument is 10.12.11, return false', function () {
                expect($.browser.version.isOrMore(10, 12, 11)).toBeFalsy();
            });

            it('and argument is 10.11.13, return false', function () {
                expect($.browser.version.isOrMore(10, 11, 13)).toBeFalsy();
            });

            it('and argument is 10.11.12, return true', function () {
                expect($.browser.version.isOrMore(10, 11, 12)).toBeTruthy();
            });

            it('and argument is 10.11.11, return true', function () {
                expect($.browser.version.isOrMore(10, 11, 11)).toBeTruthy();
            });

            it('and argument is 10.10.13, return true', function () {
                expect($.browser.version.isOrMore(10, 10, 13)).toBeTruthy();
            });

            it('and argument is 10.10.12, return true', function () {
                expect($.browser.version.isOrMore(10, 10, 12)).toBeTruthy();
            });

            it('and argument is 10.10.11, return true', function () {
                expect($.browser.version.isOrMore(10, 10, 11)).toBeTruthy();
            });

            it('and argument is 10.11.13.14, return false', function () {
                expect($.browser.version.isOrMore(10, 11, 13, 14)).toBeFalsy();
            });

            it('and argument is 10.11.13.13, return false', function () {
                expect($.browser.version.isOrMore(10, 11, 13, 13)).toBeFalsy();
            });

            it('and argument is 10.11.13.12, return false', function () {
                expect($.browser.version.isOrMore(10, 11, 13, 12)).toBeFalsy();
            });

            it('and argument is 10.11.12.14, return false', function () {
                expect($.browser.version.isOrMore(10, 11, 12, 14)).toBeFalsy();
            });

            it('and argument is 10.11.12.13, return true', function () {
                expect($.browser.version.isOrMore(10, 11, 12, 13)).toBeTruthy();
            });

            it('and argument is 10.11.12.12, return true', function () {
                expect($.browser.version.isOrMore(10, 11, 12, 12)).toBeTruthy();
            });

            it('and argument is 10.11.11.14, return true', function () {
                expect($.browser.version.isOrMore(10, 11, 11, 14)).toBeTruthy();
            });

            it('and argument is 10.11.11.13, return true', function () {
                expect($.browser.version.isOrMore(10, 11, 11, 13)).toBeTruthy();
            });

            it('and argument is 10.11.11.12, return true', function () {
                expect($.browser.version.isOrMore(10, 11, 11, 12)).toBeTruthy();
            });

        });

    });

    // ------------------------------------------
    // Describe "isMoreThan" method.
    // ------------------------------------------
    describe('"isMoreThan(number[, number][, number][, number])" public method :', function () {

        describe('when given current version is "10.11.12.13",', function () {

            beforeEach(function () {
                $.browser.version.initialize('10.11.12.13');
            });

            afterEach(function () {
            });

            it('and argument is 11, return false', function () {
                expect($.browser.version.isMoreThan(11)).toBeFalsy();
            });

            it('and argument is 10, return false', function () {
                expect($.browser.version.isMoreThan(10)).toBeFalsy();
            });

            it('and argument is 9, return true', function () {
                expect($.browser.version.isMoreThan(9)).toBeTruthy();
            });

            it('and argument is 11.12, return false', function () {
                expect($.browser.version.isMoreThan(11, 12)).toBeFalsy();
            });

            it('and argument is 11.11, return false', function () {
                expect($.browser.version.isMoreThan(11, 11)).toBeFalsy();
            });

            it('and argument is 11.10, return false', function () {
                expect($.browser.version.isMoreThan(11, 10)).toBeFalsy();
            });

            it('and argument is 10.12, return false', function () {
                expect($.browser.version.isMoreThan(10, 12)).toBeFalsy();
            });

            it('and argument is 10.11, return false', function () {
                expect($.browser.version.isMoreThan(10, 11)).toBeFalsy();
            });

            it('and argument is 10.10, return true', function () {
                expect($.browser.version.isMoreThan(10, 10)).toBeTruthy();
            });

            it('and argument is 9.12, return true', function () {
                expect($.browser.version.isMoreThan(9, 12)).toBeTruthy();
            });

            it('and argument is 9.11, return true', function () {
                expect($.browser.version.isMoreThan(9, 11)).toBeTruthy();
            });

            it('and argument is 9.10, return true', function () {
                expect($.browser.version.isMoreThan(9, 10)).toBeTruthy();
            });

            it('and argument is 10.12.13, return false', function () {
                expect($.browser.version.isMoreThan(10, 12, 13)).toBeFalsy();
            });

            it('and argument is 10.12.12, return false', function () {
                expect($.browser.version.isMoreThan(10, 12, 12)).toBeFalsy();
            });

            it('and argument is 10.12.11, return false', function () {
                expect($.browser.version.isMoreThan(10, 12, 11)).toBeFalsy();
            });

            it('and argument is 10.11.13, return false', function () {
                expect($.browser.version.isMoreThan(10, 11, 13)).toBeFalsy();
            });

            it('and argument is 10.11.12, return false', function () {
                expect($.browser.version.isMoreThan(10, 11, 12)).toBeFalsy();
            });

            it('and argument is 10.11.11, return true', function () {
                expect($.browser.version.isMoreThan(10, 11, 11)).toBeTruthy();
            });

            it('and argument is 10.10.13, return true', function () {
                expect($.browser.version.isMoreThan(10, 10, 13)).toBeTruthy();
            });

            it('and argument is 10.10.12, return true', function () {
                expect($.browser.version.isMoreThan(10, 10, 12)).toBeTruthy();
            });

            it('and argument is 10.10.11, return true', function () {
                expect($.browser.version.isMoreThan(10, 10, 11)).toBeTruthy();
            });

            it('and argument is 10.11.13.14, return false', function () {
                expect($.browser.version.isMoreThan(10, 11, 13, 14)).toBeFalsy();
            });

            it('and argument is 10.11.13.13, return false', function () {
                expect($.browser.version.isMoreThan(10, 11, 13, 13)).toBeFalsy();
            });

            it('and argument is 10.11.13.12, return false', function () {
                expect($.browser.version.isMoreThan(10, 11, 13, 12)).toBeFalsy();
            });

            it('and argument is 10.11.12.14, return false', function () {
                expect($.browser.version.isMoreThan(10, 11, 12, 14)).toBeFalsy();
            });

            it('and argument is 10.11.12.13, return false', function () {
                expect($.browser.version.isMoreThan(10, 11, 12, 13)).toBeFalsy();
            });

            it('and argument is 10.11.12.12, return true', function () {
                expect($.browser.version.isMoreThan(10, 11, 12, 12)).toBeTruthy();
            });

            it('and argument is 10.11.11.14, return true', function () {
                expect($.browser.version.isMoreThan(10, 11, 11, 14)).toBeTruthy();
            });

            it('and argument is 10.11.11.13, return true', function () {
                expect($.browser.version.isMoreThan(10, 11, 11, 13)).toBeTruthy();
            });

            it('and argument is 10.11.11.12, return true', function () {
                expect($.browser.version.isMoreThan(10, 11, 11, 12)).toBeTruthy();
            });

        });
        
    });

});


