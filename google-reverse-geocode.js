reverseGeocode = {
	data: { },
	getActualLocation: function (url) {
		var self = this;
		HTTP.call('GET', url, { timeout: 5000 }, function (err, result) {
			if (err){
				callback(err);
			}

			if (result.statusCode === 200) {
				self.data = JSON.parse(result.content);
				callback(self.data);
			}
		});
	},
	getSecureLocation: function (lat, lng, callback) {
		var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng;
		this.getActualLocation(url);
	},
	getLocation: function(lat, lng, callback){
		var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng;
		this.getActualLocation(url);
	},
	getAddrObj: function(){
		return this.data.results[0].address_components.map(function(comp){
			// console.log(comp.types[0])
			return {
				'longName': comp.long_name,
				'shortName': comp.short_name,
				'type': comp.types[0]
			}
		})
	},
	getAddrStr: function(){
		return this.data.results[0].formatted_address;
	}
};