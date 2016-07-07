$(document).ready(function () {
  var mymap = L.map('mapid').setView([1.3521, 103.8198], 12);

  // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  //   maxZoom: 18,
  //   // accessToken: 'pk.eyJ1IjoiZGF2aWZpZWQiLCJhIjoiY2lxYWoxMnF3MDF0Z2Z2bTZ6MHl3cWdiMyJ9.JhNjMNWSTxbGzp7ck3ahMA'
  // }).addTo(mymap)

// cool watercolor basemap
  L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 1,
  	maxZoom: 12,
  	ext: 'png'
  }).addTo(mymap);

  var circle = L.circle([1.4055606511815117, 103.77270741120161], 500, {
    fillColor: 'red',
    fillOpacity: 0.5,
    stroke: false
  }).addTo(mymap)

  // marker.bindPopup("Heavy Traffic on TPE (towards SLE) at Punggol Rd Exit").openPopup();
  circle.bindPopup('(7/7)8:14 Accident on BKE (towards PIE) after Mandai Rd Exit.')
})

function success(data) {
  console.log(data)
}

var incidents = $.ajax({
    headers: {
      "AccountKey": "wX12O8DoTAuIZ9/3fMyKWQ==",
      "UniqueUserID": "438ffd3c-51ef-4ccb-bb52-aa7014a236fb",
      "accept": "application/json"
    },
    crossDomain: true,
    dataType: "jsonp",
    jsonpCallback: "success",
    url: "http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents"
})

// console.log(incidents)
// }
