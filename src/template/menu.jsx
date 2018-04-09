import React from 'react';
import logo from '../main/logo.svg';

export default props => (
  <nav className='navbar navbar-inverse bg-inverse '>
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#"> 
          <img src={logo} className="App-logo" alt="logo" title="Pokedex" />
        </a>
      </div>

      <div id="navbar" className="navbar-right navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#/search">Busca Pokemon <i className="fa fa-search"></i></a></li>
          <li><a href="#/about">Projeto <i className="project fa fa-github"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
)