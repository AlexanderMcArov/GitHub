document.addEventListener('DOMContentLoaded',function () {
    // function handle() {
    //     alert('Спасибо.')
    // }
    // function handle2() {
    //     alert('Спасибо 2 раза.')
    // }
    
    // let btn = document.querySelector('#btn')
    // btn.addEventListener('click', handle)
    // btn.addEventListener('click', handle2)
    // btn.removeEventListener('click',handle)
    // btn.addEventListener('click', function () {
    //     alert('CLICKED')
    //     console.log(event);
    // })
    
    // btn.onclick = () => alert('Zbtn')

    // let h1 = document.querySelector('h1')
    // let inp = document.querySelector('#inp')
    // // inp.addEventListener('change',function() {
    // //     console.log(inp.value);
    // //     h1.innerText = inp.value
    // //     inp.value = ''
    // //     console.log(event.timeStamp);
    // // })
    // // btn.addEventListener('click',function () {
    // //     h1.innerText
    // // // })
    // // inp.addEventListener('input',function() {
    // //     console.log(inp.value);
    // //     h1.innerText = inp.value * 5
    // //     // inp.value = ''
    // //     console.log(event.timeStamp);
    // // })

    // // document.addEventListener('keydown',function () {
    // //     console.log(event.key);
    // //     h1.innerText += event.key
    // // })

    // let div = document.querySelector('#div')
    // div.addEventListener('mousemove',function () {
    //     console.log(event);
    //     div.addEventListener('keydown',function(){
    //         console.log(event.key);
    //     })
    // })


    let btn = document.querySelector('#btn')
    let inp = document.querySelector('#inp')
    let div = document.querySelector('#container')

    // inp.addEventListener('input',function () {
    //     btn.addEventListener('click',function () {
    //         div.innerText = inp.value            
    //     })
    // })

    // function addElem() {
    //     let value = inp.value
    //     if(!value) return
    //     let newElem = document.createElement('div')
    //     newElem.innerText = value
    //     console.log(newElem);
    //     div.append(newElem)
    //     inp.value = ''
    // }

    // btn.addEventListener('click',addElem)
    // inp.addEventListener('change',addElem)

    document.addEventListener('mousemove',function (event) {
        // console.log(`${event.clientX} | ${event.clientY}`);
    })

    div.addEventListener('mouseenter',function () {

    })

    let btn1 = document.querySelector('#btn1')
    let btn2 = document.querySelector('#btn2')
    let event = new Event('click')
    btn1.addEventListener('click',function(){
        alert('BTN-1 CLICK')
    })
    btn2.addEventListener('click',function(){
        btn1.dispatchEvent(event)
    })

    
    

})

