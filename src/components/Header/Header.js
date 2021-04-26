import React from 'react'
import './header.css'
export default function Header(props) {
    return (
        <div className='header-dark'>
            <div className='group-btn-cont'>
                <div className='header-link-btn-active'>HOME</div>
                <div className='disabled'>PORTFOLIO</div>
                <div className='disabled'>ABOUT US</div>
                <div className='disabled'>CONTACT</div>
                
            </div>
        </div>
    )
}
