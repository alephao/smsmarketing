/**
 * Created by Aleph on 11/19/14.
 */


$(function(){

    var homeC;    var homeC2;
    var sobreC;    var sobreC2;
    var mensagemC;    var mensagemC2;
    var ondeC;    var ondeC2;
    var planoC;    var planoC2;

    var setDivsHeight = function() {
        $('.orange-bg, #onde').each(function(){
            if ( $(window).height() > $(this).outerHeight() ) {

                $(this).css({
                    height: ($(window).height() - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight()))
                });

            }
        });
    }

    setDivsHeight();

    $(window).resize(function(){

        setDivsHeight();

        $('.stepcircle').each(function(){
            if ($(this).width() > $(this).height()){
                $(this).css('height', $(this).width());
            } else {
                $(this).css('width', $(this).height());
            }
        });

        $(window).width() < 768 ? $('#content').css('margin-top', $('nav.visible-xs').outerHeight()) : $('#content').css('margin-top', $('nav.hidden-xs').outerHeight());

        $('.nav-moving-bg').css({
            height: $('nav.hidden-xs').outerHeight() - 1,
            left: $('.active').offset().left,
            width: $('.active').outerWidth() -1
        });

        $('.m-nav-moving-bg').css({
            height: $('nav.visible-xs').outerHeight() - 1,
            left: $('.active').offset().left,
            width: $('.active').outerWidth() -1
        });

        $(window).scroll();

    });

    $(window).scroll(function(){
        homeC = $('#home').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        homeC2 = homeC + $('#home').outerHeight();

        sobreC = $('#about').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        sobreC2 = sobreC + $('#about').outerHeight();

        mensagemC = $('#mensagem').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        mensagemC2 = mensagemC + $('#mensagem').outerHeight();

        ondeC = $('#onde').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        ondeC2 = ondeC + $('#onde').outerHeight();

        planoC = $('#plano').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        planoC2 = planoC + $('#plano').outerHeight();

        $('.active').removeClass('active');

        if ( (sobreC >= $(window).scrollTop()) && (sobreC2 < $(window).scrollTop() + $(window).height()) || (sobreC <= $(window).scrollTop()) && (sobreC2 > $(window).scrollTop())){
            $(window).width() < 768 ? $('nav.visible-xs .navsobre').addClass('active') : $('nav.hidden-xs .navsobre').addClass('active');
        } else if ( (mensagemC <= $(window).scrollTop()) && (mensagemC2 > $(window).scrollTop()) ){
            $(window).width() < 768 ? $('nav.visible-xs .navmsg').addClass('active') : $('nav.hidden-xs .navmsg').addClass('active');
        } else if ( (ondeC <= $(window).scrollTop()) && (ondeC2 > $(window).scrollTop()) ){
            $(window).width() < 768 ? $('nav.visible-xs .navonde').addClass('active') : $('nav.hidden-xs .navonde').addClass('active');
        } else if ( (planoC <= $(window).scrollTop()) && (planoC2 > $(window).scrollTop()) ){
            $(window).width() < 768 ? $('nav.visible-xs .navplano').addClass('active') : $('nav.hidden-xs .navplano').addClass('active');
        } else {
            $(window).width() < 768 ? $('nav.visible-xs .navhome').addClass('active') : $('nav.hidden-xs .navhome').addClass('active');
        }

        goToActive();
    });

    $(window).resize();

});

var goToActive = function() {
    $('.nav-moving-bg').css('left', $('.active').offset().left);
    $('.nav-moving-bg').css('width', $('.active').outerWidth());

    $('.m-nav-moving-bg').css('left', $('.active').offset().left);
    $('.m-nav-moving-bg').css('width', $('.active').outerWidth());
}

var goToHome = function () {
    $('body').animate({scrollTop: 0}, 500);
}

var goToAbout = function () {
    $('body').animate({
        scrollTop: $('#about').offset().top -
                  ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}

var goToMensagem = function () {
    $('body').animate({
        scrollTop:  $('#mensagem').offset().top -
                   ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}

var goToOnde = function () {
    $('body').animate({
        scrollTop: $('#onde').offset().top -
                  ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}

var goToPlano = function () {
    $('body').animate({
        scrollTop: $('#plano').offset().top -
                  ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}