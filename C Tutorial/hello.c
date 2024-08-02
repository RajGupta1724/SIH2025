#include<stdio.h>

//a code  to find area
// int main(){
//     float side;
//     printf("enter side :\n");
//     scanf("%f",&side);

//     printf("area is %f\n", side*side);
//     return 0;
// }

// check number is divisible by2

int main(){
char ch;
  printf("enter the character : \n");
  scanf("%c",&ch);

// switch(day){
//     case 'm' : printf("monday\n");
//              break;
//              case 't': printf("tuesday\n");
//              break;
//              case 'w': printf("wednesday\n");
//              break;
//              case 'T' : printf("thursday\n");
//              break;
//              case 'f': printf("friday\n");
//              break;
//              case's': printf("saturday\n");
//              break;
//              case'S': printf("sunday\n");
//              break;
//              default :printf("not a valid day\n");
// }

  if(ch >= 65 && ch<= 'Z'){
    printf("UPPER CASE\n");
    }
    else if(ch >='a' && ch <='z'){
    printf("lower case\n");
  }
  else{
    printf("not english letter\n");
  }
//   printf("thank you");
//     return 0;
// marks <= 30 ? printf("fail") : printf("pass");
// return 0;
}