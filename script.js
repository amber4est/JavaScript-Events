//Mouse Events
const mouseButton=document.getElementById("hover-btn");
const mouseMessage=document.getElementById("mouse-btn");

mouseButton.addEventListener("mouseenter", function() {
    mouseMessage.textContent="Mouse has entered the button area!";
});

mouseButton.addEventListener("mouseleave", function() {
    mouseMessage.textContent="Mouse has left the button area!";
});

mouseButton.addEventListener("click", function() {
    mouseMessage.textContent="Button was clicked!";
});

//Keyboard Events
const keyboardEvent=document.getElementById("keyboard-events");
const keyboardInput=document.getElementById("keyboard-input");

keyboardEvent.addEventListener("keydown", function(keys) {
    keyboardInput.textContent=`Key Pressed: ${keys.key}`;
});

keyboardEvent.addEventListener("keyup", function(keys) {
    keyboardInput.textContent=`Key Released: ${keys.key}, Text Inputted: ${keys.target.value}`;
});

//Form Events
const formEvents=document.getElementById("form-events");
const formInput=document.getElementById("form-input");

formEvents.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput=document.getElementById("name");
    const name=nameInput.value;

    const emailInput=document.getElementById("email");
    const email=emailInput.value;

    formInput.textContent=`Form has been submitted! Name: ${name} Email: ${email}`;
});

formEvents.addEventListener('reset', function() {
    formEvents.reset();
    formInput.textContent="Form has been reset!";
});