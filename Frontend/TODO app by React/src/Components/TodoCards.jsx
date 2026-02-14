import { useContext, useState } from "react";
import { formContext } from "../Context/Datacontext.jsx";
function TodoCards() {
  const {userdata} = useContext(formContext);

      
  return (
    <div className="space-y-4">
      {/* Card */}
 
      {userdata.length === 0 && <h1>Data not found</h1>}
               
     { userdata.map((data, elem)=>{
            

            console.log(data)

    
    return <div  ky={elem} className="bg-gray-50 border   rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 justify-between mb-2">
            <h3 className="font-semibold text-gray-800">{data.name} {console.log(data.userName)} </h3>
            <button
              className="text-sm text-red-500 hover:underline"
          
            >
              Remove
            </button>
          </div>
          <p className="text-gray-600 mb-2">{data.task}</p>
          <span className="text-xs text-gray-400">
            {new Date().toLocaleString()}
          </span>
        </div>
 
     })}
          
      
      
       


      {/* Card */}
    </div>
  );
}

export default TodoCards;
