package com.test;

import org.I0Itec.zkclient.ZkClient;
import org.apache.zookeeper.CreateMode;

public class SynPropertiesFile {
	ZkClient client = new ZkClient("127.0.0.1:2181", 10000);
	
	public static void main(String[] args) {
		SynPropertiesFile synPropertiesFile = new SynPropertiesFile();
		String path = "/properties/web_xml";
		Object date = "D:/新建文件夹 (2)/java资料/TrainingCmap/TestZoorkeeper01/src/com.data//MyXml.xml";
		String addNewNode = synPropertiesFile.addNewNode(path, date);
		System.out.println(addNewNode);
	}
	
	public String addNewNode(String path,Object data){
		String create = client.create(path, data , CreateMode.PERSISTENT_SEQUENTIAL);
		return create;
	}
	public ZkClient getClient() {
		return client;
	}
}
