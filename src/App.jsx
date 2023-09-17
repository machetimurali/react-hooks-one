import {useState,useEffect} from "react"

function App(){
  
  const [object,setObject]=useState({
    count:0,
    value:'',
  })

  useEffect(()=>{
    document.title=`${object.count}Count`
  })
  const increment=()=>{
    setObject((prevState)=>({
      ...prevState,count:prevState.count+1
    }))
  }
  const onChangeInput=event=>{
    setObject((prevState)=>({
      ...prevState,value:event.target.value
    }))
  }

   return(
    <div>
      <input type="text" onChange={onChangeInput}></input>
      <h1>{object.value} Counter:{object.count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
   )
}

export default App

