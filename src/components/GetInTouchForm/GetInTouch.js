import React from 'react'
import Form from './Form'
import './form.css'

export default function GetInTouch() {


    return (
        <div className='get-in-touch-main-cont'>
            <div className='form-cont'>
                <h1>GET IN TOUCH</h1>
                <div className='p'>
                    <p>Lorem some text Lorem some text
                    Lorem some text Lorem some text Lorem some text
                    Lorem some text Lorem some textLorem some text Lorem some text
                    Lorem some text
                    </p>
                </div>
                
                <hr/>
                <Form/>
            </div>
            <div className='contact-info-cont'>
                <div className='info'>
                    <h1>CONTACT INFO</h1>
                    <p>some text</p>
                    <p>some text</p>
                    <p>some text</p>
                </div>
                
            </div>
        </div>
    )
}
