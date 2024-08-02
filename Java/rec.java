import java.util.*;

public class rec {
    //5 to 1
    // public static void printNumb(int n) {
    //     if(n==0){
    //         return;
    //     }
    //     System.out.println(n);
    //     printNumb(n-1);
    // }
    // public static void main(String[] args) {
    //     int n=5;
    //     printNumb(n);




   // 1 to 5
//    public static void printNumb(int n) {
//         if(n==6){
//             return;
//         }
//         System.out.println(n);
//         printNumb(n+1);
//     }
//     public static void main(String[] args) {
//         int n=1;
//         printNumb(n);
   
//     }



//sum of naturalmo.

// public static void printSum(int i,int n,int sum) {
//     if(i==n){
//         sum+=i;
//         System.out.println(sum);
//         return;
//     }
//     sum +=i;
//     printSum(i+1, n, sum);
//     System.out.println(i);
// }

// public static void main(String[] args) {
    
//     printSum(1, 5, 0);
// }

//factorial of n
//  public static int calFact(int n) {
//     if(n==1||n==0){
//         return 1;
//     }
//     int fact_nm1=calFact(n-1);
//     int fact_n=n*fact_nm1;
//     return fact_n;

//  }
// public static void main(String[] args) {
//     int n =5;
//      int ans=calFact(n);
//     System.out.println(ans);
    
// }


//fiboncci series
//  public static void printFib(int a, int b, int n) {
//     if(n==0){
//         return;
//     }
//     int c=a+b;
//     System.out.println(c);
//     printFib(b, c, n-1);
//  }

// public static void main(String[] args) {
//   int a=0,b=1;
//   System.out.println(a);
//   System.out.println(b);

//   int n=7;
//   printFib(a, b, n-2);

//}\

//print stack height

// public static int calPower(int x,int n){
    // if(n==0){
    //     return 1;
    // }
    // if(x==0){
    //     return 0;
//     }
//     int xpowernm1 =calPower(x, n-1);
//     int xpowern=x*xpowernm1;
//     return xpowern;

// }
// public static void main(String[] args) {
//     int x=2;
//     int n=5;
//     int ans =calPower(x, n);
//     System.out.println(ans);
    
// }

//stack height log n


// public static int calPower(int x, int n){
//   if(n==0){
//     return 1;
//   }
//   if(x==0){
//     return 0;
//   }
//   if (n% 2==0){
//     return calPower(x, n/2) * calPower(x, n/2);
//   }else {
//     return calPower(x, n/2) * calPower(x, n/2) * x;
//   }

// }
    
// public static void main(String[] args) {
//     int x=2, n=5;
//     int ans=calPower(x, n);
//     System.out.println(ans);
// }


//towerof honoi
// public static void towerOfHanoi(int n,String src, String helper, String dest){
//   if(n==1){
//     System.out.println("transfer disk "+n+" from "+src+"to"+dest);
//     return;
//   }
//    towerOfHanoi(n-1, src, dest, helper);
//    System.out.println("transfer disk "+n+" from "+src+" to "+dest);
//    towerOfHanoi(n-1, helper, src, dest);
  
// }

// public static void main(String[] args) {
//   int n=3;
//   towerOfHanoi(n, "S","H", "D");
// }


//string in reverse

// public static void printReverse(String str,int idx){
//   if(idx==0){
//     System.out.println(str.charAt(idx));
//     return;
//   }
//   System.out.println(str.charAt(idx));
//   printReverse(str, idx-1);
// }

// public static void main(String[] args) {
//   String str= "HELLO";
//   printReverse(str, str.length()-1);
 
//   }

//1st and last occurance of an element

// public static int first =-1;
// public static int last =-1;
// public static void findOccurence(String str, int idx, char element){

//   if(idx==str.length()){
//     System.out.println(first);
//     System.out.println(last);
//   }
//   char currChar = str.charAt(idx);
//   if(currChar==element){
//     if(first==-1){
//       first =idx;
//     }else{
//       last=idx;
//     }
//   }
//   findOccurence(str, idx+1, element);
// }
// public static void main(String[] args) {
//   String str="abaacdaefaah";
//   findOccurence(str, 0, 'a');
// }


//check array is sorted
// public static boolean isSorted(int arr[],int idx){
//   if (idx ==arr.length-1) {
//     return true;
    
//   }

//   if(arr[idx]>=arr[idx+1]){
//      return false;
//   }else{
//     return isSorted(arr, idx+1);
//   }
// }

// public static void main(String[] args) {
//   int arr[]={1,3,3};
   
//   System.out.println(isSorted(arr, 0));
//   }


//move all x to end of the string

