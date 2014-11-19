/**
 * Created by Aleph on 11/19/14.
 */


$(function(){

    var homeC = $('div#home').offset().top - $('nav').outerHeight();
    var homeC2 = homeC + $('div#home').outerHeight();

    var sobreC = $('div#about').offset().top - $('nav').outerHeight();
    var sobreC2 = sobreC + $('div#about').outerHeight();

    var mensagemC = $('div#mensagem').offset().top - $('nav').outerHeight();
    var mensagemC2 = mensagemC + $('div#mensagem').outerHeight();

    var ondeC = $('div#onde').offset().top - $('nav').outerHeight();
    var ondeC2 = ondeC + $('div#onde').outerHeight();

    var planoC = $('div#plano').offset().top - $('nav').outerHeight();
    var planoC2 = planoC + $('div#plano').outerHeight();

    $(window).resize(function(){

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

    });

    $(window).scroll(function(){
        if( (homeC <= $(window).scrollTop()) && (homeC2 >= $(window).scrollTop()) ){
            $('.active').removeClass('active');

            $(window).width() < 768 ? $('nav.visible-xs .navhome').addClass('active') : $('nav.hidden-xs .navhome').addClass('active');
            goToActive();
        } else if ( (sobreC <= $(window).scrollTop()) && (sobreC2 >= $(window).scrollTop()) ){
            $('.active').removeClass('active');
            $(window).width() < 768 ? $('nav.visible-xs .navsobre').addClass('active') : $('nav.hidden-xs .navsobre').addClass('active');
            goToActive();
        } else if ( (mensagemC <= $(window).scrollTop()) && (mensagemC2 >= $(window).scrollTop()) ){
            $('.active').removeClass('active');
            $(window).width() < 768 ? $('nav.visible-xs .navmsg').addClass('active') : $('nav.hidden-xs .navmsg').addClass('active');
            goToActive();
        } else if ( (ondeC <= $(window).scrollTop()) && (ondeC2 >= $(window).scrollTop()) ){
            $('.active').removeClass('active');
            $(window).width() < 768 ? $('nav.visible-xs .navonde').addClass('active') : $('nav.hidden-xs .navonde').addClass('active');
            goToActive();
        } else if ( (planoC <= $(window).scrollTop()) && (planoC2 >= $(window).scrollTop()) ){
            $('.active').removeClass('active');
            $(window).width() < 768 ? $('nav.visible-xs .navplano').addClass('active') : $('nav.hidden-xs .navplano').addClass('active');
            goToActive();
        }
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
    $('body').animate({scrollTop: $('div#about').offset().top - $('nav').outerHeight()}, 500);
}

var goToMensagem = function () {
    $('body').animate({scrollTop: $('div#mensagem').offset().top - $('nav').outerHeight()}, 500);
}

var goToOnde = function () {
    $('body').animate({scrollTop: $('div#onde').offset().top - $('nav').outerHeight()}, 500);
}

var goToPlano = function () {
    $('body').animate({scrollTop: $('div#plano').offset().top - $('nav').outerHeight()}, 500);
}