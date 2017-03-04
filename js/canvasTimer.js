window.onload=draw;
function draw() {
	var canvas = document.getElementById('timer');
	var context = canvas.getContext('2d');
	context.save(); // 保存
	context.translate(100, 100);
	var deg = 2 * Math.PI / 12;
	// 表盘
	context.save();
	context.beginPath();
	for ( var i = 0; i < 13; i++) {
		var x = Math.sin(i * deg);
		var y = -Math.cos(i * deg);
		context.lineTo(x * 75, y * 75);
		context.lineWidth = 3;
		context.strokeStyle = "#0b90a3";
		context.stroke();
	}
	var c = context.createRadialGradient(0, 0, 0, 0, 0, 65);
	c.addColorStop(0, "#015763")
	c.addColorStop(1, "#0b90a3");
	context.fillStyle = c;
	context.fill();
	context.closePath();
	context.restore();
	// 数字
	context.save();
	context.beginPath();
	for ( var i = 1; i < 13; i++) {
		var x1 = Math.sin(i * deg);
		var y1 = -Math.cos(i * deg);
		context.fillStyle = "#fff";
		context.font = "bold 10px Calibri";
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(i, x1 * 60, y1 * 60);
	}
	context.closePath();
	context.restore();
	// 大刻度
	context.save();
	context.beginPath();
	for ( var i = 0; i < 12; i++) {
		var x2 = Math.sin(i * deg);
		var y2 = -Math.cos(i * deg);
		context.moveTo(x2 * 74, y2 * 74);
		context.lineTo(x2 * 68, y2 * 68);
	}
	context.strokeStyle = '#fff';
	context.lineWidth = 3;
	context.stroke();
	context.closePath();
	context.restore();
	// 小刻度
	context.save();
	var deg1 = 2 * Math.PI / 60;
	context.beginPath();
	for ( var i = 0; i < 60; i++) {
		var x2 = Math.sin(i * deg1);
		var y2 = -Math.cos(i * deg1);
		context.moveTo(x2 * 73, y2 * 73);
		context.lineTo(x2 * 70, y2 * 70);
	}
	context.strokeStyle = '#fff';
	context.lineWidth = 2;
	context.stroke();
	context.closePath();
	context.restore();
	// 文字
	context.save();
	context.strokeStyle = "#fff";
	context.font = ' 12px SimSun';
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.strokeText('亳州旅游网', 0, 32);
	context.restore();
	// new Date
	var time = new Date();
	var h = (time.getHours() % 12) * 2 * Math.PI / 12;
	var m = time.getMinutes() * 2 * Math.PI / 60;
	var s = time.getSeconds() * 2 * Math.PI / 60;
	// 时针
	context.save();
	context.rotate(h + m / 12 + s / 720);
	context.beginPath();
	context.moveTo(0, 3);
	context.lineTo(0, -42);
	context.strokeStyle = "#fff";
	context.lineWidth = 4;
	context.stroke();
	context.closePath();
	context.restore();
	// 分针
	context.save();
	context.rotate(m + s / 60);
	context.beginPath();
	context.moveTo(0, 4);
	context.lineTo(0, -52);
	context.strokeStyle = "#fff";
	context.lineWidth = 3;
	context.stroke();
	context.closePath();
	context.restore();
	//秒针
	context.save();
	context.rotate(s);
	context.beginPath();
	context.moveTo(0, 5);
	context.lineTo(0, -60);
	context.strokeStyle = "#fff";
	context.lineWidth = 2;
	context.stroke();
	context.closePath();
	context.restore();
	context.restore();//栈出
	setTimeout(draw, 1000);//计时器
}