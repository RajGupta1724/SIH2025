

//   public void write (){
//     System.out.println("writing something");
//   }
//   public void printColor() {
//     System.out.println(this.color);
//   }

// }
// class Student {
//   String name;
//   int age;
//   public void printInfo(String name) {
//     System.out.println(name);
//   }
//   public void printInfo(int age){
//     System.out.println(age);
//   }
//   public void printInfo(String name,int age){
//     System.out.println(name+" "+age);
  

//   }



// //   public void printInfo() {
// //     System.out.println(this.name);
// //     System.out.println(this.age);


// //   }
// //   Student(Student s2) {
// //     //System.out.println("constructor called");
// //     this.name=s2.name;
// //     this.age=s2.age;

// //   }
// //   Student(){

// //   }
//  }
// public class oops {

//   public static void main(String[] args) {
//     // Pen pen1 =new Pen();
//     // pen1.color="blue";
//     // pen1.type="gel";

//     // Pen pen2 =new Pen();
//     // pen2.color ="black";
//     // pen2.type="ballpoint";

//     // pen1.printColor();
//     // pen2.printColor();

//     ///
//     // Student s1 = new Student();
//     //  s1.name ="RAJ";
    // s1.age=24;
    //  s1.printInfo(s1.name,s1.age);
    // Student s2 =new Student(s1);
    // s1.printInfo();;
//   }
  
// }


// /////inheritance
// import java.util.*;

// import Bank.*;;

// class Shape{
//   public void area(){
//     System.out.println("displays");
//   }

  

// }
// class Triangle extends Shape {
//   public void area(int l,int h){
//     System.out.println(1/2*l*h);
//   }

//  }
//  class circle extends Shape{
//   public void area(int r){
//     System.out.println((3.14)*r*r);
//   }
//  }

// public class oops {
//   public static void main(String[] args) {
//    Bank.Account account1 =new Bank.Account();
//    account1.name="customer1";
//   //   Triangle t1=new Triangle();
//   //  t1.color="red"; 
//   }
// }


//abstraction
//abstract class Animal {
//  abstract public void walk();
//  Animal() {
//   System.out.println("you are creating a new animal");
//  }
//  public void eat(){
//   System.out.println("animal eats");
//  }

// }
// class Horse extends Animal {
//   Horse() {
//     System.out.println("created a Horse");
//   }
//    public void walk() {
//     System.out.println("walk on 4 legs");
//    }
// }
// class Chicken extends Animal {
//   public void walk() {
//     System.out.println("walk on 2 legs");
//    }
// }
// public class oops {
//   public static void main(String[] args) {
//     Horse horse =new Horse();
//     // horse.walk();
//     // horse.eat();
//     // Animal animal =new Animal();
//     //      animal.walk(); //not create
//   }
// }


///interfaces

// interface Animal {
//  void walk();
 
// }
//  interface Herbivore {

//  }
// class Horse implements Animal,Herbivore {
//   public void walk(){
//     System.out.println("walk on 4legs");

//   }
// }
// public class oops {
 
//   public static void main(String[] args) {
//     Horse horse = new Horse();
//     horse.walk(); 
//   }
  
// }

//static 

class Student {
  String name;
  static String school;
  public static void changeSchool(){
    school="newschool";
  }
}

public class oops {

  public static void main(String[] args) {
    Student .school="avm";
    Student student1= new Student();
    student1.name="tony";
    System.out.println(student1.school);
    System.out.println(student1.name);
  }
}