import './App.css'
import React, { useState, useEffect } from 'react'

export default function Game({ countries, stage, updateStage, numCorrect, updateNumCorrect }) {
  let [currentCountry, updateCurrentCountry] = useState({})
  let [options, updateOptions] = useState(['', '', ''])
  // let options = ['', '', '']
  let [buttonOne, updateButtonOne] = useState('plain')
  let [buttonTwo, updateButtonTwo] = useState('plain')
  let [buttonThree, updateButtonThree] = useState('plain')
  let [questionsAsked, updateQuestionsAsked] = useState(1)
  


  useEffect(() => {
    selectRandom()
  }, [])

  useEffect(() => {
    getOptions()
  }, [currentCountry])

  function selectRandom() {
    const rando = countries[Math.floor(Math.random() * countries.length)]
    updateCurrentCountry(rando)
  }

  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function getOptions() {
    let loptions = ['', '', '']
    loptions[0] = currentCountry.name
    loptions[1] = countries[Math.floor(Math.random() * countries.length)].name
    loptions[2] = countries[Math.floor(Math.random() * countries.length)].name
    updateOptions(shuffle(loptions))
  }

  function checkAnswer(event) {
    let guess = event.target.outerText
    if (buttonOne !== 'plain' || buttonTwo !== 'plain' || buttonThree !== 'plain') {
      return
    }

    if (guess === currentCountry.name) {
      if (event.target.className.includes('choice1')) {
        updateButtonOne('true')
        setTimeout(() => {
          updateButtonOne('plain')
        }, 1000)
      } else if (event.target.className.includes('choice2')) {
        updateButtonTwo('true')
        setTimeout(() => {
          updateButtonTwo('plain')
        }, 1000)
      } else {
        updateButtonThree('true')
        setTimeout(() => {
          updateButtonThree('plain')
        }, 1000)
      }
      setTimeout(() => {
        updateNumCorrect(numCorrect + 1)
      }, 1000)
    } else {
      if (event.target.className.includes('choice1')) {
        updateButtonOne('false')
        setTimeout(() => {
          updateButtonOne('plain')
        }, 1000)
      } else if (event.target.className.includes('choice2')) {
        updateButtonTwo('false')
        setTimeout(() => {
          updateButtonTwo('plain')
        }, 1000)
      } else {
        updateButtonThree('false')
        setTimeout(() => {
          updateButtonThree('plain')
        }, 1000)
      }
    }
    setTimeout(() => {
      if (questionsAsked === 15) {
        updateStage(stage + 1)
      }
      updateQuestionsAsked(questionsAsked + 1)
      selectRandom()
    }, 1000)

  }

  return <>
    <div className="gameArea gameInPlay">
      <div className="gameQ">
        <div className="score"></div>
        <p className="q">This is the national flag of...</p>
        <div className="score">
          <p className="small">Question {questionsAsked} of 15</p>
          <p className="small">Correct: {numCorrect}</p>
        </div>
        {/* <p>{numCorrect} / {15}</p> */}
      </div>
      <div className="gameboard">
        <div className="gameFlag"><img className="flag" src={currentCountry.flag}></img></div>
        <div className="gameChoices">
          <button className={buttonOne + " choice choice1"} onClick={checkAnswer}>{options[0]}</button>
          <button className={buttonTwo + " choice choice2"} onClick={checkAnswer}>{options[1]}</button>
          <button className={buttonThree + " choice choice3"} onClick={checkAnswer}>{options[2]}</button>
        </div>
      </div>
    </div>
  </>
}