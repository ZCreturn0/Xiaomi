$(document).ready(function(){
	init();
});

function init()
{
	$('.shopping').mouseover(function(){
		$('.shopping img').attr("src", "images/购物车hover.svg");
		$('.shopping-list').stop().slideDown(250);
	});
	$('.shopping').mouseout(function(){
		$('.shopping img').attr("src", "images/购物车.svg");
		$('.shopping-list').stop().slideUp(250);
	});
}