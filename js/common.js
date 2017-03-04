/* login.jsp */
function login(form) {
	if (form.elements["username"].value == "") {
		alert("用户名不能空！");
		return false;
	}
	if (form.elements["password"].value == "") {
		alert("密码不能空！");
		return false;
	}
}
/* register.jsp */
function reg(form) {
	if (form.elements["username"].value == "") {
		alert("用户名不能空！");
		return false;
	}
	if (form.elements["password"].value == "") {
		alert("密码不能空！");
		return false;
	}
	if (form.elements["password"].length < 6) {
		alert("密码不能少于六位！");
		return false;
	}
	if (form.elements["confirmPsw"].value == "") {
		alert("确认密码不能空！");
		return false;
	}
	if (form.elements["confirmPsw"].value != form.elements["password"].value) {
		alert("两次密码输入不一致！");
		return false;
	}
}
function changeKaptcha() {
	$("#kaptchaImage").attr("src",
			"../kaptcha.jpg?" + Math.floor(Math.random() * 100));
}

/* grzl.jsp */
function message(form) {
	alert("您关于" + form.elements["title"].value + " 的意见已提交！");
}
function changeInfo(form) {
	alert("信息修改成功！");
}

/* SearchJD.jsp */
function checkNull(){
	alert(form.elements["jdName"].value);
	if(form.elements["jdName"].value==""){
		alert("请输入景点名！");
		document.getElementByName("jdName").focus();
	}
}

