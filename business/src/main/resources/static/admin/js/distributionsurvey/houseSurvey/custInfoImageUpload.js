// $(function(){ //等界面加载完成后，执行下面内容
//
//     $(".healthDes").each(function(temp){
//         if(this.value==""){
//             $(this).hide();
//         }
//     });
//     $("input[name^='uploadify']").each(function(i){
//         uploadDiv($(this));
//
//     });
//
//     $(document).on('pageChange',function(){
//         $("input[name^='uploadify']").each(function(i){
//             uploadDiv($(this));
//         });
//     });
//
//     $("table[name^='custInfoImageTable']").each(function () {
//         var data={};
//         var indexNum =  $(this).attr('name').substring($(this).attr('name').indexOf("["));
//         var custId   =  $(this).parent().parent().find('input[name="uploadify'+indexNum+'"]').attr('custId');
//         var dataType =  $(this).parent().parent().find('input[name="uploadify'+indexNum+'"]').attr('selectType');
//         // var bussNo   =  $(this).parent().parent().find('input[name="uploadify'+indexNum+'"]').attr('value');
//         data.custId = custId;
//         data.dataType = dataType;
//         data.paramType = "BORROWERIMAGETYPE";
//         data.bussNo = bussNo;
//         $.ajax({
//             url : "/imageUpload/queryAppAuditrate",
//             contentType : "application/json; charset=utf-8",
//             type        : 'post',
//             dataType    : 'json',
//             data        : JSON.stringify(data),
//             success : function(data) {
//                 if(data.imageMessages){
//                     loadCustImageTr(data.imageMessages,data.borrowerImageTypes,indexNum);
//                 }
//             },
//             error : function() {
//                 alert("影像添加失败");
//             }
//         });
//     });
// });
// function uploadDiv(control){
//
//     if(!$(control).attr('dynamic-tab-init') || $(control).attr('dynamic-tab-init')=='false'){
//         $(control).attr('dynamic-tab-init',true);
//     }else{
//         return;
//     }
//
//     var notNeedInit=false;
//
//     $(control).parent().children().each(function(i){
//         if($(this).attr('type')=='file'){
//             if(i==0||i==1) return ;
//             notNeedInit = true;
//             $(this).attr("imageTypevalue",$(this).parent().parent().parent().prev().find("select").find("option:selected").text());
//             var inputFile=  $(this).clone();
//             $(inputFile).attr('dynamic-tab-init',false);
//             console.info(inputFile);
//             var addParent =  $(this).parent().parent().parent();
//             $(this).parent().parent().remove();
//             addParent.append(inputFile);
//             uploadDiv($(inputFile));
//         }
//     });
//
//     if(notNeedInit) return ;
//
//     var imageType="";
//     var imageTypeValue=";"
//     $(control).on("click",function(){
//         imageType=$(control).attr('imageType');
//         imageTypeValue=$(control).attr('imageTypeValue');
//     })
//
//     control.fileinput({
//         language: 'zh', //设置语言
//         uploadUrl: "/imageUpload/upload", //上传的地址
//         allowedFileExtensions : ['jpg', 'png','bmp','jpeg'],//接收的文件后缀
//         showUpload: false, //是否显示上传按钮
//         showCaption: false,//是否显示标题
//         showPreview:false,
//         showRemove:false,
//         showCancel:false,
//         layoutTemplates:{progress:''},//取消上传成功的样式
//         browseClass: "btn btn-primary" //按钮样式
//     }).on("filebatchselected", function(event, files) {
//         $(this).fileinput("upload");
//
//     }).on("fileuploaded", function(event, data) {
//
//         $('.progress-bar').remove();
//         if(data.response){
//             var imageIndex = data.response[0].imageIndex;
//             //var imageType=$(control).attr('imageType');
//             var custId=$(control).attr('custId');
//
//             var data = {
//                 "dataType":$(control).attr('selectType'),
//                 "bussNo" : bussNo,
//                 "imageType" :imageType,
//                 "imageIndex" : imageIndex,
//                 "custId":custId
//
//             };
//             console.log(data)
//             $.ajax({
//                 url : "/imageUpload/saveFileInfo",
//                 contentType : "application/json; charset=utf-8",
//                 type        : 'post',
//                 dataType    : 'json',
//                 data        : JSON.stringify(data),
//                 success : function(data) {
//                     if(data.code=='0'){
//                         var src = "/imageUpload/showImg?imageIndex=" + data.imageIndex;
//                         var indexNum = $(control).attr('name').substring($(control).attr('name').indexOf("["));
//                         console.log(data)
//                         console.log(src)
//                         console.log(indexNum)
//                         buildWithWrap(data,src,imageType,imageTypeValue,indexNum);
//                     }else if(data.code=='1'){
//                         alert("该影像已存在!");
//                     }
//                 },
//                 error : function() {
//                     alert("影像添加失败");
//                 }
//             });
//         }
//     });
// }
//
// function healthDescriptor(me){
//     var value = me.value;
//     var descriptor;
//     if(value==1){
//         descriptor = $(me).parent().next().next();
//         descriptor.hide();
//         descriptor.val("");
//
//     }else{
//         descriptor = $(me).parent().next();
//         descriptor.css({
//             required:"required",
//             display: "inline",
//         });
//     }
// }
//
// function delImage(obj){
//     var tr = $(obj).parent().parent().parent().parent();
//     var imageSize = parseInt(tr.attr('imageSize'));
//     if(imageSize>1){
//         tr.attr('imageSize',imageSize-1);
//     }else{
//         tr.remove();
//     }
//     var id = $(obj).next().val();
//     var data={
//         "id":id
//     };
//     $.ajax({
//         type: "post",
//         url: "/imageUpload/delImage",
//         data: JSON.stringify(data),
//         success: function(data) {
//             if(data!=null){
//                 if(data.msg=="1"){
//                     $("#"+id).remove();
//
//                     alert("删除成功！");
//                 }else{
//                     alert("删除失败！");
//                 }
//             }else{
//                 alert("删除失败！");
//             }
//
//         },
//         error: function(data) {
//             alert("删除失败");
//         }
//     })
// }
//
// function showImgOne(imgIndex,imgId){
//
//     openWindowShowImgOne(imgIndex,'imageShowDiv1',imgId);
// }
//
//
// function openWindowShowImgOne(Img,Id,imgId){
//     $("#"+Id).find("#imgv").remove();
//     $("#"+Id).find("#imgbut").remove();
//     $("#"+Id).append("<div align='center' id='imgbut'><tr><td ><input type='button' class='btn btn-default' value='左转' onclick='Left()' />" +
//         "<input type='button' class='btn btn-default' value='右转' onclick='Right()' />" +
//         "<input type='button' class='btn btn-default' value='上一个' onclick='TheLast(\""+imgId+"\")' />"+
//         "<input type='button' class='btn btn-default' value='下一个' onclick='TheNext(\""+imgId+"\")' /></td></tr></div>");
//     $("#"+Id).append("<div align='center' id = 'imgv'><tr><td ><img  style='width:750px;' src='' alt='影像预览' id='imageShow' /></td></tr></div>");
//     $("#"+Id).find("img").attr("src",Img);
//     $("#"+Id).val(imgId);
//     //打开新窗口
//     openNewWindow('影像预览','800','600',$("#"+Id));
// }
//
// function openNewWindow(title,width,height,object){
//     layer.open({
//         type: 1,   //0：信息框（默认），1：页面层，2：iframe层，3：加载层，4：小tips层
//         title: [title, true], //是否显示标题
//         area: [width+"px", height+"px",1000], //控制宽和高
//         offset: [(height)/4 + 'px', ($(window).width() - width)/2 + 'px'],
//         skin: 'layui-layer-lan',  //皮肤
//         shade: 0,  //控制遮罩。0.2：遮罩透明度，'#111'：遮罩颜色，true：是否遮罩（否：false）
//         content: $(object),  //需要加载的HTML代码
//         maxmin: true,
//         zIndex:10000,
//         end : function(){
//             var Id='imageShowDiv1';
//             $("#"+Id).find("img").remove();
//             $("#"+Id).find("input").remove();
//             $("#"+Id).find("tr").html("");
//         },
//     });
// }
//
// function Left() {
//     $("#imageShow").rotateLeft();
//     var canvas = $("#imageShow");
//     var parentObj = canvas.parent();
//     var image = new Image();
//     image.src = canvas[0].toDataURL("image/png");
//     $(canvas).remove();
//     parentObj.append($(image)).find("img").attr("Stretch","Fill").attr("style","width:750px;").attr("id","imageShow");
// }
// function Right() {
//     $("#imageShow").rotateRight();
//     var canvas = $("#imageShow");
//     var parentObj = canvas.parent();
//     var image = new Image();
//     image.src = canvas[0].toDataURL("image/png");
//     $(canvas).remove();
//     parentObj.append($(image)).find("img").attr("Stretch","Fill").attr("style","width:750px;").attr("id","imageShow");
//
// }
//
// function TheLast(imgId) {
//     var currentImgId = $("#imageShowDiv1").val();
//     if(currentImgId!=null ||currentImgId!=''){
//         imgId=currentImgId;
//     }
//     var src = $("#"+imgId).prev().find('img').attr('src');
//     var id = $("#"+imgId).prev().attr('id');
//     if(src==undefined ||src==''){
//         alert("第一张图片!");
//         return ;
//     }
//     openWindowShowImgOne(src,'imageShowDiv1',id);
// }
//
// function TheNext(imgId) {
//     var currentImgId = $("#imageShowDiv1").val();
//     if(currentImgId!=null ||currentImgId!=''){
//         imgId=currentImgId;
//     }
//
//     var src = $("#"+imgId).next().find('img').attr('src');
//     var id = $("#"+imgId).next().attr('id');
//     if(src==undefined ||src==''){
//         alert("最后一张图片!");
//         return ;
//     }
//     openWindowShowImgOne(src,'imageShowDiv1',id);
//
// }
//
// function custDelTDImage(obj,indexNum,orgValue){
//     $(obj).hide();
//     $(obj).next().show();
//     $(obj).next().next().show();
//     $(obj).next().next().next().hide();
//
//     $("td[name='org_td_"+orgValue+"["+indexNum+"]']").find(".mysmallcss").each(function(){
//         $(this).show();
//     });
// }
//
// function custCdelTDImage(obj){
//     $(obj).hide();
//     $(obj).prev().show();
//     hideDiv(obj);
// }
//
// function hideDiv(obj){
//     var tr = $(obj).parents("tr:first");
//     $(".mycss",tr).each(function(){
//         $(".mysmallcss",$(this)).each(function(){
//             $(this).hide();
//         });
//     });
// }
//
//
// function buildWithOutWrap(data,src){
//     var content = '<div class="mycss" id="'+data.id+'" ><a class ="myacss" href="javascript:void(0)" onclick="showImgOne(\''+src+'\',\''+data.id+'\')" ><img src="'+src+'" class="myimagecss" /> </a>';
//     content +='<div hidden class = "mysmallcss"><input type = "button" class = "mydbucss" value="X" onclick="delImage(this)"/><input type = "hidden" value = "'+data.id+'"/></div>';
//     content += '<div hidden class = "mysmallcss1"><input type = "button" class = "mybucss" value="U"  onclick="updateImage(this)" />';
//     content += '<input type = "hidden" value = "'+src+'"/>';
//     content += '</div></div>';
//
//     return content;
// }
//
//
// function buildWithWrap(data,src,orgValue,orgText,tableIndexNum){
//     var content='';
//
//     if($("tr[name='org_tr_"+orgValue+tableIndexNum+"']").length > 0){
//         content+=buildWithOutWrap(data,src);
//         $("td[name='org_td_"+orgValue+tableIndexNum+"']").append(content);
//         $("tr[name='org_tr_"+orgValue+tableIndexNum+"']").attr('imageSize',parseInt($("tr[name='org_tr_"+orgValue+tableIndexNum+"']").attr('imageSize'))+1);
//     }else{
//         content='<tr class="removeDom" name="org_tr_'+orgValue+tableIndexNum+'" imageSize="1"><td class="col-xs-2" align="center">'+orgText+'</td>';
//         content+='<td name="org_td_'+orgValue+tableIndexNum+'" align="center" class="col-xs-7" >';
//         content+=buildWithOutWrap(data,src);
//         content+='</td><td align="center"><div class="col-xs-1"><input value="'+orgValue+'" type = "hidden"/>' +
//             '<input type="button" class="btn btn-danger" onclick="custDelTDImage(this,'+tableIndexNum+',\''+orgValue+'\')" value="删除" />' +
//             '<input type="button" class="btn btn-success" onclick="custCdelTDImage(this)" value="完成" style="display: none" /></div></td></tr>';
//         $("table[name='custInfoImageTable"+tableIndexNum+"']").append(content);
//     }
//     return content;
// }
//
//
//
// function custInfoSelect(data,indexNum) {
//     var name = $(data).attr('name');
//     indexNum = $(data).attr('name').substring(name.indexOf("[")+1,name.indexOf("]"));
//
//     var currentImageType=$(data).val();
//     var currentImageTypeVlue = $(data).find("option:selected").text();
//     $(data).parent().parent().find('input[name="uploadify['+indexNum+']"]').attr('imageType',currentImageType);
//     $(data).parent().parent().find('input[name="uploadify['+indexNum+']"]').attr('imageTypeValue',currentImageTypeVlue);
// }
//
// function loadCustImageTr(imageMessages,borrowerImageTypes,tableIndexNum) {
//     var map ={};
//     for(var i =0;i<borrowerImageTypes.length;i++){
//         map[borrowerImageTypes[i].paramKey] = borrowerImageTypes[i].paramValue;
//     }
//
//
//     for(var i=0;i<imageMessages.length;i++){
//         var src = "/imageUpload/showImg?imageIndex=" + imageMessages[i].imageIndex;
//
//         if($("tr[name='org_tr_"+imageMessages[i].imageType+tableIndexNum+"']").length > 0){
//             var imageTr=custBuildWithOutWrap(imageMessages[i],src);
//             $("td[name='org_td_"+imageMessages[i].imageType+tableIndexNum+"']").append(imageTr);
//             $("tr[name='org_tr_"+imageMessages[i].imageType+tableIndexNum+"']").attr('imageSize',parseInt($("tr[name='org_tr_"+imageMessages[i].imageType+tableIndexNum+"']").attr('imageSize'))+1);
//         }else{
//             var imageTr = '<tr class="removeDom" name="org_tr_'+imageMessages[i].imageType+tableIndexNum+'"  imageSize="1"><td class="col-xs-2" align="center">'+map[imageMessages[i].imageType]+'</td>';
//             imageTr+='<td name="org_td_'+imageMessages[i].imageType+tableIndexNum+'" align="center" class="col-xs-12" >';
//             imageTr+=custBuildWithOutWrap(imageMessages[i],src);
//             imageTr+='</td><td align="center"><div class="col-xs-1"><input value="'+imageMessages[i].imageType+'" type = "hidden"/>' +
//                 '<input type="button" class="btn btn-danger" onclick="custDelTDImage(this,'+tableIndexNum+',\''+imageMessages[i].imageType+'\')" value="删除" />' +
//                 '<input type="button" class="btn btn-success" onclick="custCdelTDImage(this)" value="完成" style="display: none" /></div></td></tr>';
//             $("table[name='custInfoImageTable"+tableIndexNum+"']").append(imageTr);
//         }
//     }
// }
//
//
// function custBuildWithOutWrap(data,src){
//     var content = '<div class="mycss" id="'+data.id+'"><a class ="myacss" href="javascript:void(0)" onclick="showImgOne(\''+src+'\',\''+data.id+'\')" ><img src="'+src+'" class="myimagecss" /> </a>';
//     content +='<div hidden class = "mysmallcss"><input type = "button" class = "mydbucss" value="X" onclick="delImage(this)"/><input type = "hidden" value = "'+data.id+'"/></div>';
//     content += '<div hidden class = "mysmallcss1"><input type = "button" class = "mybucss" value="U"  onclick="updateImage(this)" />';
//     content += '<input type = "hidden" value = "'+src+'"/>';
//     content += '</div></div>';
//
//     return content;
// }