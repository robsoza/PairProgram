import React from 'react';
import './FormComp.css';

function FormComp(props) {

    function onSave(){

        function focusElement(name) {
            const el = document.querySelector(`[name=${name}]`);
            el.focus();
            el.select();
    }
        // Get all the input values into a person object to save
        const nodeToSave = {};
   
        const inputs = document.getElementsByTagName('input');

        for(let i = 0; i < inputs.length; i++) {
            nodeToSave[inputs[i].name] = inputs[i].value;
        }

        // Do some simple validation
        try {
            if(!nodeToSave.subject)  {
                focusElement('subject');
                throw new Error('subject can not be blank');
            }
            if(!nodeToSave.amount) {
                focusElement('amount');
                throw new Error('amount can not be blank');
            }

            props.onSave(nodeToSave);
            props.userMsg("Saved","status");
        } catch (e) {
            // console.log(e);
            props.userMsg(e.message, "error");
        }

    }


    function onClick(e) {
        props.onClick(e.target.textContent);
    }

    return (
        <div className="LinkedList" >
            <h1> LinkedList </h1>
            <div>
                <label>Enter subject & amount:</label>
                <input
                    name="subject"
                    placeholder='subject...'
                />
                <input
                    name="amount"
                    placeholder='amount...'
                /> <br />
                <button onClick={onSave}>Add</button> <br />
                <h3> {props.node} </h3><br />
                <button onClick={onClick}>First</button>
                <button onClick={onClick}>Previous</button>
                <button onClick={onClick}>Next</button>
                <button onClick={onClick}>Last</button>
                <button onClick={onClick}>Delete</button>
                
            </div>
        </div>
    )
}

export default FormComp;