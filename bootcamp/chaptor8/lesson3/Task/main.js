console.log('Contact book');

let server_url = 'http://localhost:8000/todos'

let contacts_list = document.querySelector('.contacts-list')
let inp_list = document.querySelectorAll('input.form_input')
let h4_err = document.querySelector('H4.err')

//MAIN

getJSONContacts()

// FUNCTIONS 
function addItemBook(name,number,id) {
    let list_item = document.createElement('div')
    list_item.classList.add('list-item', 'row')
    list_item.setAttribute('data-id',id)

    let item_text = document.createElement('div')
    item_text.classList.add('item-text')
    item_text.innerText = `Name: ${name}, Number: ${number}`

    let btn_edit = document.createElement('button')
    btn_edit.classList.add('btn', 'btn-edit')
    btn_edit.setAttribute('id','btn-edit')
    btn_edit.innerText = 'EDIT'

    let btn_remove = document.createElement('button')
    btn_remove.classList.add('btn', 'btn-remove')
    btn_remove.innerText = 'REMOVE'
    btn_remove.setAttribute('id','btn-remove')

    list_item.appendChild(item_text)
    list_item.appendChild(btn_edit)
    list_item.appendChild(btn_remove)

    contacts_list.appendChild(list_item)
}
function editItemBook(id) {
    let modal = document.querySelector('div.modal')
    modal.classList.remove('d-none')
    let inp_modal = document.querySelector('input#inp_modal')
    let inp_modal_num = document.querySelector('input#inp_modal_num')
    fetch(server_url+'/'+id)
        .then(res=> res.json())
        .then(data=>{
            inp_modal.value = data.title
            inp_modal_num.value = data.number
        })    
    let btn_ok = document.querySelector('button#btn-ok')
    btn_ok.addEventListener('click',function(){
        fetch(server_url + '/' + id,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: inp_modal.value,
                number: inp_modal_num.value
            })                
        })
        .then(res => {        
            inp_modal.value = ''
            inp_modal_num.value = ''
            getJSONContacts()
            id = -1 
        })
        .catch(rej => {
            h4_err.innerText = rej
        })        
        modal.classList.add('d-none')        
    })// event   

}
function deleteItemBook(id) {
    fetch(server_url+'/'+id,{
        method: 'DELETE'
    })
    .then(res=> getJSONContacts())
    .catch(rej=>console.log('Not a found element',id,'id'))
    
}

function addItemsBook(data){
    for(let a of data){
        addItemBook(a.title,a.number,a.id)
    }
}
function getJSONContacts(){
    
    fetch(server_url)
        .then(res=> res.json())
        .then(data=> {
            contacts_list.innerHTML = ''
            addItemsBook(data)  
        })
        .catch(rej => h4_err.innerText = rej)
}

// EVENTS
document.addEventListener('click',function(){
    if(event.target.getAttribute('id') == 'btn-add'){
        if(inp_list[0].value == '' || inp_list[1].value == ''){
            h4_err.innerText = 'Заполнены не все поля.'
        }else{
            h4_err.innerText = ''
            console.log('BUTTON: ADD');
            fetch(server_url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: inp_list[0].value,
                    number: inp_list[1].value
                })                
            })
            .then(res =>{
                addItemBook(inp_list[0].value,inp_list[1].value)
            })
            .catch(rej => {
                h4_err.innerText = rej
            })
        }        
    }else if(event.target.getAttribute('id') == 'btn-update'){
        console.log('BUTTON: UPDATE');
        h4_err.innerText = ''
        getJSONContacts()            
    }else if(event.target.getAttribute('id') == 'btn-edit'){
        console.log('BUTTON: EDIT');
        console.log(event.target.parentElement.innerText,event.target.parentElement.getAttribute('data-id'));
        editItemBook(event.target.parentElement.getAttribute('data-id'))
    }else if(event.target.getAttribute('id') == 'btn-remove'){
        console.log('BUTTON: REMOVE');
        console.log(event);
        deleteItemBook(event.target.parentElement.getAttribute('data-id'))
    }else if(event.target.getAttribute('id') == 'btn-cancel'){
        console.log('BUTTON: CANCEL');
        let a = document.querySelector('div.modal')
        a.classList.add('d-none')
    }//else if
})
