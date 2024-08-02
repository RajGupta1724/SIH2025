#include<stdio.h>
int main()
{
    int i,age;
    for(i=0;i<5;i++)
    {
        printf("iteratio time = %d\n enter your age: ",i);
        scanf("%d",&age);
        // if (age>10)
        // {
        //     break;
        // }
        if(age<10)
        {
            continue;
        }
        printf("you have not come across any continue statement\n");
        printf("hey guys\n");
    }
}