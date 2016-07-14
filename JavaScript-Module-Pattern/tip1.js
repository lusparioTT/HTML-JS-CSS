//
function fun1(){
	//...
}

function fun2(){
	//...
}


//---------------------------------------------
// 解决模块化问题
/*
 	将函数 变量封装在对象里
*/
var module1 = new Object({
	_count = 0;

	m1 : function(){
		//...
	};

	m2 : function(){
		//...
	}
});

//-----------------------------------------------
/*
	使用立即执行函数
*/
var module2 = (function(){
	_count = 0;

	m1 : function(){
		//...
	};

	m2 : function(){
		//...
	};

	return {
		m1 : m1,
		m2 : m2
	}

})();

//--------------------------------------------------------
/*
	宽放大模式
*/

var module3 = (function (mod) {

	//...

	return mod;

})(window.module3 || {});

//----------------------------------------------------------
/*
	输入全局变量
*/

var module4 = (function ($, YAHOO) {
	//...

})(jQuery, YAHOO);





