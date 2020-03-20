const MESSAGES = [
  "Each circle is a country",
  "The radius is number of deaths",
  "",
  "Australia is green"
];
var currentMessageIndex = 0;

function drawAllText() {
  drawText("titleText", "50%", "45%", "COVID-19", 48);
  drawText("messageText", "50%", "55%", nextMessage(), 24);
}

function redrawAllText() {
  removeElement("titleText");
  removeElement("messageText");
  drawAllText();
}

function addDateMessage() {
  MESSAGES[2] = "Data from " + date;
}

function nextMessage() {
  const message = MESSAGES[currentMessageIndex];
  currentMessageIndex = (currentMessageIndex + 1) % MESSAGES.length;
  return message;
}
