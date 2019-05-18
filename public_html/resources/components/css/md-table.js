Vue.component('md-table', {
 props: {
  'striped': {
   'type': Boolean
  },
  'highlight': {
   'type': Boolean
  },
  'centered': {
   'type': Boolean
  },
  'responsive': {
   'type': Boolean
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  console.log(this.computedClass);
 },
 methods: {

 },
 computed: {
  computedClass: function () {
   var ret = '';
   if(this.striped){
    ret += ' striped ';
   }
   if(this.highlight){
    ret += ' highlight ';
   }
   if(this.centered){
    ret += ' centered ';
   }
   if(this.responsive){
    ret += ' responsive-table ';
   }
   return ret;
  }
 },
 template: "<table :class=computedClass><thead><slot name='head'></slot></thead><tbody><slot name='body'></slot></tbody></table>"
});


