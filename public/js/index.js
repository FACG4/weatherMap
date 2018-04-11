var input = selector('inputValue');
var results = selector('results');
var searchBtn = selector('searchBtn');

searchBtn.addEventListener('click', (e) => {
  var inputValue = input.value;
  fetch("POST", "/city", inputValue, (res) => {
    {
      if (results.textContent) {
        results.textContent = "";
      }
      var result = JSON.parse(res);
      if (result.cod === 200) {
        var description = document.createElement('p');
        description.textContent = JSON.stringify(result.weather[0].description);
        results.appendChild(description);
      } else {
        alert(JSON.stringify(result.message));
      }
    }
  });

});
