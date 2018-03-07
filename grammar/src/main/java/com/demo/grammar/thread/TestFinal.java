package com.demo.grammar.thread;

import org.junit.Test;

/**
 * Created by 马宇驰 on 2018/1/12.
 */
public class TestFinal {

    @Test
    public void test1(){
        final Demo demo = new Demo();

        System.out.println(demo);


    }
    class Demo{
        private String i;

        public String getI() {
            return i;
        }

        public void setI(String i) {
            this.i = i;
        }
    }

    @Test
    public void test2() throws InterruptedException {
        MyThread myThread = new MyThread();
        MyThread_2 myThread_2 = new MyThread_2();
        MyThread_3 myThread_3 = new MyThread_3();

        myThread.main(null);
        myThread_2.main(null);
        myThread_3.main(null);
    }
}
