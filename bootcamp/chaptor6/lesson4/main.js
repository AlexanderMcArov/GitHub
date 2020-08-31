// // // console.log(this);

// // // function myFunction() {
// // //     console.log(this);
// // //   }
  
// // //   // ������� �������
// // //   myFunction(); 






// // let dog = {
// //     name: 'Chester',
// //     breed: 'beagle',
// //     log: function(){
// //         console.log(this);
// //     }
// // };

// // dog.log();
  

// let obj1 = {
//     name: 'Loopy',
//     hello: function() {
//       console.log(this.name);
//       return this;
//     },
//     obj2: {
//         name: 'Pooly',
//         speak: function(){
//               console.log(this.name);
//               return this;
//           }
//       }
//   };
   
//   console.log(obj1.hello()); 
//   console.log(obj1.obj2.speak()); 

window.name = 'Arrow'

let objReg = {
    name: 'Ne Arrow',
    hello: function() {        
        return console.log(this.name);
    }
};

let objArrow = {
    name: 'Arrow2',
    hello: () => console.log(this.name)
};

objReg.hello(); 
objArrow.hello(); 

// // // console.log('Week6 LEsson4');

// // // let string = 'String'

// // // let id = Symbol('id')
// // // let id2 = Symbol('id')

// // // console.log(id);
// // // console.log(id2);

// // // let obj = {
// // //     name: 'Kubat',
// // //     age: 20
// // // }

// // // let arr = [1,2,3,4,5,6]
// // // for(let key in arr){
// // //     console.log(arr[key],key)
// // // }

// // // let arr2 = [10,2,30,4,34,421]

// // // for(let elem of arr2){
// // //     console.log(elem,'elem');
// // // }

// // // function example1(a) {
// // //     return a
// // // }

// // // let example2 = function (a) {
// // //     return a
// // // }

// // // let example3 = (a) => {
// // //     return a
// // // }

// // // console.log(example2('TEst'));


// // // let obj2 = {
// // //     age:24,
// // //     sayAge(){
// // //         console.log(this.age);
// // //     }
// // // }

// // // let obj3 = {
// // //     name: ' Sanya',
// // //     ...obj2
// // // }

// // // obj3.sayAge()

// // // let arrow = (a,b,c) => {
// // //     console.log(a + b + c);
// // // }

// // // arrow(1,2,3)

// // // let arr4 = [1,2,3,4,5,6,7,8]

// // // arr4.map(item => {
// // //     console.log(item);
// // // })


// // // // 0 0 0 0 0 4
// // // let clouds = [0, 0, 1, 0, 0, 1, 0]
// // // let step = 0
// // // for(let i = 0; i < clouds.length; i++){

// // // }


// // // // // почему не работает счетчик второй слайд


// // // // let test = 'test';

// // // function func1(a) {
// // //     let c = a + a
// // //     return c
// // // }

// // // console.log('func1 ',func1(9));

// // // function func2(p) {
// // //     let u = p + 7
// // //     return u
// // // }

// // // console.log('func2',func2(8));

// // // console.log(func1(17));

// // // console.log('text'
// // function a(a) {
// //     return 5 + a
// // }
// // function b() {
// //     return 10/2
// // }
// // let b
// // let c = a(b()) + b()
// // console.log(c);
// let aar = [1,2,3,4,5,6,7,'String']
// console.log(aar.find(item => item == 5));

// console.log(aar.includes(5));


// let y = aar.reduce((a,b) => {
//     return a - b
// })

// console.log(y);

// let a = (a => a + a)

// console.log(a(5));


// function name(params) {
//     return a + a
// }


// let obj23 = {
//     ldsadsadsadsa(){
//         return 'OBJ23'
//     }
// }

// console.log(obj23.ldsadsadsadsa());



// let oppdsap = {
//     name: 'Rinat',
//     age: 23,
//     category: 0,
//     sayAge(){
//         return this.age
//     }
// }

// console.log(oppdsap.sayAge());

// let p = item => item + item

// let z = 0;
// function func1(){
//     i = 0;
//     z++
//     console.log(z)
//     func1()
// }
// // func1()

// let dog = {
//     name: 'Chester',
//     breed: 'beagle',
//     intro: function(){
//       console.log(this);
//     }
//   };
  
//   dog.intro();
// function func() {
//     alert(this.name)
// }

// obj.f = func()

// console.log(this);