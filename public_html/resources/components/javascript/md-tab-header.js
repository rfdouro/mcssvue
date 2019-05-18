function mdTabHeader() {
 this.props = {
  'to': {
   'type': String
  }
 };
 this.data = function () {
  return;
 };
 this.mounted = function () {
  if (!this.to) {
   console.error('the to property of tab-head is necessary!');
   //return false;
  }
 };
 this.methods = {

 };
 this.computed = {
  computedHref: function () {
   return '#' + this.to;
  }
 };
 this.template = "<li class='tab col s3'><a :href=computedHref><slot></slot></a></li>";
}

Vue.component('md-tab-header', new mdTabHeader());




