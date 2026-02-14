let title  = document.getElementById("title");
let data  = document.getElementById("date");
let date = document.getElementById("date");
let remove = document.getElementsByClassName("remove-btn");
let tasksRemoveBtn = document.querySelectorAll(".remove-btn");
let form = document.getElementById("taskForm");

      
form.addEventListener("submit", function(event) {
  event.preventDefault();  
   let taskInput = document.getElementById("taskInput").value
   let username = document.getElementById("username").value

    let data = {
       username: username,
       tasks : taskInput
    }
      
  // 1️⃣ purana data lao (ya empty array)
  let allData = JSON.parse(localStorage.getItem("Tododata")) || [];

  // 2️⃣ naya data add karo
  allData.push(data);

  // 3️⃣ wapas save karo
  localStorage.setItem("Tododata", JSON.stringify(allData));

    form.reset()
   

})

let userdata = JSON.parse(localStorage.getItem("Tododata")) || [];

const cardsSection = document.querySelector(".cards-section");

function addCardToUI(item, index) {
  const cardsSection = document.querySelector(".cards-section");

  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  taskCard.innerHTML = `
    <div class="card-header">
      <h3>${item.username}</h3>
      <button class="remove-btn" data-index="${index}">Remove</button>
    </div>
    <p>${item.tasks}</p>
    <span>${new Date().toDateString()}</span>
  `;

  cardsSection.appendChild(taskCard);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let taskInput = document.getElementById("taskInput").value;

  let data = { username, tasks: taskInput };

  let arr = JSON.parse(localStorage.getItem("Tododata")) || [];
  arr.push(data);

  localStorage.setItem("Tododata", JSON.stringify(arr));

  // 🔥 LIVE UI UPDATE (ye hi main cheez hai)


  addCardToUI(data, arr.length - 1);
  form.reset();
});


    
  