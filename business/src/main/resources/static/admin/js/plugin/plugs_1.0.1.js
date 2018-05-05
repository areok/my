$(function () { //等界面加载完成后，执行下面内容
  (function ($) { // 闭包，防止下面定义的变量泄露到整个页面


    //用于生成uuid
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    function guid() {
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    $.tableDataFormatter = function (value, row, index) {
      value = value || ''
      var th = $(this);
      var type = th[0].type;
      var optionMap = {};
      var optionsArr = [];
      if (type.startWith('select:')) {
        var optionsArr = type.substr(7).split(',');
      } else if (type.startWith('radio:')) {
        var optionsArr = type.substr(6).split(',');
      }
      for (var opt in optionsArr) {
        var key = optionsArr[opt].split('=')[0];
        var val = optionsArr[opt].split('=')[1];
        optionMap[val] = key;
      }
      var values = value.split(',');
      var result = null;
      for (var i in values) {
        var one = optionMap[values[i]] || values[i];
        if (result == null) {
          result = one;
        } else {
          result += ',' + one;
        }
      }
      return result;

    }
    /**
     * table只显示一行
     */
    var hidetablerow = function (ab) {
      //只初始化一次
      if (!ab.attr('data-hidetablerow-init') || ab.attr('data-hidetablerow-init') == 'false') {
        ab.attr('data-hidetablerow-init', true)
      } else {
        return;
      }
      var hidetable = $("#" + ab.attr('plug-hidetablerow'));
      var a = $('<a herf="#"> (点击查看更多)</a>');
      var span = $('<span class="fa fa-angle-left"></span>');

      hidetable.bootstrapTable({
        pagination: true,
        pageSize: 1,
        sidePagination: 'client'
      });
      hidetable.bootstrapTable('refreshOptions', {
        pagination: true,
        pageSize: 1,
        sidePagination: 'client'
      });
      hidetable.parents('.fixed-table-container').find('.fixed-table-pagination').css('display', 'none');

      if (!hidetable || hidetable.bootstrapTable('getData').length == 0) {
        return;
      }
      a.append(span);
      ab.append(a);


      a.click(function () {
        if (span.hasClass('fa-angle-down')) {
          span.removeClass('fa-angle-down').addClass('fa-angle-left');
          hidetable.bootstrapTable('refreshOptions', {
            pagination: true,
            pageSize: 1,
            sidePagination: 'client'
          });

          hidetable.parents('.fixed-table-container').find('.fixed-table-pagination').css('display', 'none');
          return;
        }
        span.removeClass('fa-angle-left').addClass('fa-angle-down');
        hidetable.bootstrapTable('refreshOptions', {
          pagination: false
        });
      })
    }


    /**
     * 异步界面拼装
     */
    function ajaxTargetDom(ajh) {
      return $("#" + ajh.attr('plug-action'));
    }

    function ajaxHtml(ajh) {
      //只初始化一次
      if (!ajh.attr('ajax-action-init') || ajh.attr('ajax-action-init') == 'false' || ajh.attr('action-times') == 'always') {
        if (!ajh.attr('action-button')) {
          ajh.attr('ajax-action-init', true);
        }
      } else {
        return;
      }
      var targetDom = ajaxTargetDom(ajh);
      //   targetDom.siblings('.active').removeClass('in').removeClass('active');
//			targetDom.addClass('in').addClass('active');
      var once = ajh.attr('action-times') != 'always' && !ajh.attr('action-button');//默认只进行一次请求
      var actionOff = ajh.attr('action-off');//关闭异步
      var actionUrl = ajh.attr('action-url');
      var actionData = null;
      var form = $(ajh.attr('action-form'));
      var clickButton = $(ajh.attr('action-button'));
      if (actionOff) {
        return;
      }


      if (ajh.attr('action-button')) {
        $('body').delegate(ajh.attr('action-button'), "click", function () {
          var form = $(ajh.attr('action-form'));
          reloadHtml(true, form);
          return false;
        });
        var form = $(ajh.attr('action-form'));
        return reloadHtml(true, form, true);
      } else {
        reloadHtml();
      }

      function reloadHtml(isSearch, form, firstSearch) {
          targetDom.siblings('.active').removeClass('in').removeClass('active');
        if (isSearch && !ajh.parent().hasClass('active') && !firstSearch) {
          return;
        }

        var dataA = ajh.data();
        var actionData = '';
        for (var key in dataA) {
          if (actionData == '') {
            actionData += key + '=' + dataA[key];
          } else {
            actionData += '&' + key + '=' + dataA[key];
          }
        }
        if (form && form.length != 0) {
          if (actionData == '') {
            actionData = form.serialize();
          } else {
            actionData += '&' + form.serialize();
          }
        }
        $.ajax({
          url: actionUrl,
          cache: false,
          contentType: 'application/x-www-form-urlencoded',
          type: 'POST',
          data: actionData,
          success: function (html) {
              setTimeout(function(){
                  targetDom.html(html);
                  fixbugActive(ajh,targetDom)
                  // targetDom[0].innerHTML(html);
                  initactionTab(targetDom.find('[plug-action]'));
                  $(document).trigger('pageChange', [{noaction: true}]);
              },0)
            // targetDom.html(html);
//		            	targetDom.addClass('in').addClass('active');
//             fixbugActive(ajh,targetDom);

          }
        })
        if (once) {
          ajh.attr('action-off', true);
        }
        return false;
      }
  }

  function fixbugActive(ajh,targetDom){
      //拿到活跃展示的a
      var activeA = ajh.parent().siblings('li.active').children('a');
      var targetDom = ajaxTargetDom(activeA);
      targetDom.siblings('.active').removeClass('in').removeClass('active').css('display:none');
      targetDom.addClass('in').addClass('active').css('display:block');
  }

    function initactionTab(actionTabs) {
      //异步加载dom
      var plugActionCache = $.cookie('plug-action-cache');
      var actionCacheFlag = false
      actionTabs.each(function () {
        var self = $(this);
        var cache = self.attr('data-cache-select') == 'true';
        var notActionA = self.parent().prev().find('a');
        if (cache) {
          if (!notActionA.attr('action-url')) {
            notActionA.click(function () {
              $.cookie('plug-action-cache', '', {expires: new Date((new Date()).getTime() + 1000 * 60 * 10)});
            });
          }

        }
        self.click(function () {
          self.attr('data-action-clicked',true);
          ajaxHtml(self);
          //缓存界面 十分钟
          if (cache) {
            $.cookie('plug-action-cache', self.attr('action-url'), {expires: new Date((new Date()).getTime() + 1000 * 60 * 10)});
          }
        });
        if (self.attr('action-url') == plugActionCache) {
          actionCacheFlag = true;
          self.click();
        }

        if (ajaxTargetDom(self).is(':visible') || (self.attr('data-action-clicked') && !self.attr('data-times-visible')) || self.parent().hasClass('active') && !actionCacheFlag) {
          ajaxHtml(self);
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

    //动态增删tab
    function dynamicTab(ul) {
      //只初始化一次
      if (!ul.attr('dynamic-tab-init') || ul.attr('dynamic-tab-init') == 'false') {
        ul.attr('dynamic-tab-init', true)
      } else {
        return;
      }
      var liForClone = null;
      var divForClone = null;
      var id = ul.attr('plug-dynamic-tab');

      //添加按钮
      var add = $('<li class="removeDom"><a  >添加 <span class="fa fa-plus"></span></a></li>');

      //li 如果第一个可以删除
      if (id && id != '') {
        liForClone = $('<li><a href="#' + ul.attr('plug-dynamic-tab') + '"  data-toggle="tab">' + ul.attr('data-text-prefix') + '</a></li>');
        divForClone = $('#' + ul.attr('plug-dynamic-tab'));

      }

      //li 如果第一个不能删除
      if (!id || id == '') {
        liForClone = ul.find('li').first()
        divForClone = $(liForClone.find('a').attr('href'));
        id = liForClone.find('a').attr('href').replace(/([0-9]+$)/g, '').replace('#', '');
      }
      //
      var numPrefix = ul.attr('data-num-prefix');

      var namePrefix = ul.attr('data-name-prefix');

      var title = liForClone.find('a').html().replace(/([0-9]+$)/g, '');

      //修复 动态增删tab bug
      divForClone.parents('.tab-content').delegate(':radio', 'click', function () {
        var self = $(this);
        $('[name="' + self.attr('name') + '"]').not(self).removeAttr('checked');
        self.attr('checked', 'checked');
      });

      var canRemoveLi = ul.find('li').not(liForClone);
      liForClone.add(divForClone).addClass('removeDom');
      canRemoveLi.each(function () {
        var self = $(this);
        var remove = $('<span class="fa fa-times"></span>');
        var a = self.find('a');
        a.html('<span>' + a.html() + '</span>');
        a.append(remove);
        remove.click(function () {
          ul.trigger('removetab', [{
            contain: $(a.attr('href')),
            fresh: false,
            index: (self.attr('data-index') - 1),
            "cloneDiv": $(a.attr('href')),
            "cloneLi": self
          }]);
          if (!self.attr('data-stay')) {
            $.showNextTab(self);
            $(a.attr('href')).remove();
            self.remove();

          }
          ul.trigger('indexchange');
        });
        if (!self.hasClass('removeDom')) {
          self.addClass('removeDom');
        }
      });
      //文档 + 添加按钮
      ul.append(add);
      if (!ul.attr('data-index')) {
        ul.attr('data-index', canRemoveLi.length);
      }
      ;
      add.click(function () {
        var cloneLi = liForClone.clone();
        var cloneDiv = divForClone.clone();
        var index = ul.attr('data-index');
        ul.attr('data-index', ++index);
        cloneLi.attr('data-index', index);
        var suffix = numPrefix != undefined ? numPrefix + '_' + index : index;
        var remove = $('<span class="fa fa-times"></span>');
        cloneLi.find('a').html('<span>' + title + suffix + '</span>');
        cloneLi.find('a').attr('href', '#' + id + suffix);
        cloneLi.find('a').append(remove);
        cloneLi.insertBefore(add);
        ul.next().append(cloneDiv);
        cloneDiv.attr('id', id + suffix);
        cloneDiv.find('.removeDom').remove();
        cloneLi.find('.removeDom').remove();
        cloneDiv.find('.validate-tooltip').remove();
        cloneLi.find('.validate-tooltip').remove();
        //新增的时候  radio不能选择
        cloneDiv.find('[checked]').each(function () {
          var self = $(this);
          if (!self.attr('plug-dynamic-stay')) {
            $(this).removeAttr('checked');
          }
        })
        cloneDiv.find('[data-index]').each(function () {
          $(this).attr('data-index', 0);
        })
        cloneDiv.find('[dynamic-tab-init]').each(function () {
          $(this).attr('dynamic-tab-init', false);
        })
        cloneDiv.find('[data-num-prefix]').each(function () {
          $(this).attr('data-num-prefix', index);
        })
        cloneDiv.find('input,select,radio,checkbox').add(cloneDiv.find('table[name],td[name],button[name]')).add(cloneDiv.find('form[name]')).each(function () {
          var self = $(this);
          if (self.is('[type="text"]') || self.is('[type="hidden"]')) {
            (self.attr('plug-dynamic-stay') == 'true') || self.val("");
          }
          self.is('td') && self.html('');
          var before = name = self.attr('name') || '';

          self.is('[plug-image]') && plugImageRecover(self);

          name = name.replace(/\[[0-9]+\]/g, '[' + (index - 1) + ']');
          if (namePrefix) {
            name = name.replace(eval('/' + namePrefix + '\[[0-9]+\]/g'), namePrefix + '[' + (numPrefix - 1) + ']');
          }
          self.attr('name', name);
          if (self.is('[type="radio"]')) {
            $('[name="' + name + '"]').filter(function () {
              return $(this).attr('checked') == 'checked'
            }).prop('checked', true);
            $('[name="' + before + '"]').filter(function () {
              return $(this).attr('checked') == 'checked'
            }).prop('checked', true);
          }
        });
        cloneLi.parent().children().removeClass('active');
        cloneDiv.parent().children().removeClass('active').removeClass('in');

        cloneLi.addClass('active');
        cloneDiv.addClass('active').addClass('in');

        remove.click(function () {
          ul.trigger('removetab', [{
            contain: $(cloneLi.find('a').attr('href')),
            fresh: true,
            index: (cloneLi.attr('data-index') - 1),
            "cloneDiv": cloneDiv,
            "cloneLi": cloneLi
          }]);
          if (!cloneLi.attr('data-stay')) {
            $.showNextTab(cloneLi);
            cloneDiv.remove();
            cloneLi.remove();
          }
          ul.trigger('indexchange');
        });
        ul.trigger('indexchange');
        ul.trigger('addtab', [{contain: $(cloneLi.find('a').attr('href')), index: (cloneLi.attr('data-index') - 1)}]);
        $(document).trigger('pageChange');
      });

      //调整index
      ul.on('indexchange', function () {
        var numPrefix = ul.attr('data-num-prefix');
        ul.find('li').not(add).each(function (index) {
          var li = $(this);
          li.attr('data-index', ++index);
          var index = li.attr('data-index');
          var namePrefix = ul.attr('data-name-prefix');
          var tarDiv = $(li.find('a').attr('href'));

          var suffix = numPrefix != undefined ? numPrefix + '_' + index : index;
          li.find('a span').first().html(title + suffix);
          tarDiv.find('input,select,radio,checkbox').add(tarDiv.find('table[name],td[name],button[name]')).add(tarDiv.find('form[name]')).each(function () {
            var self = $(this);
            var before = name = self.attr('name') || '';

            name = name.replace(/\[[0-9]+\]/g, '[' + (index - 1) + ']');
            if (namePrefix) {
              name = name.replace(eval('/' + namePrefix + '\[[0-9]+\]/g'), namePrefix + '[' + (numPrefix - 1) + ']');
            }
            // self.is('[plug-image]') && plugImageRecover(self, index - 1);

            self.attr('name', name);
            if (self.is('[type="radio"]')) {
              $('[name="' + before + '"]').filter(function () {
                return $(this).attr('checked') == 'checked'
              }).prop('checked', true);
              $('[name="' + name + '"]').filter(function () {
                return $(this).attr('checked') == 'checked'
              }).prop('checked', true);
            }

          });
          tarDiv.find('[data-num-prefix]').each(function () {
            $(this).attr('data-num-prefix', index);
            $(this).trigger('indexchange');
          })
        });
      });
      ul.trigger('indexchange');
    }

    //plug-image 初始化回退
    function plugImageRecover(self) {

      // var nowparent = self.parent();
      var oldparent = self.parent();
      oldparent.empty();
      oldparent.append(self);
      var table = $('table[name="' + self.attr('data-table-prefix') + '[' + self.attr('data-index') + ']' + '"]');
      table.remove();

      self.attr({
        'image-init': false
      });
      self.removeAttr('data-index');
    }


    //动态添加删除Table数据
    function dynamicTableRows(table) {
      //只初始化一次
      if (!table.attr('dynamic-row-init') || table.attr('dynamic-row-init') == 'false') {
        table.attr('dynamic-row-init', true)
      } else {
        return;
      }

      var bussNo = $(table.attr('value'));
      var addFunction = $(table.attr('addFunction'));
      var updateFunction = $(table.attr('updateFunction'));
      var deleteFunction = $(table.attr('deleteFunction'));
      var transform = $(table.attr('data-transform'));
      var namePrefix = table.attr('data-name-prefix');
      var ths = table.find('th');
      var title = table.attr('data-title') || '';
      var div = $('<div class="form-group">' + (title ? '<label class="col-xs-2 control-label">' + title + '</label>' : '') + '</div>');
      var add = $('<div class="col-xs-2"><button type="button" class="btn btn-sm btn-block btn-info" >新增</button></div>');
      var update = $('<div class="col-xs-2"><button type="button" class="btn btn-sm btn-block btn-info" >修改</button></div>');
      var del = $('<div class="col-xs-2"><button type="button" class="btn btn-sm btn-block btn-info" >删除</button></div>');
      if (!table.attr('dynamic-row-curd') || table.attr('dynamic-row-curd') != 'false') {
        div.append(add).append(update).append(del);
        div.insertBefore(table);
      }
      var inputs = getDataForCreateInputs(ths);

      table.bootstrapTable();
      var tableData = table.bootstrapTable('getData');
      for (var i in tableData) {
          tableData[i].data_id || (tableData[i].data_id = i);
      }
      table.bootstrapTable('load', tableData);

      add.click(function () {
        var obj = {};
        var inputDoms = creatInputDoms(inputs);
        cms.dialog({
          titleText: "新建",
          width: "800px",
          disFooter: false,
          cancelBtnShow: true,
          content: inputDoms,
          initCallback: function () {
            $(document).trigger('unifiedfixed');
              $(document).trigger('realmoney');
              $(document).trigger('clearNoNum');
          },
          saveBtnShow: true,
          save: function (e, dialog) {
            var form = dialog.modal.find("form");

            var validator = form.validate();
            if (!validator.form()) {
              return;
            }

            var formdata = form.serializeObject();
            formdata.bussNo = bussNo.selector;

            if (addFunction.selector != null && addFunction.selector != '') {
              //根据函数名得到函数类型
              var func = eval(addFunction.selector);
              //创建函数对象，并调用
              new func(formdata, function (id) {
                console.log("id   " + id)
                formdata.data_id = id;
                formdata.id = id;
                table.bootstrapTable('prepend', [formdata]);
                //table.trigger('rowchange');
                dialog.close();
              });
            }
          }
        });

      });

      update.click(function () {
        var obj = table.bootstrapTable('getSelections');
        if (obj.length != 1) {
          cms.messager.alert('请选择一个进行修改！！！');
          return;
        }
        obj = obj[0];
        var inputDoms = creatInputDoms(inputs, obj);
        cms.dialog({
          titleText: "修改",
          width: "800px",
          disFooter: false,
          cancelBtnShow: true,
          content: inputDoms,
          saveBtnShow: true,
          initCallback: function () {
            $(document).trigger('unifiedfixed');
            $(document).trigger('realmoney');
            $(document).trigger('clearNoNum');
          },
          save: function (e, dialog) {
            var form = dialog.modal.find("form");
            var validator = form.validate();
            if (!validator.form()) {
              return;
            }
            var formdata = form.serializeObject();
            formdata[0] = false;
            table.bootstrapTable('updateByUniqueId', [{row: formdata, id: formdata.data_id}]);
            table.trigger('rowchange');
            dialog.close();

            if (updateFunction.selector != null && updateFunction.selector != '') {
              //根据函数名得到函数类型
              var func = eval(updateFunction.selector);
              //创建函数对象，并调用
              new func(formdata);
            }
          }
        });
        $(document).trigger('unifiedfixed');
      });

      del.click(function () {
        var objs = table.bootstrapTable('getSelections');
        if (objs.length == 0) {
          cms.messager.alert('请选择至少1行进行删除！！！');
          return;
        }
        cms.messager.confirm('删除', '是否进行删除操作？', function () {

          for (var i in objs) {
            table.bootstrapTable('removeByUniqueId', objs[i].data_id);
          }
          table.trigger('rowchange');

          if (deleteFunction.selector != null && deleteFunction.selector != '') {
            //根据函数名得到函数类型
            var func = eval(deleteFunction.selector);
            //创建函数对象，并调用
            new func(objs);
          }
        })
      });

      table.on('rowchange', function () {
        if (!transform.length) {
          return;
        }
        var data = table.bootstrapTable('getData');
        addDataToForm(transform, data, namePrefix);
      });
      table.trigger('rowchange');
    }

    function creatInputDoms(inputsdata, obj) {
      var inputDoms = [];
      var obj = obj || {};
      for (var i in inputsdata) {
        var inputDom = null;
        switch (inputsdata[i].type) {
          case 'text':
            inputDom = textDom(inputsdata[i], obj);
            break;
          case 'select':
            inputDom = selectDom(inputsdata[i], obj);
            break;
          case 'radio':
            inputDom = radioDom(inputsdata[i], obj);
            break;
          case 'checkbox':
            inputDom = checkboxDom(inputsdata[i], obj);
            break;
          case 'id':
            inputDom = idDom(inputsdata[i], obj);
            break;
          default:
            inputDom = hiddenDom(inputsdata[i], obj);
        }
        inputDoms.push(inputDom);
      }
      return inputDoms;
    }

    function getDataForCreateInputs(doms) {
      var inputs = [];
      doms.each(function () {
        var dom = $(this);
        var input = {};
        var type = dom.attr('data-type');
        var index = 0;
        input.name = dom.attr('data-field');
        input.validate = dom.attr('data-validate');
        input.unifiedfixed = dom.attr('data-unifiedfixed');
        input.moneyTwo = dom.attr("data-moneyTwo");
        if (dom.is('th')) {
          input.label = dom.html();
        }
        if (input.name == '0') {
          input.type = 'hidden';
        } else if (input.name == 'data_id') {
          input.type = 'id';
        } else if (input.name == 'id') {
          input.type = 'id';
        } else if (dom.attr('data-visible') && dom.attr('data-visible') == 'false') {
          input.type = 'hidden';
        } else if (!type) {
          input.type = 'text';
        } else {
          //处理 select radio checkbox
          var index = 0;
          if (type.startWith('select:')) {
            input.type = 'select';
            index = 7;
          } else if (type.startWith('radio:')) {
            input.type = 'radio';
            index = 6;
          } else if (type.startWith('checkbox:')) {
            input.type = 'checkbox';
            index = 9;
          }
          var options = [];
          var optionsArr = type.substr(index).split(',');
          for (var opt in optionsArr) {
            var option = {};
            var key = optionsArr[opt].split('=')[0];
            if (key.startWith('checkbox:')) {
              key = key.substr(9);
              option.type = 'checkbox';
            }
            if (key.startWith('radio:')) {
              key = key.substr(6);
              option.type = 'radio';
            }
            var value = optionsArr[opt].split('=')[1];
            option[key] = value;
            options.push(option);
          }
          input.options = options;
          dom.attr('data-formatter', '$.tableDataFormatter');
        }

        inputs.push(input);
      })
      return inputs;
    }

    function addDataToForm(form, data, namePrefix) {
      var dels = form.find($('[name^="' + namePrefix + '"]'));
      dels.remove();
      var inputs = [];
      for (var i in data) {
        var obj = data[i];
        for (var pro in obj) {
          if (pro != '0' && pro != 'data_id' && !pro.startWith('_')) {
            inputs.push(hiddenDataDom(namePrefix + '[' + i + '].' + pro, obj[pro]));
          }
        }
      }
      form.prepend(inputs);
    }


    function idDom(input, obj) {
      console.log(input)
      console.log(obj)
      if (obj.id) {
        var value = obj.id;
        var inputStr = '<input type="hidden" name="' + input.name + '" class="form-control" value="' + value + '" placeholder="' + input.label + '"/>';
      } else {
        var value = "";
        var inputStr = '<input type="hidden" name="' + input.name + '" class="form-control" value="' + value + '" placeholder="' + input.label + '"  disabled="disabled"/>';
      }
      return $(inputStr);
    }

    function hiddenDataDom(name, value) {
      var inputStr = '<input type="hidden" name="' + name + '" class="form-control" value="' + value + '" />';
      return $(inputStr);
    }

    function hiddenDom(input, obj) {
      var value = obj[input.name] || '';
      var inputStr = '<input type="hidden" name="' + input.name + '" class="form-control" value="' + value + '" placeholder="' + input.label + '"  />';
      return $(inputStr);
    }

    function textDom(input, obj) {
      var value = obj[input.name] || '';
      var hasLabel = input.label || '';
      var validate = input.validate || '';
      var unifiedfixed = input.unifiedfixed != undefined ? ' plug-unifiedfixed="' + input.unifiedfixed + '"' : '';
      var moneyTwo = input.moneyTwo || '';
      var inputStr = '<input type="text" '+moneyTwo+' '+validate+' '+unifiedfixed+'  name="' + input.name + '" class="form-control" value="' + value + '" placeholder="' + input.label + '"  />';
      if (!hasLabel) {
        return $(inputStr);
      }
      var inputWapperStr = '<div class="form-group">' +
        '<label class="col-sm-3 control-label">' + input.label + '</label>' +
        '<div class="col-sm-9">' +
        inputStr +
        '</div>' +
        '</div>';
      return $(inputWapperStr);
    }

    function selectDom(select, obj) {
      var hasLabel = select.label || '';
      var validate = select.validate || ''
      var selectStr = '<select ' + validate + ' name="' + select.name + '" class="form-control" >' +
        '</select>';
      if (hasLabel) {
        selectStr = '<div class="form-group">' +
          '<label class="col-sm-3 control-label">' + select.label + '</label>' +
          '<div class="col-sm-9">' +
          selectStr +
          '</div>' +
          '</div>';
      }
      var $result = $(selectStr);
      var $select = hasLabel ? $result.find('select') : $result;
      var selectValue = obj[select.name] || '';
      $select.append($('<option value="">请选择</option>'));
      for (var opt in select.options) {
        for (var key in select.options[opt]) {
          var value = select.options[opt][key];
          $select.append($('<option value="' + value + '"' + (value !== selectValue ? '' : ' selected="selected"') + '>' + key + '</option>'))
        }
      }
      return $result;
    }


    function radioDom(radio, obj) {
      var hasLabel = radio.label || '';
      var radioValue = obj[radio.name] || '';
      var radios = [];
      var validate = obj.validate || radio.validate || '';
      for (var opt in radio.options) {
        for (var key in radio.options[opt]) {
          var value = radio.options[opt][key];
          if (radio.options[opt].type == 'checkbox') {
            radios.push($('<label class="control-label"><input ' + validate + ' type="checkbox" ' + (key == '其他' ? 'plug-other-remark="1"' : '') + ' value="' + value + '" ' + (!checkboxMap[value] ? '' : 'checked="checked"') + ' class="minimal" name="' + checkbox.name + '">' + key + '</label>'));
          } else {
            radios.push($('<label class="control-label"><input  type="radio" ' + validate + ' value="' + value + '" ' + (value !== radioValue ? '' : 'checked="checked"') + ' class="minimal" name="' + radio.name + '">' + key + '</label>'));
          }

        }
      }
      if (!hasLabel) {
        return radios;
      }
      var radioWapperStr = '<div class="form-group">' +
        '<label class="col-sm-3 control-label">' + radio.label + '</label>' +
        '<div class="col-sm-9">' +
        '</div>' +
        '</div>';
      var $radioWapper = $(radioWapperStr);
      $radioWapper.find('.col-sm-9').append(radios);
      return $radioWapper;
    }

    function checkboxDom(checkbox, obj) {
      var hasLabel = checkbox.label || '';
      var checkboxValue = obj[checkbox.name] || '';
      var checkboxMap = {};
      var values = checkboxValue.split(',');
      var validate = obj.validate || checkbox.validate || '';
      for (var i in values) {
        checkboxMap[values[i]] = true;
      }
      var checkboxs = [];
      for (var opt in checkbox.options) {
        for (var key in checkbox.options[opt]) {
          if (key === 'type') continue;
          var value = checkbox.options[opt][key];
          if (checkbox.options[opt].type != 'radio') {
            checkboxs.push($('<label class="control-label"><input ' + validate + ' type="checkbox" ' + (key == '其他' ? 'plug-other-remark="1"' : '') + ' value="' + value + '" ' + (!checkboxMap[value] ? '' : 'checked="checked"') + ' class="minimal" name="' + checkbox.name + '">' + key + '</label>'));
          } else {
            checkboxs.push($('<label class="control-label fake-radio"><input  type="radio" ' + validate + ' value="' + value + '" ' + (!checkboxMap[value] ? '' : 'checked="checked"') + ' class="minimal" name="' + checkbox.name + '123456">' + key + '</label>'));
            checkboxs.push($('<label class="control-label real-checkbox" style="display:none"><input  ' + validate + ' type="checkbox" ' + ' value="' + value + '" ' + (!checkboxMap[value] ? '' : 'checked="checked"') + ' class="minimal" name="' + checkbox.name + '"/></label>'));
          }
        }
      }


      if (!hasLabel) {
        return checkboxs;
      }
      var checkboxWapperStr = '<div class="form-group">' +
        '<label class="col-sm-3 control-label">' + checkbox.label + '</label>' +
        '<div class="col-sm-9">' +
        '</div>' +
        '</div>';
      var $checkboxWapper = $(checkboxWapperStr);
      $checkboxWapper.find('.col-sm-9').append(checkboxs);
      return $checkboxWapper;
    }

    //根据数据
    function createInput(dom) {
      //只初始化一次
      if (!dom.attr('create-input-init') || dom.attr('create-input-init') == 'false') {
        dom.attr('create-input-init', true)
      } else {
        return;
      }
      var inputdata = getDataForCreateInputs(dom);
      var name = dom.attr('data-field');
      var obj = {};
      obj.validate = 'required="required"';
      obj[name] = dom.attr('data-value');
      var inputdom = creatInputDoms(inputdata, obj);
      dom.prepend(inputdom[0]);
      var radios = dom.find('.fake-radio :radio');
      radios.click(function () {
        var self = $(this);
        var val = self.val();
        self.parent().parent().find('.real-checkbox').find('input').prop('checked', false);
        self.parent().next().find('input').prop('checked', true);
      })
    }

    function localTextArea(checkbox) {
      return checkbox.nextAll('textarea').add(checkbox.nextAll().find('textarea')).add(checkbox.parent().nextAll('textarea')).add(checkbox.parent().nextAll().find('textarea'));
    }

    function plugIntegration(dom) {
      //只初始化一次
      if (!dom.attr('integration-init') || dom.attr('integrationt-init') == 'false') {
        dom.attr('integration-init', true)
      } else {
        return;
      }
      var targetDom = $(dom.attr('plug-integration'));
      var trs = dom.find('.data-integration');
      trs.find(':radio,:checkbox').click(change);
      // trs.find(':radio,:checkbox').filter(':visible').click(function(){
      // 	alert(123);
      // });
      trs.find('textarea').not(targetDom).change(change);
      $(document).on('selectchange', function () {
        change()
      });

      function change(e) {
        var str = '';

        trs.each(function () {
          var tr = $(this);

          tr.find('td').each(function (index) {
            var th = $(this);

            if (index == 0) {
              var tdName = th.text().trim();
              //根据不同的发放条件类型进行前置文字拼接，目前以text 名字区分
              switch (tdName) {
                case "签订事项":
                  str += "签订";
                  break;
                case "等同原件公证":
                  str += "办理";
                  break;
                case "公证事项":

                  break;
                case "*收押证件":
                  str += "收押";
                  break;
                case "备注事项":
                  str += "。";
                  break;
                case "放款条件":

                  break;
              }
            }
            var result = [];
            var pass = null;
            var ischecklist = th.hasClass('checklist');


            //对收押证件 进行特殊处理
            if (ischecklist && e) {
              th.find('a').filter(function () {
                return $(this).attr('data-type') == 'checklist'
              }).each(function () {
                var val = $(this).html().replace(/,/gm, '、');//正则替换
                if (val != '点击添加') {
                  str += val;
                }
              });
            }

            //对 单选多选处理
            th.find('input').each(function () {
              var input = $(this);
              if (input.attr('type') == 'radio' || (input.attr('type') == 'checkbox' && !input.parent().hasClass('real-checkbox'))) {
                if (input.is(':checked')) {
                  var content = input.parent().text();
                  if (content != '其他') {
                    result.push(content);
                  } else {
                    content += '(' + localTextArea(input).val() + ')';
                    result.push(content);
                    if (pass == null) {
                      pass = localTextArea(input);
                    } else {
                      pass.add(localTextArea(input));
                    }
                  }
                }
              }
            });


            th.find('textarea').filter(':visible').not(pass).not('ignore').each(function () {
              var textarea = $(this);
              if (textarea.val()) {
                result.push(textarea.val());
              }

            });
            str += result.join('、');

            if (index != 0) {
              var tdName = th.prev().text().trim();
              //根据不同的发放条件类型进行后置文字拼接，目前以text 名字区分
              switch (tdName) {
                case "抵押顺位":
                  str += ",办理抵押手续。";
                  break;
                case "前置事项":
                  str += "";
                  break;
                case "办理面签":
                  str += "，";
                  break;
                case "签订事项":
                  str += "；";
                  break;
                case "等同原件公证":
                  str += "等同原件公证，";
                  break;
                case "公证事项":
                  str += "。";
                  break;
                case "*收押证件":

                  break;
                case "放款条件":
                  str += "放款。";
                  break;
              }
            }
          });
        });
        targetDom.val(str);

      }

    }

    function otherText(checkbox) {
      var checked = checkbox.is(':checked');
      var textarea = checkbox.nextAll('textarea').add(checkbox.nextAll().find('textarea')).add(checkbox.parent().nextAll('textarea')).add(checkbox.parent().nextAll().find('textarea'));
      if (checked) {
        textarea.removeClass('ignore').fadeIn();
      } else {
        textarea.addClass('ignore').fadeOut().val('');
      }
    }

    $(document).delegate('[plug-other-remark]', 'click', function () {
      otherText($(this));
    });

    //三级tab bug 无法显示 二级以下active tab
    $(document).delegate('[data-toggle="tab"]', 'click', function () {
      var self = $(this);
      var div = $(self.attr('href'));
      var contains = div.find('[data-toggle="tab"]').filter(function () {
        return $(this).parent().hasClass('active');
      });
      contains.each(function () {
        $($(this).attr('href')).addClass('in').addClass('active');
      });

    });

    //页面变成详情页
    function detailPage(form) {
      form.addClass('detail-page');
      form.find('input,select,textarea,radio,checkbox').prop('disabled', true);
      var target = form.attr('plug-detail-page');
      if (target) {
        $(target).fadeOut();
      }
    }

    function formatAmountUpper(dom) {
      var num = dom.attr('plug-amount-upper');
      if (num == undefined || num == '' || num == null) {
        return '零';
      }
      var fraction = ['角', '分'],
        digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
        unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']],
        prefix = num < 0 ? '欠' : '',
        suffix = '',
        decimal = num.toString().split('.')[1] || '0';
      num = Math.abs(num);
      for (var i = 0; i < 2; i++) {
        decimal[i] && (suffix += (digit[decimal[i]] + fraction[i]).replace(/零./, ''));
      }
      suffix = suffix || '整';
      num = Math.floor(num);
      for (var i = 0, len = unit[0].length, p = ''; i < len && num > 0; i++) {
        for (var j = 0, _len = unit[1].length; j < _len && num > 0; j++) {
          p = digit[num % 10] + unit[1][j] + p;
          num = Math.floor(num / 10);
        }
        suffix = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + suffix;
        p = '';
      }
      var result = prefix + suffix.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
      if (dom.is('input') || dom.is('textarea')) {
        dom.val(result);
      } else {
        dom.html(result);
      }
    }

    $(document).delegate('button', 'click', function () {
//			submitOnce($(this));
    });


    function submitOnce(button) {
      if (button.html() !== "提交") {
        return;
      }
      if (!button.attr('data-sumbited')) {
        button.prop('disabled', true);
        button.attr('data-sumbited', true);
      }
    }

    $(document).bind('maysubmit', function () {
      submitAddChange();
    })
    function submitAddChange() {
      $('[data-sumbited]').prop('disabled', false).removeAttr('data-sumbited');
    }

    function initImage(contain, images) {
      for (var i in images) {
        var image = images[i];
        imageStr = '<div id="' + image.id + '">' +
          '<div class="mycss">' +
          '<a class ="myacss" href="javascript:void(0)"  onclick="showImgOne(\'/imageUpload/showImg?imageIndex=' + image.imageIndex + '\',\'' + image.id + '\')" >' +
          '<img src="/imageUpload/showImg?imageIndex=' + image.imageIndex + '" class="myimagecss" />' +
          '</a>' +
          '<div  class = "mysmallcss" style="display: none"><input type = "button" class = "mydbucss" value="X" onclick="delImage(this)"/>' +
          '<input type = "hidden" value = "' + image.id + '"/>' +
          '</div>' +
          '</div>' +
          '</div>';
        contain.append($(imageStr));
      }
    }

    function separator(input) {
      var unit = input.attr('plug-separator');
      var value = input.val() || '';
      value = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
      input.val(value);
    }

    function valueToStore(element) {
      element.attr('data-value', element.val());
      if (!element.cachedClone) {
        element.cachedClone = $('<input name="' + element.attr('name') + '" type="hidden" >')
        element.cachedClone.attr('type', "hidden");
        element.cachedClone.insertAfter(element);
        element.removeAttr('name');
      }
      element.cachedClone.val(element.val());

    }

    function valueAddStart(element) {
      var value;
      if (element.is('input')) {
        value = element.val();
      } else {
        value = element.text();
        console.log(element.html());
      }

      if (value.length > 4 && value.length < 8) {
        value = value.substring(0, 3) + value.substring(3).replace(/[0-9]/g, '*')
      }
      if (value.length >= 8) {
        value = value.substring(0, 3) + value.substring(3, 7).replace(/[0-9]/g, '*') + value.substring(7);
      }
      if (element.is('input')) {
        element.val(value);
      } else {
        element.text(value);
      }

    }

    function storeToValue(element) {
      element.val(element.attr('data-value'));
    }

    function addStart(element) {
      //只初始化一次
      if (!element.attr('add-start-init') || element.attr('add-start-init') == 'false') {
        element.attr('add-start-init', true)
      } else {
        return;
      }
      storeToValue(element);
      valueToStore(element);
      valueAddStart(element);

      element.focus(function () {
        storeToValue(element);
      });
      element.on('input propertychange', function () {
        valueToStore(element);
      });
      element.blur(function () {
        valueAddStart(element)
      });
    }

    function addStartOnce(element) {
      //只初始化一次
      if (!element.attr('add-start-init') || element.attr('add-start-init') == 'false') {
        element.attr('add-start-init', true)
      } else {
        return;
      }
      valueAddStart(element);
      element.attr('data-value', '');
    }

    function separatorAdd(input) {
      //只初始化一次
      if (!input.attr('separator-init') || input.attr('separator-init') == 'false') {
        input.attr('separator-init', true)
      } else {
        return;
      }
      input.on('input propertychange', function () {
        separator(input);
      });
      separator(input);
    }

    function as(dom) {
      //只初始化一次
      if (!dom.attr('as-init') || dom.attr('as-init') == 'false') {
        dom.attr('as-init', true)
      } else {
        return;
      }
      var placement = dom.attr('data-placement') || 'left';
      var data = dom.attr('data-value');
      data = data.split(',');
      var as = [];
      for (var i in data) {
        var a = data[i].split('==');
        as.push('<a href="' + a[1] + '" target="_blank">' + a[0] + '</a>');
      }
      dom.popover(
        {
          trigger: 'focus', //触发方式
          title: "跳转",//设置 弹出框 的标题
          html: true,// 为true的话，data-content里就能放html代码了
          placement: placement,
          content: as.join('</br>')//这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
        })
      dom.hover(function () {
        dom.focus();
      });

    }

    function fixed(dom) {
      var val = dom.val();
      val -= 0;
      var count = dom.attr('plug-fixed') || 6;
      count -= 0;
      if (isNaN(val)) {
        return;
      }
      dom.val(val.toFixed(count));
    }

    function unifiedfixed(dom) {
      //只初始化一次
      if (!dom.attr('data-unifiedfixed') || dom.attr('data-unifiedfixed') == 'false') {
        dom.attr('data-unifiedfixed', true)
      } else {
        return;
      }

      fixedmax(dom);
      adaptionzero(dom);
      dom.on('input propertychange', function () {
        fixedmax(dom);
      })
      dom.on('change', function () {
        fixedmax(dom);
        adaptionzero(dom);
      })
    }


    $.fixedmax = function (val, count) {
      //支持减号
      var negative = val.indexOf('-') == 0;
      if (count == '0') {
        if (val.indexOf('.') !== -1) {
          val = val.substring(0, val.indexOf('.'));
        }
        val = val.replace(/[^0123456789]/g, '');
        return parseInt(val) || '';
      }
      val += '';
      val = val.replace(/[^0123456789.]/g, '');

      //去掉除去第一个之外的点
      var flag = false;
      var temp = '';
      for (var i = 0; i < val.length; i++) {
        if (i == 0 && val.charAt(i) == '.') {
          continue;
        }
        if (val.charAt(i) == '.') {
          if (!flag) {
            flag = true;
            temp += '.';
          }
          continue;
        }
        temp += val.charAt(i);
      }

      val = temp;
      if (val.length - val.indexOf('.') > count) {
        val = val - 0;
        val = val.toFixed(count);
      }
      if (negative) {
        val = '-' + val;
      }
      return val;
    }
    //count 有效小数位数
    $.adaptionzero = function (val, count) {
      if (val == '-' && count == 0) {
        return '0';
      }
      if (val == '-' && count != 0) {
        return '0.00';
      }
      if (val == '')
        return val;
      if (count == '0') {
        return val;
      }
      if (val.length - val.indexOf('.') <= 2 || val.indexOf('.') == -1) {
        val = val - 0;
        val = val.toFixed(2);
        return val;
      }
      if (val.indexOf('.') != 0) {
        var zerocount = 0;
        var indexcount = val.length - val.indexOf('.') - 1 - 2;
        for (var i = 0; i < indexcount; i++) {
          if (val.charAt(val.length - 1 - i) == '0') {
            zerocount++;
          } else {
            break;
          }
        }
        if (zerocount != 0) {
          val = val.substring(0, val.length - zerocount);
        }
      }
      return val;
    }
    //最多保留6位小数
    function fixedmax(dom) {
      var val = dom.val() || '';
      if (!dom.is('input')) {
        val = dom.text() || '';
      }
      if (val == '')
        return;
      var count = dom.attr('plug-unifiedfixed');
      val = $.fixedmax(val, count);
      dom.valnochange(val);
      if (!dom.is('input')) {
        dom.html(val);
      }
    }


    function adaptionzero(dom) {
      var val = dom.val() || '';
      if (!dom.is('input')) {
        val = dom.text() || '';
      }
      var count = dom.attr('plug-unifiedfixed');
      if (val == '')
        return;
      val = $.adaptionzero(val, count);
      dom.valnochange(val);
      if (!dom.is('input')) {
        dom.html(val);
      }
    }

    function checklist(dom) {
      //只初始化一次
      if (!dom.attr('checklist-init') || dom.attr('checklist-init') == 'false') {
        dom.attr('checklist-init', true)
      } else {
        return;
      }
      var editable = true;
      var name = dom.attr('data-field');
      var val = dom.attr('data-value') || '';
      var type = dom.attr('data-type'); //数据格式

      var a = $('<a href="#" data-type="checklist" data-pk="1"></a>');
      var input = $('<input type="hidden" name="' + name + '" value="' + val + '"/>');
      dom.addClass('checklist');
      dom.append(a);
      dom.append(input);
      if (dom.attr('data-editable') == 'false') {
        editable = false;
      }
      var type = type.split(',');
      var source = [];
      for (var i in type) {
        var temp = type[i];
        var unit = {
          value: temp.split('=')[1],
          text: temp.split('=')[0]
        }
        source.push(unit);
      }

      if (val) {
        val = val.split(',');
      }
      a.editable({
        disabled: !editable,
        value: val,
        source: source,
        title: "收押证件",
        autotext: 'always'
      });
      $(a).on('save', function (e, params) {
        input.val(params.newValue);
        $(document).trigger('selectchange');
      });
    }

    //展示 取消
      function showOrHide(dom) {
          //只初始化一次
          if (!dom.attr('showhide-init') || dom.attr('showhide-init') == 'false') {
              dom.attr('showhide-init', true)
          } else {
              return ;
          }
          var target = $(dom.attr('plug-showhide'));
          dom.click(function (e) {
              e.preventDefault();
              e.stopPropagation();
              target.toggle();
              return false;
          })



      }

    function selectOther(dom) {
      //只初始化一次
      if (!dom.attr('selectother-init') || dom.attr('selectother-init') == 'false') {
        dom.attr('selectother-init', true)
      } else {
        return;
      }
      var name = dom.attr('plug-selectother');
      var val = dom.attr('data-other-value') || '0';
      var textarea = $('<textarea class="form-control" rows="1" name="'
        + name + '" maxlength="200" placeholder="选择其他备注必填"  required="required" style="display:none"></textarea> ');
      dom.after(textarea);
      textarea.text(val);
      dom.change(function () {
        if (dom.find('option:selected').text() == "其他" ||
          dom.find('option:selected').text() == "其它") {
          textarea.fadeIn().removeClass('ignore');
        } else {
          textarea.fadeOut().addClass('ignore');
        }
      })
      dom.change();
    }
    // 分转万元
    function replaceInputForSubmit(dom) {
      //只初始化一次
      if (!dom.attr('data-real-init-finish')) {
        dom.attr('data-real-init-finish', true);
      } else {
        return;
      }
      //table th不进行万元转换
      if (dom.is('th')) {
        return;
      }
      //防止th td 执行两边
      if(dom.is('td')){

      }
      var notEmpty = dom.attr('data-not-empty');
      //处理非input
      if (!dom.is('input')) {
        var val = dom.text();
        if (val) {
          val = val / 10000 / 100;
        }
        val = val.toString();
        val = $.fixedmax(val, 6);
        val = $.adaptionzero(val, 6);

        dom.text(val);
        return;
      }
      // 初始化  生成新的input
      var val = dom.val() || 0;
      var uuid = guid();
      dom.attr("uuid", uuid);
      var $input = $('<input/>').attr("type", "hidden").attr("id", uuid).attr("name", dom.attr("name")).val((val / 1).toFixed(0));
      dom.removeAttr("name");
      dom.append($input);

      // 处理旧的input的金额显示
      if (val && val == 0) {
        if (notEmpty) {
          dom.valnochange("0.00");
        } else {
          dom.valnochange("");
        }

      } else if (val && !isNaN(val)) {
        val = val / 10000 / 100;
        val = val.toString();
        val = $.fixedmax(val, 6);
        val = $.adaptionzero(val, 6);
        dom.valnochange(val);
      }
      if (!dom.is('input')) {
        dom.html(val);
      }

      dom.on('change', function () {
        var v = $(this).val();
        v = $.fixedmax(v, 6);
        v = $.adaptionzero(v, 6);
        $(this).val(v);
        var newVal = $.adaptionzero(v, 6) * 10000 * 100;
          console.log(newVal);
          newVal = newVal.toFixed(0); //不存在小数 0.00->0
        $(this).attr("data-real-money", newVal);
        $("#" + $(this).attr("uuid")).val(newVal);
      })
    }
    // 分转元
    function replaceInputForSubmitYuan(dom) {
      //只初始化一次
      if (!dom.attr('is-init-finish')) {
        dom.attr('is-init-finish', true)
      } else {
        return;
      }
      //table th不进行元转换
      if (dom.is('th')) {
        return;
      }
      var notEmpty = dom.attr('data-not-empty');
      //处理非input
      if (!dom.is('input')) {
        var val = dom.text();
        if (val) {
          val = val / 100;
        }
        val = val.toString();
        val = $.fixedmax(val, 6);
        val = $.adaptionzero(val, 6);

        dom.text(val);
        return;
      }
      // 初始化  生成新的input
      var val = dom.val() || 0;
      var uuid = guid();
      dom.attr("uuid", uuid);
      var $input = $('<input/>').attr("type", "hidden").attr("id", uuid).attr("name", dom.attr("name")).val((val / 1).toFixed(0));
      dom.removeAttr("name");
      dom.append($input);

      // 处理旧的input的金额显示
      if (val && val == 0) {
        if (notEmpty) {
          dom.valnochange("0.00");
        } else {
          dom.valnochange("");
        }

      } else if (val && !isNaN(val)) {
        val = val / 100;
        val = val.toString();
        val = $.fixedmax(val, 6);
        val = $.adaptionzero(val, 6);
        dom.valnochange(val);
      }
      if (!dom.is('input')) {
        dom.html(val);
      }

      dom.on('change', function () {
        var v = $(this).val();
        v = $.fixedmax(v, 6);
        v = $.adaptionzero(v, 6);
        $(this).val(v);
        var newVal = $.adaptionzero(v, 6) * 10000 * 100;
        newVal = newVal.toFixed(0); //不存在小数 0.00->0
        $(this).attr("data-real-YuanMoney", newVal);
        $("#" + $(this).attr("uuid")).val(newVal);
      })
    }

    //保留两位小数
    function clearNoNum(th) {
        th.on('blur', function () {
            obj=$(th)[0];
            //修复第一个字符是小数点 的情况.
            if (obj.value == ""){
              return false;
            }
            if (obj.value != '' && obj.value.substr(0, 1) == '.') {
                obj.value = "";
            }
            obj.value = obj.value.replace(/^0*(0\.|[1-9])/, '$1'); //解决 粘贴不生效
            obj.value = obj.value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
            obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
            obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            obj.value = parseFloat(obj.value).toFixed(2) //只能输入两个小数
            if (obj.value.indexOf(".") < 0 && obj.value != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                if (obj.value.substr(0, 1) == '0' && obj.value.length == 2) {
                    obj.value = obj.value.substr(1, obj.value.length);
                }
            }
            var arg=mul(obj.value, 1000000);
            if (th.attr("data-real-money")){
                th.attr("data-real-money",arg);
                th.find("input")[0].value=arg;
            }

        })
    }
    // 乘法的浮点数去除
    function mul(v1, v2)
    {
        ///<summary>精确计算乘法。语法：Math.mul(v1, v2)</summary>
        ///<param name="v1" type="number">操作数。</param>
        ///<param name="v2" type="number">操作数。</param>
        ///<returns type="number">计算结果。</returns>
        var m = 0;
        var s1 = v1.toString();
        var s2 = v2.toString();
        try
        {
            m += s1.split(".")[1].length;
        }
        catch (e)
        {
        }
        try
        {
            m += s2.split(".")[1].length;
        }
        catch (e)
        {
        }

        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
    function selfAdaption(dom){
      // var txt=dom[0].value;
      // console.log(txt)
      //   dom.height(dom[0].scrollHeight);
        // var h=dom[0].scrollHeight;
        // var txt=dom[0].value;
        // var numTxt=txt.match(/\n/g);
        // console.log(numTxt);
        // var txtH=h/numTxt.length;
        // dom.on("input",function () {
        //   var tt=this.value;
        //   var numTt=tt.match(/\n/g);
        //     console.log(numTt);
        //     console.log(txtH);
        //     $(this).height(txtH*numTt.length);
        // });

        /**
         * 文本框根据输入内容自适应高度
         * @param                {HTMLElement}        输入框元素
         * @param                {Number}                设置光标与输入框保持的距离(默认0)
         * @param                {Number}                设置最大高度(可选)
         */
        var autoTextarea = function (elem, extra, maxHeight) {
            extra = extra || 0;
            var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
                isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
                addEvent = function (type, callback) {
                    elem.addEventListener ?
                        elem.addEventListener(type, callback, false) :
                        elem.attachEvent('on' + type, callback);
                },
                getStyle = elem.currentStyle ? function (name) {
                    var val = elem.currentStyle[name];

                    if (name === 'height' && val.search(/px/i) !== 1) {
                        var rect = elem.getBoundingClientRect();
                        return rect.bottom - rect.top -
                            parseFloat(getStyle('paddingTop')) -
                            parseFloat(getStyle('paddingBottom')) + 'px';
                    };

                    return val;
                } : function (name) {
                    return getComputedStyle(elem, null)[name];
                },
                minHeight = parseFloat(getStyle('height'));

            elem.style.resize = 'none';

            var change = function () {
                var scrollTop, height,
                    padding = 0,
                    style = elem.style;

                if (elem._length === elem.value.length) return;
                elem._length = elem.value.length;

                if (!isFirefox && !isOpera) {
                    padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
                };
                scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

                elem.style.height = minHeight + 'px';
                if (elem.scrollHeight > minHeight) {
                    if (maxHeight && elem.scrollHeight > maxHeight) {
                        height = maxHeight - padding;
                        style.overflowY = 'auto';
                    } else {
                        height = elem.scrollHeight - padding;
                        style.overflowY = 'hidden';
                    };
                    style.height = height + extra + 'px';
                    // scrollTop += parseInt(style.height) - elem.currHeight;
                    // document.body.scrollTop = scrollTop;
                    // document.documentElement.scrollTop = scrollTop;
                    elem.currHeight = parseInt(style.height);
                };
            };

            addEvent('propertychange', change);
            addEvent('input', change);
            addEvent('focus', change);
            change();
        };
        autoTextarea(dom[0],15)
    }
    $(document).bind('pageChange', function (event, param) {
      param = param || {};

        // 分转万元
        $('[data-real-money]').each(function () {
            replaceInputForSubmit($(this));
        });


        // 分转元
      $('[data-real-YuanMoney]').each(function () {
        replaceInputForSubmitYuan($(this));
      });
        $(document).trigger('realmoneyinited');

      $("[plug-dynamic-tab]").each(function () {
        dynamicTab($(this));
      });

      $("[plug-dynamic-row]").each(function () {
        dynamicTableRows($(this));
      })

      $('[plug-create-input]').each(function () {
        createInput($(this));
      });
      //table只显示一行
      $("[plug-hidetablerow]").each(function () {
        hidetablerow($(this));
      })

      if (!param.noaction) {
        initactionTab($("[plug-action]"));
      }

      $('[plug-other-remark]').each(function () {
        otherText($(this));
      });
      $('[plug-integration]').each(function () {
        plugIntegration($(this));
      });
      $('[data-toggle="table"]').each(function () {
        var table = $(this);
        //只初始化一次
        if (!table.attr('dynamic-table-init') || table.attr('dynamic-table-init') == 'false') {
          table.attr('dynamic-table-init', true)
        } else {
          return;
        }
        table.bootstrapTable();
      });

      $('[plug-detail-page]').each(function () {
        detailPage($(this));
      });

      $("[plug-amount-upper]").each(function () {
        formatAmountUpper($(this));
      });


      $('[plug-separator]').each(function () {
        separatorAdd($(this));
      });

      $('[plug-addstart]').each(function () {
        addStart($(this));
      });

      $('[plug-addstartonce]').each(function () {
        addStartOnce($(this));
      });
      $('[plug-as]').each(function () {
        as($(this));
      });
      $('[plug-fixed]').each(function () {
        fixed($(this));
      });
      $('[plug-checklist]').each(function () {
        checklist($(this));
      });
      $('[plug-unifiedfixed]').each(function () {
        unifiedfixed($(this));
      });
      $('[plug-selectother]').each(function () {
        selectOther($(this));
      });
      $('[plug-clearNoNum]').each(function () {
          clearNoNum($(this));
      });
      $('[plug-textarea]').each(function(){
          selfAdaption($(this))
      })
        $('[plug-showhide]').each(function(){
          showOrHide($(this))
      })

    });
    $(document).on('unifiedfixed', function () {
      $('[plug-unifiedfixed]').each(function () {
        unifiedfixed($(this));
      });
    })
    $(document).on('realmoney', function () {
      $('[data-real-money]').each(function () {
        replaceInputForSubmit($(this));
      });
    })
    $(document).on('clearNoNum', function () {
        $('[plug-clearNoNum]').each(function () {
            clearNoNum($(this));
        });
    })
    $(document).on('realYuanMoney', function () {
      $('[data-real-YuanMoney]').each(function () {
        replaceInputForSubmitYuan($(this));
      });
    })
    $(document).trigger('pageChange');


  }($))
})
