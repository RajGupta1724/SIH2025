#include<stdio.h>
int main()
{
    int m1,m2,m3,m4,m5,agg;
    float per;
    printf("input marks of 5 subject obtained by student: \n");
    scanf("%d %d %d %d %d" , &m1 ,&m2, &m3, &m4, &m5 );

    agg =m1+m2+m3+m4+m5;
    per=agg*(100.0/500.0);
    printf("aggregate marks obtain by student = %d\n",agg);
    printf("percentage of student=%f",per);

}