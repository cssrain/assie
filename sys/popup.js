//var b = chrome.extension.getBackgroundPage();
$(function(){

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

})

