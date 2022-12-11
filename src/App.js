import React, { useState, useContext, createContext } from 'react'
import Menu from './component/Menu'
import Quiz from './component/Quiz'
import Score from './component/Score'
import './App.css'

export const DataContext = createContext();

function App() {
  const [state,setState] = useState('menu');
  return (
    <DataContext.Provider value={{state,setState}}>
        <div className='app'>
                {state === 'menu' && <Menu/>}
                {state === 'quiz' && <Quiz/>}
                {state === 'score' && <Score/>}
        </div>
    </DataContext.Provider>
  )
}

export default App