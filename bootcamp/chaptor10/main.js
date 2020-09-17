let box = document.querySelector('.box')
let btn_add = document.querySelector('#btn_add')
let inp_add = document.querySelector('#inp_add')

let list = [
    'Loopy',
    'Poooly',
    'Cheecked'
]

function main(){
    itemComponentList(list)
}

main()

function itemComponent(text,id){
    let div = document.createElement('div')
    div.classList.add('box_item')
    div.innerText = text

    let btn_del = document.createElement('button')
    btn_del.addEventListener('click',()=>{
        list.splice(id,1)
        itemComponentList(list)
    })
    btn_del.innerText = 'Delete'
    btn_del.classList.add('btn','delete')
    btn_del.setAttribute('id',id)

    let btn_edit = document.createElement('button')
    btn_edit.addEventListener('click',()=>{
        modalWindow(text,text,id)
        let inp = document.createElement('input')
        inp.value = text

        let btn_ok = document.createElement('button')
        btn_ok.innerText = 'OK'
        btn_ok.addEventListener('click',()=>{
            div.innerText = inp.value
            list[id] = inp.value
            inp.value = ''
            itemComponentList(list)
        })

        div.appendChild(inp)
        div.appendChild(btn_ok)        
    })

    btn_edit.innerText = 'Edit'
    btn_edit.classList.add('btn','edit')
    btn_edit.setAttribute('id',id)

    div.appendChild(btn_edit)
    div.appendChild(btn_del)
    return div
}

function itemComponentList(array){
    box.innerHTML = ''
    array.forEach((item,index) => {
        box.appendChild(itemComponent(item,index))
    });
}



btn_add.addEventListener('click',()=>{
    list.push(inp_add.value)
    inp_add.value = ''
    itemComponentList(list)
})

function modalWindow(title,body,id){    
    console.log(title,body,id);
    let modal = document.querySelector('.modal')
    modal.classList.remove('hidden')    
    let change_list = {
        id: id,
        title: modal.querySelector('.modal_window_title'),
        body: modal.querySelector('.modal_window_body')
    }
    change_list.title.innerText = `${title}`
    change_list.body.innerText = `${body}`
}