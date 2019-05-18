function mapLeafletGjson() {
 this.props = {
  'content': {
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
  computedContent: function () {
   try {
    return JSON.stringify(this.content);
   } catch (e) {

   }
   return '';
  }
 };
 this.template = "<gjson :data-content=computedContent></gjson>";
}
Vue.component('map-leaflet-gjson', new mapLeafletGjson());


