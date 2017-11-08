import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Collection;
import java.util.Locale;

/**
 * Created by 马宇驰 on 2017/9/4.
 */
public class EncoderTest {

    private Logger logger = LoggerFactory.getLogger(EncoderTest.class);
    @Test
    public void test1(){
        String zipPath = "测试";
        try {
            zipPath = URLEncoder.encode(zipPath,"UTF-8");
        }catch (Exception e){
            logger.info("编码失败");
        }
        System.out.println(zipPath);
        try{
            zipPath = URLDecoder.decode(zipPath,"UTF-8");
        }catch (Exception e){
            logger.info("解码失败");
        }
        System.out.println(zipPath);

    }
}
