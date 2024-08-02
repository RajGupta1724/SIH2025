#include<stdio.h>
int main()
{
    float km,m, cm,f,in;
    printf("enter the distace in kilometers: ");
    scanf("%f", &km);
    
    // calculate the conversion

    m = km*100;
    cm=km*100000;
    f=km*3280.84;
    in=km*39370.08;

    printf("the distace in feet: %f\n",f);
    printf("the distace in inches: %f\n",in);
    printf("the distace in centimeters: %f\n",cm);
    printf("the distace in meters: %f\n",m);

    return 0;

        


}