#include<stdio.h>
// void namaste();
// void bonjour();

// int main() {
//     printf("enter f for french & i for indian: ");
//     char ch;
//     scanf("%c",&ch);
//     if(ch=='i'){
//         namaste();
//     }else {
//         bonjour();
//     }
//     return 0;
// }

// void namaste() {
//     printf("namaste\n");
// }
// void bonjour(){
//     printf("bonjour\n");
// }

//29ques
#include<math.h>

float squareArea(float side);
float circleArea(float rad);
float rectangleArea(float a,float b);

int main(){
   float a=5.0;
   float b=10.0;
  
   printf("area is: %f",rectangleArea(a,b));
  return 0;  
}

float squareArea(float side) {
    return side*side;
}
float circleArea(float rad) {
    return 3.14*rad*rad;
}
float rectangleArea(float a, float b){
    return a*b;
}