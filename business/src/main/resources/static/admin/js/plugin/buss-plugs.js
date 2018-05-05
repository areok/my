$(function(){ //等界面加载完成后，执行下面内容
	(function ($){ // 闭包，防止下面定义的变量泄露到整个页面

        var area = {
            '安徽': [
                '合肥',
                '芜湖',
                '蚌埠',
                '淮南',
                '马鞍山',
                '淮北',
                '铜陵',
                '安庆',
                '黄山',
                '阜阳',
                '宿州',
                '滁州',
                '六安',
                '宣城',
                '池州',
                '亳州',
                '其他'
            ],
            '北京': [
                '北京'
            ],
            '重庆': [
                '重庆'
            ],
            '福建': [
                '福州',
                '厦门',
                '莆田',
                '三明',
                '泉州',
                '漳州',
                '南平',
                '龙岩',
                '宁德',
                '平潭',
                '其他'
            ],
            '甘肃': [
                '兰州',
                '嘉峪关',
                '金昌',
                '白银',
                '天水',
                '酒泉',
                '张掖',
                '武威',
                '定西',
                '陇南',
                '平凉',
                '庆阳',
                '临夏回族自治州',
                '甘南藏族自治州',
                '其他'
            ],
            '广东': [
                '广州',
                '深圳',
                '珠海',
                '汕头',
                '佛山',
                '韶关',
                '湛江',
                '肇庆',
                '江门',
                '茂名',
                '惠州',
                '梅州',
                '汕尾',
                '河源',
                '阳江',
                '清远',
                '东莞',
                '中山',
                '潮州',
                '揭阳',
                '云浮',
                '其他'
            ],
            '广西': [
                '南宁',
                '柳州',
                '桂林',
                '梧州',
                '北海',
                '防城港',
                '钦州',
                '贵港',
                '玉林',
                '百色',
                '贺州',
                '河池',
                '来宾',
                '崇左',
                '南宁',
                '柳州',
                '其他'
            ],
            '贵州': [
                '贵阳',
                '六盘水',
                '遵义',
                '安顺',
                '毕节',
                '铜仁',
                '黔西南',
                '黔东南',
                '黔南',
                '其他'
            ],
            '海南': [
                '海口',
                '三亚',
                '三沙',
                '儋州',
                '其他'
            ],
            '河北': [
                '石家庄',
                '唐山',
                '秦皇岛',
                '邯郸',
                '邢台',
                '保定',
                '张家口',
                '承德',
                '沧州',
                '廊坊',
                '衡水',
                '定州',
                '辛集',
                '其他'
            ],
            '黑龙江': [
                '哈尔滨',
                '齐齐哈尔',
                '鸡西',
                '鹤岗',
                '双鸭山',
                '大庆',
                '伊春',
                '佳木斯',
                '七台河',
                '牡丹江',
                '黑河',
                '绥化',
                '大兴安岭',
                '绥芬河',
                '抚远',
                '其他'
            ],
            '河南': [
                '郑州',
                '开封',
                '洛阳',
                '平顶山',
                '安阳',
                '鹤壁',
                '新乡',
                '焦作',
                '濮阳',
                '许昌',
                '漯河',
                '三门峡',
                '南阳',
                '商丘',
                '周口',
                '信阳',
                '驻马店',
                '济源',
                '其他'
            ],
            '湖北': [
                '武汉',
                '黄石',
                '十堰',
                '宜昌',
                '襄阳',
                '鄂州',
                '荆门',
                '孝感',
                '荆州',
                '黄冈',
                '咸宁',
                '随州',
                '恩施土家族苗族自治州',
                '仙桃',
                '潜江',
                '天门',
                '神农架',
                '其他'
            ],
            '湖南': [
                '长沙',
                '株洲',
                '湘潭',
                '衡阳',
                '邵阳',
                '岳阳',
                '常德',
                '张家界',
                '益阳',
                '郴州',
                '永州',
                '怀化',
                '娄底',
                '湘西土家族苗族自治州',
                '其他'
            ],
            '内蒙古': [
                '呼和浩特',
                '包头',
                '乌海',
                '赤峰',
                '通辽',
                '鄂尔多斯',
                '呼伦贝尔',
                '巴彦淖尔',
                '乌兰察布盟',
                '兴安盟',
                '锡林郭勒盟',
                '阿拉善盟',
                '其他'
            ],
            '江苏': [
                '南京',
                '无锡',
                '徐州',
                '常州',
                '苏州',
                '南通',
                '连云港',
                '淮安',
                '盐城',
                '扬州',
                '镇江',
                '泰州',
                '宿迁',
                '其他'
            ],
            '江西': [
                '南昌',
                '九江',
                '上饶',
                '抚州',
                '宜春',
                '吉安',
                '赣州',
                '景德镇',
                '萍乡',
                '新余',
                '鹰潭',
                '其他'
            ],
            '吉林': [
                '长春',
                '吉林',
                '四平',
                '辽源',
                '通化',
                '白山',
                '白城',
                '松原',
                '延边朝鲜族自治州',
                '吉林省长白山保护开发区',
                '梅河口',
                '公主岭',
                '其他'
            ],
            '辽宁': [
                '沈阳',
                '大连',
                '鞍山',
                '抚顺',
                '本溪',
                '丹东',
                '锦州',
                '营口',
                '阜新',
                '辽阳',
                '盘锦',
                '铁岭',
                '朝阳',
                '葫芦岛',
                '其他'
            ],
            '宁夏': [
                '银川',
                '石嘴山',
                '吴忠',
                '固原',
                '中卫',
                '其他'
            ],
            '青海': [
                '西宁',
                '海东',
                '海北',
                '黄南',
                '海南',
                '果洛',
                '玉树',
                '海西'
            ],
            '山西': [
                '太原',
                '大同',
                '阳泉',
                '长治',
                '晋城',
                '朔州',
                '晋中',
                '运城',
                '忻州',
                '临汾',
                '吕梁',
                '其他'
            ],
            '山东': [
                '济南',
                '青岛',
                '淄博',
                '枣庄',
                '东营',
                '烟台',
                '潍坊',
                '济宁',
                '泰安',
                '威海',
                '日照',
                '莱芜',
                '临沂',
                '德州',
                '聊城',
                '滨州',
                '菏泽',
                '其他'
            ],
            '上海': [
                '上海'
            ],
            '四川': [
                '成都',
                '绵阳',
                '自贡',
                '攀枝花',
                '泸州',
                '德阳',
                '广元',
                '遂宁',
                '内江',
                '乐山',
                '资阳',
                '宜宾',
                '南充',
                '达州',
                '雅安',
                '阿坝',
                '甘孜',
                '凉山',
                '眉山',
                '广安',
                '巴中',
                '其他'
            ],
            '天津': [
                '天津'
            ],
            '西藏': [
                '拉萨',
                '昌都',
                '山南',
                '日喀则',
                '那曲',
                '阿里',
                '林芝',
                '其他'
            ],
            '新疆': [
                '乌鲁木齐',
                '克拉玛依',
                '吐鲁番',
                '哈密',
                '阿克苏',
                '喀什',
                '和田',
                '昌吉',
                '博尔塔拉',
                '巴音郭楞',
                '克孜勒苏',
                '伊犁',
                '其他'
            ],
            '云南': [
                '昆明',
                '曲靖',
                '玉溪',
                '昭通',
                '保山',
                '丽江',
                '普洱',
                '临沧',
                '德宏',
                '怒江',
                '迪庆',
                '大理',
                '楚雄',
                '红河',
                '文山',
                '西双版纳',
                '其他'
            ],
            '浙江': [
                '杭州',
                '宁波',
                '温州',
                '嘉兴',
                '湖州',
                '绍兴',
                '金华',
                '衢州',
                '舟山',
                '台州',
                '丽水',
                '其他'
            ],
            '陕西': [
                '西安',
                '宝鸡',
                '铜川',
                '咸阳',
                '渭南',
                '延安',
                '汉中',
                '榆林',
                '安康',
                '商洛',
                '杨凌示范区',
                '其他'
            ]
        }
		
		function warrantVisitor(search){
			var selectedId = search.attr('warrant-selected-id');
			var url = search.attr('warrant-url');
			var inputs = $(search.attr('warrant-inputs'));
			var table = $(search.attr('plug-warrant-visitor'));
			var data = {};
			inputs.each(function(){
				var self = $(this);
				data[self.attr('name')] = self.val();
			})
			$.ajax({
                url: url,
                cache: false,
                contentType : 'application/x-www-form-urlencoded',
                type:'POST',
                data: data
            }).done(function (users) {
            	for(i in users){
            		var user = users[i];
            		user.select = selectedId==user.id;
            	}
            	table.bootstrapTable('load',users);
            	$(document).trigger('tablechange')
            });
		}
		
		$("[plug-warrant-visitor]").each(function(){
			var self = $(this);
			self.click(function(){
				var disabled = self.attr('disabled') || self.hasClass('disabled') || false;
				if(!disabled){
					warrantVisitor(self)
				}
				
			})
			self.click();
		});

		
		$("[plug-city]").bind('provincechange',function(){
			var self = $(this);
			getCities(self);
		});
        $("[plug-province]").each(function(){
            var self = $(this);
            getProvince(self)
        });
		
		function getProvince(select){
			var selectedVal = select.attr('data-value');
			var citySelect = $(select.attr('plug-province'));
            var provinces = area;
            select.empty();
            select.append('<option value="">请选择</option>');
            for(var province in provinces){
                if(province==selectedVal){
                    select.append('<option selected="selected" value="'+province+'">'+province+'</option>');
                }else{
                    select.append('<option value="'+province+'">'+province+'</option>');
                }
            }
            select.change(function(){
                citySelect.attr('data-province',select.val());
                citySelect.trigger('provincechange');
            });
            select.change();

		}
		function getCities(select){
			var selectedVal = select.attr('data-value');
			var province = select.attr('data-province');
			select.empty();
        	select.append('<option value="">请选择</option>');
			if(!province){
				return;
			}
			var cities = area[province];
            for(var i in cities){;
                var city = cities[i]
                if(city==selectedVal){
                    select.append('<option selected="selected" value="'+city+'">'+city+'</option>');
                }else{
                    select.append('<option value="'+city+'">'+city+'</option>');
                }
            }

		}
		

			
	}($))
})
