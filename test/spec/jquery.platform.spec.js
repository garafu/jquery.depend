/// <reference path="../lib/jquery/jquery-1.7.2.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine-html.js" />
/*global describe,beforeEach,afterEach,it,expect,$*/
describe('jquery.platform', function () {

    describe('"initialize" private static method', function () {
        var userAgent;

        describe('when userAgent is "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "mobile"', function () {
                expect($.platform.mobile).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "mobile".', function () {
                expect($.platform.mobile).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "tablet".', function () {
                expect($.platform.tablet).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "mobile".', function () {
                expect($.platform.mobile).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "mobile".', function () {
                expect($.platform.mobile).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "tablet".', function () {
                expect($.platform.tablet).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "mobile".', function () {
                expect($.platform.mobile).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "windows".', function () {
                expect($.platform.windows).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "windows".', function () {
                expect($.platform.windows).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "windows".', function () {
                expect($.platform.windows).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "windows".', function () {
                expect($.platform.windows).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "windows".', function () {
                expect($.platform.windows).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "windows".', function () {
                expect($.platform.windows).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "mac".', function () {
                expect($.platform.mac).toBeTruthy();
            });

        });

        describe('when userAgent is "Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1"', function () {

            beforeEach(function () {
                userAgent = 'Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "windows".', function () {
                expect($.platform.windows).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54';
                $.platform.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect that platform is "linux".', function () {
                expect($.platform.linux).toBeTruthy();
            });

        });

    });

});


