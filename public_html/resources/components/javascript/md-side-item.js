Vue.component('md-side-item', {
 props: {'href': {
   'type': String,
   'required': false
  }},
 data: function () {
  return;
 },
 mounted: function () {

 },
 methods: {

 },
 computed: {
  computedHref: function () {
   if (this.href) {
    return '' + this.href;
   }
   return '#!';
  }
 },
 template: "<li><a :href=computedHref ><slot></slot></a></li>"
});


