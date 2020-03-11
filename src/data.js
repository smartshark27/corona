const PDF_DATA_TEXT_TABLE_PREFIX = "Western Pacific Region";
const PDF_DATA_TEXT_TABLE_SUFFIX = "Subtotal";

function loadData() {
  const pdfURL = generatePDFURL();
  getPDFText(pdfURL, 4, 8, parseRawText);
}

function generatePDFURL() {
  const prefix = "https://www.who.int/docs/default-source/coronaviruse/situation-reports/";
  const suffix = "-sitrep-50-covid-19.pdf";
  const dateString = getDateString('Europe/Paris');
  return prefix + dateString + suffix;
}

function parseRawText(text) {
  const tableStart = text.indexOf(PDF_DATA_TEXT_TABLE_PREFIX);
  const tableEnd = text.indexOf(PDF_DATA_TEXT_TABLE_SUFFIX) - 3;

  const reducedText = text.slice(tableStart, tableEnd);
  const split = reducedText.split("   ").filter(item => item !== "");
  
  const countryStats = new Map();
  var region;
  var i = 0;
  while (i < split.length) {
    if (isString(split[i]) && isString(split[i+1])) {
      region = split[i];
      i++;
    } else {
      countryStats.set(split[i], {
        region: region,
        totalCases: split[i+1],
        totalNewCases: split[i+2],
        totalDeaths: split[i+3],
        totalNewDeaths: split[i+4],
      });
      i += 7;
    }
  }

  console.log(countryStats);
}

function isString(string) {
  return isNaN(Number(string));
}