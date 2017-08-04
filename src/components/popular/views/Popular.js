import React, { Component } from 'react';
import   LanguageSelector   from './LanguageSelector';
import   RepoGrid   from './RepoGrid';

import   {fetchPopularRepos}   from '../../../utils/api';



export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            languages:['All','JavaScript','Ruby','Java','CSS','Python'],
            selectedLanguage:'All',
            repos:null
        };
        this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this);  
    }

    componentDidMount() {
        this.updateSelectedLanguage(this.state.selectedLanguage);
    }

    componentWillUpdate() {
        console.log("will update");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("did update");
    }
    updateSelectedLanguage(lang){
        this.setState(() => {
            return {selectedLanguage:lang}
        });

        fetchPopularRepos(lang).then((response) => {
            let popularRepos = response.data.items;
            this.setState(()=> {
              return {repos: popularRepos}
            });
        }).catch(error => {
            console.log('error happened');
        });
    }
    

  
    render() {
        return (
            <div>
                <LanguageSelector selectedLanguage={this.state.selectedLanguage}
                languages={this.state.languages}
                onLanguageClick={this.updateSelectedLanguage}></LanguageSelector>
                {
                     !this.state.repos ? 
                        <p>Loading</p> :
                        <RepoGrid repos={this.state.repos}></RepoGrid>
                    
                }
            </div>
        );
    }
}