const DATA_URL = "https://covid.ourworldindata.org/data/full_data.csv";

var data;
var date;

function loadData() {
  return new Promise((resolve, reject) => {
    parseCSVFromURL(DATA_URL).then(rows => {
      const latestDate = rows.reduce((latestDate, row) => {
        return row.date > latestDate ? row.date : latestDate;
      }, "0000-00-00");
      date = latestDate;
      console.log("Data from " + latestDate);

      data = rows
        .filter(row => row.date === latestDate)
        .filter(row => row.location !== "World");
      console.log(data);

      resolve();
    });
  });
}
