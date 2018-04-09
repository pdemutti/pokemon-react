import React from 'react'
import IconButton from '../template/iconButton'
import Loading from '../template/loading'
import If from '../template/if'

export default props => {

  const buscar = () => {
    if(props.selectedOption === "pokemon") {
      return buscaPorIdOuNome();
    } else if(props.selectedOption === "ability") {
      return (
        <ul className="list-group">
          {buscaEmLista()}
        </ul>
      )
    } else {
      buscaEmLista()
    }
  }
  const buscaEmLista = () => {
    const list = props.pokemonDetails.list || []
    
    console.log('lista', list)
    console.log(props)

      return list.map(item => (
        <li className="list-group-item" key={item.pokemon.name}>
          <a href={"#/pokemon/" + item.pokemon.name}>{item.pokemon.name}</a>
        </li>
      )
      );
  }
    
  
  const buscaPorIdOuNome = () => {
    const pokemonObject = props.pokemonDetails || {} 
    const imagesObject = pokemonObject.sprites;
    console.log('listar', pokemonObject);

      if(verifyLoadedProps(pokemonObject && imagesObject)){
        console.log('VERIFICADO')
        
        var imagesList = Object.values(imagesObject);
         imagesList = imagesList.filter(function(e){return e});
        
          var pokemon = pokemonObject;
          var name = pokemonObject.name;
          var weight = pokemonObject.weight;
          var height = pokemonObject.height;
          var image1 = imagesList[3];
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
                    <a href={"#/pokemon/" + name} className="card-link">Mais sobre o {name}</a>       
                  </div>
                </div>                
              );        
      }
   
    function verifyLoadedProps (data) {
      return typeof data != 'undefined' && Object.keys(data).length !== 0
    } 

  }

  return (
      <div className="col-md-12">
        {buscar()}
      </div>
    
  )
}