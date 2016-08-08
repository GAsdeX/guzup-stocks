var eventClick = new Event("click");


$(window).ready(function(){
   $('.carousel').slick({
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
       autoplay: true,
       autoplaySpeed:3000
   });

   $('.weather').on('mouseenter', function(){
   		$('.weather-text').css('border-bottom', '1px solid white');
   }).mouseleave(function(){
     $('.weather-text').css('border-bottom', 'none');
    });

    $('.wrapper-photo').slick({
        prevArrow: $('.prev-small'),
        nextArrow: $('.next-small'),
        slidesToShow: 3,
        slidesToScroll: 1
    });

   //  ============================ SEARCH FIELD ============================ 
    $( ".search-ic_wrap" ).click(function() {
		if($('#nav-toggle.active').length > 0){
			menu_btn.dispatchEvent(eventClick);
	  	}

    	if($('input.search.hide-search').length > 0) {
    		$( "input.search.hide-search" ).css('display', 'block');
    		
    		setTimeout(function() {
			    $( "input.search.hide-search" ).toggleClass('hide-search show-search');
			}, 200);
    		
		  	return 0;
    	}

	  
	  	$( "input.search.show-search" ).toggleClass('hide-search show-search');

	  	setTimeout(function() {
		  	$( "input.search.hide-search" ).css('display', 'none');
		}, 700);
	 });

	$( ".search-ic_wrap" ).click(function() {
		if($('section.head-menu-substrate.hide-search-s').length > 0) {
		  $( "section.head-menu-substrate.hide-search-s" ).toggleClass('hide-search-s show-search-s');
		  	return 0;
    	}
		  	
		  setTimeout(function() {
		  	$( "section.head-menu-substrate.show-search-s" ).toggleClass('hide-search-s show-search-s');
		  }, 200);
	});

	//  END ============================ SEARCH FIELD ============================ 

	$( ".menu-btn" ).click(function() {
		setTimeout(function() {
		  	$( ".main-menu" ).toggleClass('hide-menu show-menu');
		}, 50);
	  $("#nav-toggle").toggleClass('active');
	});

    $('.breadcrumbs-date li').on('click',function(){
        $(this).children().toggleClass('active');
    });

    // ==================Yandex Maps===========================================
    $('.btn-cart').on('click',function(e){
        e.preventDefault();

        var maps = $(this).closest('.cart-item-wrapper').next('.maps');
        var maps_wrapper = $(this).closest('.cart-item-wrapper').next('.maps').find('.maps-wrapper');
        setTimeout(function() {
            $(maps).toggleClass('maps-hide');
            $(maps_wrapper).toggleClass('maps-wrapper-bottom')
        }, 50)

    });

    var body_width = $('body').width();
    if(body_width < 1200){
        $('.tabs').lightTabs();
    }
    $(window).resize(function(){
        var body_width = $('body').width();
        if(body_width < 1200){
            $('.tabs').lightTabs();
        }
        if(body_width > 1200){
            $('.tabs-body > div').css('display', 'block');
            $('.tabs-header div').removeClass('active');
        }
    });
    $('.form-votes .ratting-checkbox').click(function(){
        $(this).addClass('active');
        $(this).prevAll('label').addClass('active');
        $(this).nextAll('label').removeClass('active');
    });

    $('.date').pickmeup();


});
