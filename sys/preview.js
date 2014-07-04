//注册一个Handlebars Helper,用来将索引+1，因为默认是从0开始的
Handlebars.registerHelper("addOne",function(index,options){
	return parseInt(index)+1;
});
Handlebars.registerHelper("isNum",function(value,options){
	return value||0;
});
Handlebars.registerHelper("arrof",function(value,idx,options){
	return value[idx]||0;
});
Handlebars.registerHelper("arrofTraval",function(travalList,dateList,idx,options){
	return travalList[idx*2]+"("+dateList[idx*2]+")"+" -- "+travalList[idx*2+1]+"("+dateList[idx*2+1]+")";
});
Handlebars.registerHelper("countDate",function(dateList,idx,options){
	var days = DateDiff(dateList[idx*2],dateList[idx*2+1]);
	return (days+1)+"天"+days+"晚";
});
Handlebars.registerHelper("countMoney",function(dateList,dayPrice,idx,options){
	var days = DateDiff(dateList[idx*2],dateList[idx*2+1]);
	var money = (days+1) * 40 ;
	var nomoney = (days+1) * (dayPrice-40) ;
	return "您需要差旅发票：有票"+money+"，无票"+nomoney;
});
Handlebars.registerHelper("showTick",function(tick,ticketInfo,options){
	var buffer = tick;
	if(buffer=="有"){
		var len = ticketInfo.split('\n').length;
		buffer = "有"+len+"条记录";
	}
	return buffer;
});


function DateDiff(sDate1, sDate2){ 
	var s1 = sDate1;
	var s2 = sDate2;
	s1 = s1.replace(/-/g, "/"); 
	s2 = s2.replace(/-/g, "/"); 
	s1 = new Date(s1);
	s2 = new Date(s2);
	var times= s2.getTime() - s1.getTime(); 
	var days = parseInt(times/ (1000 * 60 * 60 * 24));
	return parseInt(days);
}

$(function(){
	var storage = chrome.storage.local;
	storage.get("assieUser",function(result){
		console.log(result.assieUser);
		var compiledTemplate = JST["temp/user.handlebars"];
		//alert( compiledTemplate(result.assieUser) )
		//var newHtml = Handlebars.templates.user(result.assieUser);
		$("#J_mainContent").html( compiledTemplate(result.assieUser) );
			
		addPop();

		var txt = '您本次报销总金额是:'+parseFloat( (result.assieUser.totalFee).replace(/\,/g, "") )+'元,'+
				'共出差'+result.assieUser.travelDay+'天';
		speakDet(txt);
		
	});

});

function addPop(){
	$('#ex_details').popover({
		"placement":"bottom",
		"content": $("#ex_tooltip").html(),
		"html":true,
		"trigger": "hover"
	});	
	$('#ex_details_tg').popover({
		"placement":"bottom",
		"content": $("#ex_tooltip_target").html(),
		"html":true,
		"trigger": "hover"
	});
	$('#ex_details_tick').popover({
		"placement":"bottom",
		"content": $("#ex_tooltip_ticket").html(),
		"html":true,
		"trigger": "hover"
	});
	$('#ex_details_ts').popover({
		"placement":"bottom",
		"content": $("#ex_tooltip_ts").html(),
		"html":true,
		"trigger": "hover"
	});
}

function speakDet(txt){
	chrome.tts.speak(txt);
}