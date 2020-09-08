// // console.log('Json-Sever');

// // // fetch('http://localhost:3000/todos')
// // //     .then(res => res.json())
// // //     .then(data => console.log(data))
// // //     .catch(rej => console.log(rej.message))
// // fetchXML('GET','http://localhost:3000/todos')

// // let data = JSON.stringify({
// //     name:'SanyaPHONE',
// //     status: false,
// //     // hello: 'Hello World'
// // })
// // // fetchXML('POST','http://localhost:3000/todos',data)
// // // fetchXML('PUT','http://localhost:3000/todos/2',data)
// // // fetchXML('PATCH','http://localhost:3000/todos/2',data)
// // // fetchXML('DELETE','http://localhost:3000/todos/1')


// // function fetchXML(method,url,data) {
// //     const xhr = new XMLHttpRequest()
// //     xhr.open(method,url)
// //     xhr.setRequestHeader('Content-Type','application/json')
// //     xhr.send(data)

// //     xhr.onload = function(){
// //         if(xhr.status < 200 || xhr.status > 299){
// //             alert(`Что-то пошло не так. 
// //             Error: ${xhr.status} - ${xhr.statusText}`)
// //             return
// //         }
// //         console.log();
// //         renderToDo(JSON.parse(xhr.response))
// //         // document.querySelector('h1').innerText = JSON.parse(xhr.response)[0].title
        
// //     }
// //     xhr.onerror = function(){
// //         console.log('Error:',xhr.onerror);
// //         // JSON.parse(xhr.onerror)
// //     }
// //     return
// // }

// let list = document.querySelector('#list')

function addItemList(id,title,status){
    const elem = document.createElement('li')
    const btn = document.createElement('button')
    elem.innerText = id + ' '
    elem.innerText = title
    let text = document.createElement('h1').innerHTML = '<h1>Button</h1>'
    btn.appendChild(text)
    elem.appendChild(btn)
    list.appendChild(elem)
}

// function renderToDo(arr) {
//     list.innerHTML = '';
//     arr.forEach(item => {
//         addItemList(item.id,item.title,item.status)
//     })
// }


// // addItemList(0,'Hello',true)
// // addItemList(0,'Hello',false)
// // addItemList(0,'Hello',true)
// function getTodos() {
//     fetch('http://localhost:3000/todos')
//     .then(res => res.json())
//     .then(data=>renderToDo(data))
// }

// getTodos()

// window.addEventListener('click',(event)=>{
//     if(event.target.tagName == 'LI'){
//         const id = event.target.getAttribute("data-id")
//         const status = JSON.parse(event.target.getAttribute('data-status'))
//         fetch("http://localhost:3000/todos/"+id,{
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'applicationQ/json'
//             },
//             body: JSON.stringify({
//                 status: !status
//             })
//         })
//         .then(getTodos)
//         .catch((err)=>console.log(err))
//     }else if(event.target.tagName == 'BUTTON'){
//         const id = event.target.getAttribute("data-id")
//         const status = JSON.parse(event.target.getAttribute('data-status'))
//         console.log(id);
//         fetch("http://localhost:3000/todos/"+id,{
//             method: 'DELETE'
//         })
//         .then(getTodos)
//         .catch((err)=>console.log(err))
//     }
// })

// const $inp = $('#title')
// const $form = $('#myform')

// $form.on('submit',(e)=>{
//     let title = $inp.val()
//     $.ajax({
//         url: 'http://localhost:3000/todos',
//         method: 'POST',
//         data: {
//             title: title,
//             status: true
//         }
//     })  
// })

