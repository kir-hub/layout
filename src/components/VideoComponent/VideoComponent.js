import React from 'react'
import './videoComponent.css'

export default function VideoComponent(props) {
 
 
    return ( 
        <div className='video-main-cont'>
            <div className='text-cont'>
                <span className='f-string'><h1>OUR STRONG</h1></span>
                <span className='s-string'><h1>ORGANAISATION</h1></span>
                <div className='p'>
                    <p>Lorem some text Lorem some text Lorem some text
                    Lorem some textLorem some text Lorem some textLorem
                    some text
                    Lorem some textLorem som
                    e textLorem some text</p>
                </div>
                
                <button className='contact-btn'>Contact Us</button>
            </div>
            <div className='video-cont'>
                <iframe/>
            </div>
        </div>
    )
}
