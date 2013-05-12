jQuery plugin : jquery.depend
==========================

A jQuery plugin. This plugin provides following features. 

 * browser detection.
 * platform detection.
 * resolution of browser dependency.

This plugin use 'window.navigator.userAgent' string, when detect user's browser and platform.


Usage
--------------------------

'jquery.depend' plugin provide resolution of browser dependency problem, browser detection, and platform detection. The following sample code is part of this plugin features.

### Browser detection

This is a sample code of detecting browser type. This sample code (property) has boolean value according to client browser.

Example:

    $.browser.msie;

### Platform detection

This is a sample code of detecting platform type. This sample code (property) has boolean value according to client platform.

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


API documentation
--------------------------

### $.depend  

    $.depend(condition1, condition2, ...)

'condition' object should have following properties.

**on**  
Type: boolean  
A condition of executing specified function.  

**exe**  
Type : function  
A function that is called when the DOM element has been clicked.  

### $.browser

    $.browser

The '$.browser' object includes user's browser information.
This object has following properties.

 * opera
 * msie
 * firefox
 * chrome
 * browser
 * safari
 * unknown

### $.platform  

    $.platform

The '$.platform' object includes user's platform information.
This object has follwoing properties.

 * tablet
 * mobile
 * pc
 * iphone
 * ipod
 * ipad
 * android
 * windowsphone
 * windows
 * linux
 * mac
 * unknown


License
--------------------------
jQuery.depend plugin released under the MIT license.  
Please see MIT-LICENSE.txt for details.
