import React, { useState } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getApod } from './actions';

function App(props) {

  console.log(props);

  const [date, setDate] = useState("");

  return (
    <div class="App">

      <div class="header">
        <img src="/assets/nasa.png" alt="Logo da Nasa" />
        <h1>NASA Foto do dia</h1>
      </div>
      
      
      <h2>Por favor insira a data no formato Ano-mês-dia</h2>

      <input type="text"
        placeholder="Ex.: 2020-07-01"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <button onClick={() => props.getApod(date)}>Buscar</button>
      
      {props.loading && <h3>Carregando</h3>}

      {props.apod && (
        <div class="conteudo">
          <img src={props.apod.url} alt="Imagem do dia"/>
          <p>Descrição: {props.apod.explanation}</p>
        </div>)}

      {props.error !== "" && <p>{props.error}</p>}
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    apod: state.apod,
    error: state.error,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getApod })(App);
