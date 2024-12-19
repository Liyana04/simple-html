document.getElementById('animationButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
  });

//   keep expanding button each time clicked

const button = document.getElementById('expandButton');

// Check if there's a saved button size in localStorage
let buttonSize = localStorage.getItem('buttonSize');
if (buttonSize) {
  button.style.fontSize = buttonSize;
}

button.addEventListener('click', function() {
  // Increase button font size by 12px
  let currentSize = parseInt(window.getComputedStyle(button).fontSize);
  let newSize = currentSize + 12 + 'px';
  
  // Update the button size in the DOM and save to localStorage
  button.style.fontSize = newSize;
  localStorage.setItem('buttonSize', newSize);
});


// copilot code js
window.addEventListener('scroll', function() {
  let parallaxElements = document.querySelectorAll('.parallax');
  let scrollPosition = window.pageYOffset;

  parallaxElements.forEach(function(elem) {
      elem.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
  });
});