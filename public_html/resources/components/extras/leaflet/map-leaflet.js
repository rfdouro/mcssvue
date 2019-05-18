function mapLeaflet() {
 this.props = {
  'id': {
   'type': String,
   'required': true
  },
  'lat': {
   'type': Number,
   'required': true
  },
  'lon': {
   'type': Number,
   'required': true
  },
  'onClickMap': {
   'type': Function
  }
 };
 this.data = function () {
  return {
   map: null,
   baseLayers: null,
   overlayMaps: null
  };
 };
 this.created = function () {

 };
 this.mounted = function () {
  if (this.verificaLeaFlet) {
   var _this = this;

   //attributes to map
   var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
           '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
           'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
           mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
           origUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

   //base layers
   var osm = L.tileLayer(origUrl, {id: 'mapbox', attribution: mbAttr}),
           grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
           streets = L.tileLayer(mbUrl, {id: 'mapbox.streets', attribution: mbAttr});

   //create the map
   _this.map = L.map(this.computedId).setView([_this.lat, _this.lon], 13);
   //add base layer
   osm.addTo(_this.map);

   //add event click if has
   if (this.onClickMap) {
    _this.map.on('click', this.onClickMap);
   }

   //add markers
   var ms = this.computedMarkers;
   var vPoints = [];
   for (var i = 0; i < ms.length; i++) {
    vPoints.push(L.marker([ms[i].lat, ms[i].lon]).bindPopup('' + ms[i].texto));
   }
   var gPoints = L.layerGroup(vPoints);

   var ps = this.computedPolygons;
   var vPolygons = [];
   for (var i = 0; i < ps.length; i++) {
    var pts = [];
    for (var j = 0; j < ps[i].points.length; j++) {
     pts.push([ps[i].points[j].lat, ps[i].points[j].lon]);
    }
    vPolygons.push(L.polygon(pts, {
     color: ps[i].bordercolor,
     fillColor: ps[i].color,
     fillOpacity: 0.5
    }).bindPopup(ps[i].texto));
   }
   var gPolygons = L.layerGroup(vPolygons);


   //qjson
   var gs = this.computedGjson;
   for (var i = 0; i < gs.length; i++) {
    try {
     L.geoJSON(gs[i], {
      filter: function (feature, layer) {
       if (feature.properties) {
        return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
       }
       return false;
      },
      onEachFeature: function (feature, layer) {
       var popupContent = "<p>I started out as a GeoJSON " +
               feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

       if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
       }

       layer.bindPopup(popupContent);
      }
     }).addTo(_this.map);
    } catch (e) {
     console.error(e);
    }
   }

   this.overlayMaps = {
    "Pontos": gPoints,
    "Polígonos": gPolygons
   };

   this.baseLayers = {
    "OSM": osm,
    "Grayscale": grayscale,
    "Streets": streets
   };
   L.control.layers(this.baseLayers, this.overlayMaps).addTo(_this.map);
  } else {
   console.log('LeaFlet não econtrado');
  }
 };
 this.methods = {

 };
 this.computed = {
  computedId: function () {
   return 'map-leaflet_' + this.id;
  },
  verificaLeaFlet: function () {
   if (typeof L == 'undefined')
    return false;
   else
    return true;
  },
  computedMarkers: function () {
   var markers = [];
   //console.log(this.$el);
   var ms = this.$el.getElementsByTagName('marker');
   //console.log(ms);
   for (var i = 0; i < ms.length; i++) {
    var m = {'lat': ms[i].dataset.lat, 'lon': ms[i].dataset.lon, 'texto': ms[i].dataset.texto};
    markers.push(m);
   }
   return markers;
  },
  computedPolygons: function () {
   var polygons = [];
   var ps = this.$el.getElementsByTagName('polygon');
   for (var i = 0; i < ps.length; i++) {
    var tx = ps[i].dataset.texto;
    var cor = ps[i].dataset.color;
    var bcor = ps[i].dataset.bordercolor;
    var ms = ps[i].dataset.points;
    ms = JSON.parse(ms);
    var pts = [];
    for (var k = 0; k < ms.length; k++) {
     pts.push({'lat': ms[k].lat, 'lon': ms[k].lon});
    }
    var polygon = {
     texto: tx,
     points: pts,
     color: cor,
     bordercolor: bcor
    };
    polygons.push(polygon);
   }
   return polygons;
  },
  computedGjson: function () {
   var objs = [];
   var ps = this.$el.getElementsByTagName('gjson');
   for (var i = 0; i < ps.length; i++) {
    try {
     var content = ps[i].dataset.content;
     content = JSON.parse(content);
     objs.push(content);
    } catch (e) {
     console.error('[map-leaflet] GJson conversion error');
    }
   }
   return objs;
  }
 };
 this.template = "<div v-show=verificaLeaFlet :id=computedId><slot></slot></div>";
}
Vue.component('map-leaflet', new mapLeaflet());


