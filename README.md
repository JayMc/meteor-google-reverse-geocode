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
var lat = 37.774690;
lar lng = -122.415463;
reverseGeocode.getLocation(lat, lng, function(location){

	//location is straight output from Google
	//or you can now access it from reverseGeocode object
	Session.set('location', reverseGeocode.getAddrStr());
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


