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