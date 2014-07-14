/*chrome.browserAction.onClicked.addListener(function(tab) {
    alert(123);
    chrome.tabs.executeScript(null,{code:"document.body.bgColor='red'"});
});



chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    //console.log("Request comes from extention " + sender.tab.url);
    console.log(request.name);
    alert(request.name)
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null,
                           {code:"alert(123)"});
});



chrome.tabs.onCreated.addListener(function(tab) {
    alert(2)
});
   
   */

chrome.extension.onRequest.addListener(function(json){
   if(json.msg&&json.msg=="open"){
      openDataToolsPage();
   }
});


function openDataToolsPage(){
  var url = chrome.extension.getURL("dataConverter.html") ;
  window.open( url );
    /*
      chrome.tabs.create({
          url: chrome.extension.getURL("dataConverter.html"), 
          selected: true
      });
  */
}