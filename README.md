Leaflet.Compass
===================

This little plugin for <a href="http://leafletjs.com/">leaflet</a> let you integrate Compass in <a href="http://phonegap.com/">PhoneGap</a> application base on <a href="http://docs.phonegap.com/en/2.3.0/cordova_compass_compass.md.html#Compass">Compass API</a> .
This exemple use Cordova 2.3 and Leaflet 0.5.1. 


Usage
===================
Usage is very simple. Let's consider we have a Leaflet map:

 
```
 var  map = L.map('map').setView([ 48.85, 2.35 ], 13);

```
Create a new layer
```
 var layer = L
.tileLayer(
		'http://{s}.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/999/256/{z}/{x}/{y}.png',
		{
			maxZoom : 18,
			attribution : 'Makina Corpus'
		});
		
layer.addTo(map);

```

Add a DomEvent Listener to Compass Control 

```
L.DomEvent.addListener(layer, 'load', this.startWatch, this);

L.control.compass().addTo(map);

```
Find full exemple
Authors
-------

[Saoud Nidhal](https://github.com/NidhalSNSdev/)

[![Makina Corpus](http://depot.makina-corpus.org/public/logo.gif)](http://makinacorpus.com)
