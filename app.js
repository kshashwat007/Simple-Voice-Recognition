const button = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = ["I'm good", "Doing good", "Go away"];
const weather = ["Weather is good outside", "Its cloudy", "Shut up"];

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
  readOutLoud(transcript);
};

button.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I dont know what you said";

  if (message.includes("How are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  if (message.includes("How is the weather")) {
    const finalText = weather[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
