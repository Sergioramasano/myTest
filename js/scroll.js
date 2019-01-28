$(window).scroll(function () {
    var ratio = $(document).scrollTop() / ((($(document).height() - ($(window).height())) / 100));
    $('#progress').width(ratio + "%");
    var b = $('#progress').width();
    var c = $('#cont').width();
    var d = 100 * b / c;
    var unsel = {
        'background-color':'white',
        'border':'3px solid transparent'
    };
    var sel = {
        'background-color':'green',
        'border':'3px solid white'
    };
    if (d <= 2) {
        $('.light-1').css(unsel);
    }
    else {
        $('.light-1').css(sel);

    }

    if (d < 50) {
        $('.light-2').css(unsel);
    }
    else {
        $('.light-2').css(sel);
    }

    if (d < 99) {
        $('.light-3').css(unsel);
    }
    else {
        $('.light-3').css(sel);
    }
});


// var b = $('#progress').width();

