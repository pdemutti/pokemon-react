import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  console.log(props)
  return (
    <div role="from" className="Form form-group">
      <Grid cols="12 9 12">
        <div className="search-mode">
          <div className="radio-inline">
            <label>
              <input type="radio" name="selectedOption" value='pokemon' id="pokemon" checked={props.selectedOption === 'pokemon'} onChange={props.handleChangeSearchMode} />
              Nome ou número 
            </label>
          </div>
          <div className="radio-inline">
            <label>
              <input type="radio" name="selectedOption" value='ability' id='ability' checked={props.selectedOption === 'ability'}  onChange={props.handleChangeSearchMode} />
              Habilidade
            </label>
          </div>
        </div>
        <div className="search-box">
          <input
            id="description"
            className="form-control"
            placeholder={".:: Search by " + props.selectedOption + " ::."}
            value={props.description}
            onKeyPress={props.handleKeyPress}
            onChange={props.handleChange} />
          <IconButton
            style="primary"
            icon="search"
            description={props.description}
            onClick={props.handleSearch}
          />
        </div>     
      </Grid>     
    </div>
  )
}