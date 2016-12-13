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
	productsShow();
}

function productsShow()
{
	productsSlideDown();
	productsSlideUp();
}

function productsSlideDown()
{
	$('#xiaomi,#red_mi,#pad,#tv,#box,#router,#hardware').mouseover(function(){
		var index = $(this).attr('index');
		selectProductsItem(index);
		$('.header-list-item').css("border-top","1px solid #ccc");
		$('.header-list-item').stop(true)
		.animate({'height':'229px'},
		(229-$('.header-list-item').height())/229*200,'linear',function(){
			$('.header-list-item').css("overflow","visible");
		});
	});
	$('.header-list-item').mouseover(function(){		//.header-list-item单独设置防止因mouseover事件重复而发生错误
		$('.header-list-item').stop(true)
		.animate({'height':'229px'},
		(229-$('.header-list-item').height())/229*200,'linear',function(){
			$('.header-list-item').css("overflow","visible");
		});
	});
}

function productsSlideUp()
{
	$('#xiaomi,#red_mi,#pad,#tv,#box,#router,#hardware,.header-list-item').mouseout(function(){
		$('.header-list-item').css("overflow","hidden");
		$('.header-list-item').stop(true)
		.animate({'height':'0px'},
		($('.header-list-item').height())/229*200,'linear',function(){
			$('.header-list-item').css("border-top","none");
		});
	});
}

function itemInit()
{
	$('.product-pic:eq(0) img').css('display','block');
	$('.product-pic:eq(1) img').css('display','block');
	$('.product-pic:eq(2) img').css('display','block');
	$('.product-pic:eq(3) img').css('display','block');
	$('.product-pic:eq(4) img').css('display','block');
	$('.product-pic:eq(5) img').css('display','block');
	$('.separator1:eq(0)').css('display','inline-block');
	$('.separator1:eq(1)').css('display','inline-block');
	$('.separator1:eq(2)').css('display','inline-block');
	$('.separator1:eq(3)').css('display','inline-block');
	$('.separator1:eq(4)').css('display','inline-block');
}

function selectProductsItem(index)
{
	itemInit();
	switch(index)
	{
		case "1":xiaoMi();break;
		case "2":redMi();break;
		case "3":pad();break;
		case "4":tv();break;
		case "5":box();break;
		case "6":router();break;
		case "7":hardware();break;
		default:;
	}
}

function xiaoMi()
{
	$('.current-available:eq(0)').css('visibility','hidden');
	$('.current-available:eq(1)').css('visibility','hidden');
	$('.current-available:eq(2)').css('visibility','visible');
	$('.current-available:eq(3)').css('visibility','visible');
	$('.current-available:eq(4)').css('visibility','visible');
	$('.current-available:eq(5)').css('visibility','visible');
	$('.product-pic:eq(0) img').attr('src','images/xiaomiNOTE2-320-220!320x220.jpg');
	$('.product-pic:eq(1) img').attr('src','images/MIX-320-220!320x220.jpg');
	$('.product-pic:eq(2) img').attr('src','images/xiaomi5S-320-220!320x220.jpg');
	$('.product-pic:eq(3) img').attr('src','images/5spluse320_220!320x220.jpg');
	$('.product-pic:eq(4) img').attr('src','images/mi5!320x220.jpg');
	$('.product-pic:eq(5) img').attr('src','images/maxdingbu!320x220.jpg');
	$('.product-name:eq(0) a').text("小米Note 2");
	$('.product-name:eq(1) a').text("小米MIX");
	$('.product-name:eq(2) a').text("小米5s");
	$('.product-name:eq(3) a').text("小米5s Plus");
	$('.product-name:eq(4) a').text("小米手机5");
	$('.product-name:eq(5) a').text("小米Max");
	$('.product-price:eq(0) p').text("2799元起");
	$('.product-price:eq(1) p').text("3499元起");
	$('.product-price:eq(2) p').text("1899元");
	$('.product-price:eq(3) p').text("2299元起");
	$('.product-price:eq(4) p').text("1599元起");
	$('.product-price:eq(5) p').text("1299元起");
}

function redMi()
{
	$('.current-available:eq(0)').css('visibility','visible');
	$('.current-available:eq(1)').css('visibility','hidden');
	$('.current-available:eq(2)').css('visibility','visible');
	$('.current-available:eq(3)').css('visibility','visible');
	$('.current-available:eq(4)').css('visibility','visible');
	$('.current-available:eq(5)').css('visibility','hidden');
	$('.product-pic:eq(0) img').attr('src','images/hongminote4!320x220.jpg');
	$('.product-pic:eq(1) img').attr('src','images/320-2202!320x220.jpg');
	$('.product-pic:eq(2) img').attr('src','images/hongmipro-320!320x220.jpg');
	$('.product-pic:eq(3) img').attr('src','images/hm3S-320-220!320x220.jpg');
	$('.product-pic:eq(4) img').attr('src','images/320-220!320x220.jpg');
	$('.product-pic:eq(5) img').css('display','none');
	$('.product-name:eq(0) a').text("红米Note 4");
	$('.product-name:eq(1) a').text("红米4");
	$('.product-name:eq(2) a').text("红米Pro");
	$('.product-name:eq(3) a').text("红米手机3S");
	$('.product-name:eq(4) a').text("红米手机3X");
	$('.product-name:eq(5) a').text("");
	$('.product-price:eq(0) p').text("999元起");
	$('.product-price:eq(1) p').text("699元起");
	$('.product-price:eq(2) p').text("1099元起");
	$('.product-price:eq(3) p').text("699元起");
	$('.product-price:eq(4) p').text("799元");
	$('.product-price:eq(5) p').text("");

	$('.separator1:eq(4)').css('display','none');
}

function pad()
{
	$('.current-available:eq(0)').css('visibility','hidden');
	$('.current-available:eq(1)').css('visibility','hidden');
	$('.current-available:eq(2)').css('visibility','hidden');
	$('.current-available:eq(3)').css('visibility','hidden');
	$('.current-available:eq(4)').css('visibility','hidden');
	$('.current-available:eq(5)').css('visibility','hidden');
	$('.product-pic:eq(0) img').attr('src','images/mipad2-16!320x220.jpg');
	$('.product-pic:eq(1) img').attr('src','images/mipad2-64!320x220.jpg');
	$('.product-pic:eq(2) img').attr('src','images/mipad2-64-win!320x220.jpg');
	$('.product-pic:eq(3) img').attr('src','images/bijiben32012.5!320x220.jpg');
	$('.product-pic:eq(4) img').attr('src','images/bijiben320!320x220.jpg');
	$('.product-pic:eq(5) img').css('display','none');
	$('.product-name:eq(0) a').text("小米平板2 16GB");
	$('.product-name:eq(1) a').text("小米平板2 64GB");
	$('.product-name:eq(2) a').text("小米平板2 64GB Windows版");
	$('.product-name:eq(3) a').text("小米笔记本Air 12.5\"");
	$('.product-name:eq(4) a').text("小米笔记本Air 13.3\"");
	$('.product-name:eq(5) a').text("");
	$('.product-price:eq(0) p').text("999元");
	$('.product-price:eq(1) p').text("1299元");
	$('.product-price:eq(2) p').text("1299元");
	$('.product-price:eq(3) p').text("3499元");
	$('.product-price:eq(4) p').text("4999元");
	$('.product-price:eq(5) p').text("");

	$('.separator1:eq(4)').css('display','none');
}

function tv()
{
	$('.current-available:eq(0)').css('visibility','hidden');
	$('.current-available:eq(1)').css('visibility','hidden');
	$('.current-available:eq(2)').css('visibility','hidden');
	$('.current-available:eq(3)').css('visibility','hidden');
	$('.current-available:eq(4)').css('visibility','hidden');
	$('.current-available:eq(5)').css('visibility','hidden');
	$('.product-pic:eq(0) img').attr('src','images/101843.png');
	$('.product-pic:eq(1) img').attr('src','images/101848.png');
	$('.product-pic:eq(2) img').attr('src','images/101855xin.png');
	$('.product-pic:eq(3) img').attr('src','images/101860xin.png');
	$('.product-pic:eq(4) img').attr('src','images/65yingyuan.png');
	$('.product-pic:eq(5) img').attr('src','images/101865.png');
	$('.product-name:eq(0) a').text("小米电视3s 43英寸");
	$('.product-name:eq(1) a').text("小米电视3s 48英寸");
	$('.product-name:eq(2) a').text("小米电视3s 55英寸");
	$('.product-name:eq(3) a').text("小米电视3s 60英寸");
	$('.product-name:eq(4) a').text("小米电视3s 65英寸");
	$('.product-name:eq(5) a').html("查看全部<br>小米电视");
	$('.product-price:eq(0) p').text("1799元");
	$('.product-price:eq(1) p').text("1999元");
	$('.product-price:eq(2) p').text("3499元起");
	$('.product-price:eq(3) p').text("4499元");
	$('.product-price:eq(4) p').text("5999元");
	$('.product-price:eq(5) p').text("");
}

function box()
{
	$('.current-available:eq(0)').css('visibility','hidden');
	$('.current-available:eq(1)').css('visibility','hidden');
	$('.current-available:eq(2)').css('visibility','hidden');
	$('.current-available:eq(3)').css('visibility','hidden');
	$('.current-available:eq(4)').css('visibility','hidden');
	$('.current-available:eq(5)').css('visibility','hidden');
	$('.product-pic:eq(0) img').attr('src','images/mihezi.png');
	$('.product-pic:eq(1) img').attr('src','images/mihezi (1).png');
	$('.product-pic:eq(2) img').attr('src','images/hezi3s!320x220.jpg');
	$('.product-pic:eq(3) img').attr('src','images/hezimini.png');
	$('.product-pic:eq(4) img').attr('src','images/zhuji!160x110.jpg');
	$('.product-pic:eq(5) img').attr('src','images/320x220.png');
	$('.product-name:eq(0) a').text("小米盒子3s");
	$('.product-name:eq(1) a').text("小米盒子3c");
	$('.product-name:eq(2) a').text("小米盒子3 增强版");
	$('.product-name:eq(3) a').text("小米盒子mini版");
	$('.product-name:eq(4) a').text("小米电视主机");
	$('.product-name:eq(5) a').html("小米家庭影院");
	$('.product-price:eq(0) p').text("299元");
	$('.product-price:eq(1) p').text("199元");
	$('.product-price:eq(2) p').text("399元");
	$('.product-price:eq(3) p').text("179元");
	$('.product-price:eq(4) p').text("999元");
	$('.product-price:eq(5) p').text("1999元");
}

function router()
{
	$('.current-available:eq(0)').css('visibility','hidden');
	$('.current-available:eq(1)').css('visibility','hidden');
	$('.current-available:eq(2)').css('visibility','hidden');
	$('.current-available:eq(3)').css('visibility','hidden');
	$('.current-available:eq(4)').css('visibility','hidden');
	$('.current-available:eq(5)').css('visibility','hidden');
	$('.product-pic:eq(0) img').attr('src','images/miwifi!160x110.jpg');
	$('.product-pic:eq(1) img').attr('src','images/miwifi-3!160x110.jpg');
	$('.product-pic:eq(2) img').attr('src','images/miwifimini!160x110.jpg');
	$('.product-pic:eq(3) img').attr('src','images/luyouqi3c!160x110.jpg');
	$('.product-pic:eq(4) img').attr('src','images/miwifilite!160x110.jpg');
	$('.product-pic:eq(5) img').attr('src','images/wifiExtension!160x110.jpg');
	$('.product-name:eq(0) a').text("全新小米路由器");
	$('.product-name:eq(1) a').text("小米路由器 3 1200M");
	$('.product-name:eq(2) a').text("小米路由器 mini");
	$('.product-name:eq(3) a').text("小米路由器 3C 300M");
	$('.product-name:eq(4) a').text("小米路由器 青春版");
	$('.product-name:eq(5) a').html("小米WiFi放大器 2");
	$('.product-price:eq(0) p').text("699元");
	$('.product-price:eq(1) p').text("149元");
	$('.product-price:eq(2) p').text("129元");
	$('.product-price:eq(3) p').text("99元");
	$('.product-price:eq(4) p').text("79元");
	$('.product-price:eq(5) p').text("49元");
}

function hardware()
{
	$('.current-available:eq(0)').css('visibility','hidden');
	$('.current-available:eq(1)').css('visibility','hidden');
	$('.current-available:eq(2)').css('visibility','hidden');
	$('.current-available:eq(3)').css('visibility','hidden');
	$('.current-available:eq(4)').css('visibility','hidden');
	$('.current-available:eq(5)').css('visibility','hidden');
	$('.product-pic:eq(0) img').attr('src','images/scooter!160x110.jpg');
	$('.product-pic:eq(1) img').attr('src','images/water2!160x110.jpg');
	$('.product-pic:eq(2) img').attr('src','images/dianfanbao!160x110.jpg');
	$('.product-pic:eq(3) img').attr('src','images/air2!160x110.jpg');
	$('.product-pic:eq(4) img').attr('src','images/xiaobai!160x110.jpg');
	$('.product-pic:eq(5) img').attr('src','images/zhinengyingjian!160x110.jpg');
	$('.product-name:eq(0) a').text("九号平衡车");
	$('.product-name:eq(1) a').text("小米净水器");
	$('.product-name:eq(2) a').text("米家压力IH电饭煲");
	$('.product-name:eq(3) a').text("小米空气净化器 2");
	$('.product-name:eq(4) a').text("智能摄像机");
	$('.product-name:eq(5) a').html("查看全部<br>智能硬件");
	$('.product-price:eq(0) p').text("1999元");
	$('.product-price:eq(1) p').text("1299元起");
	$('.product-price:eq(2) p').text("999元");
	$('.product-price:eq(3) p').text("699元");
	$('.product-price:eq(4) p').text("399元");
	$('.product-price:eq(5) p').text("");
}