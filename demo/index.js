///<reference path="./jquery-1.9.1.js" />

$(window).ready(function () {
    var message = '';

    message += 'your browser is ';
    message += $.depend({
        on: ($.browser.is('msie') && $.browser.version.isOrLess(8)),
        exe: function () {
            return 'IE, and version is or less than 8.0.';
        }
    }, {
        on: ($.browser.is('msie') && $.browser.version.isMoreThan(8)),
        exe: function () {
            return 'IE, and version is more than 8.0.';
        }
    }, {
        exe: function () {
            return 'not IE.';
        }
    });

    $('#message').html(message);
    $('#browser').html($.browser.original);
    $('#version').html($.browser.version.original);
    $('#platform').html($.platform.type + ' ( ' + $.platform.original + ' )');
});
