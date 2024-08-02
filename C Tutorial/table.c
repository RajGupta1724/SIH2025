#include<stdio.h>
int main()
{
    int table;
    printf("enter the number you want multiplication table of :\n");
    scanf("%d",&table);

    printf("multiplication table of %d is as folows: \n\n",table);
    
    // printf("%d*1=%d\n",table,table*1);
    
    // printf("%d*2=%d\n",table,table*2);
    
    // printf("%d*3=%d\n",table,table*3);
    
    // printf("%d*4=%d\n",table,table*4);
    
    // printf("%d*5=%d\n",table,table*5);
    // printf("%d*6=%d\n",table,table*6);
    
    // printf("%d*7=%d\n",table,table*7);
    
    // printf("%d*8=%d\n",table,table*8);
    // printf("%d*9=%d\n",table,table*9);
    // printf("%d*10=%d\n",table,table*10);
    // for(int i =1; i<=10;i++)
    // {
    //     printf("%d*%d =%d\n",table,i,table*1);
    // }
    // return 0;
    int i =0;
    while(i<=10){
        printf("%d*%d=%d\n",table,i,table*i);
        i++;
    }
   
}