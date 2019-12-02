const button = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("Voice is Activated");
};

recognition.onresult = function(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
};

button.addEventListener("click", () => {
  recognition.start();
});
