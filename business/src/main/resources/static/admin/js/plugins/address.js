/**
Address editable input.
Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

@class address
@extends abstractinput
@final
@example
<a href="#" id="address" data-type="address" data-pk="1">awesome</a>
<script>
$(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow", 
            street: "Lenina", 
            building: "15"
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    //注册需要的函数
    $.plug = $.plug || {};
    $.plug.registerEditableFunction = function (column, columns){
    	//获取名称
    	var title = column.title;
    	var mainField = column.field;
    	var fields = column.editorMult && column.editorMult.split(',') || [];
    	if($.inArray(mainField, fields) == -1){
        	fields.unshift(mainField);
    	}
    	var functionId = mainField;//暂时用filed name作为注册函数名
    	
    	var inputsStr = '';
    	for(var i in fields){
    		var field = fields[i];
    		for(var j in columns){
    			var col = columns[j];
    			if(col.field != field){
    				continue;
    			}
    			var type = col.type || 'text';
    			var param = {};
    			param.readonly = col.readonly == true;
    			param.required = !(col.required == false);
				switch(type){
				case 'text':
					inputsStr += inputStr(field, col.title, param);
					break;
				case 'textarea':
					inputsStr += textareaStr(field, col.title, param);
					break;
				case 'time':
					inputsStr += timeStr(field, col.title, param);
					break;
				}
				
    			
    		}
    	}
    	
    	var Address = function (options) {
            this.init(functionId, options, Address.defaults);
        };

        $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

        $.extend(Address.prototype, {
            /**
            Renders input from tpl

            @method render() 
            **/        
            render: function() {
               this.$input = this.$tpl.find('input').add(this.$tpl.find('textarea'));
            },
            
            /**
            Default method to show value in element. Can be overwritten by display option.
            
            @method value2html(value, element) 
            **/
            value2html: function(value, element) {
                if(!value) {
                    $(element).empty();
                    return; 
                }
//                var html = $('<div>').text(value.city).html() + ', ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
                $(element).html(value[mainField]); 
            },
            
            /**
            Gets value from element's html
            
            @method html2value(html) 
            **/        
            html2value: function(html) {        
              /*
                you may write parsing method to get value by element's html
                e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
                but for complex structures it's not recommended.
                Better set value directly via javascript, e.g. 
                editable({
                    value: {
                        city: "Moscow", 
                        street: "Lenina", 
                        building: "15"
                    }
                });
              */ 
              return null;  
            },
          
           /**
            Converts value to string. 
            It is used in internal comparing (not for sending to server).
            
            @method value2str(value)  
           **/
           value2str: function(value) {
               var str = '';
               if(value) {
                   for(var k in value) {
                       str = str + k + ':' + value[k] + ';';  
                   }
               }
               return str;
           }, 
           
           /*
            Converts string to value. Used for reading value from 'data-value' attribute.
            
            @method str2value(str)  
           */
           str2value: function(str) {
               /*
               this is mainly for parsing value defined in data-value attribute. 
               If you will always set value by javascript, no need to overwrite it
               */
               return str;
           },                
           
           /**
            Sets value of input.
            
            @method value2input(value) 
            @param {mixed} value
           **/         
           value2input: function(value) {
               if(!value) {
                 return;
               }
//               this.$input.filter('[name="city"]').val(value.city);
//               this.$input.filter('[name="street"]').val(value.street);
//               this.$input.filter('[name="building"]').val(value.building);
               this.$input.filter('[name]').each(function(){
            	   var self = $(this)
            	   self.val(value[self.attr('name')]);
               })
           },       
           
           /**
            Returns value of input.
            
            @method input2value() 
           **/          
           input2value: function() { 
        	   var obj = {};
        	   var required = {};
        	   this.$input.filter('[name]').each(function(){
            	   var self = $(this)
            	   obj[self.attr('name')] = self.val();
            	   required[self.attr('name')] = self.attr('required') || false;
               });
        	   obj.required = required;
        	   return obj;
           },        
           
            /**
            Activates input: sets focus on the first field.
            
            @method activate() 
           **/        
           activate: function() {
                this.$input.filter('[name]').first().focus();
           },  
           
           /**
            Attaches handler to submit form in case of 'showbuttons=false' mode
            
            @method autosubmit() 
           **/       
           autosubmit: function() {
               this.$input.keydown(function (e) {
                    if (e.which === 13) {
                        $(this).closest('form').submit();
                    }
               });
           }       
        });

        Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
            tpl: inputsStr,
            inputclass: ''
        });

        $.fn.editabletypes[functionId] = Address;
    	
    	
    }
    
    function inputStr(name, title, param){
    	return '<div class="editable-mult"><label><span>'+title+': </span><input '+ (param.required ? 'required="required"':'') + (param.readonly ? 'readonly="readonly"':'') + 'type="text" name="'+name+'" class="input-mini"/></label></div>';
    }
    function timeStr(name, title, param){
    	return '<div class="editable-mult"><label><span>'+title+': </span><input '+ (param.required ? 'required="required"':'') + ' '+ (param.readonly || true ? 'readonly="readonly"':'')  +' onclick="WdatePicker({dateFmt:\'yyyy-MM-dd HH:mm:ss\'})" type="text" name="'+name+'" class="input-mini"/></label></div>';
    }
    function textareaStr(name, title, param){
    	return '<div class="editable-mult"><label><span>'+title+': </span><textarea '+ (param.required ? 'required="required"':'') + ' name="'+name+'" '+ (param.readonly ? 'readonly="readonly"':'')  +' class="input-mini"></textarea></label></div>';
    }
    

}(window.jQuery));