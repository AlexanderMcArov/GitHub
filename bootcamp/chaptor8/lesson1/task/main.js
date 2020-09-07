let div_table = document.querySelectorAll('div.color')
let colors = ['red','yellow','green']
let i = div_table.length-1

setInterval(()=>{   
    if(i < div_table.length-1) div_table[i+1].style.background = 'white'
    if(i == -1) i = div_table.length - 1
    div_table[i].style.background = colors[i]
    i--
},3000)


