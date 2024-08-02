
import java.util.Scanner;

public class hp {

    public static void main(String[] args) {
       //Scanner sc = new Scanner(System.in); 
       //System.out.println("enter a number: ");
       //int n =sc.nextInt();
       //System.out.println("even numbers are up to "+n+"are ");
    // //    for(int i = 0;i<=n;i++){
    // //     if (i%2==0){
    // //         System.out.println(i);
    // //     }
    // // }
    // for (; ;){
    //     System.out.println("apna college");
    Scanner sc =new Scanner(System.in);
    int choice;
    
    do {
         System.out.println("enter 1 to input student marks , or 0 to stop");
        choice= sc.nextInt();
        if (choice ==1){
    System.out.println("enter the student marks");
    int marks = sc.nextInt();
    if (marks>=90  && marks <= 100){
        System.out.println("this is good");
    }else if (marks>=60 && marks <= 89){
        System.out.println("also good");
    }else if(marks>=0&& marks <= 59){
        System.out.println("good as well");
    }else{
        System.out.println("Error: Invalid marks entered.");
    }

}
 }
while (choice ==1) ;
    System.out.println("program ended");
 }
    
}

       


