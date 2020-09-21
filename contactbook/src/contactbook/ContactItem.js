import React from 'react'

function ContactItem(props) {
    let data = props.data
    return (
        <div className="contact_item">
            <div className="col">
                <div className="item_list">
                    <div>Contact ID: <span>{data.id}</span></div>
                    <div>Name: <span>{data.name}</span></div>
                    <div>Surname: <span>{data.surname}</span></div>
                    <div>Number: <span>{data.number}</span></div>
                    <div>Email: <span>{data.email}</span></div>
                    <div className="row bt">
                        <button className="btn_item edit">Edit</button>
                        <button className="btn_item delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
