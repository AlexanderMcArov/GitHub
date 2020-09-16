import React from 'react'
import './Inputs.css'

function Input() {

    let state = {
        input: ''
    }

    function submitInput(){
        console.log(state.input);
    }

    function changeInput(e) {
        const target = e.target;
        state.input = target.value;
        console.log(state.input);
    }

    return (
            <div className="input">
                <div className="col">
                    <div><input className="task_input" onChange={changeInput}></input></div>
                    <div className="jcc btn_m">                        
                        <div><button className="btn add" onClick={submitInput}>Add Task</button></div>
                    </div>
                </div>
            </div>
    )
}

export default Input
