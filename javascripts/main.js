$(document).ready(function(){

/*Tabs jQuery*/
/*Onload keep open the first Tab*/

	$(window).on('load', function(){

		var firstlink = $('.tablinks .tab li a').attr('href');
		$('.tabcon '+ firstlink).show().siblings().hide();
		$('.tablinks .tab li').first().addClass("active").siblings().removeClass("active");
		
	});

/*Onclick open clicked tab and close other tabs*/

	$('.tablinks .tab a').on('click', function(e){

		var curretattrvalue = $(this).attr('href');

		//Show and Hide tab contents as per click

		$('.tabcon '+curretattrvalue).show().siblings().hide();

		$(this).parent('li').addClass("active").siblings().removeClass("active");

		e.preventDefault();

	})



/*Accordions Jquery*/
/*On load keep open the first accordion*/

	$(window).on('load', function(){

		var firstlink = $('.accordian-section a').attr('href');
		$('.accordian-section '+firstlink).slideDown(300);
		
	});

/*Onclick open other accordion and close current open accordion */

	$('.accordian-section a').on('click', function(e){

		var curretattrvalue = $(this).attr('href');

		//Show and Hide tab contents as per click

		$('.accordian-section .content').slideUp(300);

		if ($('.accordian-section '+curretattrvalue).is(':visible')){
			$('.accordian-section '+curretattrvalue).slideUp(300);
		}else {
			$('.accordian-section '+curretattrvalue).slideDown(300);
		}

		e.preventDefault();

	})
});
