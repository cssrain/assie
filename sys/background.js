/*chrome.browserAction.onClicked.addListener(function(tab) {
    alert(123);
    chrome.tabs.executeScript(null,{code:"document.body.bgColor='red'"});
});



function addCurrentPage(){
    console.log('前台');
    alert(  $("#ApplyBaseInfo1_DropdownlistEmployeeNumber").length );
}

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