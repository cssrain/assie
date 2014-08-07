$(function(){
  $("#dataOutput").parent().hide();
  $("#jiabanBg").click(function(){
	  	if($("#dataInput").val()!="" && $("#dataOutput").val()!="" ){
	      var msgJson = JSON.parse( $("#dataOutput").val() );
	      var storage = chrome.storage.local;
	      storage.remove("jiabanUser");
	      storage.set({"jiabanUser":msgJson});

			chrome.tabs.create({
			    url: chrome.extension.getURL("jiabanList.html"),
			    selected: true
			});
		}else{
			alert("请先将Excel中的数据复制到文本框中");
		}
  });
})