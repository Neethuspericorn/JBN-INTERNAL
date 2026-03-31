$(document).ready(function() {
    $('.video-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  rows: false,
  prevArrow: $(".next-arrow"),
  nextArrow: $(".prev-arrow"),
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
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 var vimeoPlayer = null;
    var videoId = null;

    $('.video-thumb').on('click', function () {
        videoId = $(this).data('vimeo-id');
        $('#videoModal').modal('show');
    });

    $('#videoModal').on('shown.bs.modal', function () {

        var iframe = $('<iframe>', {
            src: 'https://player.vimeo.com/video/' + videoId + '?autoplay=1',
            frameborder: 0,
            allow: 'autoplay; fullscreen; picture-in-picture',
            allowfullscreen: true
        });

        $('.video-embed-container').html(iframe);

        vimeoPlayer = new Vimeo.Player(iframe[0]);

    });

    $('#videoModal').on('hidden.bs.modal', function () {

        if (vimeoPlayer) {
            vimeoPlayer.destroy();
            vimeoPlayer = null;
        }

        $('.video-embed-container').empty();

    });
});