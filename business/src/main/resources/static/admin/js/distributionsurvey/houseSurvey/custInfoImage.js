document.write('<link href="/admin/js/uploadify/css/uploadify.css" rel="stylesheet" />');
document.write('<link href="/admin/css/imageUpload.css" rel="stylesheet" />');
document.write('<script type="text/javascript" src="/admin/js/uploadify/js/ajaxfileupload.js"></script>');
document.write('<script type="text/javascript" src="/admin/js/uploadify/js/jquery.uploadify.v2.1.4.js"></script>');
document.write('<script type="text/javascript" src="/admin/js/uploadify/js/swfobject.js"></script>');
document.write('<script type="text/javascript" src="/admin/js/layer.js"></script>');
document.write('<script type="text/javascript" src="/admin/js/rotate.js"></script>');

$(function(){ //等界面加载完成后，执行下面内容
    function uploadImageAppendTable(uploadTd){
        if(!$(uploadTd).attr('dynamic-tab-init') || $(uploadTd).attr('dynamic-tab-init')=='false'){
            $(uploadTd).attr('dynamic-tab-init',true);
        }else{
            return;
        }
        $.ajax({
            url : "/imageUpload/queryAppAuditrate",
            contentType : "application/json; charset=utf-8",
            type        : 'post',
            dataType    : 'json',
            data        : JSON.stringify({"paramType":$(uploadTd).attr('selectType'),"dataType":$(uploadTd).attr('dataType'),"bussNo":$(uploadTd).attr('value')}),
            success : function(data) {
                var borrowerImageTypes = data.borrowerImageTypes;
                var imageMessages = data.imageMessages;
                if(borrowerImageTypes.length>0){
                    $(uploadTd).attr('imageType',borrowerImageTypes[0].paramKey);
                    $(uploadTd).attr('imageTypeValue',borrowerImageTypes[0].paramValue);
                }
                var content =  buildOptionHtml(borrowerImageTypes);
                $(uploadTd).parent().before(content);
                $(uploadTd).parent().after(buildImageTable($(uploadTd).attr('tableId')));
                loadImageTr(imageMessages,borrowerImageTypes,$(uploadTd).attr('tableId'));
            },
            error : function() {
                alert("影像添加失败");
            }
        });

        $(uploadTd).uploadify({
            'uploader'  : '/admin/js/uploadify/swf/uploadify.swf', // uploadify.swf文件的相对路径，该swf文件是一个带有文字BROWSE的按钮，点击后淡出打开文件对话框
            'script'    : '/imageUpload/upload',
            'cancelImg' : '/admin/js/uploadify/image/cancel.png',
            'buttonImg' : '/admin/js/uploadify/image/imgButton.png',// 通过设置背景图片解决中文问题,就是把背景图做成按钮的样子
            'sizeLimit' : 999999999,// 文件大小显示
            'queueID' : 'fileQueue',// 文件队列的ID，该ID与存放文件队列的div的ID一致
            'queueSizeLimit' : 120,// 上传文件个数限制
            'progressData' : 'speed',// 上传速度显示
            'auto' : true,// 是否自动上传
            'multi' : true,// 是否多文件上传
            'simUploadLimit' : 10,
            'onAllComplete' : function(event, data) {
            },
            'onOpen' : function() {
                // showMask();
            },
            'onComplete' : function(event, queueID, file,serverData, data) {
                var imageType=$("#"+$(event.target).attr('id')).attr('imageType');
                var imageTypeValue=$("#"+$(event.target).attr('id')).attr('imageTypeValue');
                var dataType =$("#"+$(event.target).attr('id')).attr('dataType');
                var result = jQuery.parseJSON(serverData)[0];
                var imageIndex = result['imageIndex'];
                var bussNo =$("#"+$(event.target).attr('id')).attr('value');
                var data = {
                    "dataType":dataType,
                    "bussNo" : bussNo,
                    "imageType" : imageType,
                    "imageIndex" : imageIndex
                };
                $.ajax({
                    url : "/imageUpload/saveFileInfo",
                    contentType : "application/json; charset=utf-8",
                    type        : 'post',
                    dataType    : 'json',
                    data        : JSON.stringify(data),
                    success : function(data) {
                        if(data.code=='0'){
                            var src = "/imageUpload/showImg?imageIndex=" + data.imageIndex;
                            buildWithWrap(data,src,imageType,$(uploadTd).attr('imageTypeValue'),$(uploadTd).attr('tableId'));
                        }
                    },
                    error : function() {
                        alert("影像添加失败");
                    }
                });
            }
        });
    }







    function imageShowAppendTable(imageDiv) {
        if(!$(imageDiv).attr('dynamic-tab-init') || $(imageDiv).attr('dynamic-tab-init')=='false'){
            $(imageDiv).attr('dynamic-tab-init',true);
        }else{
            return;
        }
        $.ajax({
            url : "/imageUpload/queryAppAuditrate",
            contentType : "application/json; charset=utf-8",
            type        : 'post',
            dataType    : 'json',
            data        : JSON.stringify({"paramType":$(imageDiv).attr('selectType'),"dataType":$(imageDiv).attr('dataType'),"bussNo":$(imageDiv).attr('value')}),
            success : function(data) {
                var borrowerImageTypes = data.borrowerImageTypes;
                var imageMessages = data.imageMessages;
                if(borrowerImageTypes.length>0){
                    $(imageDiv).attr('imageType',borrowerImageTypes[0].paramKey);
                    $(imageDiv).attr('imageTypeValue',borrowerImageTypes[0].paramValue);
                }
                $(imageDiv).parent().after(buildImageTable($(imageDiv).attr('tableId')));
                loadImageTrWithOutButton(imageMessages,borrowerImageTypes,$(imageDiv).attr('tableId'));
            },
            error : function() {
                alert("影像添加失败");
            }
        });
    }


    $(document).on('pageChange',function(){
        $("input[initFile='custFile']").each(function(i){
            uploadImageAppendTable($(this));
        });

        $("div[name='imageShow']").each(function(i){
            imageShowAppendTable($(this));
        });
    });


    $("input[initFile='custFile']").each(function(i){
        uploadImageAppendTable($(this));
    });


    $("div[name='imageShow']").each(function(i){
        imageShowAppendTable($(this));
    });


});



function delImage(obj){

    var tr = $(obj).parent().parent().parent().parent();
    var imageSize = parseInt(tr.attr('imageSize'));
    alert(imageSize);
    if(imageSize>1){
        tr.attr('imageSize',imageSize-1);
    }else{
        tr.remove();
    }
    var id = $(obj).next().val();
    var data={
        "id":id
    };
    $.ajax({
        type: "post",
        url: "/imageUpload/delImage",
        data: JSON.stringify(data),
        success: function(data) {
            if(data!=null){
                if(data.msg=="1"){
                    $("#"+id).remove();

                    alert("删除成功！");
                }else{
                    alert("删除失败！");
                }
            }else{
                alert("删除失败！");
            }

        },
        error: function(data) {
            alert("删除失败");
        }
    })
}

function showImgOne(imgIndex){
    openWindowShowImgOne(imgIndex,'imageShowDiv1');
}


function openWindowShowImgOne(Img,Id){
    $("#"+Id).find("#imgv").remove();
    $("#"+Id).find("#imgbut").remove();
    $("#"+Id).append("<div align='center' id='imgbut'><tr><td ><input type='button' class='btn btn-default' value='左转' onclick='Left()' /><input type='button' class='btn btn-default' value='右转' onclick='Right()' /></td></tr></div>");
    $("#"+Id).append("<div align='center' id = 'imgv'><tr><td ><img  style='width:750px;' src='' alt='影像预览' id='imageShow' /></td></tr></div>");
    $("#"+Id).find("img").attr("src",Img);
    //打开新窗口
    openNewWindow('影像预览','800','600',$("#"+Id));
}

function openNewWindow(title,width,height,object){
    layer.open({
        type: 1,    //0：信息框（默认），1：页面层，2：iframe层，3：加载层，4：小tips层
        title: [title, true], //是否显示标题
        area: [width+"px", height+"px"], //控制宽和高
        offset: [(height)/4 + 'px', ($(window).width() - width)/2 + 'px'],
        skin: 'layui-layer-rim',  //皮肤
        shade: [0.2, '#111',true],  //控制遮罩。0.2：遮罩透明度，'#111'：遮罩颜色，true：是否遮罩（否：false）
        content: $(object),  //需要加载的HTML代码
        end : function(){
            var Id='imageShowDiv1';
            $("#"+Id).find("img").remove();
            $("#"+Id).find("input").remove();
            $("#"+Id).find("tr").html("");
            console.log($("#imageShowDiv1"));
        },
    });
}

function Left() {
    $("#imageShow").rotateLeft();
    var canvas = $("#imageShow");
    var parentObj = canvas.parent();
    var image = new Image();
    image.src = canvas[0].toDataURL("image/png");
    $(canvas).remove();
    parentObj.append($(image)).find("img").attr("Stretch","Fill").attr("style","width:750px;").attr("id","imageShow");
}
function Right() {
    $("#imageShow").rotateRight();
    var canvas = $("#imageShow");
    var parentObj = canvas.parent();
    var image = new Image();
    image.src = canvas[0].toDataURL("image/png");
    $(canvas).remove();
    parentObj.append($(image)).find("img").attr("Stretch","Fill").attr("style","width:750px;").attr("id","imageShow");
}

function delTDImage(obj,idHead){
    $(obj).hide();
    $(obj).next().show();
    $(obj).next().next().show();
    $(obj).next().next().next().hide();
    $("#"+idHead+$(obj).prev().val()).find(".mysmallcss").each(function(){
        $(this).show();
    });
}

function cdelTDImage(obj){
    $(obj).hide();
    $(obj).prev().show();
    hideDiv(obj);
}

function hideDiv(obj){
    var tr = $(obj).parents("tr:first");
    $(".mycss",tr).each(function(){
        $(".mysmallcss",$(this)).each(function(){
            $(this).hide();
        });
    });
}


function buildWithOutWrap(data,src){
    var content = '<div class="mycss" id="'+data.id+'"><a class ="myacss" href="javascript:void(0)" onclick="showImgOne(\''+src+'\')" ><img src="'+src+'" class="myimagecss" /> </a>';
    content +='<div hidden class = "mysmallcss"><input type = "button" class = "mydbucss" value="X" onclick="delImage(this)"/><input type = "hidden" value = "'+data.id+'"/></div>';
    content += '<div hidden class = "mysmallcss1"><input type = "button" class = "mybucss" value="U"  onclick="updateImage(this)" />';
    content += '<input type = "hidden" value = "'+src+'"/>';
    content += '</div></div>';

    return content;
}


function buildWithWrap(data,src,orgValue,orgText,tableId){
    var content='';
    if($("#org_tr_"+orgValue).length > 0){
        content+=buildWithOutWrap(data,src);
        $("#org_td_"+orgValue).append(content);
    }else{
        content='<tr id="org_tr_'+orgValue+'"><td class="col-xs-2" align="center">'+orgText+'</td>';
        content+='<td id="org_td_'+orgValue+'" align="center" class="col-xs-7" >';
        content+=buildWithOutWrap(data,src);
        content+='</td><td align="center"><div class="col-xs-1"><input value="'+orgValue+'" type = "hidden"/>' +
            '<input type="button" class="btn btn-danger" onclick="delTDImage(this,\'org_td_\')" value="删除" />' +
            '<input type="button" class="btn btn-success" onclick="cdelTDImage(this)" value="完成" style="display: none" /></div></td></tr>';
        $("#imageTable_"+tableId).append(content);
    }
    return content;
}

function selectEvaluationOrganization(data) {
    var currentImageType=$(data).val();
    var currentImageTypeVlue = $(data).find("option:selected").text();
    $(data).parent().parent().find('input[name=uploadifyTd]').attr('imageType',currentImageType);

    $(data).parent().parent().find('input[name=uploadifyTd]').attr('imageTypeValue',currentImageTypeVlue);
}

function buildOptionHtml(borrowerImageTypes) {
    var content = '<div class="col-xs-4" align="center"><select class="form-control" onchange="selectEvaluationOrganization(this);" >';
    for(var i=0;i<borrowerImageTypes.length;i++){
        content+='<option value="'+borrowerImageTypes[i].paramKey+'">'+borrowerImageTypes[i].paramValue+'</option>';
    }
    content+='</select></div>';
    return content;
}

function buildImageTable(tableId){
    var content ='<div class="col-xs-10"><table id="imageTable_'+tableId+'" class="table table-bordered table-hover" ></table></div>';
    return content;
}

function loadImageTr(imageMessages,borrowerImageTypes,tableId) {
    var map ={};
    for(var i =0;i<borrowerImageTypes.length;i++){
        map[borrowerImageTypes[i].paramKey] = borrowerImageTypes[i].paramValue;
    }


    for(var i=0;i<imageMessages.length;i++){
        var src = "/imageUpload/showImg?imageIndex=" + imageMessages[i].imageIndex;

        if($("#org_tr_"+imageMessages[i].imageType).length > 0){
            var imageTr=buildWithOutWrap(imageMessages[i],src);
            $("#org_td_"+imageMessages[i].imageType).append(imageTr);
            $("#org_tr_"+imageMessages[i].imageType).attr('imageSize',parseInt($("#org_tr_"+imageMessages[i].imageType).attr('imageSize'))+1);
        }else{
            var imageTr = '<tr id="org_tr_'+imageMessages[i].imageType+'" imageSize="1"><td class="col-xs-2" align="center">'+map[imageMessages[i].imageType]+'</td>';
            imageTr+='<td id="org_td_'+imageMessages[i].imageType+'" align="center" class="col-xs-7" >';
            imageTr+=buildWithOutWrap(imageMessages[i],src);
            imageTr+='</td><td align="center"><div class="col-xs-1"><input value="'+imageMessages[i].imageType+'" type = "hidden"/>' +
                '<input type="button" class="btn btn-danger" onclick="delTDImage(this,\'org_td_\')" value="删除" />' +
                '<input type="button" class="btn btn-success" onclick="cdelTDImage(this)" value="完成" style="display: none" /></div></td></tr>';
            $("#imageTable_"+tableId).append(imageTr);
        }
    }
}

function loadImageTrWithOutButton(imageMessages,borrowerImageTypes,tableId){
    var map ={};
    for(var i =0;i<borrowerImageTypes.length;i++){
        map[borrowerImageTypes[i].paramKey] = borrowerImageTypes[i].paramValue;
    }


    for(var i=0;i<imageMessages.length;i++){
        var src = "/imageUpload/showImg?imageIndex=" + imageMessages[i].imageIndex;

        if($("#org_tr_"+imageMessages[i].imageType).length > 0){
            var imageTr=buildWithOutWrap(imageMessages[i],src);
            $("#org_td_"+imageMessages[i].imageType).append(imageTr);
            $("#org_tr_"+imageMessages[i].imageType).attr('imageSize',parseInt($("#org_tr_"+imageMessages[i].imageType).attr('imageSize'))+1);
        }else{
            var imageTr = '<tr id="org_tr_'+imageMessages[i].imageType+'" imageSize="1"><td class="col-xs-2" align="center">'+map[imageMessages[i].imageType]+'</td>';
            imageTr+='<td id="org_td_'+imageMessages[i].imageType+'" align="center" class="col-xs-10" >';
            imageTr+=buildWithOutWrap(imageMessages[i],src);
            imageTr+='</td></tr>';
            $("#imageTable_"+tableId).append(imageTr);
        }
    }
}