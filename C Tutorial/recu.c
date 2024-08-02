 #include<stdio.h>
// void printHW(int count);

// int main() {
// printHW(5);
// return 0;
// }

// //recursive function
// void printHW(int count){
//     if(count==0){
//         return;
//     }
//     printf("hello world\n");
//     printHW(count-1);
// }

//sum of first n natural number
// int  sum(int n);
// int main() {
// printf("sum is : %d\n",sum(5));
//     return 0;
// }

// //recursive fun
// int sum(int n) {
//     if(n==1){
//         return 1;
//     }
//     int sumNm1 =sum(n-1);//sum of 1to n
//     int sumN = sumNm1 +n;
//     return sumN;
// }

//factorial of n 

// int fact(int n);

// int main() {
// printf("fact is %d\n",fact(4));
//     return 0;
// }

// int fact(int n) {
//     if(n==0){
//         return 1;
//     }
//     int factNm1 =fact(n-1);
//     int factN = factNm1 * n;
//     return factN;
// }


//a fun to convert celsius to fohrenheit
// float convertTemp(float celsius);

// int main(){
// float far =convertTemp(32);
// printf("far : %f",far);
// return 0;
// }

// float convertTemp(float celsius){
//     float far = celsius*(9.0/5.0)+32;
//     return far;
// }

//calculate percentage of student

// int calculatePercentage(int science, int math, int sanskrit);

// int main(){
//     int sc =98;
//     int math =95;
//     int sanskrit=99;
//    printf("percentage is : %d",calculatePercentage(sc,math,sanskrit)) ;
//    return 0;

// }

// int calculatePercentage(int science, int math,int sanskrit){
//     return (science+math+sanskrit)/3;
// }

//fabonacci series
int fib(int n);


int main(){
 printf("%d",fib(6));
    return 0;
}

int fib(int n) {
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    int fibNm1=fib(n-1);
    int fibNm2=fib(n-2);
    int fibN= fibNm1+fibNm2;
   // printf("fib of %d is : %d\n",n,fibN);
    return fibN;
}