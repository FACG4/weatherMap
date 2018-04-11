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

  function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom:4,
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


      fetch("POST" ,"/search" , (latLng.lat()+','+latLng.lng()) , (res) => {
        {
          console.log(res);
        }
      } );
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
      
      });
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom:5,
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