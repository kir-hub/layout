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
                    <div className='p'>
                        <p>Jalalabad 24<br/>
                        Bangladesh</p>
                    </div>  
                    <div className='mail'>
                        <p>some text</p>
                    </div>  
                        <div className='phone'>
                    <p>(+88) 017 617 46373</p>
                        </div>
            </div>
        </div>
        
        </div>
    )
}
