#include<stdio.h>
int main()
{
    // int x;
    // for(int i =0; i<5;i++)
    // {
    //     printf("\n hey guys\n\n");
    //     for (int j = 0;j < 3;j++)
    //     {
    //         printf("type any no. & to exit : press 1\n");
    //         scanf("%d",&x);
    //         if(x==1)
    //         {
    //             goto end;
    //         }
    //     }
    // }
    // end:
    // printf("\'for\'loops are skipped as you pressed 1");
    // return 0;
    int num;
    for(int i = 0;i<8;i++)
    {
        printf("%d\n,i");
        for(int j = 0; j<8;j++)
        {
            printf("enter the number. enter 0 to exit \n");
            scanf("%d",&num);
            if(num==0){
                goto end;
            }
        }
    }
    end:
    return 0;
}