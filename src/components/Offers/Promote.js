import React from 'react'
import './Promote.css'

export default function Promote(props) {

    return ( 
        <>
        <div className='main-cont'>
            <div className='video-text-cont'>
                <h1>DO YOU KNOW WE CAN</h1>
                <h1>PROVIDE FOR YOU ?</h1>
                <div className='p'>
                    <p>Lorem some text Lorem some text 
                    Lorem some textLorem some text 
                    Lorem some textLorem some text
                    Lorem some textLorem some text
                    Lorem some textLorem some text Lorem some text</p>
                </div>
                
                <button className='learn-btn'>Learn More</button>
            </div>        
            <div className='matrix-cont'>
                <div className='proposal-cont'>
                    <div className='Management'>
                        <img src='' alt='gear'/>
                        <h3>Management</h3>
                        <p>Lorem textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        </p>
                    </div>
                    <div className='Branding'>
                        <img src='' alt='diamond'/>
                        <h3>Logo / Branding</h3>
                        <p>Lorem textsome textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text</p>
                    </div>
                </div> 
                <div className='proposal-cont'>
                    <div className='Design'>
                        <img src='' alt='pencil'/>
                        <h3>UI /UX Design</h3>
                        <p>Lorem textsome textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text</p>
                    </div>
                    <div className='Animation'>
                        <img src='' alt='truck'/>
                        <h3>Animation</h3>
                        <p>Lorem textsome textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text
                        some textsome textsome text</p>
                    </div>
                </div>
            </div>
            
        </div>
        <hr/>
        </>
    )
}
