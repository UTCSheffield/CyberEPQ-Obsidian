---
title: "How to embede Open Street Map in a webpage (like Google Maps)"
source: "https://medium.com/@nargessmi87/how-to-embede-open-street-map-in-a-webpage-like-google-maps-8968fdad7fe4"
author:
  - "[[Narges Mirzaaghaei]]"
published: 2019-01-24
created: 2025-12-01
description: "How to embed Open Street Map in a webpage (like Google Maps) OpenStreetMap is a map of the world that is free to use and user-contributed. You can edit the map and like Wikipedia, if you do a good …"
tags:
  - "clippings"
---
[Sitemap](https://medium.com/sitemap/sitemap.xml)

OpenStreetMap is a map of the world that is free to use and user-contributed. You can edit the map and like Wikipedia, if you do a good job it will stay otherwise someone will catch and roll it back.

You can use OSM, either as an iframe, or maybe you want to deploy your slippy map.

## 1- iframe

- Open [https://www.openstreetmap.org](https://www.openstreetmap.org/)
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*pLggZxtqH99TVK-E8blPIQ.png)

- Search for a place you want
- Right-click and click on “show address”
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*_d3Cs3oKXdXfDJmy27DmUA.png)

- On the right side click on the share
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*j3yQ5mNu2B68ACZ87oO1xg.jpeg)

- Click on HTML and copy the iframe code and paste it into your HTML document
![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*4FPsepkyxnjj5yPxhWu5CA.jpeg)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*874SQpS95CwRJVA7Syz7uA.jpeg)

## 2\. Deploy your map using Leaflet

You can embed OpenStreetMap into your website, just as you might with Google or Yahoo! maps. This can be done using [Leaflet](https://wiki.openstreetmap.org/wiki/Leaflet) ([leafletjs.com](http://leafletjs.com/)) which is a free open source JavaScript library with a light, easy-to-use API, with many plugins.

- Include leaflet style to head of your HTML
```c
<link rel = "stylesheet" href = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
```
- Include leaflet javascript at the bottom of your body
```c
<script src = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
```
- Create a container for your map. You can use the <div> tag for this purpose and add dimension to it
```c
<div id =”my-map” style = “width:800px; height:600px;”></div>
```
- Add script for displaying a map. it should be added after leaflet.js
```c
<script>
 // Creating map options
 var mapOptions = {
 center: [17.385044, 78.486671],
 zoom: 10
 }
 
 // Creating a map object
 var map = new L.map(‘map’, mapOptions);
 
 // Creating a Layer object
 var layer = new     L.TileLayer(‘http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png’);
 
 // Adding layer to the map
 map.addLayer(layer);
 </script>
```
- Complete markup
```c
<!DOCTYPE html>
        <html>
           <head>
              <title>OSM and Leaflet</title>
              <link rel = "stylesheet" href = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"/>
           </head><body>
              <div id = "map" style = "width: 900px; height: 580px"></div><script src = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
              <script>
                 // Creating map options
                 var mapOptions = {
                    center: [17.385044, 78.486671],
                    zoom: 10
                 }
                 
                 // Creating a map object
                 var map = new L.map('map', mapOptions);
                 
                 // Creating a Layer object
                 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
                 
                 // Adding layer to the map
                 map.addLayer(layer);
              </script>
           </body>
           
        </html>
```

we are done!

**If you are interested in more detailed information I recommend you view a great tutorial on** [**the Tutorialspoint website**](https://www.tutorialspoint.com/leafletjs/leafletjs_getting_started.htm)

**You may also like to read:**

[**How to find an address or place in OpenStreetMap**](https://medium.com/@nargessmi87/how-to-find-an-address-or-place-in-openstreetmap-e58e1a4118c9)

[**How to get latitude and longitude from a click event on Open Street Map**](https://medium.com/@nargessmi87/how-to-get-latitude-and-longitude-from-a-click-event-on-osm-3af4144b6d4b)

[**How to customize the OpenStreetMap marker icon and binding popup**](https://medium.com/@nargessmi87/how-to-customize-the-openstreetmap-marker-icon-and-binding-popup-ab2254bddec2)

[***How to display multiple locations on the map and show related information on user hover(like booking.com)***](https://medium.com/@nargessmi87/booking-bdb7a6deb503)

## More from Narges Mirzaaghaei

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--8968fdad7fe4---------------------------------------)