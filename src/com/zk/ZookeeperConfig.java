package com.zk;

import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.data.Stat;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.Reader;
import java.util.List;

/**
 * Created by lenovo on 2018/4/20.
 */
public class ZookeeperConfig {

    private static String address = "127.0.0.1:2181";

    private static int timeOut = 50000;

    private static ZooKeeper getZookeeper() throws Exception {
        ZooKeeper zooKeeper = new ZooKeeper(address, timeOut, null);

        return zooKeeper;
    }

    public static void main (String[] args) throws Exception {
        ZooKeeper zookeeper = getZookeeper();
//        Stat exists = zookeeper.exists("/dubbo", true);
//        System.out.println(exists);
//        if(exists!=null){
//            byte[] data = zookeeper.getData("/", false, new Stat());
//            System.out.print(data);
//            String s = new String(data);
//            System.out.println(s.toString());
//
//        }

        List<String> children = zookeeper.getChildren("/dubbo", null);
        children.stream().forEach((s)->{
            System.out.println(s);
        });

//        List<String> children = zookeeper.getChildren("/", null);
//        children.stream().forEach((s)->{
//            if(s.equals("dubbo")){
//                System.out.println(s);
//            }
//        });


    }


}
