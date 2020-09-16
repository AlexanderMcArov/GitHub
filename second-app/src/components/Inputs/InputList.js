import React from 'react'
import InputItem from './InputItem'

import './Inputs.css'

function Inputs() {
    let classlist = ['inputs_list']
    
    return (
        <div className={classlist.flat(' ')}>
            <InputItem />
            <InputItem />
            <InputItem />
            <button className="btn send" onClick="">Send</button>
        </div>
    )
}

export default Inputs
