var Sfxie = {
	version: 'v1'
};
$.extend(Sfxie,{
	getVersion: function(){
		return this.version;
	},
	Ace: {
		Ui:{
			aceSwitch: function( cellvalue, options, cell ) {
				setTimeout(function(){
					$(cell) .find('input[type=checkbox]')
						.addClass('ace ace-switch ace-switch-5')
						.after('<span class="lbl"></span>');
				}, 0);
			}
		}
	},
	JqGrid:{
		/**
		 * 获取jqgrid表格的配置信息
		 * @param
		 * 		configs
		 */
		getGridSettings: function(configs){
			
		}
	},
	Util:{
	},
	Window: {
		getHeight: function(){
			return $(document).height();
		}
	}
});





/**
 *  占位符可以为多个  
	alert("http://{0}/{1}".format("www.songyanjun.net", "index.html"));  
	与上同理  
	alert("请输入{0},输完后再按存盘按钮".format("姓名"));  
	
	或:
	
	dashboardString.format({dashboardtitle: dashboard['title']},
							 {dashboardicon: dashboard['icon']},
							 {dashboardhref: dashboard['href']}
 * 
 * 2015年4月15日上午11:23:30
 * String
 * @returns {String}
 */
String.prototype.format = function() {
	if (arguments.length == 0)
		return this;
	for (var s = this, i = 0; i < arguments.length; i++)
		if(typeof arguments[i] == 'object'){
			for(var p in arguments[i]){
				s = s.replace(new RegExp("\\{" + p + "\\}", "g"), arguments[i][p]);
				break;
			}
		}else{
			s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
		}
	return s;
};
/**
 * 数组复制对象内容
 * 2016年8月28日上午11:23:30
 * var array = [{b:1},{a:1},{a:1},{a:1}];
 * array.extend({sfxie:'xiesf'},1,2,3);  //array= [{b:1},{a:1,sfxie:'xiesf'},{a:1,sfxie:'xiesf'},{a:1,sfxie:'xiesf'}]
 */
Array.prototype.extend = function() {
	var obj = arguments[0];
	if(arguments.length == 0 || typeof obj != 'object'){
		return this;
	}
	var array = this;
	for (i = 1; i < arguments.length; i++){
		var index = arguments[i];
		if (index < 0)
			break;
		$.extend(true,array[index],obj);
	}
	return array;
};

