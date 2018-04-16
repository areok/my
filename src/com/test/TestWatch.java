package com.test;

import com.entity.User;
import org.I0Itec.zkclient.IZkChildListener;
import org.I0Itec.zkclient.IZkDataListener;
import org.I0Itec.zkclient.ZkClient;
import org.apache.zookeeper.CreateMode;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.util.Date;
import java.util.List;

public class TestWatch {
	ZkClient client = null;
	@Before
	public void before(){
		client = new ZkClient("127.0.0.1:2181", 2000);
	}
	@Test
	public void test1(){
		User user = new User("1", "张三", new Date());
		String create = client.create("/nodeManager", user, CreateMode.PERSISTENT);
		System.out.println(create);
	}
	@Test
	public void test2(){
		Object object = client.readData("/nodeManager");
		System.out.println(object);
	}
	/**
	 *   watch   检测一个节点
	 * @throws IOException 
	 */
	@Test
	public void test3() throws IOException{
		client.subscribeDataChanges("/nodeManager",	new IZkDataListener() {
			
			@Override
			public void handleDataDeleted(String nodeName) throws Exception {
				// TODO Auto-generated method stub
				System.out.println("删除的节点是 ："+nodeName);
			}
			
			@Override
			public void handleDataChange(String nodeName, Object newData) throws Exception {
				// TODO Auto-generated method stub

				System.out.println("修改的节点名是  : "+nodeName);
				System.out.println(newData);
			}
		});
		System.in.read();
	}
	@Test
	public void test4(){
		boolean delete = client.delete("/nodeManager");
		System.out.println(delete);
	}
	/**
	 *  检测节点的子节点。。
	 * @throws IOException 
	 */
	@Test
	public void test5() throws IOException{
		client.subscribeChildChanges("/nodeManager", new IZkChildListener() {
			@Override
			public void handleChildChange(String parentNodeName, List<String> chindrenNodeNames)
					throws Exception {
				System.out.println("父节点的路径 ： "+parentNodeName);
				for (String string : chindrenNodeNames) {
					System.out.println("子节点的路径 ： "+string);
				}
			}
		});
		System.in.read();
	}
	@Test
	public void test6(){
		User user = new User("2", "lisi", new Date());
		String create = client.create("/nodeManager/node2", user, CreateMode.PERSISTENT);
		System.out.println(create);
	}
	@Test
	public void test7(){
		boolean delete = client.delete("/nodeManager/node2");
		System.out.println(delete);
	}
	@After
	public void after(){
		client.close();
	}
}
