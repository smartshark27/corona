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
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("id", id);
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

function parseCSVFromURL(url) {
  return new Promise((resolve, reject) => {
    getTextContentFromURL(url).then(text => {
      const rows = text.split("\n").map(row => row.split(","));
      const columnNames = rows[0];
      const data = rows.slice(1, rows.length).map(row => {
        const obj = {};
        for (var i = 0; i < columnNames.length; i++) {
          obj[columnNames[i]] = row[i];
        }
        return obj;
      });
      resolve(data);
    });
  });
}

function getTextContentFromURL(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        const text = request.responseText;
        if (text) {
          resolve(text);
        } else {
          reject("No text at URL");
        }
      }
    };
    request.send();
  });
}
