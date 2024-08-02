import java.util.*;

public class arrays {
  public static void main (String args[]){
    // Scanner sc = new Scanner (System.in);
    // int size = sc.nextInt();
    // int numbers[] = new int[size];
    
    // // System.out.println(marks[0]);
    // // System.out.println(marks[1]);
    // // System.out.println(marks[2]);
    // for (int i=0;i<size;i++){
    //   numbers[i]=sc.nextInt();
    // }
    // for (int i=0;i<size;i++){
    //     System.out.println(numbers[i]);
    // }

    //ques
  //   Scanner sc =new Scanner(System.in);
  //  int size = sc.nextInt();
  //  int numbers[]=new int[size];
  //  for (int i =0;i<size;i++){
  //   numbers[i]=sc.nextInt();
  //  }
  //  int x =sc.nextInt();
  //  for (int i=0;i<numbers.length;i++){
  //   if (numbers[i]==x){
  //   System.out.println("x found at index: "+i);
  //   }
   //}

   //home work
   //ana rray of names a input

  //  Scanner sc =new Scanner(System.in);
  //  int size =sc.nextInt();
  //  String name[]=new String[size];

  //  //input
  //  for(int i=0;i<size;i++){
  //   name[i]=sc.next();
  //  }
  //  //output
  //  for(int i =0;i<name.length;i++){
  //   System.out.println("name"+(i+1)+"is: "+name[i]);
  //  }

  //2ques

//   Scanner sc = new Scanner(System.in);
//   int size = sc.nextInt();
//   int numbers[]=new int[size];
//   //input
//   for(int i=0;i<size;i++){
//     numbers[i]=sc.nextInt();
//   }
//   int max=Integer.MIN_VALUE;
//   int min = Integer.MAX_VALUE;
//   for(int i=0;i<numbers.length;i++){
//     if (numbers[i]<min){
//       min =numbers[i];
//     }
//     if(numbers[i]>max){
//       max=numbers[i]; 
//        }
//   }

  
//   System.out.println("largest number : "+max);
//   System.out.println("smallest number is: "+min);

//3ques
//array sorted in ascending order

Scanner sc =new Scanner(System.in);
int size = sc.nextInt();
int numbers[]=new int[size];
//input

for(int i=0;i<size;i++){
  numbers[i]=sc.nextInt();
}
boolean isAscending =true;
for(int i=0;i<numbers.length-1;i++){
if(numbers[i]>numbers[i+1]){
isAscending=false;
}
}
if (isAscending){
  System.out.println("the array is sorted in ascending order: ");
}else {
  System.out.println("The array is not sorted in ascending order: ");
}
 }
}
