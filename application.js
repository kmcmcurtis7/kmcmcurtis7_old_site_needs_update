$('body').scrollspy({ target:'#navbar-example'});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});