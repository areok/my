package com.demo.concurrent.enums;

/**
 * Created by 马宇驰 on 2017/12/14.
 */
import java.util.Enumeration;
import java.util.NoSuchElementException;

public class CompoundEnumeration<E> implements Enumeration<E> {
    private Enumeration<E>[] enums;
    private int index = 0;

    public CompoundEnumeration(Enumeration<E>[] var1) {
        this.enums = var1;
    }
    private boolean next() {
        while(this.index < this.enums.length) {
            if(this.enums[this.index] != null && this.enums[this.index].hasMoreElements()) {
                return true;
            }

            ++this.index;
        }

        return false;
    }

    public boolean hasMoreElements() {
        return this.next();
    }

    public E nextElement() {
        if(!this.next()) {
            throw new NoSuchElementException();
        } else {
            return this.enums[this.index].nextElement();
        }
    }

    public static void main(String[] args) {
        String[] strings = new String[4];
        strings[0] ="zero";
        strings[1]="one";
        strings[2] ="two";
        strings[3]="three";

        MyEnumeration myEnumeration = new MyEnumeration(strings);
        Enumeration<MyEnumeration>[] myEnumerations = new Enumeration[]{myEnumeration};
        CompoundEnumeration<MyEnumeration> myEnumerationCompoundEnumeration = new CompoundEnumeration<MyEnumeration>(myEnumerations);
        while (myEnumerationCompoundEnumeration.hasMoreElements()){
            System.out.println(myEnumerationCompoundEnumeration.nextElement());
        }
    }
}
