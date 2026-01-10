import React, { createContext,  useEffect,  useState } from 'react'

  export const Datacontaxt = createContext()
function Contaxt(props) {
  
  const [data, setData] = useState([])
   
   const navItem = ()=>{
    const arry = ["Home", "About", "Contact", "Services"]
      setData(arry)

   }
    useEffect(()=>{
        navItem()
    },[])

 
  return (
    <Datacontaxt.Provider value={data}>
      {props.children}
    </Datacontaxt.Provider>

  )
}

export default Contaxt
