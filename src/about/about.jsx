import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
  <div>
    <PageHeader name="Sobre" small="o projeto"></PageHeader>

    <h2>o Desafio</h2>
    <ul>
      <li>Criar uma página para listar todos os pokemons</li>
      <li>Criar uma página para listar os detalhes de um pokemon selecionado</li>
    </ul>
    <h2>O que será avaliado?</h2>
      <ul>
        <li>consumo de api</li>
        <li>responsive design</li>
        <li>route management</li>
        <li>state management (redux)</li>
        <li>components stateless stateful</li>
        <li>application build / pipeline</li>
      </ul>   
    <h2>No HTML</h2>
    <p>Semântica e separação de components.</p>
    <h2>NO CSS</h2>
    <p>Organização e reaproveitamento, padrão utilizado. (BEM, ATOMIC, SMACSS).</p>
    <h2>No JS</h2>
    <p>Reaproveitamento de código, conhecimento da linguagem ECMASCRIPT mínimo 2015</p>
  </div>
)