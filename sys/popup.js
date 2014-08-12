//var b = chrome.extension.getBackgroundPage();
$(function(){
	var linkJson = [
		{
			"name" : "员工首页",
			"url" : "http://home.asiainfo.com/AIPRT",
			"icon" : "glyphicon-home"
		},
		{
			"name" : "报销",
			"url" : "http://home.asiainfo.com/aisse",
			"icon" : "glyphicon-usd"
		},
		{
			"name" : "工时",
			"url" : "http://info.asiainfo.com/TimeSheet/main.jsp",
			"icon" : "glyphicon-time"
		},
		{
			"name" : "通讯录",
			"url" : "http://home.asiainfo.com/aiprt/home/employeesearch",
			"icon" : "glyphicon-list-alt"
		},
		{
			"name" : "邮件",
			"url" : "http://mail.asiainfo.com/",
			"icon" : "glyphicon-envelope"
		},
		{
			"name" : "机票",
			"url" : "http://home.asiainfo.com/aitos",
			"icon" : "glyphicon-plane"
		},
		{
			"name" : "积分兑换",
			"url" : "http://aijf.asiainfo.com",
			"icon" : "glyphicon-heart"
		},
		{
			"name" : "论坛",
			"url" : "http://bbs.asiainfo.com/bbs/index.aspx",
			"icon" : "glyphicon-user"
		},
		{
			"name" : "公司文档",
			"url" : "http://home.asiainfo.com/AIPRT/ContentManage/ContentCategoryPreview/4d7ac2ca-3038-aa66-4abb-0c769b694956?index",
			"icon" : "glyphicon-file"
		},
		{
			"name" : "学习",
			"url" : "http://shinedu.com/shinedu/login-ALU.jsp",
			"icon" : "glyphicon-ok"
		},
		{
			"name" : "绩效",
			"url" : "http://home.asiainfo.com/AIPES/default.aspx",
			"icon" : "glyphicon-thumbs-up"
		},
		{
			"name" : "休假",
			"url" : "http://hr.asiainfo.com/ehrsoft/default.asp",
			"icon" : "glyphicon-glass"
		},
		{
			"name" : "创新",
			"url" : "http://ims.asiainfo.com/Dispatch/agent/redirect/AILKIPORTAL.html",
			"icon" : "glyphicon-fullscreen"
		},
		{
			"name" : "UED交流",
			"url" : "http://cssrain.github.io/",
			"icon" : "glyphicon-edit"
		},
		{
			"name" : "周报",
			"url" : "http://cssrain.github.io/trello/",
			"icon" : "glyphicon-check"
		},
		{
			"name" : "新人成长",
			"url" : "http://cssrain.github.io/internship/",
			"icon" : "glyphicon-th"
		}
	];


	var compiledTemplate = JST["temp/link.handlebars"];
	$("#J_category").html( compiledTemplate(linkJson) );


	$("#J_category").on("click","a",function(){
		var url = $(this).attr("href");
		chrome.tabs.create({
		    url: url ,
		    selected: true
		});
		return false;
	});

	$("#J_busiTab a").click(function(){
		var idx = $("#J_busiTab a").index(this);
		$(this).addClass("active").siblings().removeClass("active");
		$("#J_busiContent .tab-cd").eq(idx).removeClass("hidden").siblings().addClass("hidden");
		return false;
	});

	$("#openBg").click(function(){
	  	chrome.tabs.executeScript(null,{file:"/lib/jquery.js"},function(){
		  	chrome.tabs.executeScript(null,{file:"/userscript/preview.js"},function(){
				chrome.tabs.create({
				    url: chrome.extension.getURL("preview.html"),
				    selected: true
				});
		  	});
	  	});
	  	return false;
	});

	$("#createDel").click(function(){
	  	chrome.tabs.executeScript(null,{file:"/lib/jquery.js"},function(){
		  	chrome.tabs.executeScript(null,{file:"/userscript/openwindow.js"},function(){
	  			window.close();
		  	});
	  	});
	    return false;
	});

	$("#jiabanBg").click(function(){
	  	chrome.tabs.executeScript(null,{file:"/lib/jquery.js"},function(){
	  		chrome.tabs.create({
			    url: chrome.extension.getURL("jiaban.html"),
			    selected: true
			});
	  	});
	    return false;
	});

})


Handlebars.registerHelper("setIndex",function(idx,options){
	var buffer = idx%8;
	return buffer;
});

