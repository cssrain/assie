/*
var json = [
  ["2014-07-21","上海虹桥-杭州",1,155,916,278,0,0,0,0,0],
  ["2014-07-25","杭州-上海虹桥",2,0,0,0,0,0,0,0,0],
  ["2014-07-31","上海虹桥-杭州",3,155,1832,300,0,0,0,600,450],
  ["2014-08-08","杭州-上海虹桥",4,0,0,0,0,0,0,0,0],
  ["2014-07-21","上海虹桥-杭州",1,155,916,278,0,0,0,0,0],
  ["2014-07-25","杭州-上海虹桥",2,0,0,0,0,0,0,0,0],
  ["2014-07-31","上海虹桥-杭州",3,155,1832,300,0,0,0,600,450],
  ["2014-08-08","杭州-上海虹桥",4,0,0,0,0,0,0,0,0]
];
*/

function setDateList(json){
	//设置起始日期和地点
	for (var i = 1; i <= json.length; i++) {
	     $("#DatePicker"+i+"_textBoxDate").val(  json[i-1][0] );
	     $("#BmT_VistedCity"+(i-1)).val( json[i-1][1] );
	}
	//设置机票款
	setFeeList(json);
	//设置后面8项费用
	setOtherFeeList(json);
}
function setFeeList(json){
	var list = $("#HiddenExpenseTypeList").val().split("~");
	for (var i = 0; i < json.length; i++) {
        $("#BmT_TB"+list[0]+""+i).val( json[i][2] );
	}
}
function setOtherFeeList(json){
	var list = $("#HiddenExpenseTypeList").val().split("~");
	for(var j=1 ; j < list.length;j++){
		for( var m=0;m< json.length/2 ;m++ ){
   			console.log( "BmT_TB"+list[j]+""+m);
   			var k = m*2;
			$("#BmT_TB"+list[j]+""+m).val( json[k][j+2] );
		}
	}
}

$(function(){
	//修复系统在chrome下的bug
	$("#ApplyBaseInfo1_DropDownListTask").removeAttr("disabled");

	//插入textarea
	var textHtml = "<div style='padding:20px;' id='ChromeApp_wrap'>"+
	"<p style='padding:10px 20px;'><a href='javascript:;' id='ChromeApp_open'>不知道插入什么数据？赶紧使用数据转换工具</a></p>"+
	"<textarea class='form-control' rows='8' id='ChromeApp_txt' placeholder='请输入报销费用明细'></textarea>"+
	"</div>"+
	"<div class='text-center'><input type='button' class='btn btn-primary' value='一键生成' id='ChromeApp_btn'  />";
	$("#Form1").append(textHtml);



    $("#ChromeApp_open").click(function(){
        chrome.extension.sendRequest({"msg":"open"});
        return false;
    });


	$("#ChromeApp_btn").click(function(){
		var contentTxt =  $.trim($("#ChromeApp_txt").val());
		var trafficData = JSON.parse(contentTxt);
		setDateList(trafficData);
	});


});