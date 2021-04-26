import React from 'react'
import PhotoCont from './PhotoCont'
import './features.css'

export default function Features(props) {

    return (
        <div className='feature-main-cont' >
            <h1>FEATURE PRODUCTS</h1>
            <div className='p'>
                <p>Lorem some text Lorem some text Lorem some text 
                Lorem some text Lorem some text Lorem some text 
                </p> 
            </div>
            
            <hr/>
            <div className='selectors'>
                <span className='active'><h2 >ALL </h2></span>
                <span><h2> PRINT TEMPLATE</h2></span>
                <span><h2> WEB TEMPLATE</h2></span>
                <span><h2> USER INTERFACE</h2></span>
                <span><h2> MOCK-UP</h2></span>
            </div>
            <PhotoCont/>
        </div>
    )
}
