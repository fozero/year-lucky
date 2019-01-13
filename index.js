/*
* @Author: fozero@126.
* @Date:   2019-01-11 20:06:27
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-12 13:15:20
*/
(function($){
	var userPic = [
		['http://images.diankr.cn/1.png',''],
		['http://images.diankr.cn/2.png',''],
		['http://images.diankr.cn/3.png',''],
		['http://images.diankr.cn/4.png',''],
		['http://images.diankr.cn/5.png',''],
		['http://images.diankr.cn/6.png',''],
		['http://images.diankr.cn/7.png',''],
		['http://images.diankr.cn/8.png',''],
		['http://images.diankr.cn/9.png',''],
		['http://images.diankr.cn/10.png',''],
		['http://images.diankr.cn/11.png',''],
		['http://images.diankr.cn/12.png',''],
		['http://images.diankr.cn/13.png',''],
		['http://images.diankr.cn/14.png',''],
		['http://images.diankr.cn/15.png',''],
		['http://images.diankr.cn/16.png',''],
		['http://images.diankr.cn/17.png',''],
		['http://images.diankr.cn/18.png',''],
		['http://images.diankr.cn/19.png',''],
		['http://images.diankr.cn/20.png',''],
		['http://images.diankr.cn/21.png',''],
		['http://images.diankr.cn/22.png',''],
		['http://images.diankr.cn/23.png',''],
		['http://images.diankr.cn/24.png',''],
		['http://images.diankr.cn/25.png',''],
		['http://images.diankr.cn/26.png',''],
		['http://images.diankr.cn/27.png',''],
	];
	var userCount = userPic.length-1;//参加人数
	var $JStart = $('.J_start'),
		$JStop = $('.J_stop'),
		$JSlot = $('.J_slot'),
		$JName = $('.J_name');
	var runing = true;
	var num = 0;
	$JStart.click(function(){
		if(runing){
			runing = false;
			$JStart.hide();
			$JStop.show();
			startNum();
		}
	});
	$JStop.click(function(){
		runing = true;
		$JStart.show();
		$JStop.hide();
		userCount = userPic.length-1;
		clearInterval(t);
		t = 0;
	});
	$(document).keyup(function(event){
	  if(event.keyCode ==13){
	  	if(runing){
	  		$JStart.trigger("click");
	  		return;
	  	}
	  	$JStop.trigger("click");
	    
	  }
	});
	// 循环名单
	function startNum() {
		num = Math.floor(Math.random() * userCount);
		$JSlot.css('background-image','url('+userPic[num][0]+')');
		t = setTimeout(startNum, 0);
	}
	$JSlot.css('background-image','url('+userPic[0][0]+')');
})(jQuery);