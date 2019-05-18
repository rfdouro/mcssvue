Vue.component('md-secondary-content', {
 props: {
  'link': {
   'type': String
  }
 },
 data: function () {
  return;
 },
 mounted: function () {

 },
 methods: {

 },
 computed: {
  computedLink: function () {
   if (this.link && this.link != '') {
    return this.link;
   }
   return '#!';
  }
 },
 template: "<a class='secondary-content' :href=computedLink ><slot></slot></a>"
});


 