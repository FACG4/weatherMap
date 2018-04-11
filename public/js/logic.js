var selector = (elementId) => {
  return document.getElementById(elementId);
}


function fetch(method, url, inputValue, cb) {
  const xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = xhr.responseText;
      cb(data);
    }
  }
  
  xhr.open(method, url);
  xhr.send(JSON.stringify(inputValue));
}
