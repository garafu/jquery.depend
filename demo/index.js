///<reference path="./jquery-1.9.1.js" />

$(window).ready(function () {
    var message = '';
    
    message = $.depend({
        on: ($.browser.is('msie') && $.browser.version.isOrLess(8)),
        exe: function () {
            return 'ie, and version is or less 8.';
        }
    }, {
        on: ($.browser.is('msie') && $.browser.version.isMoreThan(8)),
        exe: function () {
            return 'ie, and version is more than 8.';
        }
    }, {
        exe: function () {
            return 'non ie browser.';
        }
    });
    
    window.alert(message);
});
