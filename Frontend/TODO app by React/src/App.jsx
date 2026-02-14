import React from 'react'

import TodoForm from "./Components/TodoForm";
import TodoCards from "./Components/TodoCards";



function App() {
return (
<div className="h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex  justify-center p-6">
<div className="w-full flex justify-center bg-white rounded-3xl shadow-2xl p-8">
<h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
Todo App
</h1>

<div className=' flex gap-6 items-center justify-center'>
{/* Form Section */}
<TodoForm />

<TodoCards />


</div>

</div>
</div>
);
}

export default App
