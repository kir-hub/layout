import React from 'react'
import PhotoCont from './PhotoCont'

export default function Features(props) {

    return (
        <div >
            <h1>FEATURE PRODUCTS</h1>
            <p>some text</p>
            <hr/>
            <div className='selectors'>
                <span>ALL</span>
                <span>PRINT TEMPLATE</span>
                <span>WEB TEMPLATE</span>
                <span>USER INTERFACE</span>
                <span>MOCK-UP</span>
            </div>
            <PhotoCont/>
        </div>
    )
}
