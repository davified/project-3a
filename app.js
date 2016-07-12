$(document).ready(function () {
  var mymap = L.map('mapid').setView([1.2951, 103.8498], 15);

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiZGF2aWZpZWQiLCJhIjoiY2lxYWoxMnF3MDF0Z2Z2bTZ6MHl3cWdiMyJ9.JhNjMNWSTxbGzp7ck3ahMA'
  }).addTo(mymap)

// cool watercolor basemap
  // L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  // 	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // 	subdomains: 'abcd',
  // 	minZoom: 1,
  // 	maxZoom: 13,
  // 	ext: 'png'
  // }).addTo(mymap);

  var lon = 0
  var lat = 0
  var size = 0
  var message = ""

  for (i = 0; i < carparks.length; i++) {
    $('div#test').append(carparks[i].Development)

    var lon = carparks[i].Longitude
    var lat = carparks[i].Latitude
    var size = carparks[i].Lots
    var message = carparks[i].Development + ": " + carparks[i].Lots

    var intensity = size / 500

    var circle = L.circle([lat, lon], 50, {
      fillColor: 'darkblue',
      fillOpacity: intensity,
      stroke: false
    }).addTo(mymap)

    // circle.bindPopup("Heavy Traffic on TPE (towards SLE) at Punggol Rd Exit").openPopup();
    circle.bindPopup(message).openPopup()
  }

})

var carparks = [
{
  CarParkID: 1,
  Area: "Marina",
  Development: "Suntec City",
  Latitude: 1.29375,
  Longitude: 103.85718,
  Lots: 1998
},
{
  CarParkID: 4,
  Area: "Marina",
  Development: "The Esplanade",
  Latitude: 1.29011,
  Longitude: 103.85561,
  Lots: 587
},
{
  CarParkID: 5,
  Area: "Marina",
  Development: "Millenia Singapore",
  Latitude: 1.29251,
  Longitude: 103.86009,
  Lots: 855
},
{
  CarParkID: 6,
  Area: "Marina",
  Development: "Singapore Flyer",
  Latitude: 1.28944,
  Longitude: 103.86311,
  Lots: 264
},
{
  CarParkID: 16,
  Area: "Harbfront",
  Development: "VivoCity P3",
  Latitude: 1.26421,
  Longitude: 103.82263,
  Lots: 554
},
{
  CarParkID: 17,
  Area: "Harbfront",
  Development: "Sentosa",
  Latitude: 1.25017,
  Longitude: 103.83126,
  Lots: 802
},
{
  CarParkID: 19,
  Area: "Harbfront",
  Development: "Harbourfront Centre",
  Latitude: 1.26426,
  Longitude: 103.82011,
  Lots: 681
},
{
  CarParkID: 50,
  Area: "Harbfront",
  Development: "VivoCity P2",
  Latitude: 1.26426,
  Longitude: 103.82164,
  Lots: 640
},
{
  CarParkID: 20,
  Area: "Orchard",
  Development: "Far East Plaza",
  Latitude: 1.3071,
  Longitude: 103.83359,
  Lots: 255
},
{
  CarParkID: 18,
  Area: "Orchard",
  Development: "Tang Plaza",
  Latitude: 1.30491,
  Longitude: 103.83312,
  Lots: 275
},
{
  CarParkID: 13,
  Area: "Orchard",
  Development: "Ngee Ann City",
  Latitude: 1.30236,
  Longitude: 103.8349,
  Lots: 694
},
{
  CarParkID: 12,
  Area: "Orchard",
  Development: "Mandarin Hotel",
  Latitude: 1.30216,
  Longitude: 103.83601,
  Lots: 214
},
{
  CarParkID: 24,
  Area: "Orchard",
  Development: "313@Somerset",
  Latitude: 1.30084,
  Longitude: 103.83872,
  Lots: 102
},
{
  CarParkID: 7,
  Area: "Orchard",
  Development: "Orchard Point",
  Latitude: 1.30135,
  Longitude: 103.84061,
  Lots: 160
},
{
  CarParkID: 22,
  Area: "Orchard",
  Development: "Concorde Hotel",
  Latitude: 1.3006,
  Longitude: 103.84191,
  Lots: 216
},
{
  CarParkID: 10,
  Area: "Orchard",
  Development: "The Cathay",
  Latitude: 1.2995,
  Longitude: 103.84762,
  Lots: 16
},
{
  CarParkID: 23,
  Area: "Orchard",
  Development: "ION Orchard",
  Latitude: 1.30403,
  Longitude: 103.83206,
  Lots: 142
},
{
  CarParkID: 14,
  Area: "Orchard",
  Development: "Wisma Atria",
  Latitude: 1.30366,
  Longitude: 103.83327,
  Lots: 223
},
{
  CarParkID: 8,
  Area: "Orchard",
  Development: "The Heeren",
  Latitude: 1.30255,
  Longitude: 103.83739,
  Lots: 129
},
{
  CarParkID: 26,
  Area: "Harbfront",
  Development: "Resorts World Sentosa",
  Latitude: 1.25667,
  Longitude: 103.82012,
  Lots: 2027
},
{
  CarParkID: 27,
  Area: "Orchard",
  Development: "Orchard Central",
  Latitude: 1.30072,
  Longitude: 103.83979,
  Lots: 176
},
{
  CarParkID: 28,
  Area: "Orchard",
  Development: "Park Mall",
  Latitude: 1.29776,
  Longitude: 103.84564,
  Lots: 309
},
{
  CarParkID: 29,
  Area: "Marina",
  Development: "Marina Bay Sands",
  Latitude: 1.28225028515239,
  Longitude: 103.858300275795,
  Lots: 759
},
{
  CarParkID: 43,
  Area: "JurongLakeDistrict",
  Development: "Westgate",
  Latitude: 1.3343,
  Longitude: 103.74282,
  Lots: 182
},
{
  CarParkID: 51,
  Area: "Orchard",
  Development: "Holiday Inn",
  Latitude: 1.30228007106279,
  Longitude: 103.841129960081,
  Lots: 144
},
{
  CarParkID: 53,
  Area: "JurongLakeDistrict",
  Development: "IMM Building",
  Latitude: 1.334847,
  Longitude: 103.746815,
  Lots: 388
},
{
  CarParkID: 54,
  Area: "JurongLakeDistrict",
  Development: "JCube",
  Latitude: 1.33341,
  Longitude: 103.740088,
  Lots: 167
},
{
  CarParkID: 55,
  Area: "Orchard",
  Development: "Paragon",
  Latitude: 1.3038,
  Longitude: 103.83585,
  Lots: 132
},
{
  CarParkID: 56,
  Area: "Marina",
  Development: "National Gallery",
  Latitude: 1.29027,
  Longitude: 103.85167,
  Lots: 139
},
{
  CarParkID: 2,
  Area: "Marina",
  Development: "Marina Square",
  Latitude: 1.29115,
  Longitude: 103.85728,
  Lots: 1340
},
{
  CarParkID: 9,
  Area: "Orchard",
  Development: "Plaza Singapura",
  Latitude: 1.30103,
  Longitude: 103.84503,
  Lots: 246
}
]

console.log(carparks[0])
