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

function initMap() {
  var uluru = {
    lat: -25.363,
    lng: 131.044
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });

  function placeMarkerAndPanTo(latLng, map) {


    fetch("POST", "/search", (latLng.lat() + ',' + latLng.lng()), (res) => {
      {
        if (results.textContent) {
          results.textContent = "";
        }
        var result = JSON.parse(res);
        if (result.cod === 200) {
          input.value = result.name;
          var description = document.createElement('p');
          description.textContent = JSON.stringify(result.weather[0].description);
          results.appendChild(description);
        } else {
          alert(JSON.stringify(result.message));
        }
      }
    });
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,

    });
    var map = new google.maps.Map(selector('map'), {
      zoom: 5,
      center: latLng
    });
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.addListener('click', function(e) {
      placeMarkerAndPanTo(e.latLng, map);
    });
  }
}
