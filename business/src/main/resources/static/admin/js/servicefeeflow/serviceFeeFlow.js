/**
 * Created by yanghuan on 2017/9/24.
 */


/*  function huanKuan( bussNo, moneyNumber){
 layer.open({
 type: 2,
 title: '服务费核销',
 maxmin: false,
 shadeClose: true, //点击遮罩关闭层
 area : ['500px' , '320px'],
 content:'serviceFeeFlowWriteOff?bussNo='+bussNo+'&moneyNumber='+moneyNumber
 });
 };*/

function huanKuan(bussNo, moneyNumber) {
  var serviceFeePay = (moneyNumber / 100 ).toFixed(2);
  var context = '<div xmlns="http://xmlns.jcp.org/jsf/html" style="height: 100%;padding: 20px;"><table style="width: 100%;height: 55%;">' +
    '<td><input type="text" hidden="hidden" name="serviceFeeFlow[bussNo]" value="' + bussNo + '"/>' +
    '<tr><td>服务费金额(元)</td>' +
    // '<td style="padding-left: 20px;"><input type="text"  style="width: 200px;" class="form-control"  id="loanAmount"  readonly="readonly" name="serviceFeeFlow[serviceFeePay]" value=' + serviceFeePay + ' placeholder="服务费金额(万元)"  required="required" /></td></tr>'
    '<td style="padding-left: 20px;"><input type="text"  style="width: 200px;" class="form-control"  id="loanAmount" name="serviceFeeFlow[serviceFeePay]" placeholder="请输入服务费金额" required="required" onchange="effective(this)"/></td></tr>'
    + '<tr>' +
    ' <td style="text-align: right;">还款日期</td>' +
    '<td style="padding-left: 20px;"><input type="text"style="width: 200px;height: 34px;padding-left: 10px;color: #666;" id="feeFlowDate" onClick="WdatePicker({dateFmt:\'yyyy-MM-dd HH:mm:ss\',minDate:\'%y-%M-%d-%H-%m-%s\'})"  name="serviceFeeFlow[serviceFeePayTime]"  th:value="${T(thymeleaf.Formats).formatTime(serviceFeeFlow.serviceFeePayTime)}"  placeholder="还款日期"/>'
    + '</tr>'
    + '</table>' +
    '<button type="button" style="width: 200px;margin: 0 auto;margin-top: 30px;" id="sumbitAssign" onclick="addFeeFlow(\'' + bussNo + '\',' + serviceFeePay + ')" class="btn btn-block btn-info">核销</button></div>'
  layer.open({
    type: 1 //Page层类型
    , area: ['377px', '250px']
    , title: '服务费核销'
    , shade: 0.6 //遮罩透明度
    , maxmin: false //允许全屏最小化
    , anim: 1 //0-6的动画形式，-1不开启
    , content: context
  });
}

function addFeeFlow(bussNo, moneyNumber) {
  var feeFlowDate = $("#feeFlowDate").val();
  var loanAmount = $("#loanAmount").val();
  var serviceFeePay = moneyNumber;
  var nowTime = new Date().getTime();
  var selectTime = new Date(feeFlowDate).getTime();
  if (loanAmount == '') {
    alert("请输入服务费金额");
    return;
  }
  if (!/^\d+\.?\d*$/.test(loanAmount)) {
    loanAmount = '';
    alert("服务费金额只可以输入数字");
  }
  if (loanAmount > serviceFeePay) {
    alert("服务费金额不可以大于待还金额");
    return;
  }
  if (feeFlowDate == '') {
    alert("请选择还款日期");
    return;
  }
  if (selectTime > nowTime) {
    alert("还款日期不能大于当前日期");
    return;
  }
  if($("#sumbitAssign").disabledButton(true)){
      return;
  }
  $.ajax({
    url: '/serviceFeeFlow/handleServiceFreeFlow',
    contentType: "application/json; charset=utf-8",
    type: 'post',
    dataType: 'json',
    data: JSON.stringify({
      bussNo: bussNo,
      serviceFeePayTime: feeFlowDate,
      serviceFeePay: loanAmount*100
    }),
    success: function (result) {
      if (result.resultCode == "0000") {
        cms.messager.alert("服务费核销成功");
        parent.window.location.href = "/serviceFeeFlow/list";
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);

      } else {
        cms.messager.alert("服务费核销失败");
        $("#sumbitAssign").disabledButton(false);
      }
    }
  });
}
// 补0，只允许输入数字
function effective(thisVal) {
  var _this = thisVal;
  if (_this.value == 0||!(/^\d+\.?\d*$/).test(_this.value)) {
    _this.value = "";
  } else {
    _this.value = Number(_this.value).toFixed(2);
  }
}