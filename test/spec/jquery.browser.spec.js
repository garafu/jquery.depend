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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/26.0.1410.53 Mobile/10B350 Safari/8536.25"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/26.0.1410.53 Mobile/10B350 Safari/8536.25';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Chrome"', function () {
                expect($.browser.chrome).toBeTruthy();
            });

            it('detect browser version is "26.0.1410.53"', function () {
                expect($.browser.version.original).toBe('26.0.1410.53');
            });

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mercury/7.4.2 Mobile/10A523 Safari/8536.25"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mercury/7.4.2 Mobile/10A523 Safari/8536.25';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Mercury"', function () {
                expect($.browser.mercury).toBeTruthy();
            });

            it('detect browser version is "7.4.2"', function () {
                expect($.browser.version.original).toBe('7.4.2');
            });

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
            });

        });

        describe('when userAgent is "Opera/9.80 (iPhone; Opera Mini/7.0.5/29.3709; U; ja) Presto/2.8.119 Version/11.10n/11.10"', function () {

            beforeEach(function () {
                userAgent = 'Opera/9.80 (iPhone; Opera Mini/7.0.5/29.3709; U; ja) Presto/2.8.119 Version/11.10n/11.10';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Opera Mini"', function () {
                expect($.browser.operamini).toBeTruthy();
            });

            it('detect browser version is "7.0.5"', function () {
                expect($.browser.version.original).toBe('7.0.5');
            });

            it('detect rendering engin is "Presto".', function () {
                expect($.browser.presto).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
            });

        });

        describe('when userAgent is "Opera/9.80 (Android 2.1-update1; Linux; Opera Mobi/ADR-1104201100; U; en) Presto/2.7.81 Version/11.00"', function () {

            beforeEach(function () {
                userAgent = 'Opera/9.80 (Android 2.1-update1; Linux; Opera Mobi/ADR-1104201100; U; en) Presto/2.7.81 Version/11.00';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Opera Mobile"', function () {
                expect($.browser.operamobile).toBeTruthy();
            });

            it('detect browser version is "11.00"', function () {
                expect($.browser.version.original).toBe('11.00');
            });

            it('detect rendering engin is "Presto".', function () {
                expect($.browser.presto).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Linux; U; ja-jp; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.4 Safari/535.19 Silk-Accelerated=true"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; ja-jp; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.4 Safari/535.19 Silk-Accelerated=true';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Android default browser"', function () {
                expect($.browser.silk).toBeTruthy();
            });

            it('detect browser version is "2.4"', function () {
                expect($.browser.version.original).toBe('2.4');
            });

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
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

            it('detect rendering engin is "unknown".', function () {
                expect($.browser.unknown).toBeTruthy();
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

            it('detect rendering engin is "unknown".', function () {
                expect($.browser.unknown).toBeTruthy();
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

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
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

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E; Tablet PC 2.0)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E; Tablet PC 2.0)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "10.0"', function () {
                expect($.browser.version.original).toBe('10.0');
            });

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "10.0"', function () {
                expect($.browser.version.original).toBe('10.0');
            });

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
            });

            it('detect browser executing architecture is x86', function () {
                expect($.browser.x86).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "10.0"', function () {
                expect($.browser.version.original).toBe('10.0');
            });

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
            });

            it('detect browser executing architecture is x86', function () {
                expect($.browser.x86).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "10.0"', function () {
                expect($.browser.version.original).toBe('10.0');
            });

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
            });

            it('detect browser executing architecture is x64', function () {
                expect($.browser.x64).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "10.0"', function () {
                expect($.browser.version.original).toBe('10.0');
            });

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
            });

            it('detect browser executing architecture is ARM', function () {
                expect($.browser.arm).toBeTruthy();
            });

        });

        describe('when userAgent is "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko"', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko';
                $.browser.initialize(userAgent);
            });

            afterEach(function () {
            });

            it('detect client browser is "Internet Explorer"', function () {
                expect($.browser.msie).toBeTruthy();
            });

            it('detect browser version is "11.0"', function () {
                expect($.browser.version.original).toBe('11.0');
            });

            it('detect rendering engin is "Trident".', function () {
                expect($.browser.trident).toBeTruthy();
            });

            it('detect browser executing architecture is x86', function () {
                expect($.browser.x86).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
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

            it('detect rendering engin is "Gecko".', function () {
                expect($.browser.gecko).toBeTruthy();
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

            it('detect rendering engin is "webkit".', function () {
                expect($.browser.webkit).toBeTruthy();
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

            it('detect rendering engin is "Presto".', function () {
                expect($.browser.presto).toBeTruthy();
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

            it('detect rendering engin is "unknown".', function () {
                expect($.browser.unknown).toBeTruthy();
            });

        });
    });


    // ------------------------------------------
    // Describe "window.__BACKWARD_COMPATIBILITY_ENABLED" flag.
    // ------------------------------------------
    describe('"window.__BACKWARD_COMPATIBILITY_ENABLED" flag:', function () {

        beforeEach(function () {
            window.__BACKWARD_COMPATIBILITY_ENABLED = undefined;
        });

        afterEach(function () {
        });

        describe('when the flag is "true",', function () {

            beforeEach(function () {
                window.__BACKWARD_COMPATIBILITY_ENABLED = true;
            });

            afterEach(function () {
            });

            describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)",', function () {

                beforeEach(function () {
                    userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
                    $.browser.initialize(userAgent);
                });

                afterEach(function () {
                });

                it('$.browser.version property is "9.0"', function () {
                    expect($.browser.version).toBe('9.0');
                });

                it('typeof $.browser.version property is "string"', function () {
                    expect(typeof $.browser.version).toBe('string');
                });

            });

        });

        describe('when the flag is "false",', function () {

            beforeEach(function () {
                window.__BACKWARD_COMPATIBILITY_ENABLED = false;
            });

            afterEach(function () {
            });

            describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)",', function () {

                beforeEach(function () {
                    userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
                    $.browser.initialize(userAgent);
                });

                afterEach(function () {
                });

                it('$.browser.version property is not "9.0".', function () {
                    expect($.browser.version).not.toBe('9.0');
                });

                it('type of $.browser.version property is "object".', function () {
                    expect(typeof $.browser.version).toBe('object');
                });

            });

        });

        describe('when the flag is "undefined",', function () {

            beforeEach(function () {
                window.__BACKWARD_COMPATIBILITY_ENABLED = undefined;
            });

            afterEach(function () {
            });

            describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)",', function () {

                beforeEach(function () {
                    userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
                    $.browser.initialize(userAgent);
                });

                afterEach(function () {
                });

                it('$.browser.version property is not "9.0".', function () {
                    expect($.browser.version).not.toBe('9.0');
                });

                it('type of $.browser.version property is "object".', function () {
                    expect(typeof $.browser.version).toBe('object');
                });

            });

        });

    });
});


