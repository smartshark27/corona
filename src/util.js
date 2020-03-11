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
