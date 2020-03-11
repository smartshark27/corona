async function getPDFText(url, fromPage, toPage, callback) {
  const pdfjsLib = window["pdfjs-dist/build/pdf"];

  var allText = "";

  await pdfjsLib.getDocument(url).then(
    async function(pdf) {
      const totalPages = pdf.numPages;
      if (toPage > totalPages) {
        toPage = totalPages;
      }
      
      for (var pageNum = fromPage; pageNum <= toPage; pageNum++) {
        await getPageText(pdf, pageNum).then(function(text) {
          allText += text;
        });
      }
    },
    function(reason) {
      console.error(reason);
    }
  );
  callback(allText);
}

function getPageText(pdf, pageNum) {
  return new Promise(function(resolve, reject) {
    pdf.getPage(pageNum).then(function(pdfPage) {
      pdfPage.getTextContent().then(function(textContent) {
        var textItems = textContent.items;
        var finalString = "";
        for (var i = 0; i < textItems.length; i++) {
          var item = textItems[i];
          finalString += item.str + " ";
        }
        resolve(finalString);
      });
    });
  });
}
