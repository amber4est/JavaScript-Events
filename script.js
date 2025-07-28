//Mouse Event
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

//Keyboard Event
const keyboardEvent=document.getElementById("keyboard-events");
const keyboardInput=document.getElementById("keyboard-input");

keyboardEvent.addEventListener("keydown", function(keys) {
    keyboardInput.textContent=`Key Pressed: ${keys.key}`;
});

keyboardEvent.addEventListener("keyup", function(keys) {
    keyboardInput.textContent=`Key Released: ${keys.key}, Text Inputted: ${keys.target.value}`;
});