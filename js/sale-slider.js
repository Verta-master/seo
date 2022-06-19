function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".sale__slider");
  
  if (checkWidth > 1200) {
    if (typeof owlPost.data('owl.carousel') != 'undefined') {
      owlPost.data('owl.carousel').destroy();
    }
    owlPost.removeClass('owl-carousel');
  } else if (checkWidth < 1201) {
    owlPost.addClass('owl-carousel');
    owlPost.owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText:["",""],
      items: 1,
    });
  }
}

postsCarousel();
$(window).resize(postsCarousel);	