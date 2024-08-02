import java.util.*;
import java.util.function.DoubleUnaryOperator;

public class prac {
// //enter 3 number from user and make a funcion for therir average
//   public static float printAverage(float a, float b,float c){
//     return (a+b+c)/3;
//   }
//     public static void main(String[] args) {
//       Scanner sc =new Scanner(System.in);
//      System.out.println("Enter three number");
//      float a =sc.nextInt();
//      float b =sc.nextInt();
//      float c =sc.nextInt();
     
//      float average = printAverage(a, b, c);
//      System.out.println("The average is :  "+(average));
//     }

//2ques
//to print sum of all odd numbers
// public static void printSum(int n) {
//     int sum = 0;


//    for(int i=1; i<=n; i++) {
//      if(i % 2 != 0) {
//          sum = sum + i;
//      }
//    }


//    System.out.println(sum);

// }

// public static void main(String[] args) {
//     Scanner sc = new Scanner(System.in);
//     int n = sc.nextInt();
//     printSum(n);
//  }   


//3ques solve
//write a function which takes in 2number and returns the greater of the those two
// public static int getGreater(int a,int b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }

// }
// public static void main(String[] args) {
//     Scanner sc =new Scanner(System.in);
//     int a =sc.nextInt();
//     int b = sc.nextInt();
//     System.out.println("Greater number is: "+getGreater(a, b));
// }

//a ques
// write a function to find circumference of a circle
//public static Double getCircumference(Double radius){
//   double radius=n;
//    double circumference =2*3.14*radius;
//    System.out.println(circumference);

// }

// public static void main(String[] args) {
//     Scanner sc =new Scanner(System.in);
//     System.out.println("enter the radius: ");
//     double n=sc.nextDouble();
//     getCircumference(n);

//or second method 

// return 2*3.14*radius;
// }
// public static void main(String[] args) {
//     Scanner sc = new Scanner(System.in);
//     Double radius =sc.nextDouble();
//     System.out.println(getCircumference(radius));
// }


//5 ques
// a function that takes in age to vote or not 
// public static boolean isEligible(int age){
//     if(age>18){
//         return true;
//     }else {
//         return false;
//     }
// }

// public static void main(String[] args) {
//     Scanner sc =new Scanner(System.in);
//     System.out.println("Enter age: ");
//     int age= sc.nextInt();
//     System.out.println("Eligible is : "+isEligible(age));
// }

//an infinite loop

//public static void main(String[] args) {
  //  do{

    //}while(true);
//}

//7ques
//display the positive negative and zeroes entered

//public static void main(String[] args) {
//     int positive=0, negative=0,zeroes=0;
//     System.out.println("Press 1 to continue & 0 to stop");
//     Scanner sc =new Scanner(System.in);
//     int input = sc.nextInt();
//     while(input==1) {
//         System.out.println("Enter your number ");
//         int number = sc.nextInt();
//         if(number>0){
//             positive++;
//         }else if(number<0){
//             negative++;
//         }else{
//             zeroes++;
//         }
//         System.out.println("Press 1 to continue and 0 to sto p");
//         input =sc.nextInt();

//         }
//         System.out.println("Positive "+positive);
//         System.out.println("Negaive "+negative);
//         System.out.println("zeroes "+zeroes);

//or 2nd method 
// Scanner sc = new Scanner(System.in);
// int positiveCount =0;
// int negativeCount =0;
// int zeroCount =0;

// char choice;
// do {
//     System.out.println("Enter a number:  " );
//     int number=sc.nextInt();
//     if(number>0){
//         positiveCount++;
//     }else if (number<0){
//         negativeCount++;
//     }else {
//         zeroCount++;
//     }
//     System.out.println("Do you want to continue? (yes/no): ");
//     choice =sc.next().charAt(0);

// }while(choice =='y'||choice=='Y');
// System.out.println("Positive number: "+positiveCount);
// System.out.println("Negative number: "+negativeCount);
// System.out.println("Zeroes: "+zeroCount);


//  }

//8ques
//write a function to find value of power of 
// 

//     }


//     System.out.println(" to the power is : "+ result);
// }   

// 2nd methd
// public static double power(int x,int n){
// return Math.pow(x,n);
// }
// public static void main(String[] args) {
//     Scanner sc =new Scanner(System.in);
//     System.out.println("ENTER THE NUMB=BER OF x: ");
//     int x =sc.nextInt();
 
//     System.out.println("enter the number of n");
//     int n =sc.nextInt();

//     double result=power(x, n);
//     System.out.println(x +" raised to power of "+ n+"is "+result);
    
//}

//9ques
//Calculate the greatest common divisor of 2nd numbers

// public static void main(String[] args) {
//   Scanner sc =new Scanner(System.in);
//   int n1=sc.nextInt();
//   int n2 =sc.nextInt();
//   while (n1 != n2) {
//     if (n1>n2){
//       n1=n1-n2;
//     }else {
//       n2 =n2-n1;
//     }
    
//   }
//   System.out.println(":gcd is: "+n2);
// }

//2nd method 

// public static int gcd(int a , int b){
//   while (b !=0){
//     int temp =b;
//     b =a%b;
//     a =temp;
//   }
//   return a;
// }
// public static void main(String[] args) {
//   Scanner sc=new Scanner(System.in);
//   System.out.println("Enter the first  number: ");
//   int a =sc.nextInt();
//   int b =sc.nextInt();

//   int result=gcd(a, b);
//   System.out.println("The gcd is: "+a +"and "+b+"is "+result);
// }
 //10ques

 // write a fibonacci series 
 public static void main(String[] args) {
  // Scanner sc =new Scanner(System.in);
  // System.out.println("Enter the number ");
  // int n =sc.nextInt();
  // int firstTerm= 0,secondTerm=1;
  // System.out.print("Fibonacci series ");
  
  //     for (int i =1;i<=n;i++){
  //       System.out.print(firstTerm+" ");
       
  //       int nextTerm = firstTerm+secondTerm;
  //       firstTerm=secondTerm;
  //       secondTerm=nextTerm;
      
    
  // }
  //2nd method
  Scanner sc = new Scanner(System.in);
  System.out.println("enter the number");
  int n = sc.nextInt();
      
       int a = 0, b = 1;
          
       System.out.print(a+" ");
      
       if(n > 1) {
           //find nth term
           for(int i=2; i<=n; i++) {
               System.out.print(b+" ");
               //the concept below is called swapping
                 
               int temp= a + b;
               a=b;
               b=temp;
           }


           System.out.println();
       }



 }
}

