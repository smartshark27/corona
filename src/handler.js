var data;

function handleLoad() {
  fitToScreen();
  loadData().then(loadedData => {
    data = loadedData;
    drawBubbles(data);
  });
}

function handleClick() {
  redrawBubbles(data);
}
