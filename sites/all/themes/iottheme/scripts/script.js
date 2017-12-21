var Drupal = Drupal || {};

(function($, Drupal){
  "use strict";

  function HeaderSearch() {
    $('.region-navigation .block-search').before('<div class="dropdow-search-buttom"><i class="fa fa-search"></i></div>');
    $('.dropdow-search-buttom').click(function(){
      $(this).find('i.fa').toggleClass('fa-search fa-times');
      $(this).next('.region-navigation .block-search').toggleClass('show');
    });
  }

  function MenuFixed() {
    var header_height = $('.header-top').outerHeight(true);
    var header_wrapper = $('header.navbar').height();

    $(window).scroll(function(){
      var window_scroll = $(window).scrollTop();

      if (window_scroll >= header_height)
        $('header.navbar').css({'height': header_wrapper}),
        $('.header-inner').addClass('fixed');
      else
        $('header.navbar').css({'height': 'inherit'}),
        $('.header-inner').removeClass('fixed');
    });
  }

  function SildeFade($name) {
    var parent_slide = $name;
    $(parent_slide).slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: false,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      cssEase: 'linear'
    });
  }

  function SildeCarousel($name, $number) {
    var parent_slide = $name;
    $(parent_slide).slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: $number,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: $number - 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  function ImageBackground($wrappre_item_class) {
    var wrapper_item = $wrappre_item_class;
    $(wrapper_item).each(function(){
      var parent_img = $(this).find('div[class*=image] img');
      var path_img = parent_img.attr('src');
      parent_img.hide();
      $(this).find('.field-type-image').css({
        'background-image': 'url(' + path_img + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      });
    });
  }

  function colorBox($classes) {
    var class_item = $classes;
    $(class_item).colorbox({iframe:true, innerWidth:640, innerHeight:390});
  }

  function ovrideImageUrl() {
    var wrapper_item = $('.field-case-studies-slide .group-media-content');
    wrapper_item.each(function() {
      var wrapper_image = $(this).find('> .field-type-image img');
      var wrapper_video = $(this).find('> .field-type-video-embed-field .field-item');
      var video_embed = wrapper_video.text().replace("watch?v=", "embed/");
      wrapper_image.wrap('<a class="video-colorbox" href="'+video_embed+'"></a>');
      colorBox('.video-colorbox');
    });
  }

  $(document).ready(function() {
    // Call to function
    MenuFixed();
    HeaderSearch();
    SildeFade('.views-slide-oneitem .view-content');
    SildeFade('.field-slideshow-detail .field-items');
    SildeCarousel('.block-news-update .views-custom-control > .view-content > .views-row', 2);
    SildeCarousel('.field-case-studies-slide', 3);
    ImageBackground('.block-feature-post .field-name-field-block-get-nodes > .field-items > .field-item');
    ovrideImageUrl();
  });

  $(window).load(function() {
    // Call to function
  });

  $(window).resize(function() {
    // Call to function
  });
})(jQuery, Drupal);
