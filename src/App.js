// import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Intro from './Intro'
import React, { useState, useEffect } from 'react'
import Results from './Results'

function App() {
  let [stage, updateStage] = useState(0)
  let [countries, updateCountries] = useState([])
  let [numCorrect, updateNumCorrect] = useState(0)

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(resp => resp.json())
      .then(data => {
        updateCountries(data)
      })
    
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Name that flag!
        </h1>
        {stage === 0 ? <Intro stage={stage} updateStage={updateStage} /> : stage === 1 ? <Game countries={countries} stage={stage} updateStage={updateStage} numCorrect={numCorrect} updateNumCorrect={updateNumCorrect} /> : <Results stage={stage} updateStage={updateStage} numCorrect={numCorrect} updateNumCorrect={updateNumCorrect} />}
      </header>
    </div>
  );
}

export default App;
