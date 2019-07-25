

   //  submenu
   $(function(){
    var width = $(window).width();
    $('.submenu > a').on('mouseover', function(){
        if(width > 1199){
            $(this).next('ul').fadeIn(200);
        }
    });

    $('.submenu > a').on('click', function(){
        if (width < 1100) {
        $(this).next('ul').slideToggle();
        return false;
        } 
    });

    if(width > 1199){
        $('.submenu').on('mouseleave', function(){
            $('.submenu').children('ul').fadeOut();
        });
    }

        // phone
        $('.more--btn').on('click', function(){
            var phones = document.querySelector('.col--phone ul');
            if($(phones).is(':visible')){
                $(phones).slideUp();
                $(this).removeClass('open');
            }
            else{
                $(phones).slideDown();
                $(this).addClass('open');
            }
        return false;
        });

        $('.nav--btn').on('click', function(){
          var menu = document.querySelector('header .nav');
          if($(menu).is(':visible')){
            $(menu).slideUp();
            $(this).removeClass('close');
          }
          else{
            $(menu).slideDown();
            $(this).addClass('close');
          }
          return false;
        });

        $('.phone--btn').on('click', function(){
          var contacts = document.querySelector('header .right');
          if($(contacts).is(':visible')){
            $(contacts).slideUp();
            $(this).removeClass('close');
          }
          else{
            $(contacts).slideDown();
            $(this).addClass('close');
          }
          return false;
        });
        $('.langs span').on('click', function(){
          $('.langs ul').slideToggle();
        });

        $('.search--btn').on('click', function(){
          var search = document.querySelector('.search form');
            $(search).addClass('show');
        });
        $('.search form span').on('click', function(){
          var search = document.querySelector('.search form');
            $(search).removeClass('show');
        })
});

// Modal
$(document).ready(function() {
	$('.call').on('click', function(){
		var link = $(this).attr('data-modal');
		$(link).fadeIn();
		return false;
	});

	$('.modal .close, .modal__layer').on('click', function() {
		$(this).parents('.modal, .mobile-contacts').fadeOut();
		return false;	
	});

    $('[name="tel"]').inputmask('+7 (999) 999-99-99');
    
    $('input[type="submit"]').on('click', function(){
		var success = $(this).attr('data-modal');
		$(success).fadeIn();
		return false;
    })
});


$(function(){
  $('.card-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      arrows: false,
      asNavFor: '.card-slider-nav'
    });
    $('.card-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.card-slider-for',
      arrows: true,
      dots: false,
      focusOnSelect: true
    });
    $('.partners-list').slick({
      autoplay: true,
      arrows: false,
      dots: false,
      speed: 1000,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
          {
              breakpoint: 850,
              settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
              }
          },
          {
              breakpoint: 768,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
       }       
    },
          {
              breakpoint: 540,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
          }       
    }
      ]
    });
}); 

$(function() {
  
      // Slick slider for prev/next thumbnails images
      $('.slideshow__slides').slick({
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
      });
      setTimeout(function() {
        $('.slideshow__slides .slick-prev').prepend('<div class="prev-slick-arrow arrow-icon"><span>&#60;</span></div><div class="prev-slick-img slick-thumb-nav"><img src="/prev.jpg" class="img-responsive"></div>');
        $('.slideshow__slides .slick-next').append('<div class="next-slick-arrow arrow-icon"><span>&#62;</span></div><div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="img-responsive"></div>');
        get_prev_slick_img();
        get_next_slick_img();
      }, 500);
  
      $('.slideshow__slides').on('click', '.slick-prev', function() {
        get_prev_slick_img();
      });
      $('.slideshow__slides').on('click', '.slick-next', function() {
        get_next_slick_img();
      });
      $('.slideshow__slides').on('swipe', function(event, slick, direction) {
        if (direction == 'left') {
          get_prev_slick_img();
        }
        else {
          get_next_slick_img();
        }
      });
      $('.slick-dots').on('click', 'li button', function() {
        var li_no = $(this).parent('li').index();
        if ($(this).parent('li').index() > li_no) {
          get_prev_slick_img()
        }
        else {
          get_next_slick_img()
        }
      });
      function get_prev_slick_img() {
        // For prev img
        var prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
        $('.prev-slick-img img').attr('src', prev_slick_img);
        $('.prev-slick-img').css('background-image', 'url(' + prev_slick_img + ')');
        // For next img
        var prev_next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
        $('.next-slick-img img').attr('src', prev_next_slick_img);
        $('.next-slick-img').css('background-image', 'url(' + prev_next_slick_img + ')');
      }
      function get_next_slick_img() {
        // For next img
        var next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
        $('.next-slick-img img').attr('src', next_slick_img);
        $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
        // For prev img
        var next_prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
        $('.prev-slick-img img').attr('src', next_prev_slick_img);
        $('.prev-slick-img').css('background-image', 'url(' + next_prev_slick_img + ')');
      }
      // End
    });

