function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert("Thanks, " + name + "! Your message has been received.");
  event.target.reset();
}

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing Effect for Hero Text
const text = "Hi I'm Sahil Khan";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("hero-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
