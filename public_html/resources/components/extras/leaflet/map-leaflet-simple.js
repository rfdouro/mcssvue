function mapLeafletSimple() {
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
   map: null
  };
 };
 this.created = function () {

 };
 this.mounted = function () {
  if (this.verificaLeaFlet) {
   var _this = this;
   _this.map = L.map(this.computedId).setView([_this.lat, _this.lon], 13);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(_this.map);

   if (this.onClickMap) {
    _this.map.on('click', this.onClickMap);
   }

   //add markers
   var ms = this.computedMarkers;
   for (var i = 0; i < ms.length; i++) {
    L.marker([ms[i].lat, ms[i].lon]).addTo(_this.map)
            .bindPopup('' + ms[i].texto)
            //.openPopup()
            ;
   }


   var ps = this.computedPolygons;
   for (var i = 0; i < ps.length; i++) {
    var pts = [];
    for (var j = 0; j < ps[i].points.length; j++) {
     pts.push([ps[i].points[j].lat, ps[i].points[j].lon]);
    }
    L.polygon(pts, {
     color: ps[i].bordercolor,
     fillColor: ps[i].color,
     fillOpacity: 0.5
    }).addTo(_this.map).bindPopup(ps[i].texto);
   }

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
   var ms = this.$el.getElementsByTagName('marker');
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
  }
 };
 this.template = "<div v-show=verificaLeaFlet :id=computedId><slot></slot></div>";
}
Vue.component('map-leaflet-simple', new mapLeafletSimple());


