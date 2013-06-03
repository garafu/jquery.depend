jQuery plugin : jquery.depend
==========================

A jQuery plugin provides following features. 

 * browser detection.(msie, firefox, chrome, opera, safari...)
 * browser version detection.
 * platform detection.(pc, mobile, tablet...)
 * resolution of client browser dependency.
 * support backward contribution.(older version than jQuery 1.9)

This plugin use 'window.navigator.userAgent' string, when detect user's browser and platform.

Try out [DEMO](http://garafu.github.io/jquery.depend/demo/index.html).


Usage
--------------------------

'jquery.depend' plugin provide resolution of browser dependency problem, browser detection, and platform detection. The following sample code is part of this plugin features.

### Browser detection

This is a sample code of detecting browser type. This sample code (property) has boolean value according to client browser.
This plugin detects IE, Firefox, Chrome, Opera, Android Default Browser, Safari, Silk, Mercury, Opera Mini.

Example:

    $.browser.msie;

### Platform detection

This is a sample code of detecting platform type. This sample code (property) has boolean value according to client platform.
This plugin detects pc(windows, linux, mac), mobile(iPhone, Android Phone, Windows Phone, BlackBerry, Symbian), tablet(iPad, Andoroid Tablet, Kindle Fire).

Example:

    $.platform.windows;

### Resolution of browser dependency

Example:  

    var message = $.depend({
                        on: $.browser.is('msie') && $.browser.version.isOrLess(8),
                        exe: function () {
                            return 'Your browser is MSIE, and version is or less 8.0.'
                        }
                    }, {
                        // This code is default action.
                        exe: function () {
                            return 'Other browser.'
                        }
                    });
    
    // This "alert" show message according to browser and browser version.
    window.alert(message);

### Backward compatibility

Support backward compatibility for the version that is older thanjQuery 1.9.
If the following property is true, support backward compatibility.

Example:

    window.__BACKWARD_COMPATIBILITY_ENABLED


API documentation
--------------------------

Please see the [API Documentation/wiki](https://github.com/garafu/jquery.depend/wiki/API-Documentation) for detail.


License
--------------------------
jQuery.depend plugin released under the MIT license.  
Please see [MIT-LICENSE.tx](https://github.com/garafu/jquery.depend/blob/master/MIT-LICENSE.txt)t for details.
