import React, { Component } from 'react';
export default function PlayerPreview({avatar,username,id,onReset, children}){
    return (
        <div>
            <div className='column'>
                <img src={avatar} alt={'Avatar for' + username} className='avatar' />
                 <h2 className='username'>@{username}</h2>
            </div>
            {children}
        </div>
    )
};