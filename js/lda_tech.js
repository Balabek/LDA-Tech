/**
 * Created by KRM on 2/27/16.
 */

$(document).ready(function(){









    $('.lda_newz_slide').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


});


$(document).ready(function(){

    $(".toggle_srvc_box").on("click", function() {
        console.log("initiated...");

        $(this).find('i').toggleClass('fa-arrow-circle-o-down fa-arrow-circle-o-up');

    });



    // Temporary primitive script for the required behavior.
    // To whom it may concern: optimize it in future!
    $('span#info_1').on('mouseover',function(){
        $('#detailz_1').css({visibility:'visible',opacity:'1'});
    });
    $('span#info_1').on('mouseleave',function(){
        $('#detailz_1').css({visibility:'hidden',opacity:'0'});
    });

    $('span#info_2').on('mouseover',function(){
        $('#detailz_2').css({visibility:'visible',opacity:'1'});
    });
    $('span#info_2').on('mouseleave',function(){
        $('#detailz_2').css({visibility:'hidden',opacity:'0'});
    });

    $('span#info_3').on('mouseover',function(){
        $('#detailz_3').css({visibility:'visible',opacity:'1'});
    });
    $('span#info_3').on('mouseleave',function(){
        $('#detailz_3').css({visibility:'hidden',opacity:'0'});
    });

    $('span#info_4').on('mouseover',function(){
        $('#detailz_4').css({visibility:'visible',opacity:'1'});
    });
    $('span#info_4').on('mouseleave',function(){
        $('#detailz_4').css({visibility:'hidden',opacity:'0'});
    });

    $('span#info_5').on('mouseover',function(){
        $('#detailz_5').css({visibility:'visible',opacity:'1'});
    });
    $('span#info_5').on('mouseleave',function(){
        $('#detailz_5').css({visibility:'hidden',opacity:'0'});
    });

    $('span#info_6').on('mouseover',function(){
        $('#detailz_6').css({visibility:'visible',opacity:'1'});
    });
    $('span#info_6').on('mouseleave',function(){
        $('#detailz_6').css({visibility:'hidden',opacity:'0'});
    });



    //...
    var width = $(window).width();
    var infoSumStripe = $('.info_summary');

    if ((width <= 767)) {
        $(infoSumStripe).removeClass('hvr-bubble-right').addClass('hvr-bubble-bottom');
    } else {
        $(infoSumStripe).addClass('hvr-bubble-right').removeClass('hvr-bubble-bottom');
    }




    // Emulate an on-hover effect on a sub-menu button and display the content box of sub-menu
    function showSubAbout(event) {
        if (!($('#subabout').hasClass('kinda_hover')||$('#fly_about').hasClass('show_flyabout')) ) {
            $('#subabout').toggleClass('kinda_hover');
            $('#fly_about').toggleClass('show_flyabout');
            event.stopPropagation();
        //return false;
        }
    }

    function hideSubAbout(event) {
        if ($('#subabout').hasClass('kinda_hover')||$('#fly_about').hasClass('show_flyabout')) {
            $('#subabout').toggleClass('kinda_hover');
            $('#fly_about').toggleClass('show_flyabout');
        //event.stopPropagation();
        }
    }

    $( '#subabout' ).on('mouseover ',function(e) {
        showSubAbout(e);
        $('.main').on('mouseover ',function(e) {
            $('.main').off('mouseover ');
            hideSubAbout(e);
        });
    });








});