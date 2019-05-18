Vue.component('md-carousel-item', {
 props: {
  'fixed': {
   'type': Boolean
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  //console.log(this.$el);
 },
 methods: {

 },
 computed: {
  isFixed: function () {
   if (this.fixed) {
    return this.fixed;
   }
   return false;
  }
 },
 template: "<div v-if=(!isFixed) class='carousel-item' href='#!'>"
         + "<slot></slot>"
         + "</div>"
         /*fixed item */
         + "<div v-else-if=(isFixed) class='carousel-fixed-item' href='#!'>"
         + "<slot></slot>"
         + "</div>"
});


