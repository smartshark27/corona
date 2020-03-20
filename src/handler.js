function handleLoad() {
  fitToScreen();
  loadData().then(() => {
    drawBubbles(data);
    addDateMessage();
    drawAllText();
  });
}

function handleClick() {
  redrawBubbles(data);
  redrawAllText();
}
