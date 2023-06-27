var chatBox = document.getElementById("chat-box");
var messageInput = document.getElementById("message-input");
var sendMessageButton = document.getElementById("send-message");

var messages = [];

sendMessageButton.onclick = function() {
  var message = messageInput.value;
  messages.push(message);
  chatBox.innerHTML = messages.join("<br>");
  messageInput.value = "";
};
