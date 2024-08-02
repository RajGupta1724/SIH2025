// // // console.log("one");
// // // console.log("two");

// // setTimeout(()=>{
// //     console.log("hello");
// // },4000);
// // console.log("three");
// // console.log("four");
// //     //timeout 2sec = 2000milisecond


// // function sum(a,b){
// //     console.log(a+b);
// // }
// // function calculator(a,b,sumCallback){
// //   sumCallback(a,b);
// // }

// // calculator(1,4,(a,b)=>{
// //     console.log(a+b)
// // })

// // const hello =()=>{
// //     console.log("hello");
// // };
// // setTimeout(hello,3000);

// //nesting

// // let age =19;
// // if (age >=18){
// //     if(age>=60){
// //         console.log("senior");
// //     }else {
// //         console.log("middle");
// //     }}
// //     else{
// //     console.log("child")

// // }


// // for (let i=0;i<=5;i++){
// //     let str ="";
// //     for (let j=0;j<=5;j++){
// //        str =str+j;
      
// //     }
// //     console.log(i,str);
// // }


// // function getData(dataId,getNextData){//2SEC
// //     setTimeout(()=>{
// //         console.log("data",dataId);    
// //         //getNextData();
// //         if(getNextData){
// //             getNextData();
// //         }
// //     },2000);
// //     //console.log("data",dataId);
// // }
// // ///allback hell
// // getData(1,()=>{
// //     console.log("getting data2 ....")
// //     getData(2,()=>{
// //         console.log("getting data3 ....")
// //         getData(3,()=>{
// //             console.log("getting data4 ....")
// //             getData(4)
// //         });
// //     });
// // });
// // //getData(2);
// // //getData(3);

// // //data1
// // //data2
// // //data3

// // // ///promises

// // let promise = new Promise((resolve,reject)=>{
// //     console.log("i ama a promise");
// //    // resolve("success");
// //     reject("some error occured");
// //});
// // function getData(dataId,getNextData){//2SEC
// //         return new Promise((resolve,reject)=>{
            
// //                     setTimeout(()=>{
// //                        console.log("data",dataId);   
// //                         resolve("success"); 
// //                         //getNextData();
                       
// //                         if(getNextData){
// //                             getNextData();
// //                         }
// //                     },3000);
// //         })
// //     }
// // //promise chain
// // console.log("getting data1....");
// // getData(1).then((res)=>{
// //     //console.log(res);
// //     console.log("getting data2....");
// //     return getData(2);
// //     }).then((res)=>{
// //         console.log("getting data3....");
// //         return getData(3);
// //     }).then((res)=>{
// //         console.log("success");
// //     })



// // const getPeomise =()=>{
// //    return  new Promise((resolve,reject)=>{
// //         console.log("i am a promise");
      
// //        resolve("success");
// //      //reject ("error")
// //     });
// // };
// // let promise =getPeomise();
// // promise.then   ((res)=>{
// //     console.log("promise fullfilled",res);
// // });

// // promise.catch((err)=>{
// //     console.log("reject",err)
// // })


// // function asyncFunc1(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //         console.log("some data1");
// //         resolve ("success");
// //         },3000);
// //     });
// // }

// // function asyncFunc2(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //         console.log("some data2");
// //         resolve ("success");
// //         },6000);
// //     });
// // }
// // console.log("fetching data1...");
// // asyncFunc1().then((res)=>{



// //     console.log("fetching data2....");
// //     asyncFunc2().then((res)=>{});



// // });



// // async function hello(){
// //     console.log("hello");
// // }

// // function api(){
// //     return new Promise((resolve,reject)=>{
// //        setTimeout(() => {
// //         console.log("weather data ");
// //         resolve (200);
// //        }, 2000);
// //     });
// // }
// //    async function getWeatherData(){
// //     await api();//1st
// //     await api();//2nd
// //    }

// function getData(dataId){//2SEC
//             return new Promise((resolve,reject)=>{
                
//                  setTimeout(()=>{
//                console.log("data",dataId);   
//                 resolve("success"); 
//                         },2000);
//             });
//         }
// ///async -await
// async function getAllData(){
//     console.log("getting data1....");
//     await getData(1);
    
//     console.log("getting data12....");
//     await getData(2);
    
//     console.log("getting data3....");
//     await getData(3);
// }


// (async function (){
//     console.log("getting data1....");
//     await getData(1);
    
//     console.log("getting data12....");
//     await getData(2);
    
//     console.log("getting data3....");
//     await getData(3);
// })();


// //callback hell

// // getData(1,()=>{
// //     console.log("getting data2...");
// //     getData(2,()=>{
// //         console.log("getting data3...");
// //         getData(3,()=>{
// //             console.log("getting data4...");
// //             getData(4);
// //         })
// //     })
// // })
let n=5;
console.log("print number",n)
