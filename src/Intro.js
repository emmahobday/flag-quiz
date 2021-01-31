import './App.css'

export default function Intro({ stage, updateStage }) {

  function proceed() {
    updateStage(stage + 1)
  }
  return <>
    <div className="gameArea">
      <h3>Ready to test your knowledge of flags?</h3>
      {/* <h3>Click below to play:</h3> */}
      <button className="startButton" onClick={proceed}>Play now!</button>
    </div>
    
  </>
}