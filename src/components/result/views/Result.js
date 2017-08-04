import React, { Component } from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import {battle}   from '../../../utils/api';
import   Player   from './Player';

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }
    
    componentDidMount (){
        const players = queryString.parse(this.props.location.search);
        console.log(players);
        battle([players.playerOneName,players.playerTwoName]).then((result) => {
           if(result === null){
               return this.setState(()=>{
                    return {
                        error : 'Looks like there was error.',
                        loading: false
                    }
               });
           }

           this.setState(()=>{
                return {
                    error : null,
                    winner: result[0],
                    loser: result[1],
                    loading: false
                }
            });

           

        });
    }
    render() {
        const error = this.state.error;
        const winner =this.state.winner;
        const loser = this.state.loser;
        const loading = this.state.loading;

        if(loading){
            return <p>Loading.....</p>
        }

        if(error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }

        return (
            <div className="row">
                <Player
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}>
                </Player>
                <Player
                    label='Loser'
                    score={loser.score}
                    profile={loser.profile}>
                </Player>
            </div>
           
        )
    }
}