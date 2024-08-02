 #include<stdio.h>
// // int main() {
// //     int age =22;
// //     int *ptr= &age;
// //     //int _age=*ptr;
// //     //value
// //     printf("%d\n",age);
// //     printf("%d\n",*ptr);
// //     printf("%d\n",*(&age));

// //   //  printf("%u\n",ptr);
// //     //printf("%u\n",&ptr);
// //     return 0;
// // }

// //prac
// int main() {
// int *ptr;
// int x;

// ptr = &x;
// *ptr= 0;

// printf("x = %d\n",x);
// printf("*ptr = %d\n", *ptr);

// *ptr +=5;
// printf("x= %d\n",x);
// printf("*ptr =%d\n",*ptr);

// (*ptr)++;
// printf("x =%d\n",x);
// printf("*ptr =%d\n",*ptr);
// }


//pptr
// int main(){
//     // float price =100.00;
//     // float *ptr=&price;
//     // float **pptr=&ptr;
//     // return 0;

//     int i=5;
//     int *ptr =&i;
//     int **pptr=&ptr;
//     //printf("%d\n",*(pptr));
//     printf("%d\n",**pptr);
// }

// void square(int n);
// void _square(int* n);

// int main() {
// int number =4;
// square(number);
// printf("number =%d\n",number);

// _square(&number);
//      printf("number = %d\n",number);
// return 0;
// }
// //call by value
// void square(int n) {
//     n =n*n;
//     printf("square = %d\n",n);

    
// }
// void _square(int* n){
//     *n =(*n) *(*n);
//     printf("square = %d\n",*n);
// }

//swap 2 num , a&b
// void swap (int a,int b);
// void _swap(int *a, int *b);

// int main() {
// int x=3, y=5;
// _swap(&x,&y);
//  printf("x=%d &y =%d\n",x,y);


//     return 0;
// }


// //by call by value 
// void swap (int a,int b){
//     int t=a;
//     a=b;
//     b=t;
//     printf("a=%d &b =%d\n",a,b);
// }
// //caal by reference
// void _swap(int *a,int*b){
//     int t=*a;
//     *a=*b;
//     *b=t;
// }

//39
// void printAddress(int n);
// int main() {
//     int n =4;
   
//     printAddress(n);
//      printf("%p\n",&n);
//     return 0;
// }

// void printAddress(int n) {
//     printf("%p\n",&n);
// }

//40
void doWork(int a,int b, int *sum,int *prod,int *avg);
int main() {
    int a=3, b=5;
    int sum,prod,avg;
    doWork(a,b,&sum,&prod,&avg);
    printf("sum =%d, prod =%d, avg =%d",sum,prod,avg);
    return 0;
}

void doWork(int a,int b,int *sum,int *prod,int *avg){
     *sum =a+b;
     *prod=a*b;
     *avg=(a+b)/2;
}