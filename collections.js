scollection.TimeZones = new Mongo.Collection('scollection_timezones');
scollection.TimeZones.allow({
	insert: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
	update: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
	remove: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
});
