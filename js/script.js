//Mobile menu
$('.menu__block').niceScroll({
  cursorcolor: '#7a029f',
});

$('.menu__btn').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('menu__btn--open');
  $(".menu__block").scroll(function(){
    $(".menu__block").getNiceScroll().resize();
  });
})
//
//$('.menu-btn').click(function() {
//  $('.menu').toggleClass('menu--open');
//  $(this).toggleClass('menu-btn--close');
//})


var menuBtn = $(".menu-btn"),
    menu = $(".menu");

menuBtn.on("click", function () {
    if ($(this).hasClass("menu-btn--close")) {
        $(this).removeClass("menu-btn--close");
        menu.removeClass('menu--open');
    } else {
        $(this).addClass("menu-btn--close");
        menu.addClass('menu--open');
    }
});

$(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.removeClass('menu--open');
        menuBtn.removeClass("menu-btn--close");
    };
});

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});

//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.nav__item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.nav__item a').each(function () {
        $(this).removeClass('nav__link--active');
    })
    $(this).addClass('nav__link--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 100
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav__link').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav__link').removeClass("nav__link--active");
          currLink.addClass("nav__link--active");
      }
  });
};
