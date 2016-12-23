$(document).ready(function(){
	init();
});

var currentItemIndex;
var currentPic = "pic1";
var nextPic = "pic2";
var hwnd;
var initDir = "right";
var giftHwnd;

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
	$('.product-info p').css('left',$('ul.list img').width() + 25 - 10 + 'px');
	$('.purchase').css('top',($('.product-info').height()-$('.purchase').height())/2 - 14 + 'px')
	$('.channel').width($('.all-products').width());
	$('.channel-list').width($('.products-sort').width());
	$('li.home-channel-list-item').width($('.channel-list').width()/3 - 0.5 + 'px');
	$('li.home-channel-list-item').height($('.channel-list').height()/2 - 1 + 'px');
	$('.channel-pic').css('width',970/1226 * $('.all-products').width());
	$('.channel-pic-list-content:first').css('left','0px');
	$('.channel-pic-list-content:last').css('right','0px');
	$('.channel-pic-list-content:eq(1)').css('left',$('ul.channel-pic-list').width()/2 - $('.channel-pic-list-content:eq(1)').width()/2);
	$('#gift-right').css('top',$('#gift-word').height()/2 - $('#gift-right').height()/2);
	$('.my-gift-card').css('height',$('#first-gift-card').width() * 300/234);
	$('#first-gift-card').css('height',$('#first-gift-card').width() * 614/234);
	$('.space').css('height',$('#first-gift-card').height() - ($('.line2').height() * 2) + 'px');

	$('.card').css('width','18.6%');
	$('.card').css('height',$('.card').width() * 300/234);
	$('.listening-cards').css('height',$('.card').height() * 2 + $('.separator-card').height());
	$('.listening').css('height',$('.title').height() + $('.listening-cards').height() + 10 +'px');
	$('.last-in-line2').css('height',($('.card').height() - $('.separator-card').height()) / 2 - 1 + 'px');

	$('.gift').css('width',$('.all-products').width());
	$('.my-gift').css('width',1226/1366 * $('.my-gift').width());
	$('.listening').css('width',$('.my-gift').width());
	$('.parts').css('width',$('.my-gift').width());

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

	$('#right-slide').mouseover(function(){
		$('#right-slide').attr('src','images/gift/右hover.png');
	});
	$('#right-slide').mouseout(function(){
		$('#right-slide').attr('src','images/gift/右enabled.png');
	});
	$('#gift-slide').mouseover(function(){
		$('#gift-word').css('color','#ff6700');
		$('#gift-right').attr('src','images/myGift/右切换hover.png');
	});
	$('#gift-slide').mouseout(function(){
		$('#gift-word').css('color','#424242');
		$('#gift-right').attr('src','images/myGift/右切换.png');
	});

	

	showProductList();
	itemRotatedAutomatic();
	channelItemPic();
	giftRotate();
	giftAutoRotate();
	giftCardFloat();
	listeningTitle();
	cardFloat();
	listeningSwitchCard();
	$('#listening-hot').trigger('mouseover');
	partsSwitchCard();
	$('#parts-hot').trigger('mouseover');
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
			clearInterval(hwnd);
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
		clearInterval(hwnd);
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
		clearInterval(hwnd);
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

function itemRotatedAutomatic()			//图片自动切换，直到点击后取消
{
	hwnd = setInterval(function(){
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
	},10000);
}

function channelItemPic()
{
	var channelContent = $('.channel-content');
	for(var i=0;i<channelContent.length;i++)
	{
		$(channelContent[i]).mouseover(function(){
			$(this).children('img').attr('src','images/'+ $(this).attr('data') + 'hover.png');
		});
		$(channelContent[i]).mouseout(function(){
			$(this).children('img').attr('src','images/'+ $(this).attr('data') +'.png');
		});
	}
}

function giftRotate()
{
	$('#right-slide').on('click',function(){
		if(initDir == "right")
		{
			clearInterval(giftHwnd);			//这两句用来点击后重启计时器
			giftAutoRotate();
			$('#right-slide').attr('src','images/gift/右disabled.png');
			$('#right-slide').css('cursor','default');
			$('#right-slide').mouseover(function(){
				$('#right-slide').attr('src','images/gift/右disabled.png');
			});
			$('#right-slide').mouseout(function(){
				$('#right-slide').attr('src','images/gift/右disabled.png');
			});

			$('#left-slide').attr('src','images/gift/左enabled.png');
			$('#left-slide').css('cursor','pointer');
			$('#left-slide').mouseover(function(){
				$('#left-slide').attr('src','images/gift/左hover.png');
			});
			$('#left-slide').mouseout(function(){
				$('#left-slide').attr('src','images/gift/左enabled.png');
			});
			$('.gift-content-list').animate({'margin-left':$('.gift-content').width() * (-1)},500,'easeOutSine');
			initDir = "left";
		}
	});

	$('#left-slide').on('click',function(){
		if(initDir == "left")
		{
			clearInterval(giftHwnd);
			giftAutoRotate();
			$('#left-slide').attr('src','images/gift/左disabled.png');
			$('#left-slide').css('cursor','default');
			$('#left-slide').mouseover(function(){
				$('#left-slide').attr('src','images/gift/左disabled.png');
			});
			$('#left-slide').mouseout(function(){
				$('#left-slide').attr('src','images/gift/左disabled.png');
			});

			$('#right-slide').attr('src','images/gift/右enabled.png');
			$('#right-slide').css('cursor','pointer');
			$('#right-slide').mouseover(function(){
				$('#right-slide').attr('src','images/gift/右hover.png');
			});
			$('#right-slide').mouseout(function(){
				$('#right-slide').attr('src','images/gift/右enabled.png');
			});
			$('.gift-content-list').animate({'margin-left':'0'},500,'easeOutSine');
			initDir = "right";
		}
	});
}

function giftAutoRotate()
{
	giftHwnd = setInterval(function(){
		if(initDir == "right")
		{
			$('#right-slide').trigger('click');
		}
		else
		{
			$('#left-slide').trigger('click');
		}
	},10000);
}

function giftCardFloat()				//图片悬浮
{
	var cards = $('.my-gift-card');
	for(var i=0;i<cards.length;i++)
	{
		$(cards[i]).mouseover(function(){
			//不放在css里是因为防止图片加载慢而影响高度
			$(this).css('transition','all .2s linear');
			$(this).css('transform','translate3d(0,-2px,0)');
			$(this).css('box-shadow','0 15px 30px rgba(0,0,0,0.1)');
		});
		$(cards[i]).mouseout(function(){
			$(this).css('transform','none');
			$(this).css('box-shadow','none');
		});
	}
}

function listeningTitle()
{
	var titleItems = $('.title-item');
	for(var i=0;i<titleItems.length;i++)
	{
		$(titleItems[i]).mouseover(function(){
			for(var j=0;j<titleItems.length;j++)
			{
				if($(titleItems[j]).hasClass('active-title') && $(titleItems[j]).attr('group') == $(this).attr('group'))
				{
					$(titleItems[j]).removeClass('active-title');
				}
			}
			$(this).addClass('active-title');
		});
	}
}

function cardFloat()					//所有card的悬浮效果
{
	var cards = $('.card');
	for(var i=0;i<cards.length;i++)
	{
		$(cards[i]).mouseover(function(){
			//不放在css里是因为防止图片加载慢而影响高度
			$(this).css('transition','all .2s linear');
			$(this).css('transform','translate3d(0,-2px,0)');
			$(this).css('box-shadow','0 15px 30px rgba(0,0,0,0.1)');
			if($(this).find('.comment-content').text())
			{
				$(this).find('.comment').css({'height':'85px','opacity':'1'});
			}
		});
		$(cards[i]).mouseout(function(){
			$(this).css('transform','none');
			$(this).css('box-shadow','none');
			if($(this).find('.comment-content').text())
			{
				$(this).find('.comment').css({'height':'0px','opacity':'0'});
			}
		});
	}
}

function listeningSwitchCard()
{
	$('#listening-hot').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.listening-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.listening-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.listening-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.listening-cards .card:eq('+i+') .label').removeClass('hide');
				$('.listening-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.listening-cards .card:eq(1) .label').addClass('new-product');
		$('.listening-cards .card:eq(1) .label').text('新品');
		$('.listening-cards .card:eq(1) img').attr('src','images/listening/pms_1478248721.42297795.jpg');
		$('.listening-cards .card:eq(1) .name').text('小米蓝牙耳机青春版');
		$('.listening-cards .card:eq(1) .price').text('59元');
		$('.listening-cards .card:eq(1) .population').text('1.1万人评价');
		$('.listening-cards .card:eq(1) .comment .comment-content').text('');
		$('.listening-cards .card:eq(1) .comment .comment-author').text('');

		$('.listening-cards .card:eq(2) .label').addClass('hide');
		$('.listening-cards .card:eq(2) .label').text('新品');
		$('.listening-cards .card:eq(2) img').attr('src','images/listening/T1pZbvBTET1RXrhCrK.jpg');
		$('.listening-cards .card:eq(2) .name').text('小米移动电源5000mAh');
		$('.listening-cards .card:eq(2) .price').text('49元');
		$('.listening-cards .card:eq(2) .population').text('9.5万人评价');
		$('.listening-cards .card:eq(2) .comment .comment-content').text('(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...');
		$('.listening-cards .card:eq(2) .comment .comment-author').text(' 来自于 糖糖果果儿 的评价 ');

		$('.listening-cards .card:eq(3) .label').addClass('new-product');
		$('.listening-cards .card:eq(3) .label').text('新品');
		$('.listening-cards .card:eq(3) img').attr('src','images/listening/pms_1478510064.36397738.jpg');
		$('.listening-cards .card:eq(3) .name').text('小米圈铁耳机Pro');
		$('.listening-cards .card:eq(3) .price').text('149元');
		$('.listening-cards .card:eq(3) .population').text('3900人评价');
		$('.listening-cards .card:eq(3) .comment .comment-content').text('新一代超良心圈铁耳机！！！外观超酷！感觉很高端，音质...');
		$('.listening-cards .card:eq(3) .comment .comment-author').text(' 来自于 小笼包 的评价 ');

		$('.listening-cards .card:eq(4) .label').addClass('hide');
		$('.listening-cards .card:eq(4) .label').text('新品');
		$('.listening-cards .card:eq(4) img').attr('src','images/listening/T1F5K_BjVv1RXrhCrK.jpg');
		$('.listening-cards .card:eq(4) .name').text('小米小钢炮蓝牙音箱2');
		$('.listening-cards .card:eq(4) .price').text('129元');
		$('.listening-cards .card:eq(4) .population').text('1.8万人评价');
		$('.listening-cards .card:eq(4) .comment .comment-content').text('物流超快，包装一打开，我就闻到了一缕口红的清香，陶醉...');
		$('.listening-cards .card:eq(4) .comment .comment-author').text(' 来自于 588262758 的评价 ');

		$('.listening-cards .card:eq(6) .label').addClass('cheaper-price');
		$('.listening-cards .card:eq(6) .label').text('享9.6折');
		$('.listening-cards .card:eq(6) img').attr('src','images/listening/T1ycK_BjYv1RXrhCrK.jpg');
		$('.listening-cards .card:eq(6) .name').text('小米圈铁耳机');
		$('.listening-cards .card:eq(6) .price').html('94元 <s>99元</s>');
		$('.listening-cards .card:eq(6) .population').text('2.8万人评价');
		$('.listening-cards .card:eq(6) .comment .comment-content').text('');
		$('.listening-cards .card:eq(6) .comment .comment-author').text('');

		$('.listening-cards .card:eq(7) .label').addClass('hide');
		$('.listening-cards .card:eq(7) .label').text('新品');
		$('.listening-cards .card:eq(7) img').attr('src','images/listening/T1MDK_B_YT1RXrhCrK.jpg');
		$('.listening-cards .card:eq(7) .name').text('小米蓝牙音箱');
		$('.listening-cards .card:eq(7) .price').text('199元');
		$('.listening-cards .card:eq(7) .population').text('2.2万人评价');
		$('.listening-cards .card:eq(7) .comment .comment-content').text('');
		$('.listening-cards .card:eq(7) .comment .comment-author').text('');

		$('.listening-cards .card:eq(8) .label').addClass('cheaper-price');
		$('.listening-cards .card:eq(8) .label').text(' 享9折 ');
		$('.listening-cards .card:eq(8) img').attr('src','images/listening/T1A.A_BKYT1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(8) .name').text('小米方盒子蓝牙音箱');
		$('.listening-cards .card:eq(8) .price').html('89元 <s>99元</s>');
		$('.listening-cards .card:eq(8) .population').text('1.6万人评价');
		$('.listening-cards .card:eq(8) .comment .comment-content').text('');
		$('.listening-cards .card:eq(8) .comment .comment-author').text('');

		$('.listening-cards .card:eq(9) .aaa-intro').text('小米车载充电器');
		$('.listening-cards .card:eq(9) .aaa-price').text('49元');
		$('.listening-cards .card:eq(9) .aaa').attr('src','images/listening/T142A_BXEv1RXrhCrK.jpg');

		$('.listening-cards .card:eq(10) .bbb-price').text('热门');
	});

	$('#listening-earphone').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.listening-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.listening-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.listening-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.listening-cards .card:eq('+i+') .label').removeClass('hide');
				$('.listening-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.listening-cards .card:eq(1) .label').addClass('new-product');
		$('.listening-cards .card:eq(1) .label').text('新品');
		$('.listening-cards .card:eq(1) img').attr('src','images/listening/pms_1479724763.43233402!220x220.jpg');
		$('.listening-cards .card:eq(1) .name').text('小米网络音响');
		$('.listening-cards .card:eq(1) .price').html('399元');
		$('.listening-cards .card:eq(1) .population').text('601人评价');
		$('.listening-cards .card:eq(1) .comment .comment-content').text('音效超级无敌好，低音震撼！高音亮！性价比无敌！');
		$('.listening-cards .card:eq(1) .comment .comment-author').text(' 来自于 江  波 的评价 ');

		$('.listening-cards .card:eq(2) .label').addClass('cheaper-price');
		$('.listening-cards .card:eq(2) .label').text('享9.3折');
		$('.listening-cards .card:eq(2) img').attr('src','images/listening/T1SkV_BCd_1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(2) .name').text('小米胶囊耳机');
		$('.listening-cards .card:eq(2) .price').html('64元 <s>69元</s>');
		$('.listening-cards .card:eq(2) .population').text('');
		$('.listening-cards .card:eq(2) .comment .comment-content').text('很小巧 像不喜欢戴活塞的人可以试试这种~很舒服包装还...');
		$('.listening-cards .card:eq(2) .comment .comment-author').text(' 来自于 鹤唳 的评价 ');

		$('.listening-cards .card:eq(3) .label').addClass('new-product');
		$('.listening-cards .card:eq(3) .label').text('新品');
		$('.listening-cards .card:eq(3) img').attr('src','images/listening/pms_1478510064.36397738.jpg');
		$('.listening-cards .card:eq(3) .name').text('小米圈铁耳机Pro');
		$('.listening-cards .card:eq(3) .price').html('149元');
		$('.listening-cards .card:eq(3) .population').text('3900人评价');
		$('.listening-cards .card:eq(3) .comment .comment-content').text('耳机真心不错。上午下单下午送到。快递速度真是快的想不...');
		$('.listening-cards .card:eq(3) .comment .comment-author').text(' 来自于 858404180 的评价 ');

		$('.listening-cards .card:eq(4) .label').addClass('cheaper-price');
		$('.listening-cards .card:eq(4) .label').text('享9折');
		$('.listening-cards .card:eq(4) img').attr('src','images/listening/T1IdZgB5hv1RXrhCrK.jpg');
		$('.listening-cards .card:eq(4) .name').text('小米随身蓝牙音箱');
		$('.listening-cards .card:eq(4) .price').html('59元 <s>69元</s>');
		$('.listening-cards .card:eq(4) .population').text('');
		$('.listening-cards .card:eq(4) .comment .comment-content').text('超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小...');
		$('.listening-cards .card:eq(4) .comment .comment-author').text(' 来自于 田密 的评价 ');

		$('.listening-cards .card:eq(6) .label').addClass('hide');
		$('.listening-cards .card:eq(6) .label').text('享9.6折');
		$('.listening-cards .card:eq(6) img').attr('src','images/listening/T1Tfd_BjAv1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(6) .name').text('小米小钢炮蓝牙音箱2');
		$('.listening-cards .card:eq(6) .price').html('129元');
		$('.listening-cards .card:eq(6) .population').text('');
		$('.listening-cards .card:eq(6) .comment .comment-content').text('物流超快，包装一打开，我就闻到了一缕口红的清香，陶醉...');
		$('.listening-cards .card:eq(6) .comment .comment-author').text(' 来自于 588262758 的评价 ');

		$('.listening-cards .card:eq(7) .label').addClass('cheaper-price');
		$('.listening-cards .card:eq(7) .label').text('享9折');
		$('.listening-cards .card:eq(7) img').attr('src','images/listening/T1A.A_BKYT1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(7) .name').text('方盒子音箱');
		$('.listening-cards .card:eq(7) .price').html('89元 <s>99元</s>');
		$('.listening-cards .card:eq(7) .population').text('');
		$('.listening-cards .card:eq(7) .comment .comment-content').text('声音可以小到只有自己心里能听见，声音可以大到让大家听...');
		$('.listening-cards .card:eq(7) .comment .comment-author').text(' 来自于 243235061 的评价 ');

		$('.listening-cards .card:eq(8) .label').addClass('new-product');
		$('.listening-cards .card:eq(8) .label').text(' 新品 ');
		$('.listening-cards .card:eq(8) img').attr('src','images/listening/pms_1481098202.44798045!220x220.jpg');
		$('.listening-cards .card:eq(8) .name').text('ROIDMI音乐蓝牙车充');
		$('.listening-cards .card:eq(8) .price').html('99元');
		$('.listening-cards .card:eq(8) .population').text('26人评价');
		$('.listening-cards .card:eq(8) .comment .comment-content').text('东西不错，对车載音乐提升好处多，');
		$('.listening-cards .card:eq(8) .comment .comment-author').text(' 来自于 1194950505 的评价 ');

		$('.listening-cards .card:eq(9) .aaa-intro').text('小米蓝牙音箱');
		$('.listening-cards .card:eq(9) .aaa-price').text('199元');
		$('.listening-cards .card:eq(9) .aaa').attr('src','images/listening/T1MDK_B_YT1RXrhCrK.jpg');

		$('.listening-cards .card:eq(10) .bbb-price').text('耳机音箱');
	});

	$('#listening-power').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.listening-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.listening-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.listening-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.listening-cards .card:eq('+i+') .label').removeClass('hide');
				$('.listening-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.listening-cards .card:eq(1) .label').addClass('hide');
		$('.listening-cards .card:eq(1) .label').text('新品');
		$('.listening-cards .card:eq(1) img').attr('src','images/listening/T1AcE_Bghv1RXrhCrK.jpg');
		$('.listening-cards .card:eq(1) .name').text('移动电源5000mAh');
		$('.listening-cards .card:eq(1) .price').html('49元');
		$('.listening-cards .card:eq(1) .population').text('');
		$('.listening-cards .card:eq(1) .comment .comment-content').text('之前都不知道，还以为是18650电芯的。拿到手一看这...');
		$('.listening-cards .card:eq(1) .comment .comment-author').text(' 来自于 ywtdzh 的评价 ');

		$('.listening-cards .card:eq(2) .label').addClass('hide');
		$('.listening-cards .card:eq(2) .label').text('享9.3折');
		$('.listening-cards .card:eq(2) img').attr('src','images/listening/T1atV_BQLT1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(2) .name').text('ZMI移动电源10000mAh');
		$('.listening-cards .card:eq(2) .price').html('99元');
		$('.listening-cards .card:eq(2) .population').text('3908人评价');
		$('.listening-cards .card:eq(2) .comment .comment-content').text('用了一个月了，效果理想，可以充m3两次完整电量，还绰...');
		$('.listening-cards .card:eq(2) .comment .comment-author').text(' 来自于 287358680 的评价 ');

		$('.listening-cards .card:eq(3) .label').addClass('new-product');
		$('.listening-cards .card:eq(3) .label').text('新品');
		$('.listening-cards .card:eq(3) img').attr('src','images/listening/pms_1481273468.72564539!220x220.jpg');
		$('.listening-cards .card:eq(3) .name').text('小米移动电源10000mAh高配版');
		$('.listening-cards .card:eq(3) .price').html('149元');
		$('.listening-cards .card:eq(3) .population').text('64人评价');
		$('.listening-cards .card:eq(3) .comment .comment-content').text('');
		$('.listening-cards .card:eq(3) .comment .comment-author').text('');

		$('.listening-cards .card:eq(4) .label').addClass('new-product');
		$('.listening-cards .card:eq(4) .label').text('新品');
		$('.listening-cards .card:eq(4) img').attr('src','images/listening/pms_1482110626.95581660!220x220.jpg');
		$('.listening-cards .card:eq(4) .name').text('20000mAh小米移动电源2');
		$('.listening-cards .card:eq(4) .price').html('149元');
		$('.listening-cards .card:eq(4) .population').text('209人评价');
		$('.listening-cards .card:eq(4) .comment .comment-content').text('');
		$('.listening-cards .card:eq(4) .comment .comment-author').text('');

		$('.listening-cards .card:eq(6) .label').addClass('new-product');
		$('.listening-cards .card:eq(6) .label').text('新品');
		$('.listening-cards .card:eq(6) img').attr('src','images/listening/pms_1476688190.21955893!220x220.jpg');
		$('.listening-cards .card:eq(6) .name').text('10000mAh小米移动电源2');
		$('.listening-cards .card:eq(6) .price').html('79元');
		$('.listening-cards .card:eq(6) .population').text('');
		$('.listening-cards .card:eq(6) .comment .comment-content').text('充电速度优于原装充电器，颜值高于第一代，上午下单下午...');
		$('.listening-cards .card:eq(6) .comment .comment-author').text(' 来自于 180959997 的评价 ');

		$('.listening-cards .card:eq(7) .label').addClass('hide');
		$('.listening-cards .card:eq(7) .label').text('享9折');
		$('.listening-cards .card:eq(7) img').attr('src','images/listening/T1jMbjB5Jv1RXrhCrK.jpg');
		$('.listening-cards .card:eq(7) .name').text('小米插线板（3孔位+USB）');
		$('.listening-cards .card:eq(7) .price').html('49元');
		$('.listening-cards .card:eq(7) .population').text('');
		$('.listening-cards .card:eq(7) .comment .comment-content').text('3个usb插口正好给手机和pad充电，隐藏式白色指示...');
		$('.listening-cards .card:eq(7) .comment .comment-author').text(' 来自于 prinoac 的评价 ');

		$('.listening-cards .card:eq(8) .label').addClass('hide');
		$('.listening-cards .card:eq(8) .label').text(' 新品 ');
		$('.listening-cards .card:eq(8) img').attr('src','images/listening/pms_1469410847.29693876!220x220.jpg');
		$('.listening-cards .card:eq(8) .name').text('USB Type-C充电套装');
		$('.listening-cards .card:eq(8) .price').html('15元');
		$('.listening-cards .card:eq(8) .population').text('');
		$('.listening-cards .card:eq(8) .comment .comment-content').text('');
		$('.listening-cards .card:eq(8) .comment .comment-author').text('');

		$('.listening-cards .card:eq(9) .aaa-intro').text('小米插线板 5孔位');
		$('.listening-cards .card:eq(9) .aaa-price').text('39元');
		$('.listening-cards .card:eq(9) .aaa').attr('src','images/listening/T1Ihd_BTCv1RXrhCrK.jpg');

		$('.listening-cards .card:eq(10) .bbb-price').text('电源');
	});

	$('#listening-battery').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.listening-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.listening-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.listening-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.listening-cards .card:eq('+i+') .label').removeClass('hide');
				$('.listening-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.listening-cards .card:eq(1) .label').addClass('hide');
		$('.listening-cards .card:eq(1) .label').text('新品');
		$('.listening-cards .card:eq(1) img').attr('src','images/listening/T1sRhTBsYT1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(1) .name').text('金士顿8GB存储卡（Class4）');
		$('.listening-cards .card:eq(1) .price').html('24.9元');
		$('.listening-cards .card:eq(1) .population').text('70人评价');
		$('.listening-cards .card:eq(1) .comment .comment-content').text('');
		$('.listening-cards .card:eq(1) .comment .comment-author').text('');

		$('.listening-cards .card:eq(2) .label').addClass('hide');
		$('.listening-cards .card:eq(2) .label').text('享9.3折');
		$('.listening-cards .card:eq(2) img').attr('src','images/listening/T1GGAgByhv1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(2) .name').text('SanDisk 32GB高速存储卡');
		$('.listening-cards .card:eq(2) .price').html('69.9元');
		$('.listening-cards .card:eq(2) .population').text('9671人评价');
		$('.listening-cards .card:eq(2) .comment .comment-content').text('货收到了，一直没评价，购买的商品和网上的一样，运行也...');
		$('.listening-cards .card:eq(2) .comment .comment-author').text(' 来自于 陆国政 的评价 ');

		$('.listening-cards .card:eq(3) .label').addClass('hide');
		$('.listening-cards .card:eq(3) .label').text('新品');
		$('.listening-cards .card:eq(3) img').attr('src','images/listening/T1xxVTBghv1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(3) .name').text('彩虹5号电池（10粒装）');
		$('.listening-cards .card:eq(3) .price').html('9.9元');
		$('.listening-cards .card:eq(3) .population').text('');
		$('.listening-cards .card:eq(3) .comment .comment-content').text('良芯（心）产品啊！实用细心，超赞！');
		$('.listening-cards .card:eq(3) .comment .comment-author').text(' 来自于 帅哥娃 的评价 ');

		$('.listening-cards .card:eq(4) .label').addClass('hide');
		$('.listening-cards .card:eq(4) .label').text('新品');
		$('.listening-cards .card:eq(4) img').attr('src','images/listening/T178EjBjVT1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(4) .name').text('彩虹7号电池（10粒装）');
		$('.listening-cards .card:eq(4) .price').html('9.9元');
		$('.listening-cards .card:eq(4) .population').text('');
		$('.listening-cards .card:eq(4) .comment .comment-content').text('颜色亮丽，价格便宜，使用很方便好用。');
		$('.listening-cards .card:eq(4) .comment .comment-author').text(' 来自于 谁会问 的评价 ');

		$('.listening-cards .card:eq(6) .label').addClass('hide');
		$('.listening-cards .card:eq(6) .label').text('新品');
		$('.listening-cards .card:eq(6) img').attr('src','images/listening/T1sRhTBsYT1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(6) .name').text('SanDisk 16GB存储卡（Class4）');
		$('.listening-cards .card:eq(6) .price').html('31.9元');
		$('.listening-cards .card:eq(6) .population').text('');
		$('.listening-cards .card:eq(6) .comment .comment-content').text('物美价廉，正品行货，发货迅速');
		$('.listening-cards .card:eq(6) .comment .comment-author').text(' 来自于 sharph 的评价 ');

		$('.listening-cards .card:eq(7) .label').addClass('cheaper-price');
		$('.listening-cards .card:eq(7) .label').text('享9折');
		$('.listening-cards .card:eq(7) img').attr('src','images/listening/pms_1463731356.45818748!220x220.jpg');
		$('.listening-cards .card:eq(7) .name').text('镍氢充电电池套装');
		$('.listening-cards .card:eq(7) .price').html('88元 <s>98元</s>');
		$('.listening-cards .card:eq(7) .population').text('');
		$('.listening-cards .card:eq(7) .comment .comment-content').text('');
		$('.listening-cards .card:eq(7) .comment .comment-author').text('');

		$('.listening-cards .card:eq(8) .label').addClass('hide');
		$('.listening-cards .card:eq(8) .label').text(' 新品 ');
		$('.listening-cards .card:eq(8) img').attr('src','images/listening/T142A_BXEv1RXrhCrK!220x220.jpg');
		$('.listening-cards .card:eq(8) .name').text('小米车载充电器');
		$('.listening-cards .card:eq(8) .price').html('49元');
		$('.listening-cards .card:eq(8) .population').text('');
		$('.listening-cards .card:eq(8) .comment .comment-content').text('挺好，挺有质感，充电也快，非常满意');
		$('.listening-cards .card:eq(8) .comment .comment-author').text(' 来自于 975550705 的评价 ');

		$('.listening-cards .card:eq(9) .aaa-intro').text('小米USB充电器（4口）');
		$('.listening-cards .card:eq(9) .aaa-price').text('69元');
		$('.listening-cards .card:eq(9) .aaa').attr('src','images/listening/T1vFEjBbWT1RXrhCrK!220x220.jpg');

		$('.listening-cards .card:eq(10) .bbb-price').text('电池存储卡');
	});
}

function partsSwitchCard()
{
	$('#parts-hot').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.parts-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.parts-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.parts-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.parts-cards .card:eq('+i+') .label').removeClass('hide');
				$('.parts-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.parts-cards .card:eq(1) .label').addClass('hide');
		$('.parts-cards .card:eq(1) .label').text('新品');
		$('.parts-cards .card:eq(1) img').attr('src','images/parts/pms_1482221011.26064844.jpg');
		$('.parts-cards .card:eq(1) .name').text('小米指环支架');
		$('.parts-cards .card:eq(1) .price').text('19元');
		$('.parts-cards .card:eq(1) .population').text('2434人评价');
		$('.parts-cards .card:eq(1) .comment .comment-content').text('');
		$('.parts-cards .card:eq(1) .comment .comment-author').text('');

		$('.parts-cards .card:eq(2) .label').addClass('hide');
		$('.parts-cards .card:eq(2) .label').text('新品');
		$('.parts-cards .card:eq(2) img').attr('src','images/parts/pms_1477560322.75674062.jpg');
		$('.parts-cards .card:eq(2) .name').text('小米USB快速充电数据线');
		$('.parts-cards .card:eq(2) .price').text('19元');
		$('.parts-cards .card:eq(2) .population').text('1296人评价');
		$('.parts-cards .card:eq(2) .comment .comment-content').text('漂亮，美观，使用非常方便');
		$('.parts-cards .card:eq(2) .comment .comment-author').text(' 来自于 350636267 的评价 ');

		$('.parts-cards .card:eq(3) .label').addClass('hide');
		$('.parts-cards .card:eq(3) .label').text('新品');
		$('.parts-cards .card:eq(3) img').attr('src','images/parts/pms_1474430362.70018703.jpg');
		$('.parts-cards .card:eq(3) .name').text('小米自拍杆（线控版）');
		$('.parts-cards .card:eq(3) .price').text('49元');
		$('.parts-cards .card:eq(3) .population').text('3117人评价');
		$('.parts-cards .card:eq(3) .comment .comment-content').text('');
		$('.parts-cards .card:eq(3) .comment .comment-author').text('');

		$('.parts-cards .card:eq(4) .label').addClass('hide');
		$('.parts-cards .card:eq(4) .label').text('新品');
		$('.parts-cards .card:eq(4) img').attr('src','images/parts/T1_WhgBb_T1RXrhCrK.jpg');
		$('.parts-cards .card:eq(4) .name').text('青米USB快速充电数据线');
		$('.parts-cards .card:eq(4) .price').text('9.9~14.9元');
		$('.parts-cards .card:eq(4) .population').text('1.8万人评价');
		$('.parts-cards .card:eq(4) .comment .comment-content').text('很喜欢，很精致，很好用！');
		$('.parts-cards .card:eq(4) .comment .comment-author').text(' 来自于 334530729 的评价 ');

		$('.parts-cards .card:eq(6) .label').addClass('hide');
		$('.parts-cards .card:eq(6) .label').text('享9.6折');
		$('.parts-cards .card:eq(6) img').attr('src','images/parts/T1zL_vByCT1RXrhCrK.jpg');
		$('.parts-cards .card:eq(6) .name').text('小米随身WIFI');
		$('.parts-cards .card:eq(6) .price').html('19.9元');
		$('.parts-cards .card:eq(6) .population').text('30.2万人评价');
		$('.parts-cards .card:eq(6) .comment .comment-content').text('很不错，用起来很方便，走到哪儿用到哪儿，节省了好多流...');
		$('.parts-cards .card:eq(6) .comment .comment-author').text(' 来自于 朔之故里 的评价 ');

		$('.parts-cards .card:eq(7) .label').addClass('hide');
		$('.parts-cards .card:eq(7) .label').text('新品');
		$('.parts-cards .card:eq(7) img').attr('src','images/parts/T1Zp__B5Ev1RXrhCrK.jpg');
		$('.parts-cards .card:eq(7) .name').text('ZMI无限拓展数据线 120cm');
		$('.parts-cards .card:eq(7) .price').text('29元');
		$('.parts-cards .card:eq(7) .population').text('5736人评价');
		$('.parts-cards .card:eq(7) .comment .comment-content').text('');
		$('.parts-cards .card:eq(7) .comment .comment-author').text('');

		$('.parts-cards .card:eq(8) .label').addClass('hide');
		$('.parts-cards .card:eq(8) .label').text(' 享9折 ');
		$('.parts-cards .card:eq(8) img').attr('src','images/parts/pms_1469694895.01922815.jpg');
		$('.parts-cards .card:eq(8) .name').text('5000mAh小米移动电源保护套');
		$('.parts-cards .card:eq(8) .price').html('19.9元');
		$('.parts-cards .card:eq(8) .population').text('186人评价');
		$('.parts-cards .card:eq(8) .comment .comment-content').text('');
		$('.parts-cards .card:eq(8) .comment .comment-author').text('');

		$('.parts-cards .card:eq(9) .aaa-intro').text('小米5 钢化玻璃贴膜(0.22mm)');
		$('.parts-cards .card:eq(9) .aaa-price').text('29元');
		$('.parts-cards .card:eq(9) .aaa').attr('src','images/parts/T1t2K_B4L_1RXrhCrK.jpg');

		$('.parts-cards .card:eq(10) .bbb-price').text('热门');
	});

	$('#parts-earphone').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.parts-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.parts-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.parts-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.parts-cards .card:eq('+i+') .label').removeClass('hide');
				$('.parts-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.parts-cards .card:eq(1) .label').addClass('hide');
		$('.parts-cards .card:eq(1) .label').text('新品');
		$('.parts-cards .card:eq(1) img').attr('src','images/parts/T12AWgB5Vv1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(1) .name').text('小米手机5 智能翻盖保护套');
		$('.parts-cards .card:eq(1) .price').html('49元');
		$('.parts-cards .card:eq(1) .population').text('');
		$('.parts-cards .card:eq(1) .comment .comment-content').text('很不错，很好用。已推荐朋友使用。');
		$('.parts-cards .card:eq(1) .comment .comment-author').text(' 来自于 舊時書生 的评价 ');

		$('.parts-cards .card:eq(2) .label').addClass('hide');
		$('.parts-cards .card:eq(2) .label').text('享9.3折');
		$('.parts-cards .card:eq(2) img').attr('src','images/parts/T1XVWjBCYv1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(2) .name').text('小米Max 智能显示保护套');
		$('.parts-cards .card:eq(2) .price').html('59元');
		$('.parts-cards .card:eq(2) .population').text('8391人评价');
		$('.parts-cards .card:eq(2) .comment .comment-content').text('这个唤醒保护套功能还真不错~~给家人买的，等米ＭＡＸ...');
		$('.parts-cards .card:eq(2) .comment .comment-author').text(' 来自于 姮Fiona.mo 的评价 ');

		$('.parts-cards .card:eq(3) .label').addClass('cheaper-price');
		$('.parts-cards .card:eq(3) .label').text('享6折');
		$('.parts-cards .card:eq(3) img').attr('src','images/parts/pms_1469787847.44636521!220x220.jpg');
		$('.parts-cards .card:eq(3) .name').text('红米Pro 智能显示保护套');
		$('.parts-cards .card:eq(3) .price').html('59元');
		$('.parts-cards .card:eq(3) .population').text('1448人评价');
		$('.parts-cards .card:eq(3) .comment .comment-content').text('又是一款精品，喜欢，小米值得拥有！');
		$('.parts-cards .card:eq(3) .comment .comment-author').text(' 来自于 174473315 的评价 ');

		$('.parts-cards .card:eq(4) .label').addClass('hide');
		$('.parts-cards .card:eq(4) .label').text('享9折');
		$('.parts-cards .card:eq(4) img').attr('src','images/parts/T18sWvBTxv1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(4) .name').text('红米3高配版 炫彩翻盖保护套');
		$('.parts-cards .card:eq(4) .price').html('39元');
		$('.parts-cards .card:eq(4) .population').text('7214人评价');
		$('.parts-cards .card:eq(4) .comment .comment-content').text('这个我感觉是我买的性价比最好的手机外套了');
		$('.parts-cards .card:eq(4) .comment .comment-author').text(' 来自于 煎饼 的评价 ');

		$('.parts-cards .card:eq(6) .label').addClass('hide');
		$('.parts-cards .card:eq(6) .label').text('享9.6折');
		$('.parts-cards .card:eq(6) img').attr('src','images/parts/T10Eb_BmAv1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(6) .name').text('红米Note3 炫彩翻页保护套');
		$('.parts-cards .card:eq(6) .price').html('39元');
		$('.parts-cards .card:eq(6) .population').text('');
		$('.parts-cards .card:eq(6) .comment .comment-content').text('挺不错的。手感和做工都满意！支持一下……');
		$('.parts-cards .card:eq(6) .comment .comment-author').text(' 来自于 846245880 的评价 ');

		$('.parts-cards .card:eq(7) .label').addClass('hide');
		$('.parts-cards .card:eq(7) .label').text('享9折');
		$('.parts-cards .card:eq(7) img').attr('src','images/parts/T1WLx_BgVv1RXrhCrK.jpg');
		$('.parts-cards .card:eq(7) .name').text('红米3标准版 炫彩翻盖保护套');
		$('.parts-cards .card:eq(7) .price').html('39元');
		$('.parts-cards .card:eq(7) .population').text('7312人评价');
		$('.parts-cards .card:eq(7) .comment .comment-content').text('质量很好，老婆很喜欢');
		$('.parts-cards .card:eq(7) .comment .comment-author').text(' 来自于 风中的云345 的评价 ');

		$('.parts-cards .card:eq(8) .label').addClass('new-product');
		$('.parts-cards .card:eq(8) .label').text(' 新品 ');
		$('.parts-cards .card:eq(8) img').attr('src','images/parts/pms_1478582944.11632313!220x220.jpg');
		$('.parts-cards .card:eq(8) .name').text('红米4标准版 翻盖保护套');
		$('.parts-cards .card:eq(8) .price').html('49元');
		$('.parts-cards .card:eq(8) .population').text('166人评价');
		$('.parts-cards .card:eq(8) .comment .comment-content').text('非常喜欢！质量很好！到货速度也快！大爱');
		$('.parts-cards .card:eq(8) .comment .comment-author').text(' 来自于 323875912 的评价 ');

		$('.parts-cards .card:eq(9) .aaa-intro').text('平板2保护套');
		$('.parts-cards .card:eq(9) .aaa-price').text('69元');
		$('.parts-cards .card:eq(9) .aaa').attr('src','images/parts/T1QKJ_BvLv1RXrhCrK!220x220.jpg');

		$('.parts-cards .card:eq(10) .bbb-price').text('保护套');
	});

	$('#parts-power').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.parts-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.parts-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.parts-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.parts-cards .card:eq('+i+') .label').removeClass('hide');
				$('.parts-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.parts-cards .card:eq(1) .label').addClass('hide');
		$('.parts-cards .card:eq(1) .label').text('新品');
		$('.parts-cards .card:eq(1) img').attr('src','images/parts/T1cVLjBX_v1RXrhCrK.jpg');
		$('.parts-cards .card:eq(1) .name').text('小米手机5 极薄防蓝光贴膜');
		$('.parts-cards .card:eq(1) .price').html('49元');
		$('.parts-cards .card:eq(1) .population').text('8166人评价');
		$('.parts-cards .card:eq(1) .comment .comment-content').text('好用，顺滑！不错的膜！');
		$('.parts-cards .card:eq(1) .comment .comment-author').text(' 来自于 笑弥勒001 的评价 ');

		$('.parts-cards .card:eq(2) .label').addClass('hide');
		$('.parts-cards .card:eq(2) .label').text('享9.3折');
		$('.parts-cards .card:eq(2) img').attr('src','images/parts/T1y7JQBbCT1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(2) .name').text('小米Max 标准高透贴膜');
		$('.parts-cards .card:eq(2) .price').html('19元');
		$('.parts-cards .card:eq(2) .population').text('');
		$('.parts-cards .card:eq(2) .comment .comment-content').text('贴膜系列真好里面有两张膜还有练习膜');
		$('.parts-cards .card:eq(2) .comment .comment-author').text(' 来自于 陶震宇 的评价 ');

		$('.parts-cards .card:eq(3) .label').addClass('hide');
		$('.parts-cards .card:eq(3) .label').text('新品');
		$('.parts-cards .card:eq(3) img').attr('src','images/parts/T1SSJ_B4E_1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(3) .name').text('小米平板2 标准高透贴膜');
		$('.parts-cards .card:eq(3) .price').html('29元');
		$('.parts-cards .card:eq(3) .population').text('1593人评价');
		$('.parts-cards .card:eq(3) .comment .comment-content').text('透明度很好，还送练习贴');
		$('.parts-cards .card:eq(3) .comment .comment-author').text(' 来自于 longtz 的评价 ');

		$('.parts-cards .card:eq(4) .label').addClass('cheaper-price');
		$('.parts-cards .card:eq(4) .label').text('享6折');
		$('.parts-cards .card:eq(4) img').attr('src','images/parts/T1qdEgBKKv1RXrhCrK.jpg');
		$('.parts-cards .card:eq(4) .name').text('红米Note3 钢化玻璃膜');
		$('.parts-cards .card:eq(4) .price').html('9.9元 <s>19元</s>');
		$('.parts-cards .card:eq(4) .population').text('');
		$('.parts-cards .card:eq(4) .comment .comment-content').text('钢化膜表面很光滑，和手机屏幕玻璃一样，很好');
		$('.parts-cards .card:eq(4) .comment .comment-author').text(' 来自于 Pioneer77 的评价 ');

		$('.parts-cards .card:eq(6) .label').addClass('hide');
		$('.parts-cards .card:eq(6) .label').text('新品');
		$('.parts-cards .card:eq(6) img').attr('src','images/parts/pms_1482136232.14896578!220x220.jpg');
		$('.parts-cards .card:eq(6) .name').text('红米4标准版 标准高透贴膜');
		$('.parts-cards .card:eq(6) .price').html('19元');
		$('.parts-cards .card:eq(6) .population').text('257人评价');
		$('.parts-cards .card:eq(6) .comment .comment-content').text('品质真好，最主要学会自己动手也贴得非常好。');
		$('.parts-cards .card:eq(6) .comment .comment-author').text(' 来自于 896153591 的评价 ');

		$('.parts-cards .card:eq(7) .label').addClass('hide');
		$('.parts-cards .card:eq(7) .label').text('享9折');
		$('.parts-cards .card:eq(7) img').attr('src','images/parts/T1t2K_B4L_1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(7) .name').text('小米手机5 钢化玻璃贴膜');
		$('.parts-cards .card:eq(7) .price').html('29元');
		$('.parts-cards .card:eq(7) .population').text('');
		$('.parts-cards .card:eq(7) .comment .comment-content').text('超薄，高透，手感好！很好！');
		$('.parts-cards .card:eq(7) .comment .comment-author').text(' 来自于 梦中有你有我 的评价 ');

		$('.parts-cards .card:eq(8) .label').addClass('cheaper-price');
		$('.parts-cards .card:eq(8) .label').text('享6折');
		$('.parts-cards .card:eq(8) img').attr('src','images/parts/pms_1469787992.44385373!220x220.jpg');
		$('.parts-cards .card:eq(8) .name').text('红米Pro 标准高透贴膜');
		$('.parts-cards .card:eq(8) .price').html('9.9元 <s>19元</s>');
		$('.parts-cards .card:eq(8) .population').text('2384人评价');
		$('.parts-cards .card:eq(8) .comment .comment-content').text('实用，便宜，物有所值');
		$('.parts-cards .card:eq(8) .comment .comment-author').text(' 来自于 456573665 的评价 ');

		$('.parts-cards .card:eq(9) .aaa-intro').text('小米手机5 标准高透贴膜');
		$('.parts-cards .card:eq(9) .aaa-price').text('19元');
		$('.parts-cards .card:eq(9) .aaa').attr('src','images/parts/T1keE_BsJv1RXrhCrK!220x220.jpg');

		$('.parts-cards .card:eq(10) .bbb-price').text('贴膜');
	});

	$('#parts-battery').mouseover(function(){
		for(var i=1;i<9;i++)
		{
			if(i != 5)
			{
				$('.parts-cards .card:eq('+i+') .label').removeClass('new-product');
				$('.parts-cards .card:eq('+i+') .label').removeClass('cheaper-price');
				$('.parts-cards .card:eq('+i+') .label').removeClass('free-fee');
				$('.parts-cards .card:eq('+i+') .label').removeClass('hide');
				$('.parts-cards .card:eq('+i+') img').attr('src','');
			}
		}

		$('.parts-cards .card:eq(1) .label').addClass('new-product');
		$('.parts-cards .card:eq(1) .label').text('新品');
		$('.parts-cards .card:eq(1) img').attr('src','images/parts/pms_1477560322.75674062!220x220.jpg');
		$('.parts-cards .card:eq(1) .name').text('小米USB快速充电数据线');
		$('.parts-cards .card:eq(1) .price').html('19元');
		$('.parts-cards .card:eq(1) .population').text('3142人评价');
		$('.parts-cards .card:eq(1) .comment .comment-content').text('漂亮，美观，使用非常方便');
		$('.parts-cards .card:eq(1) .comment .comment-author').text(' 来自于 350636267 的评价 ');

		$('.parts-cards .card:eq(2) .label').addClass('new-product');
		$('.parts-cards .card:eq(2) .label').text('新品');
		$('.parts-cards .card:eq(2) img').attr('src','images/parts/pms_1482221011.26064844!220x220.jpg');
		$('.parts-cards .card:eq(2) .name').text('小米指环支架 金色');
		$('.parts-cards .card:eq(2) .price').html('19元');
		$('.parts-cards .card:eq(2) .population').text('2437人评价');
		$('.parts-cards .card:eq(2) .comment .comment-content').text('非常实用的指环，包装里还附带了几张备用黏胶贴纸，很贴...');
		$('.parts-cards .card:eq(2) .comment .comment-author').text(' 来自于 298636516 的评价 ');

		$('.parts-cards .card:eq(3) .label').addClass('hide');
		$('.parts-cards .card:eq(3) .label').text('新品');
		$('.parts-cards .card:eq(3) img').attr('src','images/parts/T1WTEvBmKT1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(3) .name').text('小米蓝牙手柄');
		$('.parts-cards .card:eq(3) .price').html('99元');
		$('.parts-cards .card:eq(3) .population').text('');
		$('.parts-cards .card:eq(3) .comment .comment-content').text('居家旅行必备神器，完美配对盒子，手机，平板，电视。小...');
		$('.parts-cards .card:eq(3) .comment .comment-author').text(' 来自于 赫赤赤有名 的评价 ');

		$('.parts-cards .card:eq(4) .label').addClass('hide');
		$('.parts-cards .card:eq(4) .label').text('新品');
		$('.parts-cards .card:eq(4) img').attr('src','images/parts/T11oW_B4dv1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(4) .name').text('蓝牙语音体感遥控器');
		$('.parts-cards .card:eq(4) .price').html('99元');
		$('.parts-cards .card:eq(4) .population').text('2891人评价');
		$('.parts-cards .card:eq(4) .comment .comment-content').text('语音识别很高，蓝牙遥控方便！');
		$('.parts-cards .card:eq(4) .comment .comment-author').text(' 来自于 笛哥520 的评价 ');

		$('.parts-cards .card:eq(6) .label').addClass('new-product');
		$('.parts-cards .card:eq(6) .label').text('新品');
		$('.parts-cards .card:eq(6) img').attr('src','images/parts/pms_1478248566.62624407!220x220.jpg');
		$('.parts-cards .card:eq(6) .name').text('小米便携鼠标');
		$('.parts-cards .card:eq(6) .price').html('99元');
		$('.parts-cards .card:eq(6) .population').text('1228人评价');
		$('.parts-cards .card:eq(6) .comment .comment-content').text('');
		$('.parts-cards .card:eq(6) .comment .comment-author').text('');

		$('.parts-cards .card:eq(7) .label').addClass('hide');
		$('.parts-cards .card:eq(7) .label').text('享9折');
		$('.parts-cards .card:eq(7) img').attr('src','images/parts/T13y_vBgJT1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(7) .name').text('小米千兆网线');
		$('.parts-cards .card:eq(7) .price').html('14.9元');
		$('.parts-cards .card:eq(7) .population').text('');
		$('.parts-cards .card:eq(7) .comment .comment-content').text('超六类线，做工的确精良！喜欢，买了3，4根了。');
		$('.parts-cards .card:eq(7) .comment .comment-author').text(' 来自于 Angel-lin 的评价 ');

		$('.parts-cards .card:eq(8) .label').addClass('hide');
		$('.parts-cards .card:eq(8) .label').text(' 新品 ');
		$('.parts-cards .card:eq(8) img').attr('src','images/parts/T1xLxQBgVT1RXrhCrK!220x220.jpg');
		$('.parts-cards .card:eq(8) .name').text('USB Type-C 转接头');
		$('.parts-cards .card:eq(8) .price').html('5元');
		$('.parts-cards .card:eq(8) .population').text('');
		$('.parts-cards .card:eq(8) .comment .comment-content').text('简单设计，方便以前的数据线充电传输');
		$('.parts-cards .card:eq(8) .comment .comment-author').text(' 来自于 Symon Lee 的评价 ');

		$('.parts-cards .card:eq(9) .aaa-intro').text('青米USB快速充电数据线');
		$('.parts-cards .card:eq(9) .aaa-price').text('19元');
		$('.parts-cards .card:eq(9) .aaa').attr('src','images/parts/T1_7KgB4Jv1RXrhCrK!220x220.jpg');

		$('.parts-cards .card:eq(10) .bbb-price').text('其他配件');
	});
}