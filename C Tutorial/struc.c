#include <stdio.h>
#include<string.h>
//user-define
// struct student {
//     char name[100];
//     int roll;
//     float cgpa;
// };
// int main() {
//     struct student s1;
//     s1.roll =1664;
//     s1.cgpa =9.2;
    
//     strcpy(s1.name, "raj");

//     printf("student name is %s\n",s1.name);
//     printf("student roll is %d\n",s1.roll);
//     printf("student cgpa is : %f\n",s1.cgpa);

//     struct student s2;
//     s2.roll =1660;
//     s2.cgpa =8.7;
    
//     strcpy(s2.name, "aman");

//     printf("student name s2 is %s\n",s2.name);
//     printf("student roll s2 is %d\n",s2.roll);
//     printf("student cgpa s2 is : %f\n",s2.cgpa);
//     printf("\n");

//     struct student s3;
//     s3.roll =1662;
//     s3.cgpa =7.5;
    
//     strcpy(s3.name, "rajat");

//     printf("student name is %s\n",s3.name);
//     printf("student roll is %d\n",s3.roll);
//     printf("student cgpa is : %f\n",s3.cgpa);

    

    
//     return 0;
// }

// int main() {
//     struct student ECE[100];
//     ECE[0].roll =1664;
//     ECE[0].cgpa =9.2;
//     strcpy(ECE[0].name,"RAJ");

//     printf("name =%s\n",ECE[0].name);

// return 0;

// }

////
// void printInfo(struct student s1);
// int main() {
//    struct student s1 ={"Raj",1664,9.2};
//    printInfo(s1);
//     s1.roll = 1660;
//     printf("student -> roll = %d\n",s1.roll);
//    printf("student roll= %d\n",s1.roll);

//    struct student *ptr =&s1;
//    printf("student roll = %d\n",(*ptr).roll);

//    printf("student -> roll = %d\n",ptr->roll);
//    printf("student ->name =%s\n",ptr->name);
//    printf("student->cgpa = (%f)\n",ptr->cgpa);
    // return 0;
// }
// void printInfo(struct student s1) {
//     printf("student information: \n");
//      printf("student -> roll = %d\n",s1.roll);
//    printf("student ->name =%s\n",s1.name);
//    printf("student->cgpa = (%f)\n",s1.cgpa);
  
// }



//////
// typedef struct computerengineeringstudent {
//    int roll;
//     float cgpa;
//     char name[100]; 
// } coe;

// typedef struct student {
//     char name[100];
//     int roll;
//     float cgpa;
// }stu;
// int main() {
//     coe s1;
//     s1.roll=1664;
//     s1.cgpa =9.2;
//     strcpy(s1.name, "raj");
//     printf("student name is %s\n",s1.name);
//     return 0;
    
// }


//56ques enter address

// struct address {
//     int houseNo;
//     int block;
//     char city [100];
//     char state[100];
// };
// void printAdd(struct address add);
// int main() {
//     struct address adds[5];
//     //input
//     printf("enter info for person1: \n");
//     scanf("%d\n",&adds[0].houseNo);
//     scanf("%d\n",&adds[0].block);
//     scanf("%s\n",&adds[0].city);
//     scanf("%s\n",&adds[0].state);

//      printf("enter info for person2: \n");
//     scanf("%d\n",&adds[1].houseNo);
//     scanf("%d\n",&adds[1].block);
//     scanf("%s\n",&adds[1].city);
//     scanf("%s\n",&adds[1].state);

//     printf("enter info for person3: \n");
//     scanf("%d\n",&adds[2].houseNo);
//     scanf("%d\n",&adds[2].block);
//     scanf("%s\n",&adds[2].city);
//     scanf("%s\n",&adds[2].state);


//      printf("enter info for person4: \n");
//     scanf("%d\n",&adds[3].houseNo);
//     scanf("%d\n",&adds[3].block);
//     scanf("%s\n",&adds[3].city);
//     scanf("%s\n",&adds[3].state);

//      printf("enter info for person5 : \n");
//     scanf("%d\n",&adds[4].houseNo);
//     scanf("%d\n",&adds[4].block);
//     scanf("%s\n",&adds[4].city);
//     scanf("%s\n",&adds[4].state);

//     printAdd(adds[0]);
//     printAdd(adds[1]);
//     printAdd(adds[2]);
//     printAdd(adds[3]);
//     printAdd(adds[5]);

//     return 0;
// }
// void printAdd(struct address add) {
//     printf("ddress is %d, %d, %s ,%s \n ",add.houseNo,add.block,add.city,add.state);
// }


//57 to store vectors

// struct vector {
//     int x;
//     int y;

// };
// void calcSum(struct vector v1, struct vector v2, struct vector sum);
// int main() {
//     struct vector v1 ={5,10};
//     struct vector v2 ={3,7};
//     struct vector sum ={0};
//     calcSum(v1,v2,sum);

//     return 0;
// }
// void calcSum(struct vector v1, struct vector v2, struct vector sum){
//     sum.x =v1.x +v2.x;
//     sum.y =v1.y +v2.y;

//     printf("sum of x is: %d\n",sum.x);
//      printf("sum of x is: %d\n",sum.y);
// }

//58 ques  to store complex number

// struct complex {
//     int real;
//     int imag;

// };
// int main() {
//     struct complex number1 ={5,8};
//     struct complex *ptr =&number1;
//     printf("real part is = %d\n",ptr->real);
//     printf("imag part is =%d\n",ptr->imag);

//     return 0;

// }

//60 store bank account info

 typedef struct BankAccount {
    int accountNo;
    char name[100];
} acc;
int main() {
    acc acc1={123,"raj"};
    acc acc2 ={124, "aman"};
    acc acc3 ={125,"sydhir"};

    printf("acc no =%d\n",acc1.accountNo);
    printf("name =%s\n",acc1.name);
  return 0;
}