import React from 'react'

export default function Form(props) {

    return (
        <div>
            <input className='half-input' placeholder='Name'/>        
            <input className='half-input' placeholder='Your mail'/>        
            <input className='textarea-input'/>
            <button className='send-msg-btn'>SEND MESSAGE</button>
        </div>
    )
}
