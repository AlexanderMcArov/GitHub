// Создайте обработчик нажатия на кнопку, который будет менять цвет фона
// страницы.

let body = document.querySelector('body')
let btn_bg = document.querySelector('#btn_bg')
btn_bg.addEventListener('click',function () {
    if(body.style.background == '') body.style.background = '#ff0000'
    else if(body.style.background == 'rgb(255, 0, 0)') body.style.background = '#00ff00'
    else if(body.style.background == 'rgb(0, 255, 0)') body.style.background = '#0000ff'
    else if(body.style.background == 'rgb(0, 0, 255)') body.style.background = '#ff0000'
    console.log(body.style.background);
})

// Создайте HTML-форму и по нажатию на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение и не
// отправляйте форму.

let btn_form  = document.querySelector('#btn_form')
let inp_fname = document.querySelector('#fname')
let inp_lname = document.querySelector('#lname')

btn_form.addEventListener('click',()=>{
    // console.log(inp_fname.value);
    if(!inp_fname.value || !inp_lname.value) alert('Форма не заполнена.')
    else{
        alert(`FirstName: ${inp_fname.value} , LastName: ${inp_lname.value}`)
        let text = inp_fname.value + inp_lname.value
        console.log(text);
    }
})

// Создайте обработчик события на нажатие кнопок направлений (влево, вправо) так,
// чтобы HTML-элемент при однократном нажатии на кнопку анимированно сдвигался
// влево или вправо на 100px
console.log(this);
let div_move = document.querySelector('#div_move')
let btn_move_left = document.querySelector('#btn_move_left')
let btn_move_right = document.querySelector('#btn_move_right')
div_move.style.left = window.innerWidth / 2 - 100 + "px"
function moveLeft(){
    pos = parseInt(div_move.style.left)
    div_move.style.left = pos-100+'px'
    console.log(pos);
}
function moveRight(){
    pos = parseInt(div_move.style.left)
    div_move.style.left = pos+100+'px'
    console.log(pos);
}

// Навесьте на событие движения мыши обработчик, который будет в консоль
// выводить координаты движения. Примечание: выводите их как x и y. Событие надо
// «повесить» на document

// let mouseMove = document.addEventListener('mousemove',function () {
//     console.log(`X : ${event.clientX} && Y : ${event.clientY}`);
// })

// Создайте модальное окно по аналогии с компонентом Bootstrap:

let modalWindow = document.querySelector('div.modalWindow')
console.log(modalWindow)
modalWindow.style.display = 'none'

