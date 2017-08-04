import React, { Component } from 'react';

export default class PlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;

        this.setState(()=>{
            return {
                username: value
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.props.id,this.state.username);
    }
    
    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label htmlFor='username' className='header'>
                    {this.props.label}
                </label>
                <input type='text' id='username' 
                placeholder='github username'
                autoComplete='off'
                value={this.state.username}
                onChange={this.handleChange}
                />
                <button className='button' type='submit' disabled={!this.state.username}
                >
                    Submit
                </button>
            </form>
        );
    }
}