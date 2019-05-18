Vue.component('map-leaflet-one-popup', {
 props: {
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
  'textopopup': {
   'type': String,
   'required': true
  }
 },
 data: function () {
  return {
   map: null
  };
 },
 created: function () {

 },
 mounted: function () {
  if (this.verificaLeaFlet) {
   var _this = this;
   console.log(this.id);
   console.log(this.computedId);
   _this.map = L.map(this.computedId).setView([_this.lat, _this.lon], 13);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(_this.map);
   L.marker([_this.lat, _this.lon]).addTo(_this.map)
           .bindPopup('' + _this.textopopup)
           .openPopup();
  } else {
   console.log('LeaFlet não econtrado');
  }
 },
 methods: {

 },
 computed: {
  computedId: function () {
   return 'map-leaflet-one-popup_' + this.id;
  },
  verificaLeaFlet: function () {
   if (typeof L == 'undefined')
    return false;
   else
    return true;
  }
 },
 template: "<div v-show=verificaLeaFlet :id=computedId></div>"
});


