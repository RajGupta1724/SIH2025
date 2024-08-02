import java.util.*;

public class sb {
     public static void main(String[] args) {
    // StringBuilder sb= new StringBuilder("h");
    // sb.append("e");
    // sb.append("l");
    // sb.append("l");
    // sb.append("o");


    //  System.out.println(sb.length());

    //  System.out.println(sb.charAt(0));//char at index 0

    //  //set char at index
    //  sb.setCharAt(0, 't');
    //  System.out.println(sb);

    //  sb.insert(2,'n');
    //  System.out.println(sb);

    //  sb.delete(2, 4);
    //  System.out.println(sb);



    //ques reverse of a word
    StringBuilder sb= new StringBuilder("hello");
     
    for(int i =0;i<sb.length()/2;i++) {
        int front =i;
        int back = sb.length()-1-i;

        char frontChar =sb.charAt(front);
        char backChar =sb.charAt(back);

        sb.setCharAt(front, backChar);
        sb.setCharAt(back, frontChar);}
        System.out.println(sb);
    

     }

    
}
