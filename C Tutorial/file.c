#include<stdio.h>

int main() {
    FILE *fptr;
    fptr= fopen("sum.txt","r");

    int a;
    fscanf(fptr,"%d",&a);
    int b;
    fscanf(fptr,"%d",&b);
    fclose(fptr);

    fptr= fopen("sum.txt","w");
    fprintf(fptr,"%d",a+b);
    fclose(fptr);




    // int n;
    // printf("enter n: \n");
    // scanf("%d",&n);

    // for(int i=0;i<n;i++){
    //     if(i%2!=0){
    //         fprintf(fptr,"%d\n",i);
    //     }
    // }

    // char name[1000];
    // int age;
    // float cgpa;

    // printf("enter name: \n");
    // scanf("%s",&name);

    //  printf("enter age: \n");
    // scanf("%d",&age);

    // printf("enter cgpa: \n");
    // scanf("%f",&cgpa);

    // fprintf(fptr,"%s\t",name);
    // fprintf(fptr,"%d\t",age);
    // fprintf(fptr,"%f\t",cgpa);
    // fputc('A',fptr);
    // fputc('P',fptr);
    // fputc('P',fptr);
    // fputc('L',fptr);
    // fputc('E',fptr);
    // printf("%c\n",fgetc(fptr));
    //  printf("%c\n",fgetc(fptr));
    //   printf("%c\n",fgetc(fptr));
    //    printf("%c\n",fgetc(fptr));
    //     printf("%c\n",fgetc(fptr));
    // if(fptr == NULL) {
    //     printf("file doesn't exist: \n");
    // }else {
    //     fclose(fptr);
    // }
    // int ch;
    // fscanf(fptr,"%d",&ch);
    // printf("character =%d\n ",ch);
    // fscanf(fptr,"%d",&ch);
    // printf("character =%d\n ",ch);
    // fscanf(fptr,"%d",&ch);
    // printf("character =%d\n ",ch);
    // fprintf(fptr,"%c","M");
    // fprintf(fptr,"%c","A");
    // fprintf(fptr,"%c","N");
    // fprintf(fptr,"%c","G");
    // fprintf(fptr,"%c","O");

   // fclose(fptr);
    
    return 0;
}