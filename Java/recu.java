// import java.util.HashSet;

import java.util.*;

public class recu {
    // public static void moveAllX(String str, int idx, int count, String newString){
    //     if(idx==str.length()){
    //         for(int i=0;i<count;i++){
    //             newString+='x';
    //         }
    //         System.out.println(newString);
    //         return;
    //     }
    //    char currChar= str.charAt(idx);
    //    if(currChar=='x'){
    //     count++;
    //     moveAllX(str, idx+1, count, newString);
    //    }else{
    //     newString+=currChar;
    //     moveAllX(str, idx+1, count, newString);
    //    }
    //      }
    // public static void main(String[] args) {
    //     String str="axbcxxd";
    //     moveAllX(str, 0, 0, "");
    // }
   

    //remove dupicate in a string
    // public static boolean[] map =new boolean[26];
    
    // public static void removeDuplicates(String str, int idx,String newString){
    //     if(idx==str.length()){
    //         System.out.println(newString);
    //         return;
    //         }
            
        
    //    char currChar= str.charAt(idx);
    //    if(map[currChar-'a']){
    //     removeDuplicates(str, idx+1,newString);
        
    //    }else{
    //     newString+=currChar;
    //     map[currChar-'a']=true;
    //     removeDuplicates(str, idx+1,newString);
    //    }
    //      }
    // public static void main(String[] args) {
    //     String str="abbccda";
    //     removeDuplicates(str, 0, "");
    // }
   

    //all subsequences of a string
    // 
    
    //print all unique subsequences
    // public static void subsequences(String str, int idx,String newString,HashSet<String>set){
    //     if(idx==str.length()){
    //         if(set.contains(newString)){
    //             return;
    //         }else{
    //             System.out.println(newString);
    //             set.add(newString);
    //             return;
    //         }
            
    //     }
    //     char currChar=str.charAt(idx);
    //     //to be
    //     subsequences(str, idx+1, newString+currChar,set);

    //     //to not be
    //     subsequences(str, idx+1, newString,set);

    // }
    // public static void main(String[] args) {
    //     String str="aaa";
    //     HashSet<String>set =new HashSet<>();
    //     subsequences(str, 0,"",set);
        
    // }


    //keypad combination
    // public static String[] keypad ={".","abc","def","ghi","jkl","mno","pqrs","tu","vwx","yz"};

    // public static void printComb(String str,int idx,String combination){
    //     if(idx==str.length()){
    //         System.out.println(combination);
    //         return;
    //     }
    //     char currChar =str.charAt(idx);
    //     String mapping =keypad[currChar-'0'];

    //     for(int i=0;i<mapping.length();i++){
    //         printComb(str, idx+1, combination +mapping.charAt(i));
    //     }
    // }

    // public static void main(String[] args) {
    //     String str="4";
    //     printComb(str, 0, "");
    // }
    
////print all permutations of string

    // public static void printPerm(String str,String permutation){
    //     if(str.length()==0){
    //         System.out.println(permutation);
    //     }
    //     for(int i=0;i< str.length();i++){
    //         char currChar =str.charAt(i);
    //         String newStr=str.substring(0,i)+str.substring(i+1);
    //         printPerm(newStr, permutation+currChar);


    //     }

    // }
    // public static void main(String[] args) {
    //     String str="abc";
    //     printPerm(str, "");
    // }

    //count in a maze (0,0)to (n,m)

//     public static int countPaths(int i,int j,int n,int m){
//         if(i==n || j==m){
//             return 0;
//         }
//         if(i==n-1 &&j==m-1){
//             return 1;
//         }
//         //move down
//         int downPaths = countPaths(i+1, j, n, m);
//         //move right
//         int rightPaths=countPaths(i, j+1, n, m);
//         return downPaths +rightPaths;

//    }

//     public static void main(String[] args) {
//         int n=3,m=3;
//        int totalPaths= countPaths(0, 0, n, m);
//        System.out.println(totalPaths);
        
//     }


//place tiles of size 1 * m in a floor  of size n * m

// public static int placeTiles(int n,int m){

//     if(n==m){
//         return 2;

//     }
//     if(n<m){
//         return 1;
//     }
//     //vertical
//     int vertPlacements = placeTiles(n-m, m);

//     //horizontal
//     int horPlacements =placeTiles(n-1, m);
//     return vertPlacements+horPlacements;
// }

// public static void main(String[] args) {
//     int n=4,m=2;
//     System.out.println(placeTiles(n, m));
// }


///no of ways invite n people single or pair

// public static int callGuests(int n){
//     if(n<=1){
//         return 1;
//     }
//     //single
//     int ways1 = callGuests(n-1);
//     //pair
//     int ways2= (n-1) * callGuests(n-2);
//     return ways1 + ways2;

// }

// public static void main(String[] args) {
//     int n=4;
//     System.out.println(callGuests(n));
// }

//print subset of n natural no
public static void printSubset(ArrayList<Integer> subset){
 for(int i=0;i<subset.size();i++){
    System.out.println(subset.get(i)+" ");
 }
 System.out.println();
}
public static void findSubsets(int n, ArrayList<Integer> subset){
    if(n==0){
        printSubset(subset);
        return;
    }
    //add
    subset.add(n);
    findSubsets(n-1, subset);
    // not add
    subset.remove(subset.size()-1);
    findSubsets(n-1, subset);
}
public static void main(String[] args) {
    int n=3;
    ArrayList<Integer> subset = new ArrayList<>();
    findSubsets(n, subset);
    
}
}
    
     
     

