this["JST"] = this["JST"] || {};

this["JST"]["temp/user.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", helper, options;
  buffer += "\r\n<div class=\"panel panel-info\">\r\n	  <div class=\"panel-heading\">\r\n	  <span class=\"glyphicon glyphicon-send\" style=\"font-size:18px;color:#428bca;top:4px;margin-right:10px;\"></span>\r\n	  您的第"
    + escapeExpression((helper = helpers.addOne || (depth0 && depth0.addOne),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "addOne", (data == null || data === false ? data : data.index), options)))
    + "段行程："
    + escapeExpression((helper = helpers.arrofTraval || (depth1 && depth1.arrofTraval),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.fromToList), (depth1 && depth1.dateList), (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "arrofTraval", (depth1 && depth1.fromToList), (depth1 && depth1.dateList), (data == null || data === false ? data : data.index), options)))
    + " <span class=\"mgl20\">"
    + escapeExpression((helper = helpers.countDate || (depth1 && depth1.countDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.dateList), (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "countDate", (depth1 && depth1.dateList), (data == null || data === false ? data : data.index), options)))
    + "</span><span class=\"mgl20\">"
    + escapeExpression((helper = helpers.countMoney || (depth1 && depth1.countMoney),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.dateList), (depth1 && depth1.dayPrice), (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "countMoney", (depth1 && depth1.dateList), (depth1 && depth1.dayPrice), (data == null || data === false ? data : data.index), options)))
    + "</span></div>	\r\n 	 <table class=\"table table-bordered mytable\">\r\n		 <tr>\r\n		 	<th>机票款支付现金</th>\r\n		 	<th>火车/长途汽车费</th>\r\n		 	<th>住宿费</th>\r\n		 	<th>出租车/巴士/停车费</th>\r\n		 	<th>电话费/电报费</th>\r\n		 	<th>订票费/手续费/邮寄费</th>\r\n		 	<th>机场往返交通费</th>\r\n		 	<th>有票差旅补助</th>\r\n		 	<th>无票差旅补助</th>\r\n		 	<th>合计</th>\r\n		 </tr>\r\n		 <tr>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[0]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[0]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[1]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[1]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[2]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[2]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[3]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[3]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[4]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[4]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[5]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[5]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[6]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[6]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[7]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[7]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0[8]), depth0, options) : helperMissing.call(depth0, "isNum", (depth0 && depth0[8]), depth0, options)))
    + "</td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.arrof || (depth1 && depth1.arrof),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.colTotal), (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "arrof", (depth1 && depth1.colTotal), (data == null || data === false ? data : data.index), options)))
    + "</td>\r\n		 </tr>\r\n	 </table>\r\n</div>\r\n";
  return buffer;
  }

  buffer += "<div class=\"panel panel-success\">\r\n	  <div class=\"panel-heading\">\r\n	  <span class=\"glyphicon glyphicon-user\" style=\"font-size:18px;color:#3c763d;top:4px;margin-right:10px;\"></span>\r\n	  ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "，您本次的报销单明细如下： </div>	\r\n 	 <table class=\"table table-bordered mytable\">\r\n		 <tr>\r\n		 	<th>报销总金额</th>\r\n		 	<th>报销类型</th>\r\n		 	<th>出差天数 <small style=\"font-size:11px;font-weight:normal;\">";
  if (helper = helpers.dayPrice) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dayPrice); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/天</small></th>\r\n		 	<th>机票预定</th>\r\n		 </tr>\r\n		 <tr>\r\n		 	<td>";
  if (helper = helpers.totalFee) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalFee); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"mgl10 \"><a href=\"#nogo\" data-toggle=\"popover\" title=\"总金额构成明细\" id=\"ex_details\">显示明细</a></span></td>\r\n		 	<td>";
  if (helper = helpers.applyCheck) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.applyCheck); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"mgl10 \"><a href=\"#nogo\" data-toggle=\"popover\" title=\"提示\" id=\"ex_details_ts\">提示</a></span></td>\r\n		 	<td>";
  if (helper = helpers.travelDay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.travelDay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"mgl10 \"><a href=\"#nogo\" data-toggle=\"popover\" title=\"出差目的\" id=\"ex_details_tg\">显示出差目的</a></span></td>\r\n		 	<td>"
    + escapeExpression((helper = helpers.showTick || (depth0 && depth0.showTick),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.ticket), (depth0 && depth0.ticketInfo), options) : helperMissing.call(depth0, "showTick", (depth0 && depth0.ticket), (depth0 && depth0.ticketInfo), options)))
    + " <span class=\"mgl10 \"><a href=\"#nogo\" data-toggle=\"popover\" title=\"机票明细\" id=\"ex_details_tick\">显示机票明细</a></span></td>\r\n		 </tr>\r\n	 </table>\r\n\r\n  	<div id=\"ex_tooltip\" class=\"hidden\">\r\n		<div>\r\n			<p>机票款支付现金：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[0]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[0]), depth0, options)))
    + "</mark></p>\r\n			<p>火车票及长途汽车费：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[1]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[1]), depth0, options)))
    + "</mark></p>\r\n			<p>住宿费：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[2]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[2]), depth0, options)))
    + "</mark></p>\r\n			<p>出租车/巴士/停车费等：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[3]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[3]), depth0, options)))
    + "</mark></p>\r\n			<p>电话费/电报费：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[4]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[4]), depth0, options)))
    + "</mark></p>\r\n			<p>订票费/手续费/邮寄费：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[5]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[5]), depth0, options)))
    + "</mark></p>\r\n			<p>机场往返交通费：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[6]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[6]), depth0, options)))
    + "</mark></p>\r\n			<p>差旅费-发票差旅补助：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[7]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[7]), depth0, options)))
    + "</mark></p>\r\n			<p>差旅费-无票差旅补助：<mark>"
    + escapeExpression((helper = helpers.isNum || (depth0 && depth0.isNum),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[8]), depth0, options) : helperMissing.call(depth0, "isNum", ((stack1 = (depth0 && depth0.feeTotalList)),stack1 == null || stack1 === false ? stack1 : stack1[8]), depth0, options)))
    + "</mark></p>\r\n		</div>\r\n	</div>\r\n  	<div id=\"ex_tooltip_target\" class=\"hidden\">\r\n		<div>\r\n			";
  if (helper = helpers.travelDet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.travelDet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</div>\r\n	</div>\r\n  	<div id=\"ex_tooltip_ticket\" class=\"hidden\">\r\n		<div>\r\n			";
  if (helper = helpers.ticketInfo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ticketInfo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</div>\r\n	</div>\r\n  	<div id=\"ex_tooltip_ts\" class=\"hidden\">\r\n		<div>\r\n			<p>开具发票时，注意公司名称：</p>\r\n			<p>亚信科技（南京）有限公司</p>\r\n			<p>亚信科技（中国）有限公司</p>\r\n			<p>亚信科技（成都）有限公司</p>\r\n		</div>\r\n	</div>\r\n	\r\n</div>\r\n\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.feeList), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });