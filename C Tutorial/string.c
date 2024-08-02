 #include <stdio.h>
 # include <string.h>
 //47ques
// void printString(char arr[]);

// int main() {
//    char firstName[]="SHRADHA";
//     char lastName[]="KHAPRA";
//     printString(firstName);
//     printString(lastName);
   
    
//     return 0;
// }
// void printString(char arr[]) {
//     for(int i=0;arr[i]!='\0' ;i++){
//         printf("%c",arr[i]);
//     }
//     printf("\n");
// }

/////
// void printString(char arr[]);

// int main() {
//    char name[50];
//    scanf("%s",name);
//    printf("your name is %s",name);
    
//     return 0;
// }
// void printString(char arr[]) {
//     for(int i=0;arr[i]!='\0' ;i++){
//         printf("%c",arr[i]);
//     }
//     printf("\n");
// }

//48 ques
// void printString(char arr[]);

// int main() {
//     char firstName[50];
//    scanf("%s",firstName);
//    printf("your name is %s",firstName);

// char fullName[50];
//  scanf("%s",fullName);
// printf("your name is %s",fullName);

// char str[100];
// fgets(str,100,stdin);
// puts(str);
 
//    printf("your name is %s",firstName);

// char *canChange ="hello World";
// puts(canChange);
// canChange="Hello";
// puts(canChange);


// char cannotChange[]="Hello World";
// puts(cannotChange);
// cannotChange="hello";
// puts(cannotChange);//error
    
//     return 0;
    
// }
// void printString(char arr[]) {
//     for(int i=0;arr[i]!='\0' ;i++){
//         printf("%c",arr[i]);
//     }
//     printf("\n");
// }

//49 ques

// void printString(char arr[]);
// int countLength(char arr[]);

// int main() {
//     char firstStr[100]="hello";
//     char secStr[]="world";
//     // int length = strlen(name);
//     strcat(firstStr,secStr);
//     puts(firstStr);
//     //fgets(name,100,stdin);
//     // printf("length is: %d",length);
//     return 0;
// }

// // int countLength(char arr[]) {
// //     int count =0;
// //     for(int i=0;arr[i]!='\0';i++) {
// //         count++;
// //     }
// //     return count-1;
// //}

/////
// void printString(char arr[]);
//  int countLength(char arr[]);

// int main() {
//     char firstStr[]="Apple";
//     char secStr[] ="Banana";
//     printf("%d\n",strcmp(firstStr,secStr));

//     return 0;
// }

//50 take a string input the
// void printString(char arr[]);
// int countLength(char arr[]);
// int main(){
//     char str[100];
//     char ch;
//     int i=0;
//     while(ch!='\n') {
//         scanf("%c",&ch);
//         str[i]=ch;
//         i++;
//     }
//     str[i]='\0';
//     puts(str);
// }
// int countLength(char arr[]) {
//     int count =0;
//     for(int i=0; arr[i]='\0';i++) {
//         count++;
//     }
//     return count-1;
// }

//51  sating
// void salting(char password[]);
// int main() {
//     char password[100];
//     scanf("%s",password);
//     salting(password);


// }
// void salting(char password[]) {
//     char salt[]="123";
//     char newPassword[200];
//     strcpy(newPassword,password);
//     strcat(newPassword,salt);
//     puts(newPassword);
// }

//52  function named slice takes a string and return slice

// void slice(char str[],int n,int m);
// int main() {
//     char str[] ="HELLOWORLD";
//     slice(str,3,6);


// }
// void slice(char str[],int n, int m) {
//     char newStr[100];
//     int j=0;
//     for(int i=n;i<=m;i++,j++) {
//         newStr[j]=str[i];
//     }
//     newStr[j]='\0';
//     puts(newStr);
// }

//53 fun to cont occurrence of vowels

// int countVowels(char str[]);
// int main(){
//     char str[]="Shradha";
//     countVowels(str);
//     printf("vowels are:  %d", countVowels(str));

// }
// int countVowels(char str[]) {
//     int count=0;
//     for(int i=0;str[i]!='\0';i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//             count++;
//         }
//     }
//         return count;
    
//     }

    //54 a given char is present or not
    void checkChar(char str[],char ch);
    int main() {
        char str[]="Shradha";
        char ch ='a';
        checkChar(str,ch);
    }
    void checkChar(char str[],char ch) {
        for(int i=0;str[i]!='\0';i++) {
            if (str[i]==ch) {
                printf("CHAR IS PRESNT: \n");
                return;
            }
        }
        printf("char is not present: ");
    }



