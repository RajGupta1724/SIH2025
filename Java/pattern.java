public class pattern {
    public static void main(String[] args) {
        // int n=4;
        // int m=5;
        // //outer 
        //  for (int i=1;i<=n;i++){
        //     //inner loop
        //     for(int j =1;j<=m;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        //  }

        //2nd ques
        
        // int n=4;
        // int m =5;
        // //outer
        // for(int i =1;i<=n;i++){
        //     //inner loop
        //     for(int j =1;j<=m;j++){
        //         if(i==1||j==1||i==n||j==m){
        //             System.out.print("*");
        //         }else{
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println();
     
       // }

       //3rd ques

    //    int n =4;
    //   // int m =4;
    //    //outer 
    //    for(int i =1;i<=n;i++) {
    //     //inner
    //     for(int j =1; j<=i;j++){
    //         System.out.print("*");
    //     }
    //     System.out.println();
    //     }

    //4ques
    // int n=4;
    // for(int i =n;i>=1;i--){
    //     for(int j =1;j<=i;j++){
    //         System.out.print("*");
    //     }
    //     System.out.println();
    // }
//     int n =4;
//     for(int i=1;i<=n;i++){
// for(int j=1;j<n-i;j++){
//     System.out.print(" ");
// }
// for(int j =1;j<=i;j++){
//     System.out.print("*");
// }
// System.out.println();
//     }
// int n =5;
// for(int i =1;i<=n;i++){
// for(int j =1;j<=i;j++){
//     System.out.print(j+" ");
// }
// System.out.println();
// }
// int n=5;
// for(int i =1;i<=n;i++){
// for(int j =1;j<=n-i+1;j++){
//     System.out.print(j);
// }
// System.out.println();
// // }
// int n =5;
// int number=1;
// for(int i=1;i<=n;i++){
// for(int j =1;j<=i;j++){
//     System.out.print(number+" ");
//     number++;
// }System.out.println();
//}
// int n=5;
// for(int i =1;i<=n;i++){
//     for(int j=1;j<=i;j++){
//         int sum=i+j;
//         if (sum%2==0){
//             System.out.print("1 ");
//         }else{
//             System.out.print("0 ");
//         }
//     }System.out.println();
// }
//10QUES
// int n=4;
// //outer 
// for(int i=1;i<=n;i++){
//     //1st part
// for(int j=1;j<=i;j++){
//     System.out.print("*");}
//  for(int j=1;j<=2*(n-i);j++){
// System.out.print(" ");
//     }
//     //2nd part
//     for(int j=1;j<=i;j++){
//         System.out.print("*");
//     }
//     System.out.println();
// }
// //lowe half
// for(int i=n;i>=1;i--){
//     //1st part
// for(int j=1;j<=i;j++){
//     System.out.print("*");}
//  for(int j=1;j<=2*(n-i);j++){
// System.out.print(" ");
//     }
//     //2nd part
//     for(int j=1;j<=i;j++){
//         System.out.print("*");
//     }
//     System.out.println();
// }

//11ques
// int n =5;
// for(int i=1;i<=n;i++){
//     for(int j =1;j<=n-i;j++){
//         System.out.print(" ");
//     }
//     for(int j=n;j>=1;j--){
//         System.out.print("*");
//     }System.out.println();
// }
//12ques
// int n=5;
// for(int i=1;i<=n;i++){
//     for(int j=1;j<=n-i;j++){
//         System.out.print(" ");
//     }for(int j=1;j<=i;j++){
//         System.out.print(i+" ");
//     }System.out.println();
// }
//13ques
// int n=5;
// for(int i =1;i<=n;i++){
//     for(int j=1;j<=n-i;j++){
//         System.out.print(" ");
//     }for(int j=i;j>=1;j--){
//         System.out.print(j);
//     }
//     for(int j=2;j<=i;j++){
//         System.out.print(j);
// }System.out.println();
// }
// int n=4;
// //upper half
// for(int i=1;i<=n;i++){
//     for(int j=1;j<=n-i;j++){
//         System.out.print(" ");//space
//     }for(int j=1;j<=2*i-1;j++){
//         System.out.print("*");
//     }System.out.println();
// }
// //lower half
// for(int i=n;i>=1;i--){
//     for(int j=1;j<=n-i;j++){
//         System.out.print(" ");//space
//     }for(int j=1;j<=2*i-1;j++){
//         System.out.print("*");
//     }System.out.println();
// }


//home problems
// int n=5;

// for(int i=n;i>=1;i--){
//     for(int j=1;j<=i;j++){
//         System.out.print(i);
//     }System.out.println();
// }
// int n=5;
// for(int i=1;i<=n;i++){
//     for(int j=1;j<=n-i;j++){
//         System.out.print(" ");
//     }for(int j=1;j<=i;j++){
//         System.out.print(j+" ");
//     }System.out.println();
// }
//pascal triangle
// int rows = 5;
//         for (int i = 0; i < rows; i++) {
//             int number = 1;
//             // Print leading spaces
//             for (int j = 0; j < rows - i; j++) {
//                 System.out.print(" ");
//             }
//             // Print numbers
//             for (int k = 0; k <= i; k++) {
//                 System.out.print(number + " ");
//                 number = number * (i - k) / (k + 1);
//             }
//             System.out.println();

       // }
       //hollow rhombus
    //    int n=5;
    //    for(int i=1;i<=n;i++){
    //     for(int j=1;j<=n-i;j++){
    //         System.out.println(" ");
    //     }if(i==1||i==n){
    //         for(int j=1;j<=n;j++)
    //         System.out.print("*");
    //     }else{
    //         System.out.print("*");
    //         for(int j=1;j<=n-2;j++){
    //             System.out.print(" ");
    //         }System.out.print("*");
            
    //     }System.out.println();
    //    }
    //hollow butterfly
    int n = 5; // size of the butterfly

    // Print the upper part of the butterfly
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            System.out.print("*");
        }
        for (int j = 1; j <= 2 * (n - i); j++) {
            System.out.print(" ");
        }
        for (int j = 1; j <= i; j++) {
            System.out.print("*");
        }
        System.out.println();
    }

    // Print the lower part of the butterfly
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            System.out.print("*");
        }
        for (int j = 1; j <= 2 * (n - i); j++) {
            System.out.print(" ");
        }
        for (int j = 1; j <= i; j++) {
            System.out.print("*");
        }
        System.out.println();
    }
      }
}


    //
