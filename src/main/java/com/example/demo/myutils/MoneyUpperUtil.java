package com.example.demo.myutils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by 马宇驰 on 2017/6/19.
 * 將金錢轉換為大寫
 * 單位萬元
 * 1003.2009 万元  -------  壹仟零叁万零贰仟零玖元整
 * 区间   亿元 ---- 元
 */
public class MoneyUpperUtil {

    public static void main(String[] args) {
        String target = new MoneyUpperUtil().moneyUpper(13.2009+"");
        System.out.println(target);
    }
    private static final String[] resource = new String[]{
            "零","壹","贰", "叁","肆","伍","陆","柒","捌", "玖"
    };
    private static final Map<Integer,String> resourceNumSub = new HashMap<Integer,String>(){{
        put(1,"仟");
        put(2,"佰");
        put(3,"拾");
        put(4,"");
    }};
    private static final Map<Integer,String> resourceNumPre = new HashMap<Integer,String>(){{
        put(1,"");
        put(2,"拾");
        put(3,"佰");
        put(4,"仟");
    }};
    public String moneyUpper(String money){
        if(money==null) return null;
        List<char[]> moneys = splitMoney(money);
        if(moneys.size()==1){    //整数
            String res = getPreResult(moneys.get(0));
            System.out.println(res);
            return res+"元整";
        }else{//带小数
            String res1 = getPreResult(moneys.get(0));
            String res2 = getSufResult(moneys.get(1));
            String temp = res2.charAt(0)+"";
            if("零".equals(temp)){
                return res1+res2;
            }
            return res1+"零"+res2;
        }
    }
    /**
     * 拆分以小数点拆分的金钱
     * @param money
     * @return
     */
    public List<char[]> splitMoney(String money){
        Integer index = money.indexOf(".");
        String pre = null;
        String suf = null;
        List<char[]> list = new ArrayList<char[]>();
        if(index>0){
            pre = money.substring(0,index);
            suf = money.substring(index+1,money.length());
            char[] pres = pre.toCharArray();
            char[] sufs = suf.toCharArray();
            if(allIsZero(sufs)){
                list.add(pres);
            }else            {
                list.add(pres);
                list.add(sufs);
            }

        }else{
            list.add(money.toCharArray());
        }
        return list;
    }
    public String getPreResult(char[] chars){
        StringBuilder result = new StringBuilder();
        Integer length = chars.length;
        System.out.println("长度为:"+length);
        Boolean mark = false;
        char[] tempChars = chars;
        for(Integer i = 0; i < length; i++){
            Boolean isZero = allIsZero(tempChars);
            tempChars = getNewChars(tempChars);
            String temp = chars[i]+"";
            String num = resource[Integer.valueOf(temp)];
            Integer j = length-i;
            if(!num.equals("零")) {
                result.append(num);
                result.append(resourceNumPre.get(j));
                mark = false;
            }else if(num.equals("零") && i!=length-1 && mark == false){
                if(isZero) continue;
                mark = true;
                result.append(num);
            }
            if(j==1) {
                result.append("万");
            }
        }
        return result.toString();
    }
    public String getSufResult (char[] chars){
        StringBuilder result = new StringBuilder();

        Integer length = chars.length;
        System.out.println("长度为:"+length);
        Integer j = 1;
        Boolean mark = false;
        for(Integer i = 0; i < length; i++){
            String temp = chars[i]+"";
            String num = resource[Integer.valueOf(temp)];
            if(num.equals("零") && length==1) break;
            if(!num.equals("零")) {
                result.append(num);
                result.append(resourceNumSub.get(j));
                mark = false;
            }else if(num.equals("零") && i!=length-1  && mark==false){
                mark = true;
                result.append(num);
            }
            if(j==length) {
                result.append("元整");
            }
            j++;
        }
        return result.toString();
    }
    public Boolean allIsZero(char[] chars){
        Boolean mark = false;
        for (char c:chars) {
            if (c!='0' && mark) return false;
            mark = true;
        }
        return true;
    }
    public char[] getNewChars(char[] chars){
        StringBuilder str = new StringBuilder();
        for (int i=0;i<chars.length;i++) {
            if(i>0) str.append(chars[i]+"");
        }
        return  str.toString().toCharArray();
    }
}
