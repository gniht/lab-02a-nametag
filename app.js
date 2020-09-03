// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
const myInput = document.getElementById("name-input");
const inputButton = document.getElementById("input-button");
const name = document.getElementById("your-name");

inputButton.addEventListener("click", ()=>{
  if(myInput.value){
    name.innerText = myInput.value;
  } else {
    name.innerText = "enter name";
  }
  
});