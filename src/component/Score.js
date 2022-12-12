import React,{useContext} from 'react'
import {DataContext} from '../App'
import AnimatedNumber from "animated-number-react";
import './score.css'

function Score() {
  const {score,setScore} = useContext(DataContext);
  const {state,setState} = useContext(DataContext);
  const resetScore = () =>{
    setState('menu')
    setScore(0)
  }
  return (
    <div className='container-score'>
       <div className="wrapper-score">
        <h1>คะแนนของคุณคือ</h1>

         <h2>
            <AnimatedNumber
                  value = {score}
                  duration = {1000}
                  formatValue={v => v.toFixed(0)}
            />
          </h2> 
          <button onClick={resetScore}>Menu Page</button>

       </div>
    </div>
  )
}

export default Score