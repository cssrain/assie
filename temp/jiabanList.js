this["JST"] = this["JST"] || {};

this["JST"]["temp/jiabanList.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <h1 class=\"tit text-center\">"
    + escapeExpression(((stack1 = (depth0 && depth0[2])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n  <p class=\"nowrap\"> * * * * * * * * * * * * * * </p>\r\n  <p>\r\n    <span>单号</span>\r\n    <span>&nbsp;</span>\r\n    <span>数量</span>\r\n    <span>&nbsp;</span>\r\n    <span>售价</span>\r\n  </p>\r\n  <p class=\"nowrap\" >- - - - - - - - - - - - - - </p>\r\n  <p>\r\n    <span>餐费</span>\r\n    <span>&nbsp;</span>\r\n    <span>&nbsp;1</span>\r\n    <span>&nbsp;</span>\r\n    <span>"
    + escapeExpression(((stack1 = (depth0 && depth0[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".00</span>\r\n  </p>\r\n  <p class=\"nowrap\" >- - - - - - - - - - - - - - </p>\r\n  <p>\r\n    <span>数量： 1</span>\r\n    <span>&nbsp;</span>\r\n    <span>折价金额：0.00</span>\r\n  </p>\r\n  <p>\r\n    <span>时间："
    + escapeExpression(((stack1 = (depth0 && depth0[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " 19:10</span>\r\n  </p>\r\n    <span>总金额："
    + escapeExpression(((stack1 = (depth0 && depth0[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".00</span>\r\n  </p>\r\n  <p class=\"nowrap\" >- - - - - - - - - - - - - - </p>\r\n  <p>实收RMB："
    + escapeExpression(((stack1 = (depth0 && depth0[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".00</p>\r\n  <p>找零：0.00</p>\r\n  <p class=\"nowrap\"> * * * * * * * * * * * * * * </p>\r\n  <p class=\"text-center\">地址：古墩路588号<br/>电话：89871600<br/>请妥善保管好购物凭证</p>\r\n  <p>&nbsp;</p>\r\n  <p>&nbsp;</p>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });