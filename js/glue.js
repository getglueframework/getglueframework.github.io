/* 
* @Author: Adi Sparta
* @Date:   2015-01-19 20:09:17
* @Last Modified by:   Adi Sparta
* @Last Modified time: 2015-01-22 22:33:30
*/


$(document).ready(function(){

	//dropdown navbar
	$("nav #handle").click(function(){
		$(".menu").slideToggle();

	});
	
	//side navigation
	$(".accordian-navbar h3").click(function(){
		//slide up all the link lists
		$(".accordian-navbar ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});

	//tabs
	$(function(){
		$(".tab-panel .tab-links li").click(function(){
			//remove active link class active
			$(".tab-panel .tab-links li.active").removeClass('active');
			
			//add active class to clicked link
			$(this).addClass('active');

			//declare the target variable
			var target = $(this).attr('rel');
			
			//hide class before
			$(".tab-panel .tab-content .tab.active").fadeOut(300, function(){
				//remove the active class from the content before
				$(this).removeClass('active');

				//show the target content
				$('#'+target).fadeIn(300, function(){
					//add active class to target content
					$(this).addClass('active');
				});
			});

		});
	});

});
