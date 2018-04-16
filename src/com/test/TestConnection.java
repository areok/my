package com.test;

import org.I0Itec.zkclient.ZkClient;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.data.Stat;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class TestConnection {
	ZkClient client = null;
	@Before
	public void before(){
		client = new ZkClient("127.0.0.1:2181", 20000, 10000);
	}
	/**
	 *   查询根节点下的所有节点名称
	 */
	@Test
	public void test1(){
		List<String> list = client.getChildren("/");
		for (String string : list) {
			System.out.println(string);
		}
	}
	/**
	 * 添加一个节点。。
	 */
	@Test
	public void test2(){
		String create = client.create("/test01", "test01_data", CreateMode.PERSISTENT);
		System.out.println(create);
	}
	/**
	 * 查询一个节点的 data  以及查询节点状态
	 */
	@Test
	public void test3(){
		Stat stat = new Stat();
		Object readData = client.readData("/test02/test02_01",stat);
		System.out.println(readData);
		System.out.println(stat);
	}
	/**
	 * 	删除一个节点。 
	 */
	@Test
	public void test4(){
		boolean delete = client.delete("/test01");
		System.out.println(delete);
	}
	/**
	 *  递归删除一个节点
	 */
	@Test
	public void test5(){
		client.createPersistent("/test02", "test02");
		client.createPersistent("/test02/test02_01", "test02_01");
		// 递归删除
		boolean deleteRecursive = client.deleteRecursive("/test02");
		System.out.println(deleteRecursive);
	}
	@After
	public void after(){
		client.close();
	}
}
