import React from 'react'
import TeamMembers from './TeamMembers'
import './team.css'

export default function Team() {

    return (
        <>
        <div className='main-team-cont'>
            <div className='team-text-cont'>
            <h1>MEET OUR TEAM</h1>        
            <div className='p'>
                <p>Lorem  some text some text some text
                some text vsome text some text
                some textsome text some textsome text some text
                some text some textsome text
                </p>
            </div>
            <hr/>
        </div>    
            <TeamMembers/>
        </div>
        
        </>
    )
}
