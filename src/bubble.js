function drawBubbles() {
  data.forEach(row => {
    drawBubble(Number(row.total_deaths) / 10, row.location);
  });
}

function drawBubble(radius, country) {
  const [x, y] = getRandomPositionOn("canvas");
  const fill = country === "Australia" ? "Green" : "Red";
  drawCircle(country, x, y, radius, fill);
}

function redrawBubbles() {
  removeBubbles();
  drawBubbles();
}

function removeBubbles() {
  data.forEach(row => {
    removeElement(row.location);
  });
}
