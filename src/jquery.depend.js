///<reference path="./lib/jquery/jquery-1.9.1.js" />
/**
* jQuery pugin : This plugin provides follwing featurs.
*   - Browser detection.
*   - Platform detection.
*   - Resolution of browser dependency problem.
*/
/**
* @license  Copyright (c) 2013 akinari tsugo
* This script released under the MIT license (MIT-LICENSE.txt).
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
        this.original = null;
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

        this.original = version;
        this.major = (arr && arr[0]) ? parseInt(arr[0], 10) : null;
        this.minor = (arr && arr[1]) ? parseInt(arr[1], 10) : null;
        this.build = (arr && arr[2]) ? parseInt(arr[2], 10) : null;
        this.revision = (arr && arr[3]) ? parseInt(arr[3], 10) : null;

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
                    } else if (revision === undefined) {
                        res = true;
                    }
                } else if (build === undefined) {
                    res = true;
                }
            } else if (minor === undefined) {
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

        if (typeof major === 'number' && this.major < major) {
            return true;
        } else if (this.major === major) {
            if (typeof minor === 'number' && this.minor < minor) {
                return true;
            } else if (this.minor === minor) {
                if (typeof build === 'number' && this.build < build) {
                    return true;
                } else if (this.build === build) {
                    if (revision === undefined || (typeof revision === 'number' && this.revision <= revision)) {
                        return true;
                    } else {
                        return false;
                    }
                } else if (build === undefined) {
                    return true;
                } else {
                    return false;
                }
            } else if (minor === undefined) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

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

        if (typeof major === 'number' && this.major < major) {
            return true;
        } else if (this.major === major) {
            if (typeof minor === 'number' && this.minor < minor) {
                return true;
            } else if (this.minor === minor) {
                if (typeof build === 'number' && this.build < build) {
                    return true;
                } else if (this.build === build) {
                    if (typeof revision === 'number' && this.revision < revision) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }

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

        if (typeof major === 'number' && this.major > major) {
            return true;
        } else if (this.major === major) {
            if (typeof minor === 'number' && this.minor > minor) {
                return true;
            } else if (this.minor === minor) {
                if (typeof build === 'number' && this.build > build) {
                    return true;
                } else if (this.build === build) {
                    if (revision === undefined || (typeof revision === 'number' && this.revision >= revision)) {
                        return true;
                    } else {
                        return false;
                    }
                } else if (build === undefined) {
                    return true;
                } else {
                    return false;
                }
            } else if (minor === undefined) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

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

        if (typeof major === 'number' && this.major > major) {
            return true;
        } else if (this.major === major) {
            if (typeof minor === 'number' && this.minor > minor) {
                return true;
            } else if (this.minor === minor) {
                if (typeof build === 'number' && this.build > build) {
                    return true;
                } else if (this.build === build) {
                    if (typeof revision === 'number' && this.revision > revision) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }

    };

    /**
    * Get the version string.
    * @public
    * @return   {string}    Version string.
    */
    Version.prototype.toString = function () {
        return this.original;
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
        var browser = ''
        var architecture = ''
        var version = null;

        // Normalize useragent string to lowercase.
        userAgent = userAgent.toLowerCase();

        // Detect browser and browser version.
        if (userAgent.indexOf('opera') >= 0) {

            if (userAgent.indexOf('opera mini') < 0) {

                // Opera
                browser = 'opera';

                // Opera 9.00, Opera/9.0
                array = /opera[\s\/]+([\d\.]+)/.exec(userAgent);
                version = (array) ? array[1] : '';

            } else {

                // Opera Mini
                browser = 'operamini';
                
                // Opera Mini/7.0.5
                array = /opera mini\/([\d\.]+)/.exec(userAgent);
                version = (array) ? array[1] : '';

            }

        } else if (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('trident') >= 0) {

            // Internet Explorer, Windows Phone, Sleipnir, Adobe Bridge
            browser = 'msie';

            // MSIE 9.0, rv 11.0
            array = /[msie|rv] ([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';

        } else if (userAgent.indexOf('firefox') >= 0) {

            // Firefox(not include Mozilla)
            browser = 'firefox';

            // Firefox/0.9.3
            array = /firefox\/([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';

        } else if (userAgent.indexOf('chrome') >= 0 || userAgent.indexOf('crios') >= 0) {

            // Chrome, Android default this
            browser = 'chrome';

            // Chrome/6.0.472.55
            array = /[chrome|crios]\/([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';

        } else if (userAgent.indexOf('android') >= 0) {

            // Android default browser
            browser = 'browser';

            // Version/4.0
            array = /version\/([\d\.]+)/.exec(userAgent);
            version = (array) ? array[1] : '';

        } else if (userAgent.indexOf('silk') >= 0) {

            // Silk
            browser = 'silk';

            // Silk/2.4
            array = /silk\/([\d\.]*)/.exec(userAgent);
            version = (array) ? array[1] : '';

        } else if (userAgent.indexOf('mercury') >= 0) {

            // Safari
            browser = 'mercury';

            // Mercury/7.4.2
            array = /mercury\/([\d\.]+)/.exec(userAgent);
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

        // Architecture.
        if (userAgent.indexOf('arm') >= 0) {
            architecture = 'arm';
        } else if (userAgent.indexOf('win64') >= 0) {
            if (userAgent.indexOf('ia64') >= 0) {
                architecture = 'ia64';
            } else {
                architecture = 'x64';
            }
        } else {
            architecture = 'x86';
        }

        // Set properties.
        this.original = browser;
        this[browser] = true;
        this[architecture] = true;
        this.version = (!window.__BACKWARD_COMPATIBILITY_ENABLED) ? new Version(version) : version;

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

        var type = '';
        var platform = '';
        var architecture  = '';
        var version = '';
        var result = null;
        var mobile = /iphone|ipod|ipad|android|windows phone|silk|blackberry|symbian|mobile/;
        var pc = /windows|mac|linux/;
        var array;

        // Normalize useragent string to lowercase.
        userAgent = userAgent.toLowerCase();

        // Detect platform type.
        result = mobile.exec(userAgent);
        if (result) {
            if (userAgent.indexOf('silk') >= 0) {
                // Silk
                type = 'tablet';
                platform = 'android';
            } else {
                if ((userAgent.indexOf('android') >= 0 && userAgent.indexOf('mobile') < 0) ||
                    (userAgent.indexOf('ipad') >= 0)) {
                    // Android tablet, iPad
                    type = 'tablet';
                } else {
                    // Android phone, iPhone, iPod, Windows Phone, BlackBerry, Symbian
                    type = 'mobile';
                }
                platform = result[0].replace(' ', '');
            }
        } else {
            if (userAgent.indexOf('windows') >= 0) {
                type = 'pc';
                platform = 'windows';
                
                // Windows NT x.x
                array = /windows nt ([\d\.]+)/.exec(userAgent);
                version = (array) ? array[1] : '';
                
                // Architecture.
                if (userAgent.indexOf('arm') >= 0) {
                    architecture = 'arm';
                } else if (userAgent.indexOf('win64') >= 0) {
                    if (userAgent.indexOf('ia64') >= 0) {
                        architecture = 'ia64';
                    } else {
                        architecture = 'x64';
                    }
                } else if (userAgent.indexOf('wow64') >= 0) {
                    architecture = 'x64';
                } else {
                    architecture = 'x86';
                }
            } else if (userAgent.indexOf('mac') >= 0) {
                type = 'pc';
                platform = 'mac';
                architecture = 'unknown';
            } else if (userAgent.indexOf('linux') >= 0) {
                type = 'pc';
                platform = 'linux';
                architecture = 'unknown';
            } else {
                // Unknown platform.
                type = 'unknown';
                platform = 'unknown';
                architecture = 'unknown';
            }
        }

        // Set properties. 
        this.type = type;
        this.original = platform;
        this[type] = true;
        this[platform] = true;
        this[architecture] = true;
        this.version = new Version(version);

    };

    /**
    * Whether the current platform is equal to the specified platform.
    * @public
    * @param    {string}    type    Platform type string.
    * @return   {boolean}   Whether the current platform is equal to the specified platform.
    */
    PlatformInfo.prototype.is = function (name) {

        if (typeof name === 'string') {
            name = name.toLowerCase();
            return ((name === this.original) || (name === this.type));
        } else {
            return false;
        }

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

        if (window.console && window.console.log) {
            window.console.log('Not implemented default process in "$.depend" function.');
        }

    };

})(window, document, jQuery);
