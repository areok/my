package com.demo.jdk8.clone;

/**
 * Created by 马宇驰 on 2018/1/10.
 */
public class Demo implements Cloneable {

    private String a;

    private String b;

    public static void main(String[] args) throws CloneNotSupportedException {
        Demo demo = new Demo();
        demo.setA("testA");
        demo.setB("testB");
        Demo clone = (Demo) demo.clone();
        System.out.println(clone);
    }

    public String getA() {
        return a;
    }

    public void setA(String a) {
        this.a = a;
    }

    public String getB() {
        return b;
    }

    public void setB(String b) {
        this.b = b;
    }

    @Override
    public String toString() {
        return "Demo{" +
                "a='" + a + '\'' +
                ", b='" + b + '\'' +
                '}';
    }
}
