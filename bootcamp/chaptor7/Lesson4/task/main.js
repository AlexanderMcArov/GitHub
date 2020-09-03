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
let modalBox = document.querySelector('div.modal_box')
let btn_modal_window = document.querySelector('#btn_modal_window')
let btn_close = document.querySelector('#btn_close')
let btn_sub = document.querySelector('#btn_sub')
let wclose = true

console.log(modalWindow)
modalWindow.style.display = 'none'

btn_modal_window.addEventListener('click',()=>{
    modalWindow.style.display = 'block'
    modalBox.style.animation = 'modal 0.5s  linear 0s 1 normal forwards'
})
modalBox.addEventListener('mouseenter',()=>{
    console.log('MouseEnter');
    wclose = false
})
modalBox.addEventListener('mouseleave',()=>{
    console.log('MouseLeave');
    wclose = true
    
})
document.addEventListener('mouseup',()=>{
    if(wclose){
        modalWindow.style.display = 'none'
    }
})
btn_close.addEventListener('click',()=>{
    modalWindow.style.display = 'none'
})
btn_sub.addEventListener('click',()=>{
    let save = document.querySelector('.modal_sub')
    save.innerHTML = 'Modal Access'
    modalWindow.style.display = 'none'
})

// После просмотра последнего видео урока, сделать контактную книжку с использованием
// localStorage. На подобии туду листа. Но уже с 3 инпутами(Ф, И и номер телефона)

let localBook = document.querySelector('div.localBook')
let book_name = document.querySelector('#book_name')
let book_number = document.querySelector('#book_number')
let btn_book = document.querySelector('#btn_book')
let book_content = document.querySelector('div.book_content')
let list = ['','']
let update_book = true
book_name.addEventListener('change',()=>{
    console.log(book_name.value);
    list[0] = book_name.value
})
book_number.addEventListener('change',()=>{
    console.log(book_number.value);
    list[1] = book_number.value
})
btn_book.addEventListener('click',()=>{
    if(!list[0] || !list[1]) return false
    // let newElem = document.createElement('div')
    // newElem.classList.add('book_item')
    // newElem.innerText = `Name: ${list[0]} || Number: ${list[1]}`
    // book_content.appendChild(newElem)
    localStorage.setItem(list[0],list[1])
    update_book = true
    updatebook()
    list[0] = ''
    list[1] = ''
    book_name.value = ''
    book_number.value = ''   
})

function updatebook() {       
    if(update_book){
        book_content.innerText = '' 
        let keys = Object.keys(localStorage);
        for(let key of keys) {
        let newElem = document.createElement('div')
        newElem.classList.add('book_item')
        newElem.innerText = `Name: ${key} || Number: ${localStorage[key]}`
        book_content.appendChild(newElem)
        }
    } 
    update_book = false
}

function clearbook() {
    localStorage.clear()
    book_content.innerText = ''
    update_book = true
}

let drag = document.querySelectorAll('div.drag')
console.log(drag);
drag = Object.keys(drag);
for(let key in drag){
    window[drag[key]] = drag[key].addEventListener('mouseenter',()=>{
        console.log(key);
    })
}
