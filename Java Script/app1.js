// // // // // // const employee ={
// // // // // //   calcTax1(){
// // // // // //     console.log("tax rate is 10%");
  
// // // // // //   }
// // // // // // };
// // // // // // const karanArjun ={
// // // // // // salary:50000,
// // // // // // calcTax1(){
// // // // // //   console.log("tax rate is 20%");
// // // // // // },
// // // // // // };
// // // // // // karanArjun.__proto__=employee;

// // // // // //class

// // // // // class ToyataCar{
// // // // //   constructor(brand,mileage){
// // // // //     console.log("creating new object");
// // // // //     this.brand=brand;
// // // // //     this.mileage=mileage;
// // // // //   }
// // // // //   start(){
// // // // //     console.log ("start");
// // // // //   }
// // // // //   stop(){
// // // // //     console.log("stop");
// // // // //   }
// // // // // }

// // // // // let fortuner = new ToyataCar("fortuner",10);
// // // // // console.log(fortuner);
// // // // // //fortuner.setBrand("fortuner");
// // // // // let lexus = new ToyataCar("lexus",12);
// // // // // console.log(lexus);
// // // // // //lexus.setBrand("lexus");

// // // // //inheritance


// // // // class Person {
// // // //   constructor(name){

// // // //     //console.log("enter parent constructor");
// // // //     this.species ="homo sapiens";
// // // //     this.name=name;
// // // //   }
// // // //   eat(){
// // // //     console.log("eat");
// // // //   }
// // // //   // sleep(){
// // // //   //   console.log("sleep");
// // // //   // }
// // // //   // work(){
// // // //   //   console.log("do nothing");
// // // //   // }
// // // // }
// // // // class Engineer extends Person{
// // // //   constructor(name){
// // // //    // console.log("  enter child constructor;")
// // // //     super (name);//invoke parent class const
// // // //   //  this.branch =branch;
// // // //    // console.log("exit child constructor")
// // // //   }
// // // //   work(){
// // // //     super.eat();
// // // //   console.log("solve problems, build something");
// // // //   }
// // // // }
// // // // // class Doctor extends Person {
// // // // //   work(){
// // // // //     console.log("treat patients");
// // // // //   }
// // // // //}
// // // // let engObj =new Engineer("raj");



// // // practice question
// // let DATA ="secret information";
// // class User{
// // constructor(name,email){
// // this.name =name;
// // this.email=email;
// // }
// // viewData (){
// //   console.log("data=",DATA);
// // }
// // }

// // class Admin extends User{
// //   constructor(name,email){
// // super(name,email);
// //   }
// //   editData(){
// //     DATA ="some new value";
// // }
// // }

// // let student1 =new User("raj","raj1708@gmail.com");
// // let student2  =new User("shradha","aman@14gmail.com"); 

// // let teacher1 =new User("dean", "deancollege@gmail.com");

// // let admin1 =new Admin("admin","admin@gmail.com");



// //errror handling
// let a=5;
// let b=10;
// console.log("a =",a);
// console.log("b =",a);
// try {
//   console.log("a+b =",a+c);//error
// }catch (err){
// console.log(err);
// }

// console.log("a +b=",a+b);
// console.log("a +b=",a+b);
// console.log("a +b=",a+b);

