
//loader
var loader = new Loader(document.querySelector('.loader'));

function Loader(el){
	var text_arr = [
			'正在美化照片...',
			'正在偷偷删除奇怪的内容...',
			'正在藏起其他女生的照片...',
			'正在练习可爱的说话...',
			'正在练习坏坏地笑...',
			'正在准备笑话...',
			'正在刮胡子...',
			'正在整理发型...'
		],
		text_dom = el.querySelector('.text'),
		switchText_run = true,
		switchText_time = 1000;

	//切换文字内容
	setTimeout(switchText, switchText_time);

	this.close = function(){

		switchText_run = false;
		text_dom.innerHTML += '<p>加载完成！</p>';

		setTimeout(function(){
			el.style.top = "-100%";
			setTimeout(function(){
				el.remove();
			}, 1000);
		}, switchText_time);
	};

	function switchText(){
		var len = text_arr.length,
			index = Math.floor(Math.random() * len);


		if(switchText_run){
			text_dom.innerHTML += '<p>' + text_arr.splice(index, 1) + '</p>';
			setTimeout(switchText, switchText_time);
		}
	}

}

//关闭loader
window.onload = function(){
	setTimeout(loader.close, 3000);
};



// 计时
var	
	// 认识时间戳
	// stamp_0 = Date.parse("7/15/2013 18:51:00"),
	// 在一起时间戳
	stamp_0 = Date.parse("7/31/2013"),
	
	reckon_label = document.querySelectorAll('.reckon-label'),
	reckon_show = reckon_label[0],
	//计时开启标志位
	reckon_run = true;

//开始计时
reckon();



//首页效果
var tri_r = document.querySelector('.tri-r');

tri_r.onclick = function(){

	var	start = document.querySelector('.start'),
	 	cover_l = start.querySelector('.cover-l'),
		cover_r = start.querySelector('.cover-r'),
		main = document.querySelector('.main');

	cover_l.style.left = "0px";
	cover_r.style.right = "-100%";

	setTimeout(function(){

		start.style.top = "-100%";
		main.style.display = "block";

		setTimeout(function(){
			document.body.removeChild(start);
			reckon_run = false;
		}, 1000);

	}, 800)

};

//尾页效果
var heart = document.querySelector('.heart .lv-2 span');

heart.onclick = function(){

	var	end = document.querySelector('.end'),
		cover_l = end.querySelector('.cover-l'),
		label = cover_l.querySelector('.label'),
		cover_r = end.querySelector('.cover-r'),
		main = document.querySelector('.main');
	
	document.documentElement.scrollTop = 0;		//hack ff
	document.body.scrollTop = 0;
	end.style.display = "block";
	reckon_show = reckon_label[1];
	reckon_run = true;
	reckon();

	setTimeout(function(){

		end.style.bottom = "0";

		setTimeout(function(){
			main.style.display = "none";
			cover_r.style.right = "0";
			cover_l.style.left = "0";
		}, 1000);

	}, 500)

};

//计时函数
function reckon() {
	reckon_show.innerHTML = format(Date.parse(new Date()) - stamp_0);
	if (reckon_run) {
		setTimeout(reckon, 1000);
	}
}
//日期格式化
function format(ms) {
	var s = ms / 1000,
		m = Math.floor(s / 60),
		h = Math.floor(m / 60),
		d = Math.floor(h / 24),

	//sec = s%60;
	min = m%60;
	hou = h%24;

	//sec = sec < 10 ? ("0" + sec) : sec;
	//min = min < 10 ? ("0" + min) : min;

	return d + "天" + hou + "时" + min + "分";
}
