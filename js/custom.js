$(document).ready(function () {
    if (window.innerWidth >= 481) {
        $('div.angebotName').removeClass('col-xs-6').addClass('col-xs-4');
        $('div.angebotPreis').removeClass('col-xs-6').addClass('col-xs-4');
    } else {
        $('div.angebotName').removeClass('col-xs-4').addClass('col-xs-6');
        $('div.angebotPreis').removeClass('col-xs-4').addClass('col-xs-6');
    };

    //float:right;width:300px;margin:-20px;
    $(window).resize(function () {
        if ($(this).width() >= 481) {
            $('div.angebotName').removeClass('col-xs-6').addClass('col-xs-4');
            $('div.angebotPreis').removeClass('col-xs-6').addClass('col-xs-4');
            $('#imgResize').css("float", "right").css("width", "300").css("margin", "-20px");
        } else { //if ($(this).width() < 1280)// && $(this).width() >= 980) {
            $('div.angebotName').removeClass('col-xs-4').addClass('col-xs-6');
            $('div.angebotPreis').removeClass('col-xs-4').addClass('col-xs-6');
            $('#imgResize').css("float", "").css("width", "").css("margin", "");
        }
    });

    // call waypoint plugin
    $('.waypoint-fade').each(function () {
        var _this = this;
        var inview = new Waypoint({
            element: _this,
            handler: function (direction) {
                $(this.element).animate({
                    'opacity': 1
                }, 750)
            },
            offset: '90%'
        });
    });

    //Tool to find overflowing context which is over width of the document
    // var docWidth = document.documentElement.offsetWidth;

    // [].forEach.call(
    //     document.querySelectorAll('*'),
    //     function (el) {
    //         if (el.offsetWidth > docWidth) {
    //             console.log(el);
    //         }
    //     }
    // );
});