function createMap() {
    
    const hq = { lat: 38.9847, lng: -77.0947 };
    console.log(hq);
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: hq,
    });
    
    const marker = new google.maps.Marker({
      position: hq,
      map: map,
    });
  }