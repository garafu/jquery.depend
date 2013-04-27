///<reference path="./lib/jquery/jquery-1.9.1.js" />
/**
* jQuery pugin : This plugin provides follwing featurs.
*   - Browser detection.
*   - Platform detection.
*   - Resolution of browser dependency problem.
*
* Copyright (c) 2013 akinari tsugo
*
* This script released under the MIT license.
* please see MIT-LICENCE.txt.
*/
(function (window, document, $, undefined) {
    var Version, BrowserInfo, PlatformInfo;

    // ----------------------------------------------------
    // Version class.
    // ----------------------------------------------------
    /**
    * @class
    *
    * Initialize a new instance of the Version class.
    * @public
    * @constructor
    * @param    {string}    version     Version string like "1.2.3.4".
    */
    Version = function (version) {
        // Initialize properties.
        this.original = version;
        this.major = null;
        this.minor = null;
        this.build = null;
        this.revision = null;

        // Initialize this instance.
        this.initialize(version);
    };

    /**
    * Initialize this instance according to the version string.
    * @private
    * @param    {string}    String indicating version.
    */
    Version.prototype.initialize = function (version) {
        var arr = version.split('.');

        this.major = (arr && arr[0]) ? parseInt(arr[0], 10) : null;
        this.minor = (arr && arr[1]) ? parseInt(arr[1], 10) : null;
        this.revision = (arr && arr[2]) ? parseInt(arr[2], 10) : null;
        this.build = (arr && arr[3]) ? parseInt(arr[3], 10) : null;
    };

    /**
    * Whether the version is equal or not.
    * @public
    * @param    {number}    major       Major version number.
    * @param    {number}    [minor]     Minor version number.
    * @param    {number}    [build]     Build version number.
    * @param    {number}    [revision]  Revision version number.
    * @return   {boolean}   Whether the version is equal to the specified version.
    */
    Version.prototype.isEqual = function (major, minor, build, revision) {
        var res = false;

        if (typeof major === 'number' && this.major === major) {
            if (typeof minor === 'number' && this.minor === minor) {
                if (typeof build === 'number' && this.build === build) {
                    if (typeof revision === 'number' && this.revision === revision) {
                        res = true;
                    } else if (typeof revision === 'undefined') {
                        res = true;
                    }
                } else if (typeof build === 'undefined') {
                    res = true;
                }
            } else if (typeof minor === 'undefined') {
                res = true;
            }
        }

        return res;
    };

    /**
    * Whether the version is or less than the specified versions.
    * @public
    * @param    {number}    major       Major version number.
    * @param    {number}    [minor]     Minor version number.
    * @param    {number}    [build]     Build version number.
    * @param    {number}    [revision]  Revision version number.
    * @return   {boolean}   Whether the version is or less than the specified version.
    */
    Version.prototype.isOrLess = function (major, minor, build, revision) {
        var res = false;

        if (typeof major === 'number' && this.major <= major) {
            res = true;
        } else {
            if (typeof minor === 'undefined' || (typeof minor === 'number' && this.minor <= minor)) {
                res = true;
            } else {
                if (typeof build === 'undefined' || (typeof build === 'number' && this.build <= build)) {
                    res = true;
                } else {
                    if (typeof revision === 'undfined' || (typeof revision === 'number' && this.revision <= revision)) {
                        res = true;
                    }
                }
            }
        }

        return res;
    };

    /**
    * Whether the version is less than the specfied version.
    * @public
    * @param    {number}    major       Major version number.
    * @param    {number}    [minor]     Minor version number.
    * @param    {number}    [build]     Build version number.
    * @param    {number}    [revision]  Revision version number.
    * @return   {boolean}   Whether the version is less than the specified version.
    */
    Version.prototype.isLessThan = function (major, minor, build, revision) {
        var res = false;

        if (typeof major === 'number' && this.major < major) {
            res = true;
        } else {
            if (typeof minor === 'undefined' || (typeof minor === 'number' && this.minor < minor)) {
                res = true;
            } else {
                if (typeof build === 'undefined' || (typeof build === 'number' && this.build < build)) {
                    res = true;
                } else {
                    if (typeof revision === 'undfined' || (typeof revision === 'number' && this.revision < revision)) {
                        res = true;
                    }
                }
            }
        }

        return res;
    };

    /**
    * Whether the version is or more than the specfied version.
    * @public
    * @param    {number}    major       Major version number.
    * @param    {number}    [minor]     Minor version number.
    * @param    {number}    [build]     Build version number.
    * @param    {number}    [revision]  Revision version number.
    * @return   {boolean}   Whether the version is or more than the specified version.
    */
    Version.prototype.isOrMore = function (major, minor, build, revision) {
        var res = false;

        if (typeof major === 'number' && this.major >= major) {
            res = true;
        } else {
            if (typeof minor === 'undefined' || (typeof minor === 'number' && this.minor >= minor)) {
                res = true;
            } else {
                if (typeof build === 'undefined' || (typeof build === 'number' && this.build >= build)) {
                    res = true;
                } else {
                    if (typeof revision === 'undfined' || (typeof revision === 'number' && this.revision >= revision)) {
                        res = true;
                    }
                }
            }
        }

        return res;
    };

    /**
    * Whether the version is more than the specfied version.
    * @public
    * @param    {number}    major       Major version number.
    * @param    {number}    [minor]     Minor version number.
    * @param    {number}    [build]     Build version number.
    * @param    {number}    [revision]  Revision version number.
    * @return   {boolean}   Whether the version is more than the specified version.
    */
    Version.prototype.isMoreThan = function (major, minor, build, revision) {
        var res = false;

        if (typeof major === 'number' && this.major > major) {
            res = true;
        } else {
            if (typeof minor === 'undefined' || (typeof minor === 'number' && this.minor > minor)) {
                res = true;
            } else {
                if (typeof build === 'undefined' || (typeof build === 'number' && this.build > build)) {
                    res = true;
                } else {
                    if (typeof revision === 'undfined' || (typeof revision === 'number' && this.revision > revision)) {
                        res = true;
                    }
                }
            }
        }

        return res;
    };

    // ----------------------------------------------------
    // BrowserInfo class.
    // ----------------------------------------------------
    /**
    * @class
    *
    * Initialize a new instance of the BrowserInfo class.
    * @public
    * @constructor
    */
    BrowserInfo = function () {
        //Initialize properties.
        this.original = '';
        this.version = null;

        // Initialize this instance.
        this.initialize(window.navigator.userAgent);
    };

    /**
    * Initalize this instance according to the specified user agent string.
    * @private
    * @param    {string}    userAgent       UserAgent string.
    */
    BrowserInfo.prototype.initialize = function (userAgent) {
        var array;
        var browser = '', version = null;

        // Normalize useragent string to lowercase.
        userAgent = userAgent.toLowerCase();

        // Detect browser and browser version.
        if (userAgent.indexOf('opera') >= 0) {
            // Opera
            browser = 'opera';

            // Opera 9.00, Opera/9.0
            array = /opera[\s\/]+([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';
        } else if (userAgent.indexOf('msie') >= 0) {
            // Internet Explorer, Windows Phone, Sleipnir, Adobe Bridge
            browser = 'msie';

            // MSIE 9.0
            array = /msie ([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';
        } else if (userAgent.indexOf('firefox') >= 0) {
            // Firefox(not include Mozilla)
            browser = 'firefox';

            // Firefox/0.9.3
            array = /firefox\/([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';
        } else if (userAgent.indexOf('chrome') >= 0) {
            // Chrome, Android default this
            browser = 'chrome';

            // Chrome/6.0.472.55
            array = /chrome\/([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';
        } else if (userAgent.indexOf('android') >= 0) {
            // Android default browser
            browser = 'browser';

            // Version/4.0
            array = /version\/([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';
        } else if (userAgent.indexOf('safari') >= 0) {
            // Safari
            browser = 'safari';

            // Version/3.0.3
            array = /version\/([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';
        } else {
            // Other case
            browser = 'unknown';
            version = '';
        }

        // Set properties.
        this.original = browser;
        this[browser] = true;
        this.version = new Version(version);
    };

    /**
    * Whether the current browser is equal to the specified browser.
    * @public
    * @param    {string}    type    Browser type string.
    * @return   {boolean}   Whether the current browser is equal to the specified browser.
    */
    BrowserInfo.prototype.is = function (type) {
        return (typeof type === 'string') && (type.toLowerCase() === this.original);
    };

    // ----------------------------------------------------
    // PlatformInfo class.
    // ----------------------------------------------------
    /**
    * @class
    *
    * Initialize a new instance of the PlatformInfo class.
    * @public
    * @constructor
    */
    PlatformInfo = function () {
        // Initialize properties.
        this.original = '';

        // Initialize this instance.
        this.initialize(window.navigator.userAgent);
    };

    /**
    * Initialize this instance according to the specified user agent string.
    * @private
    * @param    {string}    userAgent       UserAgent string.
    */
    PlatformInfo.prototype.initialize = function (userAgent) {
        var platform = '';
        var mobile = /iphone|ipod|ipad|android|phone|blackberry|symbian|mobile/;

        // Normalize useragent string to lowercase.
        userAgent = userAgent.toLowerCase();

        // Detect platform type.
        if (mobile.exec(userAgent)) {
            if ((userAgent.indexOf('android') >= 0 && userAgent.indexOf('mobile') < 0) ||
            (userAgent.indexOf('ipad') >= 0)) {
                // Android tablet, iPad
                platform = 'tablet';
            } else {
                // Android phone, iPhone, iPod, Windows Phone, BlackBerry, Symbian
                platform = 'mobile';
            }
        } else if (userAgent.indexOf('windows') >= 0) {
            // Windows
            platform = 'windows';
        } else if (userAgent.indexOf('mac') >= 0) {
            // Max OS
            platform = 'mac';
        } else if (userAgent.indexOf('linux') >= 0) {
            // Linux
            platform = 'linux';
        } else {
            platform = 'unknown';
        }

        // Set properties. 
        this.original = platform;
        this[platform] = true;
    };

    /**
    * Whether the current platform is equal to the specified platform.
    * @public
    * @param    {string}    type    Platform type string.
    * @return   {boolean}   Whether the current platform is equal to the specified platform.
    */
    PlatformInfo.prototype.is = function (type) {
        return (typeof type === 'string') && (type.toLowerCase() === this.original);
    };

    // ----------------------------------------------------
    // Output "jquery.depend" function to the jQuery object.
    // ----------------------------------------------------
    /**
    * Provides browser infromation.
    * @public
    * @static
    * @type     BrowserInfo
    */
    $.browser = new BrowserInfo();

    /**
    * Provides platform information.
    * @public
    * @static
    * @type     PlatformInfo
    */
    $.platform = new PlatformInfo();

    /**
    * Resolve the problem of browser dependency or platform dependency.
    * @public
    * @static
    * @param    {object}    condition   Objects that includes condition of browser or platform dependency pattern.
    */
    $.depend = function () {
        var i, length, conditions, condition;

        conditions = arguments;

        for (i = 0, length = conditions.length; i < length; i++) {
            condition = conditions[i];
            if ((condition.on === true || condition.on === undefined) &&
                typeof condition.exe === 'function') {
                return condition.exe();
            }
        }

        if (console && console.log) {
            console.log('Not implemented default process in "$.depend" function.');
        }
    }
})(window, document, jQuery);
