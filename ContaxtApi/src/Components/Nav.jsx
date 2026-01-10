import React, {  useContext } from 'react'
import { Datacontaxt } from '../Context/Contaxt'

function Nav() {
   const data= useContext(Datacontaxt)
    console.log(data)
  return (
    <div className='flex justify-between text-xl p-4 gap-4 bg-gray-900 text-white'>
     <h1>
          Navbar
     </h1>
      <ul className='flex p-4 gap-20'>

           {data.map((item,index)=>{
            return(
              <li key={index}>{item}</li>
            )
           })}
        

      </ul>
      
    </div>
  )
}

export default Nav
