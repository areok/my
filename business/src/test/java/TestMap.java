import org.junit.Test;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.function.BiConsumer;

/**
 * Created by 马宇驰 on 2018/1/8.
 */
public class TestMap {

    private String[] strs;

    @Test
    public void test1(){
        Map<String,String> map = new HashMap<String,String>();
        map.put("1","test");
        map.put("2","test2");
        for(int i=0;i<10000;i++){
            map.put((i+3)+"","test"+(i+3));
        }
        map.put("11339","test3");
        map.get("1");
        Set<Map.Entry<String ,String>> entries =  map.entrySet();
        entries.forEach(entry->{
            System.out.println(entry.getKey()+"--"+entry.getValue());
        });
        map.forEach((k,v)->{
            System.out.print(k+"++"+v);
        });
        map.forEach(new BiConsumer<String,String>(){
            @Override
            public void accept(String s, String s2) {
                System.out.print(s+"==="+s2);
            }

            @Override
            public BiConsumer<String, String> andThen(BiConsumer<? super String, ? super String> after) {
                return null;
            }
        });
    }
    @Test
    public void test2(){
        int i = 0^1;
        //  00
        //  01
        //  00
        System.out.println(i);
    }
    @Test
    public void test3(){
        String[] strings;
        if((strings = strs)==null){
            strs = new String[2];
            strings = strs;
        }
        if(strings!=null) {
            strings[0] = "1";
        }
        System.out.println(strs[0]);
    }
}
