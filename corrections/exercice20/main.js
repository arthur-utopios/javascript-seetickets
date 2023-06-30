function say(text) {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

$('#greet').on('click', () => {
    let text = $('#name').val();
    say(text);
})