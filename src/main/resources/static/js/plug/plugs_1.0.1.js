$(function () { //等界面加载完成后，执行下面内容


    /**
     * 异步界面拼装
     */
    function ajaxTargetDom(ajh) {
      return $("#" + ajh.attr('plug-action'));
    }

    function ajaxHtml(ajh) {
      var targetDom = ajaxTargetDom(ajh);
      //只初始化一次
      if (!ajh.attr('ajax-action-init') || ajh.attr('ajax-action-init') == 'false' || ajh.attr('action-times') == 'always') {
        if (!ajh.attr('action-button')) {
          ajh.attr('ajax-action-init', true);
        }
      } else {
        return;
      }


      var actionUrl = ajh.attr('action-url');

      reloadHtml();


      function reloadHtml() {

        var dataA = ajh.data();
        var actionData = '';
        for (var key in dataA) {
          if (actionData == '') {
            actionData += key + '=' + dataA[key];
          } else {
            actionData += '&' + key + '=' + dataA[key];
          }
        }
        $.ajax({
          url: actionUrl,
          cache: false,
          contentType: 'application/x-www-form-urlencoded',
          type: 'GET',
          data: actionData,
          success: function (html) {
            targetDom.html(html);
            $(document).trigger('pageChange', [{noaction: true}]);
          }
        })
        return false;
      }
    }

    function initactionTab(actionTabs) {
      //异步加载dom

      var actionCacheFlag = false
      actionTabs.each(function () {
        var self = $(this);
        var cache = self.attr('data-cache-select') == 'true';
        var notActionA = self.parent().prev().find('a');

        self.click(function () {
          ajaxHtml(self);
          //缓存界面 十分钟

        });

        if (self.parent().hasClass('active') && !actionCacheFlag) {
           self.click();
        }

      })
    }


    $.showNextTab = function (li) {
      if (!li.hasClass('active')) {
        return;
      }
      var next = li.prev();
      if (next.length == 0) {
        next = li.next();
      }
      if (next.length != 0) {
        var div = $(next.find('a').attr('href'))
        div.addClass('active').addClass('in');
        next.addClass('active');
      }
    };






    $(document).bind('pageChange', function (event, param) {

      param = param || {};

      if (!param.noaction) {

        initactionTab($("[plug-action]"));
      }

    });

    $(document).trigger('pageChange');

  $(document).delegate('[data-toggle="tab"]', 'click', function () {
    var self = $(this);
    var div = $(self.attr('href'));
    $(div).siblings().removeClass('in').removeClass('active');
    $(div).addClass('in').addClass('active');

  });


});
