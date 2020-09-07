// // // // console.log('Chaptor 8 Lesson 1');

// // // // // function a1() {
// // // // //     console.log('Hello');
// // // // // }
// // // // // setTimeout(a1,1000)
// // // // // setTimeout(()=>{console.log('Hello 2000')},500)
// // // // // console.log('hellow 2')


// // // // setTimeout(()=>{
// // // //     console.log('2');
// // // //     setTimeout(()=>{
// // // //         console.log('1');
// // // //     },500)
// // // // },1000)
// // // // setTimeout(()=>{
// // // //     console.log('3');
// // // // },450)
// // // // setTimeout(()=>{
// // // //     console.log('4');
// // // // },350)

// // // const id = setTimeout(()=>{
// // //     console.log('Eto ne wiydet');
// // // },1000)
// // // const id2 = setTimeout(()=>{
// // //     console.log('Eto ne wiydet id 2');
// // // },1000)

// // // clearTimeout(id)


// // // console.log('1');
// // // setTimeout(()=>{
// // //     console.log('2');
// // // },0)
// // // console.log('3');

// // // let a = 0
// // // let ids = setInterval(() => {
// // //     $('body').text(a)
// // //     if(a == 6) clearInterval(ids)
// // //     a++
// // // }, 1000);


// //     // const p = new Promise((resolve,reject)=>{
// //     //     resolve('Hello')
// //     //         reject('Error')
// //     // })

// // // p
// // //     .then((promise) => {
// // //             promise
// // //                 .then((value)=>{
// // //                     console.log(value);
// // //         })
// // //     })
// // //     .catch((value) => {
// // //         value
// // //             .then((value)=>{
// // //                 console.log(value);
// // //             })
// // //         console.log(value);
// // //     })
// // //     .finally((  )=>{
// // //         console.log('Finally');
// // //     })


const pp = new Promise((res,rej) => {
    const obj = {
        json: () => new Promise((res,rej) => {
            // setTimeout(()=>{
            //     res('Hellow')
            //     rej('reg')
            // },1000)
        })
    }
    setTimeout(()=>{
        res(obj)
    },1000)
})

// // pp 
// //     .then((res)=>{
// //         return res.json()
// //     })
// //     .then((res)=>{
// //         console.log(res);
// //     })
// //     .catch((rej) => {
// //         console.log('Error');
// //     })

// // let [a,b] = [1,2]
// // try{
// //     console.log(a + b);
// // }catch{
// //     console.error('Не работает');
// // }

// let body = $('#btn')
// console.log(body);
// body.on('click',function(){
//     console.log('click');
// })

// const func = async (promise) => {
//     try {
//         const promise2 = await promise
//         const val = await promise2.json()
//         console.log(val);
        
//     } catch (e) {
//         console.log(e);
//     }
// }

// func(pp)
let a = async function(){
    console.log('Alert');
}
a()

fetch('http://35.224.200.162:4000/api/orders.json')
    .then(response=>{
        console.log(response);
        return response.json()
    })
    .then(data=>{
        console.log(data);
    })
    .catch(err => console.warn(err.message))


alert()
