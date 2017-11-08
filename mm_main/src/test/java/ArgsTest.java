import org.junit.Test;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by 马宇驰 on 2017/8/29.
 */
public class ArgsTest {
    @Test
    public void test1(){
        test2("1","2","2");
    }
    private void test2(final String... args){
        for (String str:args) {
            System.out.println(str);
        }
    }
    @Test
    public void test2(){
        String result = "001170905100919".substring(3,9);
        System.out.println(result);
    }
    @Test
    public void test3(){
        BigDecimal bigDecimal = new BigDecimal("11.2");
        System.out.println(bigDecimal.setScale(1));
        System.out.println(bigDecimal.intValue());
    }
    @Test
    public void test4(){
        String temp = "1_1".split("_")[1];
        System.out.print(temp);
    }
    @Test
    public  void test5()throws Exception{
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = simpleDateFormat.parse("1992-02-10");
        System.out.println(date);
        if (date != null) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(date);
            cal.add(Calendar.DATE, 1);
            date = cal.getTime();
            System.out.println(date);
        }

    }
    @Test
    public  void  test6(){
        String[] split = "ss_1".split("ss");
        if(split.length==2){
            System.out.println(split[0]);
            System.out.println(split[1]);
        }else if(split.length==1){
            System.out.println(split[0]);
        }
    }@Test
    public  void  test7(){
        String[] split = "ASSET_PIC_2J".split("ASSET_PIC");
        if(split.length==2){
            System.out.println(split[1]);
        }else if(split.length==1){
            System.out.println(split[0]);
        }
    }
}
