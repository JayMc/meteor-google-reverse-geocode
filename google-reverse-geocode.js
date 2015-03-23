reverseGeocode = {
	getLocation: function(lat, lng, callback){
		var self = this;
		var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng;
		HTTP.call('GET', url, {timeout: 5000}, function(err, result){

			if(err){
				callback(err);
			}

			if(result.statusCode === 200){
				self.data = JSON.parse(result.content);
				callback(self.data);
			}

		});
		

	},
	data: {

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