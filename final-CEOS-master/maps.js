function initMap() {
	 var uluru = {lat: -3.7410788, lng: -38.4870303};
	 var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
	 	center: uluru
	  });
	 
	 var marker = new google.maps.Marker({
			position: uluru,
			map: map
	   });
	}
