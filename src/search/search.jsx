import React, { Component } from 'react';

import PageHeader from '../template/pageHeader'
import SearchForm from './searchForm'
import SearchList from './searchList'
import Alert from '../template/alert'
import Loading from '../template/loading';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keyPressInput, selectRadio } from '../actions';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemonDetails: {
        list: []
      },
      sprites: {},
      showAlert: false,
      alertTxt: '',
      alertType: 'success',
      showLoading: false
    };  
  }
  handleKeyPress = e => {
    if(e.key == 'Enter'){
      console.log('enter press here! ')
      this.handleSearch();
    }
  }
  handleChange = e => {
    this.props.keyPressInput(e.target.value)
  }
  handleChangeSearchMode = e => {
    this.props.selectRadio(e.target.value)
  }
  retrieveData = builtUrl => {
    
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
     
        if(this.props.selectedOption === "pokemon") {
          var listaDePokemons = {
            name: response.name,
            sprites: response.sprites,
            weight: response.weight,
            height: response.height,
            id: response.id
          }
          this.setState({
            pokemonDetails: listaDePokemons,
            alertTxt: `Sua pesquisa retornou o pokemon ${listaDePokemons.name}`
          })
       
        } else if(this.props.selectedOption === "ability") {
          
          var listaDePokemons = {
            name: response.name,
            list: response.pokemon
          }
          this.setState({
            pokemonDetails: listaDePokemons,
            alertTxt: `Você pesquisou pela Habilidade  ${listaDePokemons.name}`
          })
        }
        this.setState({
          showAlert: true,
          alertType: 'success'
        })
        
      } else {
        this.setState({
          alertTxt: 'Erro, tente novamente',
          alertType: 'danger',
          showAlert: true,
          pokemonDetails: {}
        })
      }
    })
  }
  verifyLoadedProps = (data) => {
    return typeof data != 'undefined' && Object.keys(data).length !== 0
  } 
  handleSearch = () => {
    const builtUrl = `https://pokeapi.co/api/v2/${this.props.selectedOption}/${this.props.description}/`;
    this.setState({showLoading: true});
    this.retrieveData(builtUrl);

  }

  render () {
    const {
      showAlert,
      pokemonDetails,
      alertTxt,
      alertType,
      showLoading
    } = this.state

    console.log(this.props.description)
    return (
      <div>
        <PageHeader name="Busca" small="Pokemons" />
        <Alert
            showAlert={showAlert}
            name={pokemonDetails.name}
            txt={alertTxt}
            type={alertType}
        />
        <SearchForm
          description={this.props.description}
          selectedOption={this.props.selectedOption}
          handleChange={this.handleChange}
          handleChangeSearchMode={this.handleChangeSearchMode}
          handleKeyPress={this.handleKeyPress}
          handleSearch={this.handleSearch}
        />
        <SearchList
          pokemonDetails={pokemonDetails}
          selectedOption={this.props.selectedOption}
         />
        <Loading showLoading={showLoading}/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  description: store.inputSearchState.description,
  selectedOption: store.radioFilterState.selectedOption
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ keyPressInput, selectRadio }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search)