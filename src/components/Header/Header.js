import React from 'react'
import './header.css'
export default function Header(props) {
    return (
        <div className='header-dark'>
            <div className='group-btn-cont'>
                <div className='header-link-btn-active'><h1>HOME</h1></div>
                <div className='disabled'><h1>PORTFOLIO</h1></div>
                <div className='disabled'><h1>ABOUT US</h1></div>
                <div className='disabled'><h1>CONTACT</h1></div>
            </div>
        </div> 
    )
}
