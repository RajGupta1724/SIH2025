import java.util.Scanner;

public class Strings {
    
    public static void main (String args[]){
        // Scanner sc = new Scanner(System.in);
        // String name = sc.nextLine();
        // System.out.println("Yourname is : "+name);
    //    String firstName ="tony";
    //    String lastName="stark";
    //    String fullName = firstName + "@"+lastName;
    //    System.out.println(fullName.length());

    //    //charAt
    //    for(int i=0;i<fullName.length();i++){
    //     System.out.println(fullName.charAt(i));}

    //compare
    // String name1 ="tony";
    // String name2 ="tony";
//     if(name1.compareTo(name2)==0){
// System.out.println("strings are equal");
//     }else{
//         System.out.println("not equal");
//     }

    // if(name1==name2){
    //     System.out.println("strings are equal");
    //         }else{
    //             System.out.println("not equal");
    //         }

            // if(new String ("Tony")==new String("Tony")){
            //     System.out.println("strings are equal");
            // }else {
            //     System.out.println("not equal");
            // }

            //compare
            String sentence ="TonyStark";
            //substring(beg index, end index);
            String name =sentence.substring(4,8);
            System.out.println(name);

           
        }
}
