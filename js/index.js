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
	$('.header-list-item').css('width',$('.wrapper').width());
//	productsShow();
}

function productsShow()
{
	productsSlideDown();
	productsSlideUp();
}

function productsSlideDown()
{
	$('#xiaomi,#red_mi,#pad,#tv,#box,#router,#hardware,.header-list-item').mouseover(function(){
		var index = $(this).attr('index');
	//	console.log(index);
		selectProductsItem(index);
		$('.header-list-item').stop(true)
		.animate({'height':'229px'},
		(229-$('.header-list-item').height())/229*200,'linear');
	});
}

function productsSlideUp()
{
	$('#xiaomi,#red_mi,#pad,#tv,#box,#router,#hardware,.header-list-item').mouseout(function(){
		$('.header-list-item').stop(true)
		.animate({'height':'0px'},
		($('.header-list-item').height())/229*200,'linear');
	});
}

function selectProductsItem(index)
{
//	console.log(index);
	switch(index)
	{
		case "1":xiaoMi();break;
		case "2":break;
		case "3":break;
		case "4":break;
		case "5":break;
		case "6":break;
		default:;
	}
}

function xiaoMi()
{
//	$('.product-pic:eq(0)').append($('<img></img>'));
	$('.product-pic:eq(0) img').attr('src','images/xiaomiNOTE2-320-220!320x220.jpg');
//	console.log($('.products-entrance').children().eq(0).children().eq(1));
}