
Meteor.methods({
	getLocation: function(lat, lng){
		var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng;
		var result = HTTP.call('GET', url, {timeout: 5000});
		if(result.statusCode === 200){
			return JSON.parse(result.content);
		}else{
			return {
				error: true,
				massage: 'Result not recevied'
			}
		}

	}
})

