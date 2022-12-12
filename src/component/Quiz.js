import React,{useContext, useEffect, useState} from 'react'
import './quiz.css'
import question from '../question'
import Backbutton from './Buttonback'
import { DataContext } from '../App';
function Quiz() {
    const [current,setCurrent] = useState(0)
    const [select, setSelect] = useState('');
    const {score,setScore} = useContext(DataContext)
    const {state,setState} = useContext(DataContext)

     useEffect(()=>{
         checkAnswer()
          // eslint-disable-next-line
     },[select])  
    
   
    
     const checkAnswer =()=> {
         if(select !== ''){
            if(select === question[current].answer){
                setScore(score + 1)
                nextquestion()
            }else{
                nextquestion()
            }
         }
     }

     const nextquestion =()=>{
        setCurrent(current + 1)
        setSelect('')

        if(current === question.length-1){
            setState('score')
        }
     }


  return (
    <div className='container-quiz'>
        <div className="wrapper-quiz">
        <small>คำถาม {current + 1} / {question.length}</small>
        <h1>{question[current].question}</h1>
        <div className="btn-quiz">
            <button onClick={()=> (setSelect('A'))}>{question[current].A}</button>
            <button onClick={()=> (setSelect('B'))}>{question[current].B}</button>
            <button onClick={()=> (setSelect('C'))}>{question[current].C}</button>
            <button onClick={()=> (setSelect('D'))}>{question[current].D}</button>
        </div>
        </div>
    </div>
  )
}

export default Quiz