import React, { useEffect, useState } from "react";
import { createContext } from "react";

const formContext = createContext();
export { formContext };
function Datacontext(props) {
  const [userName, setuserName] = useState("");
  const [usertask, setUserTask] = useState("");
  const [userdata, setUserdata] = useState(    JSON.parse(localStorage.getItem("task")) || []);

    

  function addTask() {
        
    // Function to add task (implementation can be added later)
    const newTask = { name: userName, task: usertask };
       const updated = [...userdata, newTask];
           localStorage.setItem("task", JSON.stringify(updated));
     setUserdata(updated);

setuserName("");
setUserTask("");
 
        
      
  }


  return (
    <formContext.Provider
      value={{  setuserName,  setUserTask , addTask, userdata   }}
    >
      {props.children}
    </formContext.Provider>
  );
}

export default Datacontext;
