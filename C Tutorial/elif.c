#include<stdio.h>
int main(){
    int age;
    printf("enter your age\n");
    scanf("%d ",&age);
    // printf("you have entered %d as your age \n",age);
    if(age>=18){
        printf("you can vote");
    }
    else if(age>=10)
    {
        printf("between 10to 18 years and you can vote");
    }
    else{
        printf("you can not vote");
    }
}