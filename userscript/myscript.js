//插入textarea
var textHtml = "<div id='ChromeApp_select' class='pd20'></div>"+
"<div id='ChromeApp_table_cl'></div>"+
"<div id='ChromeApp_table_jc'></div>"+
"<div id='ChromeApp_table_yf'></div>"+
"<div style='padding:20px;' id='ChromeApp_wrap'>"+
"<textarea class='form-control' rows='10' id='ChromeApp_txt' placeholder='请输入差旅交通费用明细'></textarea>"+
"<textarea class='form-control hidden' rows='10' id='ChromeApp_txt_jc' placeholder='请输入机场往返费用明细'></textarea>"+
"<textarea class='form-control hidden' rows='10' id='ChromeApp_txt_yf' placeholder='请输入订票费\/手续费\/邮寄费明细'></textarea>"+
"</div>"+
"<div class='text-center'><input type='button' class='btn btn-primary' value='一键生成' id='ChromeApp_btn'  />"+
"<input type='button' class='btn btn-primary' style='margin-left:20px;' id='linkButtonSubmitDown_LinkButtonAction' onclick='javascript:__doPostBack(\"linkButtonSubmitDown$LinkButtonAction\",\"\")'' value='提交保存'> </div>";
$("#Form1").append(textHtml);
//插入下拉框
var selectHtml = '<ul class="nav nav-pills" id="ChromeApp_sel">'+
  '<li class="active"><a href="javascript:;">差旅交通费用明细</a></li>'+
  '<li><a href="javascript:;">机场往返费用明细</a></li>'+
  '<li><a href="javascript:;">订票费\/手续费\/邮寄费明细</a></li>'+
'</ul>';
$("#ChromeApp_select").html(selectHtml);
//隐藏页面中原有的保存按钮
//$("#PanelTraffic").hide();
//$("#PanelTraffic").prev().hide();
//$("#PanelTraffic").next().hide();
//$("#linkButtonSubmitUp_LinkButtonAction").closest("table").hide();
//$("#linkButtonSubmitDown_LinkButtonAction").closest("table").hide();
//设置一次性提交
$("#hiddenTravelOtherID").val( $("#HiddenBookingVisaPostageFeeID").val() );
$("#HiddenTrafficID").val( $("#HiddenTaxiBusTransportationFeeID").val() );
$("#HiddenAirportTransportationID").val( $("#HiddenAirportTransportationFeeID").val() );
//生成table模板--差旅交通和机票交通
function showTemplate(title,id,targetId){
	var trafficData = "",
	trafficDateList = "", 
	trafficFromList="",
	trafficToList="",
	trafficMilList="",
	trafficAmountList="",
	trafficPurposeList="",
	sumAmount = 0,
	listHtml = '';
	var contentTxt =  $.trim($("#"+id).val());
	//contentTxt = "["+contentTxt.split('\n').join(",")+"]";
	trafficData = JSON.parse(contentTxt);
	for(var i=0;i<trafficData.length;i++) {
		trafficDateList += '~' + trafficData[i][0];
		trafficFromList += '~' + trafficData[i][1];
		trafficToList += '~' + trafficData[i][2];
		trafficMilList += '~' + trafficData[i][3];
		trafficAmountList += '~' + trafficData[i][4];
		trafficPurposeList += '~' + trafficData[i][5];
		//计算总额
        var amount = trafficData[i][4];
        amount = (amount+"").replace(/\,/g, "");
        sumAmount += parseFloat(amount);
        //html
        listHtml += "<tr><td>"+(i+1)+"</td><td>"+trafficData[i][0]+"</td>"+
                    "<td>"+trafficData[i][1]+"</td><td>"+trafficData[i][2]+"</td>"+
                    "<td>"+trafficData[i][3]+"</td><td>"+trafficData[i][4]+"</td>"+
                    "<td>"+trafficData[i][5]+"</td></tr>";
	}
    trafficDateList = trafficDateList.substr(1);
    trafficFromList = trafficFromList.substr(1);
    trafficToList = trafficToList.substr(1);
    trafficMilList = trafficMilList.substr(1);
    trafficAmountList = trafficAmountList.substr(1);
    trafficPurposeList = trafficPurposeList.substr(1);
    if(targetId=="ChromeApp_table_cl"){ //日常交通
	    document.getElementById("HiddenTrafficDate").value = trafficDateList;
	    document.getElementById("HiddenTrafficFrom").value = trafficFromList;
	    document.getElementById("HiddenTrafficTo").value = trafficToList;
	    document.getElementById("HiddenTrafficMil").value = trafficMilList;
	    document.getElementById("HiddenTrafficAmount").value = trafficAmountList;
	    document.getElementById("HiddenTrafficPurpose").value = trafficPurposeList;
    }else if(targetId=="ChromeApp_table_jc"){ //机场
	    document.getElementById("HiddenAirportTransportationDate").value = trafficDateList;
	    document.getElementById("HiddenAirportTransportationFrom").value = trafficFromList;
	    document.getElementById("HiddenAirportTransportationTo").value = trafficToList;
	    document.getElementById("HiddenAirportTransportationMil").value = trafficMilList;
	    document.getElementById("HiddenAirportTransportationAmount").value = trafficAmountList;
	    document.getElementById("HiddenAirportTransportationPurpose").value = trafficPurposeList;
    }
    //预览明细--生成表格
    previewWin(title,targetId,listHtml,sumAmount);
}
//生成table模板--订票费\/手续费\/邮寄费
function showYFTemp(title,id,targetId){
	var trafficData = "",
	TravelOtherDateList = "", 
	TravelOtherAmountList="",
	TravelOtherDescriptionList="",
	sumAmount = 0,
	listHtml = '';
	var contentTxt = $.trim($("#"+id).val());
	//contentTxt = "["+contentTxt.split('\n').join(",")+"]";
	trafficData = JSON.parse(contentTxt);
	for(var i=0;i<trafficData.length;i++) {
        TravelOtherDateList += '~' +  trafficData[i][0];
        //TravelOtherPlaceList += '~'+ trafficData[i][0];
        TravelOtherAmountList += '~' + trafficData[i][1];
        TravelOtherDescriptionList += '~' +  trafficData[i][2];
		//计算总额
        var amount = trafficData[i][1];
        amount = (amount+"").replace(/\,/g, "");
        sumAmount += parseFloat(amount);
        //html
        listHtml += "<tr><td>"+(i+1)+"</td><td>"+trafficData[i][0]+"</td>"+
                    "<td>"+trafficData[i][1]+"</td><td>"+trafficData[i][2]+"</td></tr>";
	}

    TravelOtherDateList = TravelOtherDateList.substr(1);
    //TravelOtherPlaceList	= TravelOtherPlaceList.substr(1);
    TravelOtherAmountList = TravelOtherAmountList.substr(1);
    TravelOtherDescriptionList = TravelOtherDescriptionList.substr(1);
    document.getElementById("hiddenTravelOtherDate").value = TravelOtherDateList;
    document.getElementById("hiddenTravelOtherPlace").value = '';
    document.getElementById("hiddenTravelOtherAmountDes").value = TravelOtherDescriptionList;
    document.getElementById("hiddenTravelOtherAmount").value = TravelOtherAmountList;

    //预览明细--生成表格
    previewYfWin(title,targetId,listHtml,sumAmount);
}
//交通明细预览
function previewWin(title,targetId,listHtml,sumAmount){
	//预览差旅交通明细表和机场交通明细
    var ddhtml = "<div style='padding:20px;'><h4>"+title+"</h4><table class='table table-striped table-condensed'>"+
    "<thead>"+
      "<tr>"+
        "<th>序号</th>"+
        "<th>日期</th>"+
        "<th>起始地点</th>"+
        "<th>到达地点</th>"+
        "<th>里程</th>"+
        "<th>金额</th>"+
        "<th>工作事由</th>"+
      "</tr>"+
    "</thead>"+listHtml+
    "<tr><td colspan='7' class='text-center'>"+title+"总额为 <strong>"+formatCurrency(sumAmount)+"</strong> 元</td></tr>"+
    "</table></div>";
    $("#"+targetId).html(ddhtml);
}
//邮费预览
function previewYfWin(title,targetId,listHtml,sumAmount){
	//预览差旅交通明细表和机场交通明细
    var ddhtml = "<div style='padding:20px;'><h4>"+title+"</h4><table class='table table-striped table-condensed'>"+
    "<thead>"+
      "<tr>"+
        "<th>序号</th>"+
        "<th>日期</th>"+
        "<th>费用说明</th>"+
        "<th>金额</th>"+
      "</tr>"+
    "</thead>"+listHtml+
    "<tr><td colspan='4' class='text-center'>"+title+"总额为 <strong>"+formatCurrency(sumAmount)+"</strong> 元</td></tr>"+
    "</table></div>";
    $("#"+targetId).html(ddhtml);
}


//格式化金额显示格式
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
	num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}

$(function(){
	$("#ChromeApp_btn").click(function(){
		showTemplate('差旅交通明细','ChromeApp_txt','ChromeApp_table_cl');
		showTemplate('机场交通明细','ChromeApp_txt_jc','ChromeApp_table_jc');
		showYFTemp('订票费\/手续费\/邮寄费明细','ChromeApp_txt_yf','ChromeApp_table_yf');
	});

	$("#ChromeApp_sel li a").click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		var idx = $("#ChromeApp_sel li a").index(this);
		$("#ChromeApp_wrap textarea").eq(idx).removeClass("hidden").siblings().addClass("hidden");
		return false;
	});
});