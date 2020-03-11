function fitToScreen() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const canvas = getElement("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
}

function getElement(id) {
  return document.getElementById(id);
}

function getDateString(timezone) {
  const options = {
    timeZone: timezone,
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };

  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date
    .toLocaleDateString("ko-KR", options)
    .split(". ")
    .join("")
    .slice(0, 8); // e.g. 20190310
}

function getRandomPositionOn(rectID) {
  const rect = getElement(rectID);
  const width = canvas.getAttribute("width");
  const height = canvas.getAttribute("height");
  const x = generateRandomNumberBetween(0, width);
  const y = generateRandomNumberBetween(0, height);
  return [x, y];
}

function generateRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function drawCircle(id, x, y, r, fill) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute('id', id);
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", fill);
  getElement("canvas").appendChild(circle);
}

function removeElement(id) {
  const element = getElement(id);
  if (element) {
    element.remove();
  }
}

// function drawText(x, y, content, size) {
//   const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

//   text.setAttribute("dominant-baseline", "middle");
//   text.setAttribute("text-anchor", "middle");
//   text.setAttribute("x", x);
//   text.setAttribute("y", y);
//   text.setAttribute("font-size", size);
//   getElement("canvas").appendChild(text);
//   text.textContent = content;
// }
