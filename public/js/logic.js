var selector = (elementId) => {
  return document.getElementById(elementId);
}


function fetch(method, url, InputValue, cb) {
  const xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      cb(data);
    }
  }
  xhr.open(method, url);
  xhr.send(InputValue);
}
