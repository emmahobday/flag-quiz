import './App.css'
import React, { useState, useEffect } from 'react'

export default function Results({ stage, updateStage, numCorrect, updateNumCorrect }) {

  function reset() {
    updateNumCorrect(0)
    updateStage(1)
  }

  let message = ''

  if (numCorrect === 15) {
    message = 'A perfect score!'
  } else if (numCorrect > 9) {
    message = 'Not bad!'
  } else if (numCorrect > 5) {
    message = 'Keep practicing!'
  } else {
    message = 'Ouch. More practice needed!'
  }

  return <>
    <div className="gameArea">
      <h2>You scored {numCorrect} out of 15!</h2>
      <h3>{message}</h3>
      <button className="startButton" onClick={reset}>Play again?</button>
    </div>

  </>
}