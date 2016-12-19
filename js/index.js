$(document).ready(function(){
	init();
});

var currentItemIndex;
var currentPic = "pic1";
var nextPic = "pic2";

function init()
{
	eventSet();
	
	cssSet();
	productsShow();
	searchBox();
	itemChanged();
}

function cssSet()
{
	currentItemIndex = "1";
	$('.header-list-item').css('width',$('.wrapper').width());
	$('.all-products').css('width',1226/1366 * screen.width);
	$('.all-products').css('height',$('.all-products').width() * (460/1226) + 'px');
	$('.products-sort').css('width',234/1226 * $('.all-products').width());
	$('.products-sort').css('height',$('.all-products').height());
	$('.slide-left,.slide-right').css('top',$('.bg-pic').height()/2-$('.slide-left').height()/2);
	$('.slide-left').css('left',$('.products-sort').width());
	$('.product-item').css('height',42/460 * $('.products-sort').height());
	$('#first-product-item').css('margin-top',$('.products-sort').height() * 20/460);
	$('.product-item-location').css('margin-top',$('.product-item').height()/4 + 'px');
	$('.product-list').css('left',$('.products-sort').width());
	$('.product-info img').css('top',$('.product-info').height()/2 - $('.product-info img').height()/2 - 14 + 'px');
	$('.product-info p').css('top',$('.product-info').height()/2 - $('.product-info img').height()/2 - 5 + 'px');	//7:字体大小的一半
	$('.product-info p').css('left',$('ul.list img').width() + 25 - 14 + 'px');
	$('.purchase').css('top',($('.product-info').height()-$('.purchase').height())/2 - 14 + 'px')
	setPhoneListWidth();

}

function eventSet()
{
	$('.shopping').mouseover(function(){
		$('.shopping img').attr("src", "images/购物车hover.svg");
		$('.shopping-list').stop().slideDown(250);
	});
	$('.shopping').mouseout(function(){
		$('.shopping img').attr("src", "images/购物车.svg");
		$('.shopping-list').stop().slideUp(250);
	});
	$('.product-info').mouseover(function(){
		$(this).children('p').css('color','#ff6700');
	});
	$('.product-info').mouseout(function(){
		$(this).children('p').css('color','#333');
	});
	showProductList();
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
	$('.product-pic:eq(0) img').attr('src','');
	$('.product-pic:eq(1) img').attr('src','');
	$('.product-pic:eq(2) img').attr('src','');
	$('.product-pic:eq(3) img').attr('src','');
	$('.product-pic:eq(4) img').attr('src','');
	$('.product-pic:eq(5) img').attr('src','');
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

function searchBox()
{
	$('.search-box-button').mouseover(function(){
		$('.search-box-button').stop().animate({'backgroundColor':'#ff6700'},100);		//背景色渐变需引入jquery.color.js，且必须是backgroundColor
		$('.search-box-button img').attr('src','images/放大镜hover.png');
		$('.search-box-button').css('border-color','#ff6700');
		if(!$('.search-box-text').is(":focus"))
		{
			$('.search-box-text').css('border-color','#b0b0b0');
		}
	});
	$('.search-box-button').mouseout(function(){
		$('.search-box-button').stop().animate({'backgroundColor':'#fff'},100);		//背景色渐变需引入jquery.color.js，且必须是backgroundColor
		$('.search-box-button img').attr('src','images/放大镜.png');
		if(!$('.search-box-text').is(":focus"))
		{
			$('.search-box-button').css('border-color','#ccc');
			$('.search-box-button').css('border-left','none');
			$('.search-box-text').css('border-color','#ccc');
		}
	});

	$('.search-box-text').mouseover(function(){
		if(!$('.search-box-text').is(":focus"))
		{
			$('.search-box-text').css('border-color','#b0b0b0');
			$('.search-box-button').css('border-color','#b0b0b0');
		}
	});
	$('.search-box-text').mouseout(function(){
		if(!$('.search-box-text').is(":focus"))
		{
			$('.search-box-text').css('border-color','#ccc');
			$('.search-box-button').css('border-color','#ccc');
		}
	});

	$('#btn1,#btn2').mouseover(function(){
		$(this).stop().animate({'backgroundColor':'#ff6700'},100);
		$(this).css('color','white');
	});
	$('#btn1,#btn2').mouseout(function(){
		$(this).stop().animate({'backgroundColor':'#eee'},100);
		$(this).css('color','#757575');
	});

	$('.search-box-text').focus(function(){
		$('.search-tips-list').css('display','block');
		$('.search-box-text').css('border-color','#ff6700');
		$('.search-box-button').css('border-color','#ff6700');
		$('.search-box-tips-button').css('display','none');
	});
	$('.search-box-text').blur(function(){
		$('.search-box-text').css('border-color','#ccc');
		$('.search-box-button').css('border-color','#ccc');
		$('.search-box-tips-button').css('display','block');
		$('.search-tips-list').css('display','none');
	});
}

function itemChanged()
{
	var clickItemIndex;
	var uiPageItem = $('.ui-page-item');
	for(var i=0;i<uiPageItem.length;i++)
	{
		$(uiPageItem[i]).on('click',function(){
			clickItemIndex = $(this).attr('index');
			switch(clickItemIndex)
			{
				case "1":$('#bg-'+nextPic).css('background','url(images/caa9fd50-9bd1-441f-a6ad-6fb0f8e05599.jpg)');break;
				case "2":$('#bg-'+nextPic).css('background','url(images/5cfe796d-6344-470d-9398-bcdfb120004d.jpg)');break;
				case "3":$('#bg-'+nextPic).css('background','url(images/63fd6d20-e92c-4591-92f8-0d212b127063.jpg)');break;
				case "4":$('#bg-'+nextPic).css('background','url(images/ed1e1a84-3136-429c-91ee-d8000f599bbd.jpg)');break;
				case "5":$('#bg-'+nextPic).css('background','url(images/fe177026-bc42-4526-83a2-36269a29354a.jpg)');break;
				default:;
			}
			$(".ui-page-item[index="+currentItemIndex+"]").removeClass('current-item');
			$(this).addClass('current-item');
			currentItemIndex = $(this).attr('index');
			$('#bg-'+currentPic).fadeOut(500,function(){
				$(this).css('z-index','10');
				$('#bg-'+nextPic).css('z-index','20');
				var t = currentPic;
				currentPic = nextPic;
				nextPic = t;
				$(this).fadeIn();
			});
		});
	}

	$('.slide-left').on('click',function(){
		var currentIndex = currentItemIndex;
		currentItemIndex = (currentIndex-1==0?"5":currentIndex-1+"");		//需返回字符串
		switch(currentItemIndex)
		{
			case "1":$('#bg-'+nextPic).css('background','url(images/caa9fd50-9bd1-441f-a6ad-6fb0f8e05599.jpg)');break;
			case "2":$('#bg-'+nextPic).css('background','url(images/5cfe796d-6344-470d-9398-bcdfb120004d.jpg)');break;
			case "3":$('#bg-'+nextPic).css('background','url(images/63fd6d20-e92c-4591-92f8-0d212b127063.jpg)');break;
			case "4":$('#bg-'+nextPic).css('background','url(images/ed1e1a84-3136-429c-91ee-d8000f599bbd.jpg)');break;
			case "5":$('#bg-'+nextPic).css('background','url(images/fe177026-bc42-4526-83a2-36269a29354a.jpg)');break;
			default:;
		}
		$(".ui-page-item[index="+currentIndex+"]").removeClass('current-item');
		$(".ui-page-item[index="+currentItemIndex+"]").addClass('current-item');
		$('#bg-'+currentPic).fadeOut(500,function(){
			$(this).css('z-index','10');
			$('#bg-'+nextPic).css('z-index','20');
			var t = currentPic;
			currentPic = nextPic;
			nextPic = t;
			$(this).fadeIn();
		});
	});

	$('.slide-right').on('click',function(){
		var currentIndex = currentItemIndex;
		currentItemIndex = (parseInt(currentIndex)+1==6?"1":parseInt(currentIndex)+1+"");		//需返回字符串
		switch(currentItemIndex)
		{
			case "1":$('#bg-'+nextPic).css('background','url(images/caa9fd50-9bd1-441f-a6ad-6fb0f8e05599.jpg)');break;
			case "2":$('#bg-'+nextPic).css('background','url(images/5cfe796d-6344-470d-9398-bcdfb120004d.jpg)');break;
			case "3":$('#bg-'+nextPic).css('background','url(images/63fd6d20-e92c-4591-92f8-0d212b127063.jpg)');break;
			case "4":$('#bg-'+nextPic).css('background','url(images/ed1e1a84-3136-429c-91ee-d8000f599bbd.jpg)');break;
			case "5":$('#bg-'+nextPic).css('background','url(images/fe177026-bc42-4526-83a2-36269a29354a.jpg)');break;
			default:;
		}
		$(".ui-page-item[index="+currentIndex+"]").removeClass('current-item');
		$(".ui-page-item[index="+currentItemIndex+"]").addClass('current-item');
		$('#bg-'+currentPic).fadeOut(500,function(){
			$(this).css('z-index','10');
			$('#bg-'+nextPic).css('z-index','20');
			var t = currentPic;
			currentPic = nextPic;
			nextPic = t;
			$(this).fadeIn();
		});
	});
}

function setPhoneListWidth()			//div宽度由子ul决定
{
	var productList = $('.product-list');
	for(var i=0;i<productList.length;i++)
	{
		var wid = 0;
		for(var j=0;j<$(productList[i]).children(".list").length;j++)
		{
	//		console.log($(productList[i]).children(".list:eq("+j+")").width());
			wid += $(productList[i]).children(".list").width();
		}
		$(productList[i]).width(wid+30);
	//	console.log($(productList[i]).width());
	}
}

function showProductList()
{
	var productItem = $('.product-item');
	for(var i=0;i<productItem.length;i++)
	{
		$(productItem[i]).mouseover(function(){
			var index = $(this).attr('index');
			$('.product-list[index='+index+']').css('display','block');
		});
		$(productItem[i]).mouseout(function(){
			var index = $(this).attr('index');
			$('.product-list[index='+index+']').css('display','none');
		});
	}

	var productList = $('.product-list');
	for(var i=0;i<productList.length;i++)
	{
		$(productList[i]).mouseover(function(){
			$(this).css('display','block');
		});
		$(productList[i]).mouseout(function(){
			$(this).css('display','none');
		});
	}
}