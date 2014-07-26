window.onload= function(){

	//计时
    //
    var	
    	//认识
    	//stamp_0 = Date.parse("7/15/2013 18:51:00"),
		//在一起		
		stamp_0 = Date.parse("7/31/2013"),
		
		reckon_label = document.querySelectorAll('.reckon-label'),
		reckon_show = reckon_label[0],
		reckon_run = true;

	function reckon(){
		reckon_show.innerHTML = format(Date.parse(new Date()) - stamp_0);
		if(reckon_run){
			setTimeout(reckon, 1000);
		}
    }
    reckon();

    function format(ms){
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
			}, 1000)

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
			}, 1000)

		}, 500)

	};
};