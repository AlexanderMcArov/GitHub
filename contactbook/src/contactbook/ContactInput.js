import React, {useState} from 'react'
import ContactList from './ContactList'

function ContactInput() {

    let [name,setName] = useState('')
    let [sname,setSname] = useState('')
    let [number,setNumber] = useState('')
    let [email,setEmail] = useState('')
    let [update,setUpdate] = useState(false)    

    function addItem(){
        console.log(name,sname,number,email);
        fetch('http://localhost:8000/contacts',{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                name,
                sname,
                number,
                email
            })            
        })
        .then(res=>{
            setUpdate(!update)
            console.log(update);
        })
    }

    return (
        <div className="contact__input">
            <div className="input_list">
                <div className="col">
                    <label for="name">Name</label><input value={name} onChange={e=>setName(e.target.value)}/>
                    <label for="name">SurName</label><input value={sname} onChange={e=>setSname(e.target.value)}/>
                    <label for="name">Number</label><input value={number} onChange={e=>setNumber(e.target.value)}/>
                    <label for="name">Email</label><input value={email} onChange={e=>setEmail(e.target.value)}/>
                    <button className="inp_btn" onClick={addItem}>ADD</button>
                    <span className="hr"></span>
                    <ContactList update={update}/>
                </div>
            </div>                
        </div>
    )
}

export default ContactInput
