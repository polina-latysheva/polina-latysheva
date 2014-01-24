$(document).ready(function() {

      var section = $(window).height();

      // Scroll to section
      $('nav a').on('click',function(e) {
        var $link = $(this);

        $('nav .current').removeClass("current");
        $(this).parent().addClass("current");

        $('html, body').stop().animate({
          scrollTop: $($link.attr('href')).offset().top
        }, 1500,'easeInOutExpo');

        if ($(this).attr('href')  == '#skills') {
          $('#skills').addClass('anim');
        }
        else {
          $('#skills').removeClass('anim');
        }

        e.preventDefault();
      });


      function getScrollTop() {
        if (typeof pageYOffset!= 'undefined') {
          // Most browsers
          return pageYOffset;
        }
        else {
          var B = document.body; // IE 'quirks'
          var D = document.documentElement; // IE with doctype
          D = (D.clientHeight)? D: B;
          return D.scrollTop;
        }
      }


  // Skills Set

  $(function() {
    $('#skills_set li').hover(
      function() {
        $(this).text($(this).attr('backside'));
    },
      function() {
        $(this).text($(this).attr('frontside'));
      }
    );
  });


  // Work Exeperience

  var current = $('#experience').find('.current_point');

  $('#experience').find('.points').hover(function() {
    if ($(this).hasClass('step1')) {
      current.stop(true, false).animate({left: '94px'}, 400);
    }
    else if ($(this).hasClass('step2')) {
      current.stop(true, false).animate({left: '486px'}, 400);
    }
    else if ($(this).hasClass('step3')) {
      current.stop(true, false).animate({left: '596px'}, 400);
    }
    else if ($(this).hasClass('step4')) {
      current.stop(true, false).animate({left: '706px'}, 400);
    }
    else if ($(this).hasClass('step5')) {
      current.stop(true, false).animate({left: '816px'}, 400);
    }
  });
});
