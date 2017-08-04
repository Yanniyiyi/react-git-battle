import React, { Component } from 'react';
import '../popular.css';


function LanguageSelector({languages, selectedLanguage, onLanguageClick}){
    return (
        <ul className="languages">
            {
                languages.map((lang) => {
                    return <li 
                        key={lang}
                        style={lang === selectedLanguage ? {color: '#d0012b'} : null}
                        onClick={() => onLanguageClick(lang)}
                        >{lang}</li>
                })
            }
        </ul>
    )
}

export default LanguageSelector;