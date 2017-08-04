import React, { Component } from 'react';
import   Profile   from './Profile';



export default function Player({label, score, profile}){
    return(
        <div>
            <h1 className='header'>{label}</h1>
            <h3 style={{textAlign:'center'}}>Score: {score}</h3>
            <Profile info={profile}/>
        </div>
    )
}