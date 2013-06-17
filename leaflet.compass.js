var map;
var divcompass;
var layer = L
.tileLayer(
		'http://{s}.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/999/256/{z}/{x}/{y}.png',
		{
			maxZoom : 18,
			attribution : 'Makina Corpus'
		});
// ############################
// Compass
// ############################
L.Control.Compass = L.Control.extend({
	includes : L.Mixin.Events,
	options : {
		position : 'topright',
		title : 'Compass',

	},

	onAdd : function(map) {
		this.map = map;
		var container = L.DomUtil.create('div', 'leaflet-control-bsl');

		this._container = container;

		divcompass = this._container;

		L.DomEvent.addListener(layer, 'load', this.startWatch, this);
		//this.startWatch;

		return this._container;

	},
	startWatch : function() {

		// Update compass every 3 seconds
		var options = {
				frequency : 10
		};

		divcompass.style.display = 'compact';
		watchID = navigator.compass.watchHeading(this.onSuccess,
				this.onError, options);
	},

	// fonction appele lors du succes d'appel de la boussole
	onSuccess : function(heading) {
		//element.innerHTML = 'Heading: ' + heading.magneticHeading;
		//	this.rotateCompassImage(heading);

		var magneticHeading = 360 - heading.magneticHeading;
		var rotation = "rotate(" + magneticHeading + "deg)";

		divcompass.style.webkitTransform = rotation;
	},

	//fonction appele lors du l'echec d'appel de la boussole
	onError : function(compassError) {
		alert('Compass error: ' + compassError.code);
	}

});
L.control.compass = function(map) {
	return new L.Control.Compass(map);

};

layer.on('load', function() {
	// wait for progressive jpeg to render

});