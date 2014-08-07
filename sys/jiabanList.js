$(function(){
  var storage = chrome.storage.local;
  storage.get("jiabanUser",function(result){
    console.log(result.jiabanUser);
	var compiledTemplate = JST["temp/jiabanList.handlebars"];
	$("#content").html( compiledTemplate(result.jiabanUser) );
  });
});