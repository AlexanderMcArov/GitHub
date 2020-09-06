// Создайте обработчик нажатия на кнопку, который будет менять цвет фона
// страницы.
//Task-1
$(document).ready(function(){
//     let body = $('body')
//     $('#btn').on('click',function(){
//     $('body').css('background-color','#f00');
//     });

//Создайте HTML-форму и по нажатию на кнопку проверяйте заполненность всех
//полей. Если останутся незаполненные поля — выводите предупреждение и не
//отправляйте форму.
//Task-2
//  let btn = $('#btn')
//  $('#btn').on('click',function(){
//     let inp_f = $('#FirstName')
//     let inp_l = $('#LastName')
//     if (!inp_f.value || !inp_l.value) alert('Вы не ввели данные')
//      else alert ('Вы ввели правильно данные')
    
//  });
 //Создайте обработчик события на нажатие кнопок направлений (влево, вправо) так,
//чтобы HTML-элемент при однократном нажатии на кнопку анимированно сдвигался
//влево или вправо на 100px
//Task-3
let motion = $('#Motion')
let Left = $('#MovingButton1')
let Right = $('#MovingButton2') 
motion.css({"position": "absolute","top": "50%","left":'400px'})       
    Left.on('click',() => {
        motion.css('left',parseInt(motion.css('left')) - 100 + 'px')    
        });
    Right.on('click',() => {
        motion.css('left',parseInt(motion.css('left')) + 100 + 'px' )     
        });

// Task -4 Навесьте на событие движения мыши обработчик, который будет в консоль
// выводить координаты движения. Примечание: выводите их как x и y. Событие надо
// «повесить» на document
$(document).mousemove(function(e){
 $('div.X').text('event.pageX:' + event.pageX);
 $('div.Y').text('event.pageY:' + event.pageY);
});

//Task-5 Создайте модальное окно по аналогии с компонентом Bootstrap:
//http://getbootstrap.com/javascript/#modals
let btn = $('a.btn')
let modal = $('#modal')
let open = false
let grad = $('div.gradient')

btn.on('click',function(){
    if(open == false){
        open = !open
        grad.css('opacity','1')
    }else{
        open = !open
        grad.css('opacity','0')
    }
})

})


