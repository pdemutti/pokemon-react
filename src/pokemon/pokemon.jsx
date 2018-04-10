import React, { Component } from 'react';

import PageHeader from '../template/pageHeader'
import Alert from '../template/alert'
import Loading from '../template/loading';

export default class Pokemon extends Component {
  constructor (props) {
    super(props);
     
    this.state = {
      name: props.params.pokemonName,
      pokemonDetails: {},
      sprites: {},
      showAlert: false,
      alertTxt: '',
      alertType: 'success',
      showLoading: false
    };
    
  }
  componentDidMount() {
    this.handleSearch(this.state.name) 
  }
  handleSearch (name) {
    const builtUrl = "https://pokeapi.co/api/v2/pokemon/" + name + '/';
    
    this.setState({...this.state, showLoading: true});
    this.retrieveData(builtUrl);
  }
  busca(){
    const list = this.state.pokemonDetails || []
      

    const pokemonObject = this.state.pokemonDetails || []
    
    const imagesObject = pokemonObject.sprites;
    
    if(this.verifyLoadedProps(pokemonObject && imagesObject)){
      var imagesList = Object.values(imagesObject);
      imagesList = imagesList.filter(function(e){return e});
      var pokemon = pokemonObject;
      var name = pokemonObject.name;
      var weight = pokemonObject.weight;
      var height = pokemonObject.height;
      var image1 = imagesList[2];
          return  (
            <div className="card col-md-12">
              <img className="card-img-top" data-src={image1} alt="" src={image1} data-holder-rendered="true" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
              </div>
              <ul className="list-group list-group-flush" key={pokemon.id}>
                <li className="list-group-item card-subtitle mb-2 text-muted font-weight-bold">Id: {pokemon.id}</li>
                <li className="list-group-item card-subtitle mb-2 text-muted font-weight-bold">Peso: {weight}</li>
                <li className="list-group-item card-subtitle mb-2 text-muted">Altura: {height}</li>
              </ul>
              <div className="card-body">
                     
              </div>
            </div>                
          );    

    }
  }
  verifyLoadedProps (data) {
    return typeof data != 'undefined' && Object.keys(data).length !== 0
  } 
  retrieveData (builtUrl) {
    
    fetch(builtUrl).then(function(response) {  
      return response.json();
    })
    .then((response) => {
      this.setState({...this.state, showLoading: false}); 
       
      if (response.detail !== "Not found.") {
          
          var details = {
            name: response.name,
            sprites: response.sprites,
            weight: response.weight,
            height: response.height,
            id: response.id
          }
          this.setState({
            pokemonDetails: details,
            alertTxt:  `Sua pesquisa retornou o pokemon ${this.state.pokemonDetails.name}`
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

  render () {
    return (
      <div>
        <PageHeader name="Pokemon" small={this.state.name}></PageHeader>
        <Alert
            showAlert={this.state.showAlert}
            name={this.state.name}
            txt={this.state.alertTxt}
            type={this.state.alertType}
        />
        <Loading showLoading={this.state.showLoading}/>
        {this.busca()}
      </div>
    )
  }
}