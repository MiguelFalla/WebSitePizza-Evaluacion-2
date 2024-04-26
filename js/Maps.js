function initMap() {
    var myLatLng = {lat: 40.7128, lng: -74.0060}; // Coordenadas de Nueva York (ejemplo)
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12, // Nivel de zoom inicial
      center: myLatLng // Centro del mapa
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Ubicación relevante' // Título del marcador
    });
  
    // Agregar evento click al mapa para redirigir a Google Maps
    map.addListener('click', function() {
      window.location.href = 'https://www.google.com/maps/search/?api=1&query= https://maps.app.goo.gl/iKEKjEvRBkqUrZsh6'
    });
  }
  