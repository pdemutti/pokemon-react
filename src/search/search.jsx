import React, { Component } from 'react';
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import SearchForm from './searchForm'
import SearchList from './searchList'
import Alert from '../template/alert'
import Loading from '../template/loading';

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      pokemonDetails: {
        list: []
      },
      sprites: {},
      showAlert: false,
      alertTxt: '',
      alertType: 'success',
      showLoading: false,
      selectedOption: 'pokemon'
    };

    this.handleChange = this.handleChange.bind(this);   
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeSearchMode = this.handleChangeSearchMode.bind(this);
    
  }
  handleKeyPress (e) {
    if(e.key == 'Enter'){
      console.log('enter press here! ')
      this.handleSearch();
    }
  }
  handleChange (e) {
    this.setState({...this.state, description: e.target.value});
  }
  handleChangeSearchMode (e) {
    this.setState({...this.state, selectedOption: e.target.value});
  }
  retrieveData (builtUrl) {
    
    fetch(builtUrl).then(function(response) {  
      return response.json();
    })
    .then((response) => {
      this.setState({...this.state, showLoading: false}); 
      var listaDePokemons = {
        name: response.name,
        sprites: response.sprites,
        weight: response.weight,
        height: response.height,
        id: response.id
      }
      if (response.detail !== "Not found.") {
     
        if(this.state.selectedOption === "pokemon") {
          var listaDePokemons = {
            name: response.name,
            sprites: response.sprites,
            weight: response.weight,
            height: response.height,
            id: response.id
          }
          this.setState({...this.state, pokemonDetails: listaDePokemons});
          this.setState({...this.state, alertTxt: 'Sua pesquisa retornou o pokemon '+ this.state.pokemonDetails.name});

        } else if(this.state.selectedOption === "ability") {
          
          var listaDePokemons = {
            name: response.name,
            list: response.pokemon
          }
          this.setState({...this.state, pokemonDetails: listaDePokemons});
          this.setState({...this.state, alertTxt: 'Você pesquisou pela Habilidade '+ this.state.pokemonDetails.name});
        }
        this.setState({...this.state, showAlert: true});
        this.setState({...this.state, alertType: 'success'});
        
      } else {
        this.setState({...this.state, alertTxt: 'Erro, tente novamente'});
        this.setState({...this.state, alertType: 'danger'});
        this.setState({...this.state, showAlert: true});
        this.setState({...this.state, pokemonDetails: {}});
      }
    })
  }
  verifyLoadedProps (data) {
    return typeof data != 'undefined' && Object.keys(data).length !== 0
  } 
  handleSearch () {
    const builtUrl = "https://pokeapi.co/api/v2/" + this.state.selectedOption +"/"+ this.state.description + '/';
    this.setState({...this.state, showLoading: true});
    this.retrieveData(builtUrl);

  }

  render () {
    return (
      <div>
        <PageHeader name="Busca" small="Pokemons"></PageHeader>
        <Alert
            showAlert={this.state.showAlert}
            name={this.state.pokemonDetails.name}
            txt={this.state.alertTxt}
            type={this.state.alertType}
        />
        <SearchForm
          description={this.state.description}
          selectedOption={this.state.selectedOption}
          handleChange={this.handleChange}
          handleChangeSearchMode={this.handleChangeSearchMode}
          handleKeyPress={this.handleKeyPress}
          handleSearch={this.handleSearch}
        />
        <SearchList
          pokemonDetails={this.state.pokemonDetails}
          selectedOption={this.state.selectedOption}
         />
        <Loading showLoading={this.state.showLoading}/>
      </div>
    )
  }
}