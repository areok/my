package com.test;

import org.I0Itec.zkclient.IZkChildListener;
import org.I0Itec.zkclient.ZkClient;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class Watcher {
	ZkClient client = new ZkClient("127.0.0.1:2181", 10000);
	
	public void watchNode() throws IOException{
		client.subscribeChildChanges("/properties", new IZkChildListener() {
		
			@Override
			public void handleChildChange(String parentNodeName, List<String> childrenNodeNames)
					throws Exception {
				
				Object[] array = childrenNodeNames.toArray();
				
				Arrays.sort(array);
				
				String targetName = "/properties/"+array[array.length-1];
				Object date = getDate(targetName);
				FileInputStream fileInputStream = new FileInputStream(date+"");
				FileOutputStream fileOutputStream = new FileOutputStream("D:/新建文件夹 (2)/java资料/TrainingCmap/TestZoorkeeper01/src/com.data/MyXml01.xml");
				byte[] bs = new byte[1024]; 
				while(true){
					int read = fileInputStream.read(bs);
					if(read==-1) break;
					fileOutputStream.write(bs, 0, read-1);
				}
				fileInputStream.close();
				fileOutputStream.flush();
				fileOutputStream.close();
				System.out.println("跟新配置文件成功-----");
			}
		});
		System.out.println("正在检测配置文件根节点......");
		System.in.read();
	}
	public static void main(String[] args) throws IOException {
		new Watcher().watchNode();
	}
	public Object getDate(String path){
		return client.readData(path);
	}
}
