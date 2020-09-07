let div_table = document.querySelectorAll('div.color')
let div_timer = document.querySelectorAll('div.timer')
// console.log(color);
// color[0].style.background = 'red'
// console.log(color[0].style.background);
let colors = ['red','yellow','green']
let i = div_table.length-1
let count = 0
setInterval(()=>{        
    div_timer[0].innerText = count 
    count++
},1000)
setInterval(()=>{   
    count = 0 
    if(i < div_table.length-1) div_table[i+1].style.background = 'white'
    if(i == -1) i = div_table.length - 1
    div_table[i].style.background = colors[i]
    i--
    console.log('Interval');
},3000)


