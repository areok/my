package com.example.vegetable.actives;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v4.view.ViewPager;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.PopupWindow;
import android.widget.TextView;
import com.example.task.ViewPageTask;
import com.example.vegetable.R;
import com.example.vegetable.adapters.ViewPagerAdapter;
import com.example.vegetable.utils.ImageUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class MyActivity extends Activity {

    private ViewPager mViewPaper;

    private List<ImageView> images;

    private List<View> dots;

    public static int currentItem;

    //记录上一次点的位置
    private int oldPosition = 0;

    //存放图片的id
    private String[] imageIds = new String[]{
           "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1028229808,1110619430&fm=27&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1964781189,1243915882&fm=27&gp=0.jpg",
            "http://img1.imgtn.bdimg.com/it/u=1964781189,1243915882&fm=27&gp=0.jpg",
            "http://img0.imgtn.bdimg.com/it/u=2821790660,3218845700&fm=27&gp=0.jpg"
    };
    //存放图片的标题
    private String[]  titles = new String[]{
            "巩俐不低俗，我就不能低俗",
            "扑树又回来啦！再唱经典老歌引万人大合唱",
            "揭秘北京电影如何升级",
            "乐视网TV版大派送",
            "热血屌丝的反杀"
    };
    private TextView title;

    private ViewPagerAdapter adapter;

    private ScheduledExecutorService scheduledExecutorService;

    /**
     * Called when the activity is first created.
     */
    private PopupWindow mPopWindow = null;

    private PopupWindow ownPopWindow = null;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        mViewPaper = findViewById(R.id.viewPager);
        //显示的图片
        images = new ArrayList<ImageView>();
        for(int i = 0; i < imageIds.length; i++){
            ImageView imageView = new ImageView(this);
            imageView.setImageBitmap(ImageUtil.returnBitMap(imageIds[i]));
            images.add(imageView);
        }

        adapter = new ViewPagerAdapter(images);
        mViewPaper.setAdapter(adapter);
        mViewPaper.setOnPageChangeListener(new ViewPager.OnPageChangeListener() {

            @Override
            public void onPageSelected(int position) {
                oldPosition = position;
                currentItem = position;
            }

            @Override
            public void onPageScrolled(int arg0, float arg1, int arg2) {

            }

            @Override
            public void onPageScrollStateChanged(int arg0) {

            }
        });

        Button todayRecommendation = (Button) findViewById(R.id.button1);
        Button all = (Button) findViewById(R.id.button2);
        Button me = (Button) findViewById(R.id.button3);
        Log.v("todaucommendation",todayRecommendation.toString());
        todayRecommendation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.v("click","单击今日推荐");
                Intent intent = new Intent();
                intent.setClass(MyActivity.this,TodayCommendation.class);
                startActivity(intent);
            }
        });
        all.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showPopupWindow(all);
            }
        });
        me.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showOwnPopupWindow(me);
            }
        });
    }
    private void showPopupWindow(Button button){
        View contentView = LayoutInflater.from(MyActivity.this).inflate(R.layout.popuplayout_all, null);
        Log.d("ssss",contentView.toString());
        if(mPopWindow==null){
            mPopWindow = new PopupWindow(contentView);
            mPopWindow.setWidth(ViewGroup.LayoutParams.WRAP_CONTENT);
            mPopWindow.setHeight(ViewGroup.LayoutParams.WRAP_CONTENT);
        }
        Button sx = (Button)contentView.findViewById(R.id.sx);
        Button sc = (Button)contentView.findViewById(R.id.sc);
        Button gg = (Button)contentView.findViewById(R.id.gg);
        sx.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Log.e("sx",sx.toString());
            }
        });
        sc.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Log.e("sc", sc.toString());
            }
        });
        gg.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Log.e("gg",gg.toString());
            }
        });
        Log.d("eee","ok");
        if(!mPopWindow.isShowing()){
            mPopWindow.showAsDropDown(button, 0, -300);
        }else{
            mPopWindow.dismiss();
        }
    }

    private void showOwnPopupWindow(Button button){
        View contentView = LayoutInflater.from(MyActivity.this).inflate(R.layout.own_activity, null);
        if(ownPopWindow==null){
            ownPopWindow = new PopupWindow(contentView);
            ownPopWindow.setWidth(ViewGroup.LayoutParams.WRAP_CONTENT);
            ownPopWindow.setHeight(ViewGroup.LayoutParams.WRAP_CONTENT);
        }
        Button shopcar = (Button)contentView.findViewById(R.id.shopcar);
        Button address = (Button)contentView.findViewById(R.id.address);
        Button order = (Button)contentView.findViewById(R.id.order);
        shopcar.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Log.e("shopcar",shopcar.toString());
                Intent intent = new Intent();
                intent.setClass(MyActivity.this,ShopCarActivity.class);
                startActivity(intent);
            }
        });
        address.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                // TODO 跳转到我的地址
                Intent intent = new Intent();
                intent.setClass(MyActivity.this,MyAddressActivity.class);
                startActivity(intent);
            }
        });
        order.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Log.e("order",order.toString());
                Intent intent = new Intent();
                intent.setClass(MyActivity.this,MyOrderActivity.class);
                startActivity(intent);
            }
        });
        if(!ownPopWindow.isShowing()){
            ownPopWindow.showAsDropDown(button, 0, -300);
        }else{
            ownPopWindow.dismiss();
        }
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        //getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    /**
     * 利用线程池定时执行动画轮播
     */
    @Override
    protected void onStart() {
        // TODO Auto-generated method stub
        super.onStart();
        scheduledExecutorService = Executors.newSingleThreadScheduledExecutor();
        Log.d("当前页",currentItem+"");
        Log.d("图片数量",imageIds.length+"");
        scheduledExecutorService.scheduleWithFixedDelay(
                new ViewPageTask(currentItem,imageIds,mHandler),
                2,
                2,
                TimeUnit.SECONDS);
    }
    /**
     * 接收子线程传递过来的数据
     */
    private Handler mHandler = new Handler(){
        public void handleMessage(android.os.Message msg) {

            mViewPaper.setCurrentItem(currentItem);
        }
    };

    @Override
    protected void onStop() {
        // TODO Auto-generated method stub
        super.onStop();
        if(scheduledExecutorService != null){
            scheduledExecutorService.shutdown();
            scheduledExecutorService = null;
        }
    }

}
