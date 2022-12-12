import React,{useEffect,useState} from 'react'

function TIme() {
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    let timer;
    useEffect(()=>{
        timer = setInterval(()=>{
            setSeconds(seconds + 1);
            if(seconds === 59){
                setMinutes(minutes + 1)
                setSeconds(0);
            }
        },1000)
        return ()=>clearInterval(timer)
     })
    
    

  return (
    <div>
        <h3>{minutes}:{seconds}</h3>
    </div>
  )
}

export default TIme