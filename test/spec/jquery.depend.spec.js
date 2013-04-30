/// <reference path="../lib/jquery/jquery-1.7.2.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine-html.js" />

describe('jquery.depend', function () {

    describe('"analyze" public static method について', function () {
        var userAgent, result;

        describe('userAgent が "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
            });

            afterEach(function () {
            });

            it('ブラウザを Safari と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('バージョンを "6.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('プラットフォームを mobile と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3';
            });

            afterEach(function () {
            });

            it('ブラウザを Safari と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('バージョンを "5.1" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('5.1');
            });

            it('プラットフォームを mobile と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
            });

            afterEach(function () {
            });

            it('ブラウザを Safari と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('バージョンを "6.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('プラットフォームを tablet と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.tablet).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
            });

            afterEach(function () {
            });

            it('ブラウザを Android標準ブラウザ と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.browser).toBeTruthy();
            });

            it('バージョンを "4.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('4.0');
            });

            it('プラットフォームを mobile と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
            });

            afterEach(function () {
            });

            it('ブラウザを Android標準ブラウザ と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.browser).toBeTruthy();
            });

            it('バージョンを "4.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('4.0');
            });

            it('プラットフォームを mobile と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13';
            });

            afterEach(function () {
            });

            it('ブラウザを Android標準ブラウザ と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.browser).toBeTruthy();
            });

            it('バージョンを "4.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('4.0');
            });

            it('プラットフォームを tablet と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.tablet).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
            });

            afterEach(function () {
            });

            it('ブラウザを Internet Explorer と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('バージョンを "9.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('9.0');
            });

            it('プラットフォームを mobile と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)';
            });

            afterEach(function () {
            });

            it('ブラウザを Internet Explorer と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('バージョンを "6.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('プラットフォームを windows と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)';
            });

            afterEach(function () {
            });

            it('ブラウザを Internet Explorer と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('バージョンを "7.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('7.0');
            });

            it('プラットフォームを windows と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)';
            });

            afterEach(function () {
            });

            it('ブラウザを Internet Explorer と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('バージョンを "8.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('8.0');
            });

            it('プラットフォームを windows と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)';
            });

            afterEach(function () {
            });

            it('ブラウザを Internet Explorer と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('バージョンを "9.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('9.0');
            });

            it('プラットフォームを windows と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22';
            });

            afterEach(function () {
            });

            it('ブラウザを Chrome と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.chrome).toBeTruthy();
            });

            it('バージョンを "25.0.1364.172" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('25.0.1364.172');
            });

            it('プラットフォームを windows と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0';
            });

            afterEach(function () {
            });

            it('ブラウザを Firefox と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.firefox).toBeTruthy();
            });

            it('バージョンを "18.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('18.0');
            });

            it('プラットフォームを windows と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25';
            });

            afterEach(function () {
            });

            it('ブラウザを Safari と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('バージョンを "6.0" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('プラットフォームを mac と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mac).toBeTruthy();
            });
        });

        describe('userAgent が "Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1" のとき', function () {

            beforeEach(function () {
                userAgent = 'Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1';
            });

            afterEach(function () {
            });

            it('ブラウザを Opera と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.opera).toBeTruthy();
            });

            it('バージョンを "9.62" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('9.62');
            });

            it('プラットフォームを windows と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent が "Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54" のとき', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54';
            });

            afterEach(function () {
            });

            it('ブラウザを Opera と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.opera).toBeTruthy();
            });

            it('バージョンを "8.54" と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('8.54');
            });

            it('プラットフォームを linux と判定', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.linux).toBeTruthy();
            });
        });
    });

});


