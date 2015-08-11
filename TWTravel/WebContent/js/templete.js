$(document).ready(function(){
	//var ctx = document.getElementById("myCanvas").getContext("2d");
	var ctx = $('#myCanvas')[0].getContext("2d");
	//ctx.fillText("Sample String", 10, 50);
	//var c=document.getElementById("myCanvas");
	//var ctx=c.getContext("2d");
	//画矩形
	ctx.fillStyle="#FF0000";
	ctx.fillRect(0,0,150,75);
	//画线
	ctx.moveTo(10,10);
	ctx.lineTo(150,50);
	ctx.lineTo(10,50);
	ctx.stroke();
	//画圆
	ctx.fillStyle="#00FF00";
	ctx.beginPath();
	ctx.arc(70,18,15,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	//渐变背景
	var grd=ctx.createLinearGradient(200,0,175,50);
	grd.addColorStop(0,"#FF0000");
	grd.addColorStop(1,"#00FF00");
	ctx.fillStyle=grd;
	ctx.fillRect(200,0,175,50);


	//文字
	ctx.font = "20px Georgia";
	ctx.fillText("Hello World!", 10, 50);
	//渐变文字
	ctx.font = "30px Verdana";
	// 创建渐变
	var gradient = ctx.createLinearGradient(0, 0, 200, 0);
	gradient.addColorStop("0", "magenta");
	gradient.addColorStop("0.5", "blue");
	gradient.addColorStop("1.0", "red");
	// 用渐变填色
	ctx.fillStyle = gradient;
	ctx.fillText("longtianyu1.blog.163.com", 10, 90);
	//镂空文字
	ctx.strokeText("Hello World!", 10, 130);
	//镂空渐变文字
	ctx.strokeStyle = gradient;
	ctx.strokeText("longtianyu1.blog.163.com", 10, 170);

	//图片
	var img=new Image()
	img.src="flower.png"
	ctx.drawImage(img,200,0);
});