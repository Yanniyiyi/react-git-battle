import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import   PlayerInput   from './PlayerInput';
import   PlayerPreview   from './PlayerPreview';
import '../battle.css';

export default class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImg: null,
            playerTwoImg: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username){
        this.setState(()=>{
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Img'] = 'https://github.com/' + username + '.png?size=200';
            return newState; 
        });
    }

    handleReset(id){
        this.setState(()=>{
            var newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Img'] = null;
            return newState; 
        });
    }
    
    render() {
        const match = this.props.match;
        const playerOneName = this.state.playerOneName;
        const playerTwoName = this.state.playerTwoName;
        const playerOneImg = this.state.playerOneImg;
        const playerTwoImg = this.state.playerTwoImg;
        return (
            <div>
               <div className='row'>
                {!playerOneName && 
                <PlayerInput
                    id='playerOne'
                    label="Player One"
                    onSubmit = {this.handleSubmit}
                ></PlayerInput>}

                {playerOneImg !== null &&
                <PlayerPreview 
                    avatar={playerOneImg}
                    username = {playerOneName}
                    onReset = {this.handleReset}
                    id='playerOne'>
                    <button className='reset' onClick={()=>this.handleReset('playerOne')}>Reset</button>
                </PlayerPreview>}

                 {!playerTwoName && 
                <PlayerInput
                     id='playerTwo'
                     label="Player Two"
                     onSubmit = {this.handleSubmit}
                >
                    
                </PlayerInput>}

                {playerTwoImg !== null &&
                <PlayerPreview 
                    avatar={playerTwoImg}
                    username = {playerTwoName}
                    onReset = {this.handleReset}
                    id='playerTwo'>
                    <button className='reset' onClick={()=>this.handleReset('playerTwo')}>Reset</button>
                </PlayerPreview>}
               </div>

                {playerOneImg && playerTwoImg &&
                <Link
                    className='button'
                    to={{
                    pathname: match.url + '/result',
                    search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                    }}>
                    Battle
                </Link>}
            </div>
        );
    }
}   