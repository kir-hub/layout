import React from 'react'
import './form.css'

export default function Form(props) {

    return (
        <div className='main-form-cont'>
            <div className='half-inputs'>
                <input className='half-input' placeholder='Name'/>        
                <input className='half-input' placeholder='Your mail'/>
            </div>
                    
 
            <textarea className='textarea-input' placeholder='type your message'/>
            <button className='send-msg-btn'>SEND MESSAGE</button>
        </div>
    )
}
