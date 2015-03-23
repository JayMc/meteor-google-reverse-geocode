#GPS coords to address
Calls [Googles reverse geocode API](https://developers.google.com/maps/documentation/geocoding/#ReverseGeocoding) converting GPS lat and lng to physical address

#install
```
meteor add jaymc:google-reverse-geocode
```

#Usage

*Convert lat and lng to address*
Returns whole data from Google API. Check below for tidy outputs
```
reverseGeocode.getLocation(37.774690, -122.415463, function(location){

	location is straight output from Google
});
```

*Data is accessible from*
```
reverseGeocode.data
```

*Format address as an Object*
```
reverseGeocode.getAddrObj()
```

*Format address as a String*
```
reverseGeocode.getAddrStr()
```

#Example
```
var location = Meteor.call('getLocation', 37.774690, -122.415463);
console.log(location.results[0].formatted_address)
```
