package com.example.task;

import android.os.Handler;
import android.util.Log;
import com.example.vegetable.actives.MyActivity;

/**
 * Created by 马宇驰 on 2018/1/2.
 */
public class ViewPageTask implements Runnable {
    private  int currentItem;

    private String[] imageIds;

    private Handler mHandler;

    public ViewPageTask(int currentItem,String[] imageIds,Handler mHandler){
        this.currentItem = currentItem;
        this.imageIds = imageIds;
        this.mHandler = mHandler;
    }

    @Override
    public void run() {
        Log.d("currentItem",currentItem+"---------------------------------");
        if(currentItem>=imageIds.length){
            currentItem = 0;
        }
        MyActivity.currentItem = currentItem++;
        mHandler.sendEmptyMessage(0);
    }
}
