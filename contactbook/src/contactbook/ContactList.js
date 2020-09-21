import React, { useState , useEffect} from 'react'
import ContactItem from './ContactItem'

function ContactList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/contacts")
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="contact_list">
                <div className="col">
                    {items.map((item,index)=>{
                        return <ContactItem key={index} data={item}/>
                    })}
                </div>
            </div>
        );
    }
    
}

export default ContactList
