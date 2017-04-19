$(document).ready(function(){
    /*var onClickSetTimeoutID;*/
    function activateHexagons(currentElement){
        var currentHexagon = $(currentElement).attr('data-id');

        $('li').removeClass('js-hexagon-selected');
        $(currentElement).addClass('js-hexagon-selected');
        $('.js-hex-text').hide();
        $('.js-hex-descr').hide();
        $('.js-hex-text[data-id="'+currentHexagon+'"]').show();
        $('.js-hex-descr[data-id="'+currentHexagon+'"]').show();
        $('.js-hex-icon').hide();
        $('.js-hex-icon[data-id="'+currentHexagon+'"]').show();
    }

    activateHexagons($('.js-hexagon').first());


    $('.js-hexagon').on('click', function(e) {
        /*clearInterval(onClickSetTimeoutID);*/
        activateHexagons(this);

    });

    /*$(function() {
        var i = 0;
        var $target = $('.js-hexagon');
        onClickSetTimeoutID = setInterval(function(){
            $target.removeClass('js-hexagon-selected');
            activateHexagons($target.eq(i).addClass('js-hexagon-selected'));
            if ( i == $target.length - 1 ) {
                i = 0;
            } else {
                i++;
            }
        }, 1000);
    });*/
});


