package com.example.demo.enums;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/11/7.
 */
public enum Fruit {

    APPLE("北方","栖霞苹果"),
    ORANGE("江南","橘子");

    private String place;
    private String name;

    Fruit(String place, String name) {
        this.place = place;
        this.name = name;
    }

    Fruit() {
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Fruit{" +
                "place='" + place + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
    public static Fruit[] getChildren(Fruit fruit){

        return Fruit.values();
    }
}
