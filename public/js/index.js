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
});
