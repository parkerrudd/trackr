import React, { useState } from 'react'
import { ReactDOM } from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import styles from './styles/style.css'

function App() {
  const [goToExercises, setGoToExercises] = useState(false)

  if (goToExercises) {
    return <Navigate to="/Exercises"/>
  }

  return (
    <div className="App">
      <div className="homepage-container">
        <div className="left-screen">
          <h1>trackr</h1>
          <h3>Organize your workouts to maximize your progress.</h3>
        </div>
        <div className="right-screen">
          <div className="add-workout" onClick={() => setGoToExercises(true)}>Add Exercises</div>
          <div className="calender">Check Calender</div>
          <div className="start-workout">Start Workout</div>
        </div>
      </div>
    </div>
  );
}

export default App;
