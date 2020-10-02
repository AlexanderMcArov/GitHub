var mymap = L.map('mapid').setView([42.875335, 74.603434], 10);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

    var icon = L.icon({
        iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyuDVOEmdj90xnVOps5HoK98xh8JmBNwtfCw&usqp=CAU',
        iconSize:     [50,50],
    });

        let coords = [
            [42.875335, 74.603434],
            [43.875335, 74.603434],
            [44.875335, 74.603434],
            [45.875335, 74.603434],
            [46.875335, 74.603434], 
            [47.875335, 74.603434],
            [48.875335, 74.603434]
        ]

        coords.forEach((item,index)=>{
            let marker = L.marker([item[0], item[1]]).addTo(mymap)
                .bindPopup(`ID:${index} <br> home1<br>price2<br>705-666-302`)
                marker.setIcon(icon);
                marker.addEventListener('click',()=>{
                    console.log(index)
                })
        })


	L.marker([51.5, -0.09]).addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.")

	L.circle([51.508, -0.11], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a circle.");

	let oktabr = L.polygon([
		[42.857091, 74.587212],
		[42.856714, 74.609871],
		[42.842744, 74.608841],
		[42.843122, 74.587383]
    ]).addTo(mymap).bindPopup("Октябрьский район.");

    oktabr.addEventListener('click',()=>{
        setTimeout(()=>{
            mymap.closePopup();
        },1000)
        console.log('Октябрський район');
    })


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);
