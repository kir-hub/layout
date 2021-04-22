import React from 'react'
import './videoComponent.css'

export default function VideoComponent(props) {


    return (
        <div className='main-cont'>
            <div className='text-cont'>
                <h1>OUR STRONG</h1>
                <h1>ORGANAISATION</h1>
                <p>some text</p>
                <button className='contact-btn'></button>
            </div>
            <div className='video-cont'>
                <iframe/>
            </div>
        </div>
    )
}
