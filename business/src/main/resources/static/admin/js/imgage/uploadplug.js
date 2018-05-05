
var ossObj = {
    endpoint: ""
};
$(function () {
    uploadImg();
})

function uploadImg() {

    //  去阿里云拿key
    $.getJSON('/oss/key', function (json) {
        ossObj.osssignature = {
            'policy': json.policy,
            'OSSAccessKeyId': json.accessid,
            'success_action_status': '200', //让服务端返回200,不然，默认会返回204
            'signature': json.signature
        };
        ossObj.endpoint = json.host;
    });
}




// 当domReady的时候开始初始化
function initUploader(button, uploadcCallback) {
    var
        // 添加的文件数量
        fileCount = 0,
        // 添加的文件总大小
        fileSize = 0,
        // 优化retina, 在retina下这个值是2
        ratio = window.devicePixelRatio || 1,
        // 缩略图大小
        thumbnailWidth = 999 * ratio,
        thumbnailHeight = 999 * ratio,
        // 所有文件的进度信息，key为file id
        percentages = {},
        // 判断浏览器是否支持图片的base64
        isSupportBase64 = (function () {
            var data = new Image();
            var support = true;
            data.onload = data.onerror = function () {
                if (this.width != 1 || this.height != 1) {
                    support = false;
                }
            }
            data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            return support;
        })(),
        // WebUploader实例
        uploader,
        proxy = $('<div class="image-button"></div>');
        proxy.insertAfter($(button))
    // 实例化
    uploader = WebUploader.create({
        // 选完文件后，是否自动上传。
        auto: false,
        // 限制进入队列的数量
        fileNumLimit:  999, // 限制队列最大图片数量（可不填）
        // swf文件路径
        swf: '/static/admin/img/upload/Uploader.swf',

        // 文件接收服务端。
        server: ossObj.endpoint,
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: {
            id: proxy, //id,class,dom
            label: '选择...', //按钮文字
            multiple: true
        },
        thumb: {
            width: 2000,
            height: 2000,

            // 图片质量，只有type为`image/jpeg`的时候才有效。
            quality: 70,

            // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
            allowMagnify: false,

            // 是否允许裁剪。
            crop: false,

            // 为空的话则保留原有图片格式。
            // 否则强制转换成指定的类型。
            type: ''
        },
        compress: {
            width: 2000,
            height: 2000,

            // 图片质量，只有type为`image/jpeg`的时候才有效。
            quality: 90,

            // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
            allowMagnify: false,

            // 是否允许裁剪。
            crop: false,

            // 如果发现压缩后文件大小比原来还大，则使用原来图片
            // 此属性可能会影响图片自动纠正功能
            noCompressIfLarger: false,

            // 单位字节，如果图片大小小于此值，不会采用压缩。
            compressSize: 0
        },
        accept:{
            extensions: 'jpg,jpeg,gif,bmp,png,pdf,doc,docx'
        },
        fileSingleSizeLimit:30*1024*1024,
        duplicate : true
    });
    //  准备
    uploader.on('ready', function () {
        window.uploader = uploader;
    });
    //  进入队列之后
    uploader.onFileQueued = function (file) {
        var timestamp = (new Date()).valueOf() / 1000;
        if (timestamp > ossObj.osssignature.expire) {
            $.getJSON("/oss/key", function (json) {
                ossObj.osssignature = {
                    'policy': json.policy,
                    'OSSAccessKeyId': json.accessid,
                    'success_action_status': '200', //让服务端返回200,不然，默认会返回204
                    'signature': json.signature,
                    'expire': json.expire,
                };
                ossObj.endpoint = json.host;
                uploader.option('server',ossObj.endpoint);
                console.log("密钥失效，获取完密钥重新md5加密开始");
                md5File(file);
            });
        } else {
            md5File(file);
        }
    };

    function md5File(file){
        console.log("md5加密开始");
        uploader.md5File(file).then(function (val) {
            val = val + '.' + file.ext;
            file.md5 = val;;
            if(!uploader.option('server')){
                uploader.option('server',ossObj.endpoint);
            }
            uploader.upload(file);
            file.isEnd=false;
            fileCount++;
            fileSize += file.size;
        });
    }


    //  分段上传后执行
    uploader.on('uploadBeforeSend', function (obj, data, headers) {
        //              debugger
        //  赋值参数
        data = $.extend(data, ossObj.osssignature);
        data.key = obj.file.md5;
        headers['Access-Control-Allow-Origin'] = "*";
    });
    //  图片上传到阿里云之后
    uploader.onUploadSuccess = function (file) {
        uploadcCallback(button, file.md5);
    }

    uploader.onUploadComplete = function (file) {
        file.isEnd=true;
    }

    //  移除队列之后
    uploader.onFileDequeued = function (file) {
        fileCount--;
        fileSize -= file.size;
        removeFile(file);
    };
    //  调用者上传失败
    uploader.onError = function (code,file1,file2) {
        if (code == 'Q_EXCEED_NUM_LIMIT') {
            cms.messager.alert("最多可上传" + 999 + "张图片")
        }
        if (code == 'F_DUPLICATE') {
            cms.messager.alert("图片已经在")
        }
        if (code == 'F_EXCEED_SIZE') {
            cms.messager.alert("图片"+file2.name+"太大无法上传");
            console.log(file2);
        }
        if (code == 'Q_TYPE_DENIED') {
            cms.messager.alert("图片扩展类型"+file1.ext+"不支持,无法上传"+file1.name);
            console.log(file1);
        }


    };

    // 当有文件添加进来时执行，负责view的创建
    function addFile(file) {

    }

    // 负责view的销毁
    function removeFile(file) {

    }
    return uploader;

}

