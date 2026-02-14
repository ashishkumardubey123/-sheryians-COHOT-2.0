import { useContext, useState } from "react";
import { formContext } from "../Context/Datacontext.jsx";

function TodoForm() {
  const { setuserName , setUserTask, addTask} = useContext(formContext);


    const [name, setName] = useState("")
    const [task, setTask] = useState("")
   


  const handleSubmit = (e) => {
    e.preventDefault();
      
     setuserName(name)
     setUserTask(task)

      addTask()
        
       setName("")
       setTask("")
     

     
  };
  return (
    <form className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        rows={3}
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      ></textarea>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
