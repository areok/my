//E-mail 限制为常用邮箱格式
var EMAILRESTRICT="\\w+([-+.]\\w+)*@\\w+(-.\\w+)*\\.\\w+([-.]\\w+)*";
//ip地址 限制为IP V4的格式
var IPRESTRICT="^((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1}$";
//多个ip地址 以竖线分割，首尾不能有竖线 
var IPSRESTRICT="^((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1}(\\|((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?)))){0,}$";
//ip地址 限制为IP V4的格式,包括允许“”
var IPRESTRICTANDSPACE="^(((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1})|^n{0}$";
//邮政编码 限制为国家标准
var ZIPCODERESTRICT="[1-9]\\d{5}(?!d)";
//QQ号码 限制为10000以上
var QQRESTRICT="[1-9][0-9]{4,}";
//电话号码 限制为国家标准
var PHONERESTRICT="\\d{3}-\\d{8}|\\d{4}-\\d{7,8}";
//频道名称验证
var CHANNEL_NAME_REG_EXP="^[a-z0-9][a-z0-9]*:\/\/[a-z0-9][-a-z0-9]*(\\.[a-z0-9][-a-z0-9]*){1,}$";
//域名验证
var CHANNEL_DOMAIN_NAME_REG_EXP="^[a-z0-9*][-a-z0-9.]*(\\.[a-z0-9][-a-z0-9]*){1,}$";
//cdnDetectUrl验证
var CDN_DETECT_URL_REG_EXP="^[A-Za-z0-9]+:\/\/[^*]*$";
var PAN_DOMAIN_CDN_DETECT_URL_REG_EXP="[A-Za-z0-9]+[a-z0-9_.]*";

//泛域名验证
var CHANNEL_PAN_NAME_REG_EXP="^[a-z0-9][a-z0-9]*:\/\/[*]\\.[a-z0-9][-a-z0-9]*(\\.[a-z0-9][-a-z0-9]*){1,}$";
//CIDR格式验证
var CIDR_REG_EXP=/^((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1}\/((3[0-2])|(2[0-9])|1[0-9]|[0-9])$/;
//CIDR格式验证
var VIP_REG_EXP=/^((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1}:[0-9]{0,}$/;
//NameID替换时的验证格式
var NAMEID_REPLACE_EXP=/^[a-zA-Z0-9][a-zA-Z0-9-]{0,62}(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,62})+$/;		
//NameID格式
var NAMEID_FORMAT_EXP=/^[a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{1,63})*$/;
//Cname
//var CNAME_FORMAT_EXPRESSION=/^[a-zA-Z0-9][a-zA-Z0-9-\.]{0,62}+$/;
//NameID名称以.tel结尾
var NAMEID_END_WITH_TEL=/^.+\.tel$/;
//NameID名称以.cnc结尾
var NAMEID_END_WITH_CNC=/^.+\.cnc$/;
// 监控项 Monitor Scale属性
var MONITOR_SCALE="^\\d+[\\d\\.,]{0,254}$";

var IGNORE_QUESTIONMARK_PATH_EXPRESSION="^\\/\\S+$"; //以斜线开头，不能有空格

var IGNORE_END_PATH_EXPRESSION="^.\\S+[^\|]$"; //以斜线开头，不能有空格

var HTTPACCESS_ACL_PATTERN_EXPRESSION="^\\/\\S+( \\/\\S+)*$"; //以斜线开头，空格后是斜线
//每行一个ip
var HTTPACCESS_SRC_ACL_PATTERN_EXPRESSION="^(((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?)))(\\/\\d+)?){1}(\\s(((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?)))(\\/\\d+)?)){0,}$";

var OTHER_HTTP_CODE_EXPRESSION="^\\d[\\*\\d]{2}(\\|\\d[\\*\\d]{2})*$"; //以数字开头，后边可跟两位，为数字或者*，但不能包括2***，3**，每三位一组后边跟|隔开

var REFRESH_PATTERN_PATH="^\\/.*$"; //以斜线开头

var PASSWORD="^(\\w){8,}$";
//0-Z
var DEVICE_TYPEANDMODEL="^[A-Za-z0-9]{1}$";

var SERVICE_TYPE_INDEX="^[0-9]{1,20}$";
		
var SOURCESITE_DOMAIN="^[A-Za-z0-9-_.]{1,256}$"; //长度256个字符，允许字母，数字，下划线，中横线，点号

//长度最短10、最长13个字符，允许字母，数字，下划线，中横线
var DEVICE_OLD_SERIAL_NUM="^[A-Za-z0-9-]{10,13}$";

//长度10个字符，允许字母，数字，下划线，中横线
var USER_LOGINNAME_AND_ROLECODE="^[A-Za-z0-9_.@]{1,30}$";
		
var BATCH_PAST_MAIL_ALARMDIRECTOR="^(\\w+([-+.]\\w+)*){1}(([\r]*\\w+([-+.]\\w+)*)*)$";
		
		
var BATCH_PAST_MAIL_ACCOUNT="^(\\w+([-+.]\\w+)*@chinacache.com){1}(([\r]*\\w+([-+.]\\w+)*@chinacache.com)*)$";
//允许字母，数字，点，逗号
var CONFIG_SERVER="^[A-Za-z0-9][A-Za-z0-9\\.,]*[A-Za-z0-9]$";
//Location Name
var LOCATION_NAME="^[!]{0,1}[A-Za-z0-9][A-Za-z0-9_-]{0,255}$";

//开头不为0的数字
var NORMAL_NUMBER="^[1-9][0-9]*$";

var ROLECODE="^ROLE_[A-Za-z0-9_]{1,15}$";

//中文,字母,数据,下划线,中横线
var SERVICE_LOCATION_NAME="^[\u4e00-\u9fa5A-Za-z0-9-_]{1,50}$";

//中文,字母,数据,下划线,中横线
var SERVICE_LOCATION_ENGLISHNAME="^[A-Za-z0-9-_ ]{1,50}$";

//十位纯数字
var REG_NUMBER="^[0-9]{0,10}$";

var DLCGROUP_CMP_INDEX="^[A-Za-z0-9]{1,10}$";

var APPLICATIONMETA_ABBERVIATION="^[A-Z0-9_]{1,10}$";

var APPLICATION_VERSION="^[A-Za-z0-9]{1,}";

//邮编属性只能输入数字和字母，长度最大10位 
var POSTAL_CODE="^[A-Za-z0-9]{0,10}$";
//url验证
var SOURCESITE_DETECTED_URL="[a-zA-z]+:\/\/[^\s]*";
//不带空格的字符串
var HTTP_HEADER_VALUE="^\\S+$";
//源站配置穿透权证的验证，举例：100:0, 50:50
var SOURCEIP_WEIGHT="^[0-9]{1,}:[0-9]{1,}$";

var PORT="^[0-9]{2,5}$";

var HEADERVALUE='^.+$'
//		http://
var CUSTOMER_SERVICE_DENY_URL="^http:\/\/[^\\s\r\^\*\\\\]*[\/]+[^\\s\r\^\*\\\\]*$";

var BATCH_CHANNELS_NAME="^([a-z0-9][a-z0-9]*:\/\/[a-z0-9][-a-z0-9]*(\\.[a-z0-9][-a-z0-9]*){1,}){1}(\r[a-z0-9][a-z0-9]*:\/\/[a-z0-9][-a-z0-9]*(\\.[a-z0-9][-a-z0-9]*){1,}){0,99}$";
		
var BATCH_PAST_CHANNELNAMES="^([a-z0-9][a-z0-9]*:\/\/(([*]\\.[a-z0-9][-a-z0-9]*)|([a-z0-9][-_a-z0-9]*))(\\.[a-z0-9][-_a-z0-9]*){1,}){1}(\r{1,}[a-z0-9][a-z0-9]*:\/\/(([*]\\.[a-z0-9][-a-z0-9]*)|([a-z0-9][-_a-z0-9]*))(\\.[a-z0-9][-_a-z0-9]*){1,}){0,99}$"
		
var NODE_MAX_WIDTH="^1[0-9]{1,4}$|^[1-9]{1}[0-9]{1,3}$|^20000$";
		
var TIME_Y_M_D_H="^[1-9][0-9]{3}\-(0[0-9]|1[0-2])\-(0[0-9]|1[0-9]|2[0-9]|3[0-1])\-([0-1][0-9]|2[0-4])$";
		
var TIME_H_M="^(([0-1][0-9])|(2[0-3])):([0-5][0-9])$";
		
//验证抓取字节数的取值范围为512到4096000
var GRAB_NUMBER_OF_BYTES="^((51[2-9]|(5[2-9][0-9])|([6-9][0-9][0-9]))|([1-9][0-9][0-9][0-9])|([1-9][0-9][0-9][0-9][0-9])|([1-9][0-9][0-9][0-9][0-9][0-9])|(4096000|(40[0-9][0-5][0-9][0-9][0-9])|([1-3][0-9][0-9][0-9][0-9][0-9][0-9])))$";
		
//部门英文简称 可以为空
var DEPARTMENT_SHORTNAMEEN="^[A-Za-z]*$";
//邮箱名字 可以为空
var CHINACACHE_EMAIL="^(\\w+([-+.]\\w+)*@chinacache.com){0,1}$";
//浮点数或者整数
var THRESHOLD_VALUE="^(\\d*\\.)?\\d+$";

var DIRECTORY_EXPRESSION="^\\/\\S+$"; //以斜线开头，不能有空格
// https开头字符串
var HTTPS_PREFIX = "^https:\/\/";