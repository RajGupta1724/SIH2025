import java.util.*;
public class function {
//     public static int calculateSum(int a,int b){
//     int sum =a+b;
//     return sum;
//     }
//     public static void main(String[] args) {
//      Scanner sc = new Scanner (System.in);
//      int a =sc.nextInt();   
//      int b= sc.nextInt(); 
//      int sum = calculateSum(a,b);
//      System.out.println("sum of two number is : "+sum);
//     }


//3ques
// public static int calculateProduct(int a,int b){
//  return a*b;
// }
// public static void main(String[] args) {
//    Scanner sc =new Scanner(System.in);
//    int a =sc.nextInt();
//    int b =sc.nextInt();
//    System.out.println("Product of two number is : "+calculateProduct(a, b)); 
// }

///factorial find

// public static void  printFactorial(int n){
//     if (n<0){
//         System.out.println("Invalid number");
//         return;
//     }
//     int factorial=1;
//     for (int i =n;i>=1;i--){
//      factorial=factorial * i;
//     }
//   System.out.println(factorial);
//   return;
// }

// public static void main(String[] args) {
//     Scanner sc =new Scanner(System.in);
//     int n = sc.nextInt();
   
//     printFactorial(n);
    
// }


//male a function to print the table of a given number n

// public static void printTable(int n ){

//     for (int i =1; i<=10;i++){
//         System.out.println(n+" * "+i+"="+(n*i));
//     }
    
// }

// public static void main(String[] args) {
//     Scanner sc =new Scanner(System.in);
//     int n =sc.nextInt();
//     printTable(n);
// }

//make a function to check n is even or not 
// public static boolean isEven(int n){
//  return n%2==0;
// }
// public static void main(String[] args) {
//      Scanner sc =new Scanner(System.in);
//     int n =sc.nextInt();
//   // int  number=n;
//     System.out.println(n+"isEven: "+isEven(n));
//}


//check prime or not 
 public static boolean isPrime(int n){
    if(n<=1){
        return false;
    }
    for (int i =2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false ;
        }
    }
    return true;
 }
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n =sc.nextInt();
  //  isPrime(n);
    System.out.println(n+"is prime: "+isPrime(n));
}

 }




