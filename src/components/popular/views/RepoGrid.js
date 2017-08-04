import React, { Component } from 'react';
import '../repogrid.css';

export default function RepoGrid({repos}){
    return (
        <ul className="popular-list">
            {
                repos.map((repo,index) => {
                    return (
                        <li key={repo.name} className="popular-item">
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className="space-list-items">
                                <li>
                                     <img src={repo.owner.avatar_url} 
                                        alt={'Avatar for' + repo.owner.login}
                                        className="avatar" />
                                </li>
                                <li>
                                     <a href={repo.html_url} target="_blank">{repo.name}</a>
                                </li>
                                <li>
                                      @{repo.owner.login}
                          
                                </li>
                                <li>
                                     {repo.stargazers_count} starts
                                </li>
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
          
    )
};