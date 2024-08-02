#include<stdio.h>

// int main(){
//     // int marks1 =97;
//     // int marks2=98;
//     // int marks3=89;
//     // int marks[3];
//     // printf("enter phy: ");
//     // scanf("%d",&marks[0]);

//     // printf("enter chem: ");
//     // scanf("%d",&marks[1]);

//     // printf("enter math: ");
//     // scanf("%d",&marks[2]);

//     // printf("phy =%d, chem=%d, math =%d",marks[0],marks[1],marks[2]);
//     // return 0;

//     //pq write a program to enter price of 3 time and print final cost

//    //  float price[3]={100.0,2000.0,300.0};
//    //  printf("enter 3prices: ");
//     // scanf("%f",&price[0]);
//     // scanf("%f",&price[1]);
//     // scanf("%f",&price[2]);

//    //  printf("total price 1: %f  ", price[0]+(0.18*price[0]));
//    //     printf("total price 2: %f  ", price[1]+(0.18*price[1]));
//    //        printf("total price 3: %f  ", price[2]+(0.18*price[2]));

//    //        return 0;

//    ////////
//    // int aadhar =22;
//    // int _age=23;
//    // int *ptr =&age;
//    // int *_ptr=&_age;

//    // printf("  %u, %u difference  =%u\n",ptr,_ptr,ptr-_ptr);
//    // _ptr =&age;
//    // printf("comparison =%u\n",ptr==_ptr);
//    // ptr++;

//    // printf("ptr =%u\n",ptr);
//    // ptr--;

//    // printf ("ptr = %u\n",ptr);



//    //////
//    // int aadhar[5];
//    // //input
//    // int *ptr =&aadhar[0];
//    // for(int i=0;i<5;i++){
//    //    printf("%d index :\n ",i);
//    //    scanf("%d",&aadhar[i]);
//    // }
//    // //output
//    // for(int i=0;i<5;i++){
//    //    printf("%d index =%d\n",i,aadhar[i]);
//    // }

//    //array as fun argument

   
//    return 0;

// }

// void printNumbers (int arr[],int n);

//int main () {
// int arr[]={1,2,3,4,5,6};
// printNumbers(arr,6);
// return 0;
// }
// void printNumbers (int arr[],int n) {
//    for (int i =0;i<n;i++){
//       printf("%d\t",arr[i]);
//    }
//    printf("\n");

//2d 
//2 * 3
// int marks [2][3];//_ _ _ | _ _ _

// marks[0][1]=89;
// marks [0][2]=78;
// marks[0][0]=90;

// marks [1][0]=90;
//  marks [1][1]=89;
//  marks [1][2]=78;

// printf("%d\n",marks[0][0]);

// return 0;

//}

//practice ques

//write afunction to coun the number of odd numbers in an array

// int countODD(int arr[], int n);
// int main() {
//    int arr[]={1,2,3,4,5,6};
//    printf("%d",countODD(arr,6));

//    return 0;
// }


// int countODD (int arr[],int n) {
//    int count =0;
//    for(int i=0;i<n;i++){
//       if(arr[i]%2 !=0){
//          count++;
//       }
//    }
//   return count ;
// }

//43 for given arry 
// int main () {
//    int arr[]={1,2,3,4,5};

//    printf("%d\n",*(arr+2));
//    printf("%d\n",*(arr+5));
//    return 0;
// }

//44ques write a function to reverse an array


// int countODD(int arr[], int n);
// void reverse(int arr[], int n);
// void printArr(int arr[], int n);
// int main() {
//    int arr[]={1,2,3,4,5,6};
//    reverse(arr,5);
//    printArr(arr,5);

//    printf("%d",countODD(arr,6));

//    return 0;
// }

// void printArr(int arr[],int n){
//    for (int i=0; i<n;i++){
//       printf("%d\t",arr[i]);
//    }
//    printf("\n");
// }
// void reverse(int arr[],int n) {
//    for(int i=0;i<n/2;i++){
//      int firstVal =arr[i];
//      int secondVal = arr[n-i-1] ;
//      arr[i]= secondVal;
//      arr[n-i-1]=firstVal;
//    }
// }
// int countODD (int arr[],int n) {
//    int count =0;
//    for(int i=0;i<n;i++){
//       if(arr[i]%2 !=0){
//          count++;
//       }
//    }
//   return count ;
// }

//to store the fibonacchi

// int main() {

//    int n;
//    printf("enter n(n>2): \n");
//    scanf("%d",&n);

//    int fib[n];
//    fib[0] =0;
//    fib[1]=1;

//    for(int i=2;i<n;i++){
//       fib[i] =fib[i-1] + fib[i-2];
//       printf("%d\t",fib[i]);
//    }
//    //printf("\n");
//    return 0;
// //}

// //46 2d array store the table
void storeTable(int arr[][10],int n,int m,int number);

int main() {
   int tables[2][10];
   storeTable(tables,0,10,2);
   storeTable(tables,1,10,3);
   
   for(int i=0;i<10;i++){
      printf("%d\t",tables[0][i]);
   }
   printf("\n");

    for(int i=0;i<10;i++){
      printf("%d\t",tables[1][i]);
   }
   return 0;

}

void storeTable(int arr[][10],int n,int m,int number) {
   for(int i=0;i<m;i++){
       arr[n][i]=number*(i+1);
       }
}