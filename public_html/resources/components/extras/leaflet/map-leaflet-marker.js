function mapLeafletMarker() {
 this.props = {
  'lat': {
   'type': Number,
   'required': true
  },
  'lon': {
   'type': Number,
   'required': true
  },
  'texto': {
   'type': String,
   'required': true
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
  
 };
 this.methods = {

 };
 this.computed = {
  
 };
 this.template = "<marker :data-lat=lat :data-lon=lon :data-texto=texto></marker>";
}
Vue.component('map-leaflet-marker', new mapLeafletMarker());


