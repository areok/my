// document.write('<link href="/admin/js/uploadify/css/uploadify.css" rel="stylesheet" />');
// document.write('<link href="/admin/css/imageUpload.css" rel="stylesheet" />');
// document.write('<script type="text/javascript" src="/admin/js/uploadify/js/ajaxfileupload.js"></script>');
// document.write('<script type="text/javascript" src="/admin/js/uploadify/js/jquery.uploadify.v2.1.4.js"></script>');
// document.write('<script type="text/javascript" src="/admin/js/uploadify/js/swfobject.js"></script>');
// document.write('<script type="text/javascript" src="/admin/js/layer.js"></script>');
// document.write('<script type="text/javascript" src="/admin/js/rotate.js"></script>');
document.write('<link href="/admin/css/imageUpload.css" rel="stylesheet" />');
document.write('<script type="text/javascript" src="/admin/js/layer.js"></script>');
document.write('<script type="text/javascript" src="/admin/js/rotate.js"></script>');
document.write('<link rel="stylesheet" href="/201505091706/css/fileinput.min.css" />');
document.write('<script src="/201505091706/js/fileinput.min.js"></script>');
document.write('<script src="/201505091706/js/locales/zh.js"></script>');

$(function(){ //等界面加载完成后，执行下面内容
    $(document).on('pageChange imageChange',function(){
        $('[plug-image]').each(function(i){
            uploadImageAppendTable($(this));
        });
        $('[plug-get-image]').each(function(){
            getImage($(this));
        });
    });
    $('[plug-image]').each(function(i){
        uploadImageAppendTable($(this));
    });
    $('[plug-get-image]').each(function(){
        getImage($(this));
    });

    function initTable(button){
        if(button.is('table')){
            initFromLocalData(button);
            return true;
        }
        var data={};
        var prefix = button.attr('data-table-prefix');
        prefix || button.attr('data-table-prefix','prefix') , (prefix = 'prefix');
        var bussNo = button.attr('data-buss-no');
        var dataType = button.attr('data-data-type') || '';
        var indexNum = button.attr('data-index');
        var taskType = button.attr('data-task-type');

        var opId = button.attr('data-op-id');
        var readonly = button.attr('data-readonly') == 'true';
        if(!indexNum){
            indexNum = new UUID().toString();//new Date().getTime();
            button.attr('data-index',indexNum);
        }
        var url = button.attr('data-url') || "/oss/queryAppAuditrate";
        indexNum = '['+indexNum +']';
        var paramType = button.attr('data-param-type');
        var prefix = button.attr('data-table-prefix')
        var custUuid = button.attr('data-cust-uuid') || '';
        var itemFull = button.attr('data-item-full')=='true';
        data.custUuid = custUuid;
        data.dataType = dataType;
        data.paramType = paramType || dataType;
        data.bussNo = bussNo;
        var needOpId = !!opId;
        opId && (data.opId = opId);
        taskType && (data.taskType = taskType);
        var parent=button.parent();
        $.ajax({
            url : url,
            contentType : "application/json; charset=utf-8",
            type        : 'post',
            dataType    : 'json',
            // async       :  readonly,
            data        : JSON.stringify(data),
            success : function(result) {
                if(result.imageMessages){
                    if(!readonly){
                        var select = $(buildOptionHtml(result.borrowerImageTypes));
                        parent.prepend(select);
                        select = select.find('select');
                        select.change(function(){
                            selectEvaluationOrganization($(this),button);
                        });
                        select.prop('selectedIndex', 0).change();
                    }
                    if(readonly){
                        button.hide();
                    }

                    if(itemFull){
                        for (var i=0; i < result.borrowerImageTypes.length; i++) {
                            var image = result.borrowerImageTypes[i];
                            image.imageIndex = null;
                            result.imageMessages.push(image );
                        }
                    }
                    var modify=button.attr("data-del-modify");
                    var table = buildImageTable(prefix+indexNum);
                    parent.append(table);
                    loadCustImageTr(result.imageMessages,result.borrowerImageTypes,indexNum, prefix, readonly,modify);
                }
            },
            error : function() {
                cms.messager.alert("影像添加失败");
            }
        });
        return readonly;
    }

    function  initFromLocalData(table) {
        var table = $(table);
        var index = table.attr('data-index');
        var othersNo = table.attr('data-others-no') || '';
        if(!index){
            index = new UUID().toString();//new Date().getTime();
            table.attr('data-index', index)
        }
        var prefix = table.attr('data-prefix');
        var readonly = table.attr('data-readonly') == 'true';
        var param = {};
        param.othersNo = othersNo;
        if(!prefix){
            prefix = 'prefix';
            table.attr('data-prefix',prefix);
        }
        table.attr('name',prefix+'['+index+']');
        table.attr('data-has-upload-button','true');
        index = '['+index+']';
        var bussNo = table.attr('data-buss-no')
        // imageName-dataType-imageType-required,imageName-dataType-imageType-required...
        var data = table.attr('data-data').split(',');
        var orderNumber=0;
        for(var image in data){
            orderNumber++;
            initImage(data[image],bussNo,prefix,index,readonly, param,orderNumber);
        }
    }
    //imageName-dataType-imageType-required
    function initImage(image,bussNo,prefix, index, readonly,param,orderNumber) {
        image = image.split('-');
        var data = {
            imageName:image[0],
            dataType:image[1],
            imageType:image[2],
            bussNo:bussNo,
            othersNo:param.othersNo
        };
        if(!bussNo){
            data.required = image[3]=='1';
            buildTr(data,index,null,prefix,readonly,true,orderNumber);
            return;
        }
        $.ajax({
            url: '/oss/getImages',
            cache: false,
            contentType : 'application/x-www-form-urlencoded',
            type:'POST',
            data: data
        }).done(function (images) {
            // if(!images){
            //     console.info('未发现图片！');
            //     return;
            // }
            if(!images || images.length ==0){
                data.required = image[3]=='1';
                buildTr(data,index,null,prefix,readonly,true,orderNumber);
                return;
            }
            for(var i in images){
                var im = images[i];
                im.required = image[3]=='1';
                im.imageName = im.imageName || data.imageName;
                im.othersNo = im.othersNo || data.othersNo;
                buildTr(im,index,null,prefix,readonly,true,orderNumber);
            }

        });

    }



    function uploadImageAppendTable(control){
        var self = $(control);

        if(!self.attr('image-init') || self.attr('image-init')=='false'){
            self.attr('image-init',true);
        }else{
            return;
        }
        self.attr('type','hidden');
        self.removeAttr('multiple');
        var simple = self.attr('plug-image') == 'simple';
        if(simple){
            initButton(control);
            return;
        }


        if(initTable(control)){
            return;
        }



        initButton(control);



    }
});

function initButton(button, hasUploadButton) {
    var self = $(button);
    var modify=self.attr("data-del-modify");
    if(self.parents('form[plug-detail-page]').length){
        self.hide();
        return;
    }

    var simple  = self.attr('plug-image') == 'simple';
    if(simple){
        $('<input type="button" class="btn btn-danger" style="width: 90px;margin-bottom: 3px;" onclick="custDelTDImage(this)" value="删除" /> ' +
            '<input type="button" class="btn btn-success" onclick="custCdelTDImage(this)" value="完成" style="display: none;width: 90px;margin-top: 5px;" />').insertAfter(self);
    }
    self.addClass('disableFalse');
    self.prop('disabled',false);


    initUploader(button, addFile);


    function addFile(button, imageIndex) {
        var self = $(button);
        var bussNo = self.attr('data-buss-no');
        var dataType = self.attr('data-data-type');
        var imageType = self.attr('data-image-type');
        var indexNum = self.attr('data-index');
        indexNum = '[' + indexNum + ']';
        var prefix = self.attr('data-table-prefix');
        var custUuid = self.attr('data-cust-uuid');
        var othersNo = self.attr('data-others-no');
        var taskType = self.attr('data-task-type');
        var opId = self.attr('data-op-id');
        var simple  = self.attr('plug-image') == 'simple';
        var modify=self.attr("data-del-modify");
        var data = {
            "dataType":dataType,
            "bussNo" : bussNo,
            "imageType" :imageType,
            // "imageName" : imageName,
            "imageIndex" : imageIndex,
            "custUuid":custUuid,
            'othersNo':othersNo
        };

        opId && (data.opId = opId);
        taskType && (data.taskType = taskType);
        $.ajax({
            url : "/oss/save",
            contentType : "application/json; charset=utf-8",
            type        : 'post',
            dataType    : 'json',
            data        : JSON.stringify(data),
            success : function(result) {
                data.id = result.id;
                data.url = result.url;
                data.imageName = result.imageName;
                if(simple){
                    var image = $(custBuildWithOutWrap(data, null, true));
                    var parent = self.closest('tr');
                    if(parent.length==0){
                        parent = self.closest('.form-group');
                    }
                    parent.find('[plug-get-image]').append(image);
                    getAndSetUrl(image);
                }else{
                    buildTr(data, indexNum, null, prefix, false, hasUploadButton,0,modify);
                }
            },
            error : function() {
                cms.messager.alert("影像添加失败");
            }
        });
    }
}



// 删除图片
function delImage(obj){
    var self = $(obj);
    var tr = self.closest('tr');
    var id = self.attr('data-id');
    $.ajax({
        type: "get",
        url: "/oss/delete",
        contentType : 'application/x-www-form-urlencoded',
        data: "id="+id,
        success: function(data) {
            if(data!=null && data.code=="200"){
                delImageById(id);
                cms.messager.alert("删除成功！");
                return;
            }
            cms.messager.alert("删除失败！");
        },
        error: function(data) {
            cms.messager.alert("删除失败");
        }
    })
}
//界面删除
function delImageById(id){
    var self = typeof id == 'string' ? $('#'+id) : id;
    var tr = self.closest('tr');
    var imageSize = parseInt(tr.attr('imageSize'));
    var simple = false;
    if(self.closest('[plug-get-image]').length){
        imageSize = self.closest('[plug-get-image]').find('img').length;
        simple = true;
    }
    if(imageSize>1 || simple){
        tr.attr('imageSize',imageSize-1);
        self.remove();
        return;
    }
    var name = tr.attr('name') || '';
    if(name.indexOf('-') != -1){
        name = name.substring(0,name.indexOf('-'));
    }
    var hasCopy = $('[name^="'+name+'"]').length >1;
    if(hasCopy ){
        tr.remove();
        return;
    }
    var hasButton = self.closest('table').attr('data-has-upload-button') == 'true';
    if(hasButton){
        tr.attr('imageSize',imageSize-1);
        self.remove();
        return;
    }
    tr.remove();
}

function updateImage(obj){
    obj = $(obj);
    var id = obj.attr('data-id');
    var index = obj.attr('data-index');
    var name = obj.attr('data-name');
    var required = obj.attr('data-required') == 'true';
    var inputcontent = '<div style="text-align: center;"><img class="ali-url" data-index="'+index+'" style="width: 210px;height: 170px;border: 1px solid #eee;" /><div>'+
        '<div class="form-group">'+
        '<label for="name" class="col-sm-4 control-label">原影像名称</label>'+
        '<div class="col-sm-7">'+
        '<input type="text" class="form-control" name="name" value="'+name+'" readonly="readonly"/>'+
        '</div>'+
        '</div>'+
        '<div class="form-group">'+
        '<label for="name" class="col-sm-4 control-label">影像名称</label>'+
        '<div class="col-sm-7">'+
        '<input type="text" name="newname" class="form-control" placeholder="影像名称"  required="required" />'+
        '</div>'+
        '</div>';
    inputcontent = $(inputcontent);
    getAndSetUrl(inputcontent)

    var tableName = obj.closest('table').attr('name');
    var hasUploadButton = obj.closest('table').attr('data-has-upload-button');
    var tableIndex = tableName.substring(tableName.indexOf("["));
    tableName = tableName.substring(0,tableName.indexOf("["));


    cms.dialog({
        titleText : "修改影像名称",
        width : "600px",
        disFooter : false,
        cancelBtnShow : true,
        cancelBtnText : "取消",
        content:inputcontent,
        saveBtnShow : true,
        saveBtnText : "确定",
        save:function(e,dialog) {
            var form = dialog.modal.find('form');
            var newname = form.find('[name="newname"]').val();
            var name = form.find('[name="name"]').val();
            if (name.indexOf('-') != -1) {
                name = name.slice(0, name.indexOf('-'));
            }
            if(name != newname && newname.indexOf(name+'-') != 0){
                newname = name+'-'+newname;
            }
            var validator = form.validate();
            if(!validator.form()){
                return;
            }
            var data = {};
            data.id = id;
            data.newname = newname;
            $.ajax({
                type: "post",
                url: "/imageUpload/updateImage",
                data: JSON.stringify(data),
                async: false,
                success: function(data) {
                    if(!data || !data.imageMessage){
                        cms.messager.alert('修改失败！');
                        return;
                    }
                    var im = data.imageMessage;
                    im.required = required;
                    im.imageName = newname;
                    delImageById(id);
                    buildTr(im, tableIndex, null, tableName, false, hasUploadButton,0);
                },
                error: function(data) {
                    cms.messager.alert('修改失败！');
                }
            })

            dialog.close();
        }

    });

}

function StandardPost2NewWindow(url, args) {
    var body = $(document.body);
    var form = $("<form method='post' target='_blank'></form>");
    var input;
    form.attr({
        "action" : url
    });
    if (args) {
        $.each(args, function(key, value) {
            input = $("<input type='hidden'>");
            input.attr({
                "name" : key
            });
            input.val(value);
            form.append(input);
        });
    }
    form.appendTo(body);
    form.submit();
}
function showImgOne(imgIndex,imgId,imgName){
    var img = $('#'+imgId).find('img.ali-url');
    var resizeurl = img.attr('src');
    var index = img.attr('data-index');
    openWindowShowImgOne(index,'imageShowDiv1',imgId,resizeurl);
}


function openWindowShowImgOne(index,Id,imgId,resizeurl){
    $("#"+Id).find("#imgv").remove();
    $("#"+Id).find("#imgbut").remove();
    $("#"+Id).append("<div align='center' id='imgbut'><tr><td ><input type='button' class='btn btn-default' value='左转' onclick='Left()' />" +
        "<input type='button' class='btn btn-default' value='右转' onclick='Right()' />" +
        "<input type='button' class='btn btn-default' value='上一个' onclick='TheLast(\""+imgId+"\")' />"+
        "<input type='button' class='btn btn-default' value='下一个' onclick='TheNext(\""+imgId+"\")' /></td></tr></div>");
    $("#"+Id).append("<div align='center' id = 'imgv'><tr><td ><img  src='"+resizeurl+"' style='width:750px;'  alt='影像预览' id='imageShow' /></td></tr></div>");
    // $("#"+Id).find("img").attr("src",Img);
    $("#"+Id).val(imgId);

    var imgtag = $("#"+Id).find("img");
    $.ajax({
        url: '/oss/getUrl?index='+index ,
        cache: false,
        contentType : 'application/x-www-form-urlencoded',
        type:'GET',
        data: ""
    }).done(function (url) {
        imgtag.attr('src',url);
    });

    //打开新窗口
    openNewWindow('影像预览','800','600',$("#"+Id));
}

function openNewWindow(title,width,height,object){
    layer.open({
        type: 1,   //0：信息框（默认），1：页面层，2：iframe层，3：加载层，4：小tips层
        title: [title, true], //是否显示标题
        area: [width+"px", height+"px",1000], //控制宽和高
        offset: [(height)/4 + 'px', ($(window).width() - width)/2 + 'px'],
        skin: 'layui-layer-lan',  //皮肤
        shade: 0,  //控制遮罩。0.2：遮罩透明度，'#111'：遮罩颜色，true：是否遮罩（否：false）
        content: $(object),  //需要加载的HTML代码
        maxmin: true,
        zIndex:10000,
        end : function(){
            var Id='imageShowDiv1';
            $("#"+Id).find("img").remove();
            $("#"+Id).find("input").remove();
            $("#"+Id).find("tr").html("");
        },
    });
}

function Left() {
    var img = $("#imageShow");
    var rotate = img.attr('rotate') || 0;
    rotate -= 90;
    img.attr('rotate', rotate);
    img.css({transform:"rotate("+rotate+"deg)"});
    //解决高比宽小的问题
    var width = img.width();
    var height = img.height();
    if(width>height){
        var parent = img.parent();
        if(rotate%180 !=0){
            parent.height(width);
            parent.css('padding-top',(width-height)/2+'px')
        }else{
            parent.height(height);
            parent.css('padding-top','0px')
        }
    }



}
function Right() {
    var img = $("#imageShow");
    var rotate = img.attr('rotate') || 0;
    rotate -= (-90); //防止变成字符串相加
    img.attr('rotate', rotate);
    img.css({transform:"rotate("+rotate+"deg)"});
    //解决高比宽小的问题
    var width = img.width();
    var height = img.height();
    if(width>height){
        var parent = img.parent();
        if(rotate%180 !=0){
            parent.height(width);
            parent.css('padding-top',(width-height)/2+'px')
        }else{
            parent.height(height);
            parent.css('padding-top','0px')
        }
    }
}

function TheLast(imgId) {
    var currentImgId = $("#imageShowDiv1").val();
    if(currentImgId!=null ||currentImgId!=''){
        imgId=currentImgId;
    }
    var index = $("#"+imgId).prev().find('img.ali-url').attr('data-index');
    var resizeUrl = $("#"+imgId).prev().find('img.ali-url').attr('src');
    var id = $("#"+imgId).prev().attr('id');
    if(index==undefined ||index==''){
        alert("第一张图片!");
        return ;
    }
    openWindowShowImgOne(index,'imageShowDiv1',id,resizeUrl);
}

function TheNext(imgId) {
    var currentImgId = $("#imageShowDiv1").val();
    if(currentImgId!=null ||currentImgId!=''){
        imgId=currentImgId;
    }

    var index = $("#"+imgId).next().find('img.ali-url').attr('data-index');
    var id = $("#"+imgId).next().attr('id');
    var resizeUrl = $("#"+imgId).next().find('img.ali-url').attr('src');
    if(index==undefined ||index==''){
        alert("最后一张图片!");
        return ;
    }
    openWindowShowImgOne(index,'imageShowDiv1',id,resizeUrl);

}

function custDelTDImage(obj,indexNum,orgValue,orgText){
    $(obj).hide();
    $(obj).next().show();
    $(obj).next().next().show();
    $(obj).next().next().next().hide();
    hideDiv(obj);

    $("td[name='org_td_"+orgValue+"_["+indexNum+"]_"+orgText+"']").find(".mysmallcss").each(function(){
        $(this).show();
    });
    var self = $(obj);
    var parent = self.closest('tr');
    if(parent.length==0){
        parent = self.closest('.form-group');
    }
    parent.find('.mysmallcss').each(function(){
        $(this).show();
    });
}

function custCdelTDImage(obj){
    $(obj).hide();
    $(obj).prev().show();
    hideDiv(obj);
}

function hideDiv(obj){
    var tr = $(obj).closest("tr").add($(obj).closest('.form-group'));
    tr.find(".mysmallcss, .mysmallcss1",$(this)).hide();
}


function canleupdate(obj){
    $(obj).hide();
    $(obj).prev().show();
    hideDiv(obj);
}

function updateType(obj,indexNum,orgValue,orgText){
    $(obj).hide();
    $(obj).next().show()
    $(obj).prev().hide();
    $(obj).prev().prev().show();
    hideDiv(obj);
    $("td[name='org_td_"+orgValue+"_["+indexNum+"]_"+orgText+"']").find(".mysmallcss1").each(function(){
        $(this).show();
    });
}


//影像信息展示 tr
function buildTr(im, tableIndexNum, map, prefix, readonly, hasUploadButton, orderNumber,modify){
    map = map || {};
    var typeName = im.imageName || map[im.imageType]; //获取对应的类别名称
    var trName = im.imageType+'_'+tableIndexNum+'_'+typeName;
    var size = im.imageIndex == null ? 0 : 1;

    if($("tr[name='org_tr_"+trName+"']").length > 0){
        var $imageTr=$(custBuildWithOutWrap(im,typeName));
        $("td[name='org_td_"+trName+"']").append($imageTr);
        getAndSetUrl($imageTr)
        $("tr[name='org_tr_"+trName+"']").attr('imageSize',parseInt($("tr[name='org_tr_"+trName+"']").attr('imageSize'))+size);
    }else{
        var imageTr = '<tr class="removeDom" name="org_tr_'+trName+'" data-orderNumber="'+orderNumber+'"  imageSize="'+size+'"><td class="col-xs-2" align="center">' +
            (im.required?'<span style="color: #9f191f;font-size: large">*</span>':'') +typeName+'</td>';
        imageTr+='<td name="org_td_'+trName+'" align="center" class="col-xs-12" >';
        imageTr+=custBuildWithOutWrap(im,typeName);
        // imageTr+='</td><td><a href="javascript:void(0)" onclick="ShowImg(this)">浏览</a></td>';
        if(!readonly) {
            if(hasUploadButton){
                imageTr+=uploadButton(im,prefix, tableIndexNum);
            }
            var indexNum = tableIndexNum.replace('[','').replace(']','');
            indexNum = "'"+indexNum+"'";
            imageTr +=  '<td align="center"><div class="col-xs-2">' +
                '<input type="button" class="btn btn-danger" onclick="custDelTDImage(this,' + indexNum + ',\'' + im.imageType + '\',\'' + typeName + '\')" value="删除" />' +
                '<input type="button" class="btn btn-success" onclick="custCdelTDImage(this)" value="完成" style="display: none" />';
            if(!modify){
                imageTr +=  '<input type="button" class="btn btn-info"  style="margin-top: 5px;" onclick="updateType(this,' + indexNum + ',\'' + im.imageType + '\',\'' + typeName + '\' )" value="修改"/> ' +
                    '<input type="button" class="btn btn-success" onclick="canleupdate(this)" style="display: none;margin-top: 5px;" value="完成"/>' +
                    '</div></td>';
            }
        }
        imageTr+='</tr>';
        var $image = $(imageTr);
        getAndSetUrl($image)
        if($("table[name='" + prefix + tableIndexNum + "']").find("tr").attr("data-orderNumber")){
            $("table[name='" + prefix + tableIndexNum + "']").find("tr").each(function(){
                if($(this).prev().attr("data-orderNumber")){
                    if(orderNumber>$(this).prev().attr("data-orderNumber") && orderNumber<$(this).attr("data-orderNumber")){
                        $(this).before($image)
                    }
                }else{
                    if(orderNumber>$(this).attr("data-orderNumber")){
                        $(this).after($image);
                    }else{
                        $(this).before($image)
                    }
                }
            })
        }else{
            $("table[name='"+prefix+tableIndexNum+"']").append($image);
        }
        if(hasUploadButton){
            initButton($image.find('[name="uploadify"]'), hasUploadButton);
        }
    }
}

function uploadButton(im,prefix,index){
    index = index.replace('[','').replace(']','');
    return '<td><input type="hidden" name="uploadify"  ' +
        'data-data-type="'+im.dataType+'" data-image-type="'+im.imageType+'" ' + 'data-in-table="true" data-image-name="'+im.imageName+'" ' +
        'data-buss-no="'+im.bussNo+'" data-others-no="'+im.othersNo+'" data-index="'+index+'" data-table-prefix="'+(prefix?prefix:'prefix')+'"/></td>'
}

function selectEvaluationOrganization(select, target) {
    var imageType= select.val();

    var imageName = select.find("option:selected").text();

    target.attr('data-image-type',imageType);

    target.attr('data-image-name',imageName);
}

function buildOptionHtml(borrowerImageTypes) {
    var content = '<div class="col-xs-4 removeDom" align="center"><select class="form-control col-md-offset-6" >';
    for(var i=0;i<borrowerImageTypes.length;i++){
        content+='<option value="'+borrowerImageTypes[i].imageType+'">'+borrowerImageTypes[i].imageName+'</option>';
    }
    content+='</select></div>';
    return content;
}


//table 初始化
function loadCustImageTr(imageMessages,borrowerImageTypes,tableIndexNum,prefix,readonly,modify) {
    var map ={};
    for(var i =0;i<borrowerImageTypes.length;i++){
        map[borrowerImageTypes[i].imageType] = borrowerImageTypes[i].imageName;
    }
    for(var i=0;i<imageMessages.length;i++){
        buildTr(imageMessages[i],tableIndexNum,map,prefix,readonly,false,i+1,modify)
    }
}


//删除 更新按钮
function custBuildWithOutWrap(data, name, noupdate){
    if(!data.imageIndex){
        return '';
    }
    var url = data.url ? 'src="'+data.url+'"' : '';

    var content = '<div class="mycss" id="'+data.id+'"><a class ="myacss" href="javascript:void(0)" onclick="showImgOne(\''+data.imageInde+'\',\''+data.id+'\',\''+name+'\')" ><img class="ali-url" '+url+' data-index="'+data.imageIndex+'" class="myimagecss" /> </a>';
    content +='<div hidden class = "mysmallcss"><input type = "button" class = "mydbucss" value="X" onclick="delImage(this)" data-id="'+data.id+'"/></div>';
    !noupdate && ( content += '<div hidden class = "mysmallcss1"><input type = "button" class = "mybucss" value="U"  onclick="updateImage(this)" data-required="'+(data.required?'true':'false')+ '" data-id="'+data.id+'" data-index="'+data.imageIndex+'" data-name="'+name+'" /></div>');
    content += '</div>';
    return content;
}

function buildImageTable(name){
    var content ='<div class="col-xs-12 removeDom"><table name="'+name+'" class="table table-bordered table-hover" ></table></div>';
    return $(content);
}
/*
 * 显示批量图片
 */
// function ShowImg(obj) {
//     var ele = $(obj).parents("tr:first").find("img");
//     var doc = "";
//     for (var i = 0; i < ele.length; i++) {
//         // var imgsrc = ele.eq(i).attr("src");
//         //跨域图片不能旋转，因此从线上web请求图片
//         var imgsrc = '/imageUpload/showImg.jpg?imageIndex='+ele.eq(i).attr("data-index");
//         doc = doc + "," + imgsrc;
//     }
//     //新的界面
//     var wid = window.screen.availWidth - 10;
//     var hei = window.screen.availHeight - 100;
//     //通过setItem方法存储value
//     sessionStorage.setItem("doc",doc);
//     window.open('/images/imglist.html' , '_blank', 'width=' + wid + ',height=' + hei + ',scrollbars=yes,location=no');
// }


//拉取图片
function getImage(contain){
    //只初始化一次
    if(!contain.attr('get-image-init') || contain.attr('get-image-init')=='false'){
        contain.attr('get-image-init',true)
    }else{
        return;
    }
    var data = {};
    data.bussNo = contain.attr('data-buss-no');
    data.dataType = contain.attr('data-data-type');
    data.imageType = contain.attr('data-image-type');
    data.custUuid= contain.attr('data-cust-uuid') || '';
    if(!data.bussNo || !data.imageType){ //没有数据类型是可以的
        return;
    }
    $.ajax({
        url: '/oss/getImages',
        cache: false,
        contentType : 'application/x-www-form-urlencoded',
        type:'POST',
        data: data
    }).done(function (images) {
        if(!images){
            console.error('未发现图片！');
            return;
        }
        initImage(contain, images);

    });

}

function getAndSetUrl(dom){
    var img = dom.find('img.ali-url');
    img.each(function () {
        var image = $(this);
        if((!image.attr('src') || image.attr('src') == '') && (!image.attr('url') || image.attr('url')=="")){
            var resizeparam = "10";
            var index = image.attr('data-index');
            $.ajax({
                url: '/oss/getUrl?index='+index + '&p='+resizeparam,
                cache: false,
                contentType : 'application/x-www-form-urlencoded',
                type:'GET',
                data: ""
            }).done(function (url) {
                var resizeUrl = url//+'&x-oss-process=image/resize,m_fixed,h_80,w_80';
                image.attr({'src':resizeUrl,'url':url});
            });
        }
    });
}

function initImage(contain, images){
    for(var i in images){
        var image = images[i];
        var $imageStr = $(custBuildWithOutWrap(image,null,true));
        contain.append($imageStr);
        getAndSetUrl($imageStr)
    }
}




