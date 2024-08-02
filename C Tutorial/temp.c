#include<stdio.h>
int main()
{
    float ftemp,ctemp;
    printf("enter the temperature of a city in in fahrenheit: ");
    scanf("%f",&ftemp);

    ctemp =(5.0/9.0)*(ftemp-32);
    printf("the given temperature in centigrade is %f",ctemp);
    
}