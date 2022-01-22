function createElement (data) {
  const newP = document.createElement('p');
  const newText = document.createTextNode(data);
  newP.appendChild(newText);
  document.body.appendChild(newP);
}

function queryWikipedia (callback) {
  const req = new XMLHttpRequest();
  req.open('GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      if (req.status === 200) {
        const p = JSON.parse(req.responseText);
        callback(p.query.pages['21721040'].extract);
      }
    }
  };
  req.send(null);
}

queryWikipedia(createElement);
