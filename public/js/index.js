var input = selector('inputValue');

var searchBtn = selector('searchBtn');

searchBtn.addEventListener('click', (e) => {
  var inputValue = input.value;
  fetch("POST" ,"/city" , inputValue , (res) => {
    {
      console.log(res);
    }
  } );
});
