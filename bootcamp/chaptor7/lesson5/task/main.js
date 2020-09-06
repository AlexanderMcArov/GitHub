// Создайте обработчик нажатия на кнопку, который будет менять цвет фона
// страницы.

let body = $('body')
body.css('background','rgb(255,100,100')
console.log(body.css('background'));
console.log(body);
let btn_bg = $('#btn_bg')
btn_bg.on('click',function () {
    body.css('background',`rgba(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`)
    console.log(body.css('background'));
})

// Создайте HTML-форму и по нажатию на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение и не
// отправляйте форму.

let btn_form  = $('#btn_form')
let inp_fname = $('#fname')
let inp_lname = $('#lname')

btn_form.on('click',()=>{
    if(!inp_fname[0].value || !inp_lname[0].value) alert('Форма не заполнена.')
    else{
        alert(`FirstName: ${inp_fname[0].value} , LastName: ${inp_lname[0].value}`)
        let text = inp_fname[0].value + inp_lname[0].value
        console.log(text);
    }
})

// Создайте обработчик события на нажатие кнопок направлений (влево, вправо) так,
// чтобы HTML-элемент при однократном нажатии на кнопку анимированно сдвигался
// влево или вправо на 100px

let div_move = $('#div_move')
let btn_move_left = $('#btn_move_left')
let btn_move_right = $('#btn_move_right')
div_move.css('left',`${window.innerWidth / 2 - 100 + "px"}`)
function moveLeft(){
    pos = parseInt(div_move.css('left'))
    div_move.css('left',`${pos - 100 + 'px'}`)
    console.log(pos);
}
function moveRight(){
    pos = parseInt(div_move.css('left'))
    div_move.css('left',`${pos + 100 + 'px'}`)
    console.log(pos);
}

// Навесьте на событие движения мыши обработчик, который будет в консоль
// выводить координаты движения. Примечание: выводите их как x и y. Событие надо
// «повесить» на document

// let mouseMove = document.addEventListener('mousemove',function () {
//     console.log(`X : ${event.clientX} && Y : ${event.clientY}`);
// })

// Создайте модальное окно по аналогии с компонентом Bootstrap:

let modalWindow = $('div.modalWindow')
let modalBox = $('div.modal_box')
let btn_modal_window = $('#btn_modal_window')
let btn_close = $('#btn_close')
let btn_sub = $('#btn_sub')
let wclose = true

console.log(modalWindow)

btn_modal_window.on('click',()=>{
    modalWindow.css('display','block')
    modalBox.css('animation','modal 0.5s  linear 0s 1 normal forwards')
})
modalBox.on('mouseenter',()=>{
    console.log('MouseEnter');
    wclose = false
})
modalBox.on('mouseleave',()=>{
    console.log('MouseLeave');
    wclose = true
    
})
$(document).on('mouseup',()=>{
    if(wclose){
        modalWindow.css('display','none')
    }
})
btn_close.on('click',()=>{
    modalWindow.css('display','none')
})
btn_sub.on('click',()=>{
    let save = $('.modal_sub')
    console.log(save);
    save.text('Modal Access')
    modalWindow.css('display','none')
})

// После просмотра последнего видео урока, сделать контактную книжку с использованием
// localStorage. На подобии туду листа. Но уже с 3 инпутами(Ф, И и номер телефона)

let localBook = $('div.localBook')
let book_name = $('#book_name')
let book_number = $('#book_number')
let btn_book = $('#btn_book')
let book_content = $('div.book_content')
let list = ['','']

book_name.on('change',()=>{
    console.log(book_name[0].value);
    list[0] = book_name[0].value
})
book_number.on('change',()=>{
    console.log(book_number[0].value);
    list[1] = book_number[0].value
})
btn_book.on('click',()=>{
    if(!list[0] || !list[1]) return false
    localStorage.setItem(list[0],list[1])
    updatebook()
    list[0] = ''
    list[1] = ''
    book_name[0].value = ''
    book_number[0].value = ''   
})

function updatebook() {       
        book_content.text('')
        let a = JSON.stringify(localStorage)
        console.log(a);
        let b = JSON.parse(a)
        console.log(b);
        console.log(b.PODDUBNYI);
        let keys = Object.keys(localStorage);
        for(let key of keys) {
        let newElem = $('<div>', {
            'class': 'book_item',
            text: `Name: ${key} || Number: ${localStorage[key]}`
          })
        book_content.append(newElem)
        }
}

function clearbook() {
    localStorage.clear()
    book_content.text('')
}


// 7 TASK
let drag = $('.drag')
let mousemove = false
console.log(drag);
$.each(drag,function(index,item){
    item = $(item)    
    item.text('Ты можешь двигать меня мышкой :)')
    item.css('zindex',`${index + 1}`)
    item.on('mouseenter',()=>{
        console.log('Работает');
        item.on('mousedown',()=> mousemove = true)
        item.on('mouseup',()=> mousemove = false) 
        item.on('mousemove',()=>{
            if(mousemove){
                item.css('position', 'absolute')
                item.css('left', `${event.clientX - 100 + 'px'}`)
                item.css('top', `${event.clientY - 100 + 'px'}`)
            }
        })
        
    })
})       
   

// Task 9 - VOTE
let like_title = $('h4.like')
let btn_like = $('#btn_like')
let like_count = 0
like_title.text(like_count + ' Likes')
btn_like.on('click',function(){
    like_count++
    like_title.text(like_count + ' Likes')
})

let btn_vote = $('#btn_vote')


