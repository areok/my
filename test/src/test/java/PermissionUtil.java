import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

/**
 * Created by 马宇驰 on 2017/11/8.
 */
public class PermissionUtil {
    //权限点最大长度  取决于 user.rules字段长度;  且约束 resource.rule 最大值. 目前最多支持4096个资源点
    public static final int RULE_MAX_SIZE = 4096;

    private static final Logger LOGGER = LoggerFactory.getLogger(PermissionUtil.class);

    public static String buildUserRules(Set<Integer> resourceRule){
        BitSet bitSet = new BitSet(RULE_MAX_SIZE);
        resourceRule.forEach((i ->bitSet.set(i)));
        return buildUserRules(bitSet);
    }

    public static String buildUserRules(BitSet bitSet){
        return BitSet2String(bitSet);
    }


    public static BitSet parseUserRules(String rules){
        return String2BitSet(rules);
    }

    private static BitSet String2BitSet(String s){
        int len = s.length();
        BitSet bs = new BitSet(len);
        for(int i=0; i<len; i++) {
            if( s.charAt(i) == '1' )
                bs.set( i );
        }
        return bs;
    }
    private static String BitSet2String(BitSet bs) {
        int len = bs.length();
        StringBuilder sb = new StringBuilder(len);
        for(int i=0; i<len; i++) {
            sb.append(bs.get(i) ? '1' : '0');
        }
        return sb.toString();
    }
    @Test
    public void test1(){
        Set<Integer> set = new HashSet<Integer>(){
            {
                add(1);
                add(11);
                add(10);
            }
        };
        String s = buildUserRules(set);
        System.out.print(s);
    }
    @Test
    public void test2(){
        String s = "010000000011";
        BitSet bitSet = String2BitSet(s);
        System.out.print(bitSet);
    }
    @Test
    public void test3(){
        String s = "010000000011";
        BitSet bitSet = String2BitSet(s);
        System.out.println(bitSet.get(1)+"-"+bitSet.get(10)+"-"+bitSet.get(11));
    }
    @Test
    public void test4(){
        List<Integer> list = new ArrayList<Integer>(){{
            add(1);
            add(2);
            add(3);
            add(4);
            add(5);
        }};
        for(int i=0;i<list.size();i++){
            if(list.get(i)==1){
                list.remove(i);
            }
        }
        for(int i=0;i<list.size();i++){
            System.out.println(list.get(i));
        }
    }
}
