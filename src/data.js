const DATA_URL = "https://covid.ourworldindata.org/data/full_data.csv";

function loadData() {
  return new Promise((resolve, reject) => {
    parseCSVFromURL(DATA_URL).then(data => {
      const latestDate = data.reduce((latestDate, row) => {
        return row.date > latestDate ? row.date : latestDate;
      }, "0000-00-00");
      data = data
        .filter(row => row.date === latestDate)
        .filter(row => row.location !== "World");
      console.log(data);
      resolve(data);
    });
  });
}
