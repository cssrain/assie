function getContent(){
	var newArr = [];
	for (var i = 1; i <= 8; i++) {
	     if( $.trim( $("#DatePicker"+i+"_textBoxDate").val() ) !="" ){
	     	newArr.push(  $.trim( $("#DatePicker"+i+"_textBoxDate").val() )  );
	     }
	}
	return newArr;
}
function getFromTo(){
	var arr = getContent();
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
	   newArr.push(  $.trim( $("#BmT_VistedCity"+i).val() )  );
	}
	return newArr;
}
function getFeeList(){
	var arr = getContent();
	var list = $("#HiddenExpenseTypeList").val().split("~");
	var newArr = [];
	for (var i = 0; i < Math.floor(arr.length/2); i++) {
		var newSubArr = [];
		for(var j=0;j<list.length;j++){
	        newSubArr.push(  $("#BmT_TB"+list[j]+""+i).val() );
		}
		newArr.push( newSubArr );
	}
	return newArr;
}
function getFeeTotalList(){
	var newArr = [];
	var list = $("#HiddenExpenseTypeList").val().split("~");
	for(var i=0;i<list.length;i++){
		newArr.push(  $("#BmT_TBRowSumAmount"+list[i]).val()  );
	}
	return newArr;
}
function getColCount(){
	var arr = getContent();
	var newArr = [];
	for (var i = 0; i < Math.floor(arr.length/2); i++) { 
	    newArr.push(  $("#BmT_ColSSum"+i).val() ); 
	}
	return newArr;

}
function loadOptions() {
	var msgJson = {
		"name": $("#ApplyBaseInfo1_DropdownlistEmployeeName option:selected").text() ,
		"numId": $("#ApplyBaseInfo1_DropdownlistEmployeeNumber option:selected").text() ,
		"applyCheck" : $("#ApplyBaseInfo1_CheckboxIsProject").is(":checked") ? ("项目报销("+$("#ApplyBaseInfo1_TextBoxProjectCode").val() +")")  :  "部门费用",
		"travelDay" : $("#TextBoxTravelDays").val(),
		"travelMoney" : $("#DropDownListTravelAllowance option:selected").text() , 
		"travelDet" : $("#TextBoxTravelPerpose").val() , 
		"ticket" : $("#checkBoxTicketBooking").is(":checked") ? "有"  :  "无" ,
		"dateList": getContent(),
		"fromToList":getFromTo(),
		"feeTotalList": getFeeTotalList(),
		"feeList": getFeeList(),
		"totalFee" : $("#BmT_TextBoxTotalSSum").val(),
		"colTotal": getColCount(),
		"ticketInfo":$("#textBoxTicketInfo").val(),
		"dayPrice": parseInt( ($("#DropDownListTravelAllowance option:selected").text()).replace(/[\CNY \/天]/g, "" ) )
	};
	var storage = chrome.storage.local;
	storage.remove("assieUser");
	storage.set({"assieUser":msgJson});
}

loadOptions();

/*
BmT_TBRowSumAmountef8896a1-4778-4ad2-a802-4492539dbbf5
BmT_TBRowSumAmounteeca0160-7bfb-4f05-b108-b2885203e7f3
*/


/*
id="HiddenExpenseTypeList" 
      bca79a00-051b-44e9-b7d8-abc6ec387817
BmT_TBbca79a00-051b-44e9-b7d8-abc6ec3878170
      dda26cee-4c84-43e6-ba0c-24db78daf2b2
BmT_TBdda26cee-4c84-43e6-ba0c-24db78daf2b20
      ef8896a1-4778-4ad2-a802-4492539dbbf5
BmT_TBef8896a1-4778-4ad2-a802-4492539dbbf50
      dbcb1e7a-c995-4b3a-8a77-6ea74787be73
BmT_TBdbcb1e7a-c995-4b3a-8a77-6ea74787be730
      93e9b4af-100a-4664-837f-23b03160d881
BmT_TB93e9b4af-100a-4664-837f-23b03160d8810
	  7519f35e-b0b0-436c-a6c7-1b2cd6ea52dc
BmT_TB7519f35e-b0b0-436c-a6c7-1b2cd6ea52dc0
	  b22caaf9-305e-40fc-b86a-8376b8e19ebd
BmT_TBb22caaf9-305e-40fc-b86a-8376b8e19ebd0
	  e2e6ac34-93b1-45bb-88b8-8e4ec83d75cf
BmT_TBe2e6ac34-93b1-45bb-88b8-8e4ec83d75cf0
	  eeca0160-7bfb-4f05-b108-b2885203e7f3
BmT_TBeeca0160-7bfb-4f05-b108-b2885203e7f30
*/

//
