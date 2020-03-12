const PDF_DATA_TEXT_TABLE_PREFIX = "Western Pacific Region";
const PDF_DATA_TEXT_TABLE_SUFFIX = "Subtotal";

function loadData(dataMap) {
  const pdfURL = generatePDFURL();
  getPDFText(pdfURL, 4, 8, parseRawText);
}

function generatePDFURL() {
  const prefix = "https://www.who.int/docs/default-source/coronaviruse/situation-reports/";
  // const suffix = "-sitrep-50-covid-19.pdf";
  const suffix = "-sitrep-51-covid-19.pdf"; // Placeholder until further notice
  // const dateString = getDateString('Europe/Paris');
  const dateString = "20200311"
  return prefix + dateString + suffix;
}

function parseRawText(text) {
  const tableStart = text.indexOf(PDF_DATA_TEXT_TABLE_PREFIX);
  const tableEnd = text.indexOf(PDF_DATA_TEXT_TABLE_SUFFIX) - 3;

  const reducedText = text.slice(tableStart, tableEnd);
  const split = reducedText.split("   ").filter(item => item !== "");

  var region;
  var i = 0;
  while (i < split.length) {
    if (isString(split[i]) && isString(split[i+1])) {
      region = split[i];
      i++;
    } else {
      dataMap.set(split[i], {
        region: region,
        totalCases: Number(split[i+1]),
        totalNewCases: Number(split[i+2]),
        totalDeaths: Number(split[i+3]),
        totalNewDeaths: Number(split[i+4]),
      });
      i += 7;
    }
  }

  console.log(dataMap);
  drawBubbles(dataMap);
}

function isString(string) {
  return isNaN(Number(string));
}