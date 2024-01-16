import '../App.css';
import React from 'react';
import Avatar from './Avatar';

export const Profile = (props) => {
    return (
        <div className='profile'>
            {props.isVisible ? <span className='tag'>new</span> : ''}
            <Avatar img={props.img}/>
            <h1>{props.name}</h1>
            <p>{props.position}</p>
        </div>
    )
}