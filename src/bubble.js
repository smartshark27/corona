const BUBBLE_FILL = "Red";
// const FONT_SIZE = "24";

function drawBubbles() {
  data.forEach(row => {
    drawBubble(Number(row.total_deaths) / 10, row.location);
  });
}

function drawBubble(radius, country) {
  const [x, y] = getRandomPositionOn("canvas");
  drawCircle(country, x, y, radius, BUBBLE_FILL);
  // drawText(x, y, country, FONT_SIZE);
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
