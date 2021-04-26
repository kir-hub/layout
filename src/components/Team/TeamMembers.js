import React ,{useState}from 'react'
import './team.css'

export default function TeamMembers(props) {

    return (
        <div className='team-members-main-cont'>
            <div className='img-cont'>
                <img src='https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg' alt='pic'/>
            </div>
            <div className='description'>
                <div className='description-text'>
                    <h2>MARK WAUGH</h2>
                    <p>Lorem textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome text</p>
                </div>
                
                <div className='socials'>
                    <span>Facebook</span>
                    <span>Dribble</span>
                    <span>Behance</span>
                    <span>Twitter</span>
                </div>
                <div className='teamates'>
                    <div className='teamate-img'  ><img src='https://fs.kinomania.ru/file/film_frame/3/05/30572fe8028d3a568472d1b3d973c692.jpeg' alt='teamate'/><div  className='mate-name'> name name</div></div>
                    <div><img src='https://icdn.lenta.ru/images/2018/07/23/16/20180723165917457/detail_c30e070a86cf2cb2a14abc53de24a458.jpg' alt='teamate'/></div>
                    <div><img src='https://img.gazeta.ru/files3/784/11560784/skrskr2-pic905-895x505-4108.jpg' alt='teamate'/></div>
                    <div><img src='http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2021-04/1_4_0.jpg?itok=htAnyYNF' alt='teamate'/></div>
                </div>

            </div>
        </div>
    )
}
