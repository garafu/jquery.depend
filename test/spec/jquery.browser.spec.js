/// <reference path="../lib/jquery/jquery-1.7.2.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine-html.js" />

describe('jquery.browser', function () {

    describe('"initialize" private static method', function () {
        var userAgent, result;

        describe('when userAgent is "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Safari".', function () {
                expect($.browser.safari).toBeTruthy();
            });

            it('detect browser version is "6.0".', function () {
                expect($.browser.version.original).toBe('6.0');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Safari"', function () {
                expect($.browser.safari).toBeTruthy();
            });

            it('detect browser version is "5.1"', function () {
                expect($.browser.version.original).toBe('5.1');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Safari"', function () {
                expect($.browser.safari).toBeTruthy();
            });

            it('detect browser version is "6.0"', function () {
                expect($.browser.version.original).toBe('6.0');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Android default browser"', function () {
                expect($.browser.browser).toBeTruthy();
            });

            it('detect browser version is "4.0"', function () {
                expect($.browser.version.original).toBe('4.0');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Android default browser"', function () {
                expect($.browser.browser).toBeTruthy();
            });

            it('detect browser version is "4.0"', function () {
                expect($.browser.version.original).toBe('4.0');
            });
        });

        describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Android default browser"', function () {
                expect($.browser.browser).toBeTruthy();
            });

            it('detect browser version is "4.0"', function () {
                expect($.browser.version.original).toBe('4.0');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "9.0"', function () {
                expect($.browser.version.original).toBe('9.0');
            });

        });

        describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "6.0"', function () {
                expect($.browser.version.original).toBe('6.0');
            });

        });

        describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "7.0"', function () {
                expect($.browser.version.original).toBe('7.0');
            });

        });

        describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "8.0"', function () {
                expect($.browser.version.original).toBe('8.0');
            });
        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "9.0"', function () {
                expect($.browser.version.original).toBe('9.0');
            });
        });

        describe('when userAgent is "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Chrome"', function () {
                expect($.browser.chrome).toBeTruthy();
            });

            it('detect browser version is "25.0.1364.172"', function () {
                expect($.browser.version.original).toBe('25.0.1364.172');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Firefox"', function () {
                expect($.browser.firefox).toBeTruthy();
            });

            it('detect browser version is "18.0"', function () {
                expect($.browser.version.original).toBe('18.0');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Safari"', function () {
                expect($.browser.safari).toBeTruthy();
            });

            it('detect browser version is "6.0"', function () {
                expect($.browser.version.original).toBe('6.0');
            });

        });

        describe('when userAgent is "Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1"', function () {

            beforeEach(function () {
                userAgent = 'Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Opera"', function () {
                expect($.browser.opera).toBeTruthy();
            });

            it('detect browser version is "9.62"', function () {
                expect($.browser.version.original).toBe('9.62');
            });

        });

        describe('when userAgent is "Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Opera"', function () {
                expect($.browser.opera).toBeTruthy();
            });

            it('detect browser version is "8.54"', function () {
                expect($.browser.version.original).toBe('8.54');
            });

        });
    });

});

