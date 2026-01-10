let body = document.body
let image= document.querySelector("#image")


  body.addEventListener("mousemove", function(e) {
     let x = e.clientX
     let y = e.clientY
     
     image.style.left = x + "px"
     image.style.top = y + "px"
         
  })
  