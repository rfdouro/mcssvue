Vue.component('md-collection', {
 props: {
  'header': {
   'type': Boolean
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  console.log(this.$children);
  var t = 0;
  this.$children.filter(function (c) {   
   if(c.$options._componentTag == 'md-collection-item'){
    ++t;
    console.log(t);
    console.log(c.$options._componentTag);
   }
  });
 },
 methods: {

 },
 computed: {
  computedClass: function () {
   var ret = '';
   if (this.header)
    ret += ' with-header ';
   return ret;
  }
 },
 template: "<ul class='collection' :class=computedClass ><slot></slot></ul>"
});


 