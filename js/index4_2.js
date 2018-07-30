window.onload = function (){
	var t_text = "";
	var t_textArr = [];
	var MAXNUM = 90;			//页面总文字数量
	
	t_textArr = textLength(20,MAXNUM,t_textArr);
	
	var maxid = document.getElementById("Max");
	var t_randPoint = [];
	t_randPoint = getraqndPoint();
	
	var t_class = [];
	
	for(var i = 0; i < MAXNUM; ++i){
		t_class.push(document.createElement("h1"));
	}
	
	for(var i = 0; i < MAXNUM; ++i){
		var t_size = Math.floor(Math.random() * 0.2 + 1);
		t_class[i].className = "center";
		t_class[i].setAttribute("style","font-size:" + t_size + "em;left:" + t_randPoint[i] + "px");
		t_class[i].innerText = t_textArr[i];
	}

	//随机启动时间
	var t_randTimer = [];
	for(var i = 0; i < MAXNUM; ++i){
		var t_time = (Math.random() * 8).toFixed(1);
		t_randTimer.push(t_time);
		setTimeout(
			function (i,t_textArr,t_randPoint)
			{
				var maxid = document.getElementById("Max");
				maxid.appendChild(t_class[i]);
			},t_time * 1000,i,t_textArr,t_randPoint,t_class);
	}
	
	//长度20的随机字符串
	function textLength(_length,_num){
		var t_TextArr = [];
		for(var j = 0; j < _num ;++j){
			t_text = [];
			for(var i = 1; i < _length; ++i){
				t_text = t_text + String.fromCharCode(3e4+Math.random()*33);
			}
			t_TextArr.push(t_text);
		}
		return t_TextArr;
	}
	
	//随机位置
	function getraqndPoint(){
		var t_arrNumber = [];
		for(var i = 0; i < MAXNUM; ++i){
			var t_left = Math.floor(Math.random() * maxid.clientWidth);
			t_arrNumber.push(t_left);
		}
		return t_arrNumber;
	}
}