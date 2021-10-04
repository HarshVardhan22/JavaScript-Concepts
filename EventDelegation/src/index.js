//Event delegation

//onClick of any component the color should change to red

const parent = document.getElementById("app");

const child = document.getElementsByClassName("item");

//Insted of adding eventListeners to every "P" node
//we can apply only one event listener on the parent node
//due to event bubbling the event starts from child and
//bubbles up to the parent where we can catch it
//and logically perform the operation
parent.addEventListener("click", (e) => {
  //to change all node to black color
  for (let keys in child) {
    if (child[keys].tagName === "P") 
    child[keys].style.color = "black";
  }

  //change the color of clicked node to red
  e.target.style.color = "red";
});
