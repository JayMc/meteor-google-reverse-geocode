#GPS coords to address
Calls [Googles reverse geocode API](https://developers.google.com/maps/documentation/geocoding/#ReverseGeocoding) converting GPS lat and lng to physical address

#install
```
meteor add jaymc:google-reverse-geocode
```

#Usage
getLocation(lat, long); returns the whole response from Googles API

#Example
```
var location = Meteor.call('getLocation', 37.774690, -122.415463);
console.log(location.results[0].formatted_address)
```
