#include<stdio.h>
// int sum(int a,int b);

// int main() {
// int a,b;
// printf("enter first number: \n");
// scanf("%d",&a);
// printf("enter secon number: \n");
// scanf("%d",&b);

// int s =sum(a,b);
// printf("sum is: %d\n",s);
// return 0;
// };
//  int sum(int x, int y) {
//   return x+y;
// }
//int main()
// {
//    int a,b,c;
//    a = 9;
//    b=87;
//    c =sum(a,b);
//    printf("sum is %d\n",c);
//    return 0;
// }

//table

// int sum(int a,int b);
// void printTable(int n);

// int main() {
// int n;
// printf("enter number: \n");
// scanf("%d",&n);

// printTable(n);//argument
// return 0;
// };
//  int sum(int x, int y) {
//   return x+y;
// }

// void printTable(int n) {
//     for (int i=1;i<=10;i++){
//      printf("%d\n",i*n);
     
//     }
// }

void calculatePrice(float value);

int main(){
    float value =100.0;
    calculatePrice(value);
    printf("value is : %f\n",value);
    return 0;
}

void calculatePrice(float value){
    value =value+(0.18*value);
    printf("final price is: %f\n",value);
}