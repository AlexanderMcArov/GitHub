// document.addEventListener('click',()=>{
//     alert('ТОже Работает')
// })

// let $btn = $('.btn')
// let p1 = $('.p1')
// let div = $('.div')

// $btn.on('click',function(){
//     console.log('$btn clicked');
//     console.log(this);
//     if(this !== event.target) return
// })
// p1.on('click',function(){
//     if(this !== event.target) return
//     console.log('p1 clicked');
// })
// div.on('click',function(){
//     if(this !== event.target) return
//     console.log('div clicked');
//     console.log(event.target,event.currentTarget);
// })
// $(window).on('click',function(){
//     if(this !== event.target) return
//     console.log('window clicked');
// })

// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click',function () {
//    console.log(this.id);
// },true)
// document.querySelector('#wrapper').addEventListener('click',function () {
//    console.log(this.id);
// },true)
// document.addEventListener('click',function () {
//    console.log('document');
// },true)
// btn2.addEventListener('click',function () {
//    console.log(this.id);
// },true)

btn1.addEventListener('click',function () {
    event.preventDefault()
    console.log('form');
    console.log(event);
})

for(var i=0; i<10; i++) {} console.log(i); 