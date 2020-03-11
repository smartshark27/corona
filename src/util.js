function fitToScreen() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const canvas = getElement("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);

  const background = getElement("background");
  background.setAttribute("width", width);
  background.setAttribute("height", height);
}

function getElement(id) {
  return document.getElementById(id);
}