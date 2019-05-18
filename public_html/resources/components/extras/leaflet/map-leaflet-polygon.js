function mapLeafletPolygon() {
 this.props = {
  'points': {
   'type': Array,
   'required': true
  },
  'texto': {
   'type': String,
   'required': true
  },
  'color': {
   'type': String,
   'required': false
  },
  'bordercolor': {
   'type': String,
   'required': false
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
  computedPoints: function (){
   return JSON.stringify(this.points);
  }
 };
 this.template = "<polygon :data-points=computedPoints :data-texto=texto :data-color=color :data-bordercolor=bordercolor></polygon>";
}
Vue.component('map-leaflet-polygon', new mapLeafletPolygon());


