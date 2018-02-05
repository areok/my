import com.example.entity.User;
import com.google.gson.Gson;
import org.junit.Test;

/**
 * Created by 马宇驰 on 2018/1/5.
 */
public class TestGSON {
    @Test
    public void test1(){
        User user = new User();
        user.setuName("a");
        Gson gson = new Gson();
        String jsonResult = gson.toJson(user);
        System.out.println(jsonResult);
    }
}
