import React from 'react'
import './form.css'

export default function Form(props) {

    return (
        <div className='main-form-cont'>
            <div className='half-inputs'>
                <input className='half-input-login' placeholder='Name'/>        
                <input className='half-input-email' placeholder='Your mail'/>
            </div>
                    
 
            <input className='textarea-input' placeholder='Type your message'/>
            <button className='send-msg-btn'>SEND MESSAGE</button>
        </div>
    )
}
