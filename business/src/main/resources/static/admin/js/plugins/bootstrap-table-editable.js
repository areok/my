/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/vitalets/x-editable
 */

!function ($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        editable: true,
        onEditableInit: function () {
            return false;
        },
        onEditableSave: function (field, row, oldValue, $el, values, url) {
        	if(!url) return;
        	var data = [];
        	for(var i in values){
        		var value = values[i];
        		data.push(i+'='+value);
        	}
        	$el.parent().attr('data-name',"jajj")
        	$.ajax({
		 		url         : url,
		 		contentType : 'application/x-www-form-urlencoded',
		 		type        : 'post',
		 		data        :  data.join('&'),
		 		success : function (result) {
		 			if(result && result.resultCode && result.resultCode=="0000"){
		 				cms.messager.alert('保存成功');
		 				return;
		 			}
		 			else if(result.resultMsg){
		 				cms.messager.alert(result.resultMsg);
		 				return;
		 			}

		 		}	
		 	})
            return false;
        },
        onEditableShown: function (field, row, $el, editable) {
            return false;
        },
        onEditableHidden: function (field, row, $el, reason) {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'editable-init.bs.table': 'onEditableInit',
        'editable-save.bs.table': 'onEditableSave',
        'editable-shown.bs.table': 'onEditableShown',
        'editable-hidden.bs.table': 'onEditableHidden'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initTable = BootstrapTable.prototype.initTable,
        _initBody = BootstrapTable.prototype.initBody;

    BootstrapTable.prototype.initTable = function () {
        var that = this;
        _initTable.apply(this, Array.prototype.slice.apply(arguments));

        var columns = this.columns;
        $.each(this.columns, function (i, column) {
        	var _formatter = column.formatter;
        	//对数字格式化
        	if(column.unifiedfixed != undefined){
        		var count = column.unifiedfixed-0;
        		column.formatter = function (value, row, index) {
        			value = $.fixedmax(value,count);
        			value = $.adaptionzero(value,count);
                	var result = _formatter ? _formatter(value, row, index) : value;
                	return value;
                };
        	}

        	//对金额格式化
            if(column.realMoney === true){
                column.formatter = function (value, row, index) {
                	value = value || 0;
                    value = value /10000/100
					if(value!=value){
                    	value = 0;
					}
                    value = value.toString();
                    value = $.fixedmax(value,6);
                    value =  $.adaptionzero(value, 6);
                    var result = _formatter ? _formatter(value, row, index) : value;
                    return value;
                };
            }
            if (!column.editable && !column.editorMult) {
                return;
            }
            
            column.formatter = function (value, row, index) {
            	var values = value.split('****');
            	var disabled = false;
            	if(values.length == 2){
            		value = values[1];
            		disabled = true;
            	}
                var result = _formatter ? _formatter(value, row, index) : value;
                if(column.editorMult){
                	$.plug.registerEditableFunction(column,columns);
                }
               
                if(column.emptyeditable && value){
       			 	return result;
       		 	}
                
                return ['<a href="javascript:void(0)"',
                    ' data-name="' + column.field + '"',
                    column.editorMult?(' data-type="' + column.field + '"'):'',
                    ' data-pk="' + row[that.options.idField] + '"',
                    column.editorMult?'':' data-value="' + result + '"',
                    disabled ? 'data-disabled="true"':'',
                    !column.action?'':' data-href="' + column.action + '"',
                    '>' + '</a>'
                ].join('');
            };
        });
    };
    BootstrapTable.prototype.initBody = function () {
        var that = this;
        _initBody.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.editable) {
            return;
        }

        $.each(this.columns, function (i, column) {
            if(column.editorMult){
            	that.$body.find('a[data-name="' + column.field + '"]').each(function(){
            		var a = $(this);
            		 var data = that.getData(),
                     index = a.parents('tr[data-index]').data('index'),
                     value = data[index];
            		 var title = column.editorTitle || column.title.replace(/<[^>]*>/g, "");
            		 var editable = {};
            		 editable.value = value;
            		 editable.title = title;
            		 editable.showbuttons = 'bottom';
            		 editable.onblur="ignore";//Action when user clicks outside the container. Can be cancel|submit|ignore.
            		 editable.disabled = a.attr('data-disabled');
            		 if(column.emptytext){
            			 editable.emptytext = column.emptytext;
            		 }
            		 editable.validate = function(v){
            			 var required = v.required;
            			 for(var pro in v){
            				 if(required[pro]){
            					 if(!v[pro]) return "不能为空";
            				 }
            				 
            			 }
            		 }
            		 var table = a.parents('table');
            		 a.editable(editable)
	                .off('save').on('save', function (e, params) {
	                    var data = that.getData(),
	                        index = $(this).parents('tr[data-index]').data('index'),
	                        row = data[index],
	                        oldValue = row;
	                    	for(var pro in  params.submitValue){
	                    		row[pro] = params.submitValue[pro];
	                    	}
	                    	that.updateRow({index:index,row:row});
	                    	table.trigger('rowchange');
	                    	that.trigger('editable-save', column.field, row, oldValue, $(this), params.submitValue, a.attr('data-href'));
	                });
            		 a.editable(editable)
	                .off('shown').on('shown', function (e, editable) {
	                    var data = that.getData(),
	                        index = $(this).parents('tr[data-index]').data('index'),
	                        row = data[index];
	                    that.trigger('editable-shown', column.field, row, $(this), editable);
	                });
            		 a.editable(editable)
 	                .off('hidden').on('hidden', function (e, reason) {
	                    var data = that.getData(),
	                        index = $(this).parents('tr[data-index]').data('index'),
	                        row = data[index];
	                    that.trigger('editable-hidden', column.field, row, $(this), reason);
	                });
            		 
            	});
            	return;
            }
            if (!column.editable) {
                return;
            }
            that.$body.find('a[data-name="' + column.field + '"]').editable(column.editable)
                .off('save').on('save', function (e, params) {
                    var data = that.getData(),
                        index = $(this).parents('tr[data-index]').data('index'),
                        row = data[index],
                        oldValue = row[column.field];

                    row[column.field] = params.submitValue;
                    that.trigger('editable-save', column.field, row, oldValue, $(this));
                });
            that.$body.find('a[data-name="' + column.field + '"]').editable(column.editable)
                .off('shown').on('shown', function (e, editable) {
                    var data = that.getData(),
                        index = $(this).parents('tr[data-index]').data('index'),
                        row = data[index];
                    that.trigger('editable-shown', column.field, row, $(this), editable);
                });
            that.$body.find('a[data-name="' + column.field + '"]').editable(column.editable)
                .off('hidden').on('hidden', function (e, reason) {
                    var data = that.getData(),
                        index = $(this).parents('tr[data-index]').data('index'),
                        row = data[index];
                    
                    that.trigger('editable-hidden', column.field, row, $(this), reason);
                });
        });
        this.trigger('editable-init');
    };

}(jQuery);

