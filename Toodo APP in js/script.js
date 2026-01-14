
let tasksRemoveBtn = document.querySelectorAll(".remove-btn");

 let usernameInput = document.getElementById("username");
let taskInput = document.getElementById("task");
let addBtn = document.getElementById("addBtn");
let form = document.getElementById("taskForm");

      
form.addEventListener("submit", function(e){

      e.preventDefault()
        let username = document.getElementById("usernameInput").value;
  let task = document.getElementById("taskInput").value;
     console.log("Use:", username);
  console.log("Task:", task);
     //   console.log(e.target);
})