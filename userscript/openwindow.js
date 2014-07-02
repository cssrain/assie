OpenItemDetail('dbcb1e7a-c995-4b3a-8a77-6ea74787be73');

//打开添加费用明细的页面
function OpenItemDetail(travelExpenseID) {

    if (travelExpenseID != '') {
        var sUrl = "../PettyCashVoucher/ItemTravelDetailInput.aspx?TravelFeeID=" + travelExpenseID + "&ExpenseCategoryID=" + document.getElementById("HiddenExpenseCategoryID").value;

        ShowCenterWindow(sUrl, window.screen.availWidth, window.screen.availHeight, 'yes', 'yes');
    }
}
/*
在屏幕中央打开窗体
*/
function ShowCenterWindow(url, width, height, scrollbars, resizable) {
    var top = (window.screen.availHeight - height) / 2;
    var left = (window.screen.availWidth - width) / 2;
    var win = window.open(url, "aisseNewWindow", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",Status=no,toolbar=no,menubar=no,location=no,scrollbars=" + scrollbars + ",resizable=" + resizable + "");
    try {
        win.focus();
    }
    catch (e)
    { }
}