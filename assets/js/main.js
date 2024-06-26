$(document).ready(function(){

  
  $('.mySliderFile').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:1,

    prevArrow:
    // '<button type="button" class="slick-prev"> <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M10.00248.06019L1.0625 17.0001L10.0024 25.9399L11.505 24.4373L5.13015 18.0625L32.8868 18.0625L32.8868 15.9375L5.13035 15.9375L11.505 9.56283L10.0024 8.06019Z"fill="#BBBBBB"/></svg> </button>',
    '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M10.0024 8.06013L1.0625 17L10.0024 25.9399L11.505 24.4372L5.13015 18.0624L32.8868 18.0624L32.8868 15.9374L5.13035 15.9374L11.505 9.56277L10.0024 8.06013Z"fill="#BBBBBB"/></svg>  </button>',
    nextArrow:
    '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M28.2324 30.5174L38.75 19.9999L28.2324 9.48242L26.4647 11.2502L33.9645 18.75L1.30969 18.75L1.30969 21.25L33.9643 21.25L26.4647 28.7496L28.2324 30.5174Z" fill="#5C6856"/></svg> </button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
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
    ],

  });

  




  $('.shoebag').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:1,
    dots: true,

    // prevArrow:
    // '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    // nextArrow:
    // '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        }
      },
      {
        breakpoint: 900,
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
    ],

  });




  $('.latestArrival').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:1,

    prevArrow:
    // '<button type="button" class="slick-prev"> <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M10.00248.06019L1.0625 17.0001L10.0024 25.9399L11.505 24.4373L5.13015 18.0625L32.8868 18.0625L32.8868 15.9375L5.13035 15.9375L11.505 9.56283L10.0024 8.06019Z"fill="#BBBBBB"/></svg> </button>',
    '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M10.0024 8.06013L1.0625 17L10.0024 25.9399L11.505 24.4372L5.13015 18.0624L32.8868 18.0624L32.8868 15.9374L5.13035 15.9374L11.505 9.56277L10.0024 8.06013Z"fill="#BBBBBB"/></svg>  </button>',
    nextArrow:
    '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M28.2324 30.5174L38.75 19.9999L28.2324 9.48242L26.4647 11.2502L33.9645 18.75L1.30969 18.75L1.30969 21.25L33.9643 21.25L26.4647 28.7496L28.2324 30.5174Z" fill="#5C6856"/></svg> </button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
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
    ],

  });



  $('.newArrival').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:1,

    // prevArrow:
    // '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    // nextArrow:
    // '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
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
    ],

  });


  $('.relatedProduct').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:1,

    // prevArrow:
    // '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    // nextArrow:
    // '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
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
    ],

  });



  $('.mySliderFileNew').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:3,
    dots:true,
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
        breakpoint: 600,
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
    ],

  });



  // $('.slider-for').slick({
  //   infinite:true,
  //   slidesToShow: 3,

  //   slidesToScroll:1,
  //    dots:true,
  //     responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
       
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]


  // });



  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    // slidesToShow: 1,

    prevArrow:
   
    '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.46849 0.414498C5.79194 0.673255 5.84438 1.14522 5.58562 1.46867L1.96044 6.00015L5.58562 10.5316C5.84438 10.8551 5.79194 11.327 5.46849 11.5858C5.14505 11.8446 4.67308 11.7921 4.41432 11.4687L0.414321 6.46867C0.195189 6.19476 0.195189 5.80554 0.414321 5.53163L4.41432 0.531628C4.67308 0.208182 5.14505 0.155741 5.46849 0.414498Z" fill="black"/></svg>  </button>',
    nextArrow:
    '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z" fill="black"/></svg></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // slidesToShow: 1,
          // slidesToScroll: 2,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          // slidesToShow: 2,/
        },

      
      },
      {
        breakpoint: 480,
        settings: {
          // slidesToShow: 2,
          // slidesToScroll: 2
        },

      
      }
    ]
  });




  $('.tote').slick({
    centerMode: true,
    dots:true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },

      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      
      }
    ]
  });


    $('.our_test').slick({
    centerMode: true,
    dots:false,
    centerPadding: '60px',
    slidesToShow: 1,

    prevArrow:
    '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.46849 11.5856C5.79194 11.3269 5.84438 10.8549 5.58562 10.5315L1.96044 5.99997L5.58563 1.46849C5.84438 1.14505 5.79194 0.673077 5.4685 0.41432C5.14505 0.155562 4.67308 0.208004 4.41432 0.53145L0.414322 5.53145C0.19519 5.80536 0.19519 6.19458 0.414322 6.46849L4.41432 11.4685C4.67308 11.7919 5.14505 11.8444 5.46849 11.5856Z" fill="black"/></svg>  </button>',
    nextArrow:
    '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z" fill="black"/></svg></button>',


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
         
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },

      
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },

      
      }
    ]
  });


  $(document).ready(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });


    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  });





});








