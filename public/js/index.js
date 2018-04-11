<<<<<<< HEAD
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

=======
var input = selector("inputValue");
var searchBtn = selector("searchBtn");
const result = document.querySelector(".result");

searchBtn.addEventListener("click", e => {
  result.innerHTML = "";
  var inputValue = input.value;
  input.value = "";
  if (inputValue.trim() != "") {
    fetch("POST", "/city", inputValue, res => {
      data = JSON.parse(res);
      const arrayOfweather = Object.keys(data);
      arrayOfweather.forEach(item => {
        const newData = document.createElement("li");
        newData.textContent += `${item}: ${data[item]}`;
        result.appendChild(newData);
      });
    });
  } else {
    result.innerHTML = "";
    const newData = document.createElement("li");
    newData.textContent += `Please input a valid city Name`;
    result.appendChild(newData);
  }
>>>>>>> 94d9e8cdb79681d015b5329996e844474d3c6179
});
