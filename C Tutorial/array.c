#include<stdio.h>
int main()
{
    // one dimension array
    int marks[10], sum =0;
    printf("enter marks 10 student: \n\n");
    for(int i=0;i<=9;i++)
    {
        printf("marks of %d student : \n \n",i+1);
        scanf("%d",&marks[i]);
        sum += marks[i];
    }
    int average = sum/10;
    printf("the average marks of 10 student are %d",average);
    return 0;
    // int marks[4];
    // for(int i=0;i<4;i++)
    // {
    //     printf("enter the value of %d element of the array\n",i);
    //     scanf("%d",&marks[i]);
    // }
    // for(int i=0; i<4;i++)
    // {
    //     printf("the value of %d element of the array is %d\n",imarks[i]);
    // }
// 2d array
    //  int marks[2][4]={{45,234,2,3},{3,2,3,3}};
    //  for(int i =0;i<2; i++)
    //  {
    //     for(int j=0;j<4;j++)
    //     {
    //         printf("%d",marks[i][j]);

    
        // printf("the value of %d,%d element of the array is %d\n",i,j,marks[i][j]);
    //     }
    //     printf("\n");
    //  }

    
}