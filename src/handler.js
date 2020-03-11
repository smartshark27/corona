const dataMap = new Map();

function handleLoad() {
  fitToScreen();
  loadData(dataMap);
}

function handleClick() {
  redrawBubbles(dataMap);
}
