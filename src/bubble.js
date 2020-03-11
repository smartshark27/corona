const BUBBLE_FILL = "Red";
// const FONT_SIZE = "24";

function drawBubbles(dataMap) {
    dataMap.forEach((stats, country) => {
        drawBubble(stats, country);
    });
}

function drawBubble(stats, country) {
    const [x, y] = getRandomPositionOn("canvas");
    drawCircle(country, x, y, stats.totalDeaths, BUBBLE_FILL);
    // drawText(x, y, country, FONT_SIZE);
}

function redrawBubbles(dataMap) {
    removeBubbles(dataMap);
    drawBubbles(dataMap);
}

function removeBubbles(dataMap) {
    dataMap.forEach((_, country) => {
        removeElement(country);
    });
}