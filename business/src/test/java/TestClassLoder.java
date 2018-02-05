import com.example.entity.User;
import org.junit.Test;

import java.io.File;
import java.util.StringTokenizer;

/**
 * Created by 马宇驰 on 2018/1/5.
 */
public class TestClassLoder {
    @Test
    public void test1(){
        System.out.println(System.getProperty("sun.boot.class.path"));
        System.out.println(System.getProperty("java.ext.dirs"));
        System.out.println(System.getProperty("os.name"));
        System.out.println(System.getProperty("user.name"));
        System.out.println(System.getProperty("user.home"));
        System.out.println(System.getProperty("user.dir"));
        System.out.println(System.getProperty("os.arch"));
        String jcp =  System.getProperty("java.class.path");
        String[] jcpStrings = jcp.split(";");
        for (String s:jcpStrings) {
            System.out.println(s);
        }
//        URL[] urls = sun.misc.Launcher.getBootstrapClassPath().getURLs();
//        for (int i = 0; i < urls.length; i++) {
//            System.out.println(urls[i].toExternalForm());
//        }
    }
    @Test
    public void test2(){
        String s = System.getProperty("java.ext.dirs");
        StringTokenizer st = new StringTokenizer(s, File.pathSeparator);
        while (st.hasMoreElements()){
            System.out.println(st.nextElement().toString());
        }
        System.out.println("-0-");
        int count = st.countTokens();
        System.out.println(count);
    }

    @Test
    public void test3(){
        ClassLoader cl = TestClassLoder.class.getClassLoader();

        System.out.println("ClassLoader is:"+cl.toString());
        System.out.println("ClassLoader parentClassLoader is:"+cl.getParent().toString());
    }

    @Test
    public void test4(){
        User user = new User();

    }
}
