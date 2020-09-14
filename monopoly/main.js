let list_items = document.querySelectorAll('.item')
console.log(list_items);
let color = ['#A14418','#fff','#A14418','#fff','#fff','#A39D9B','#fff','#A39D9B','#A39D9B','#B108F5','#fff','#B108F5','#B108F5',
'#F58908','#fff','#F58908','#F58908','#F52508','#fff','#F52508','#F52508']


let i = 0
list_items.forEach(item=>{
    item.innerHTML = ''
    let title = document.createElement('div')
    title.classList.add('item_title')
    // title.style.background = color[i]
    title.innerText = i
    item.appendChild(title)
    i++
    // i == color.length ? i = 0 : ''
})
i = 0
