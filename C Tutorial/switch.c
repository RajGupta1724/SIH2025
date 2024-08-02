#include<stdio.h>
int main()
{
    int age,marks;
    printf("enter your age\n");
    scanf("%d",&age);
    printf("enter your marks\n");
    scanf("%d",&marks);
    // int i=9;
    // switch(i){
    //     case 5:
    //     printf("value is 7\n");
    //     break;

    //     case 0:
    //     printf("valueis 8\n");
    //     break;

    //     default:
    //     printf("value is not present");
    //     break;
    // }
    // return 0;
    switch(age)
    {
        case 3:
        printf("the age is 3\n");
        switch(marks)
        {
            case 45:
            printf("yours marks are 45");
            break;
            default:
            printf("your marks are not 45");
        }
        break;

        case 13:
        printf("the age is 13\n");
        break;

        case 23:
        printf("the age is 23\n");
        break;

        default:
        printf("age is not 3,13 or 23\n");

    }
    return 0;

}