Vue.component('md-collection-item', {
 props: {
  'header': {
   'type': Boolean
  },
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
  computedClass: function () {
   var ret = ' collection-item ';
   if (this.header)
    ret = ' collection-header ';
   return ret;
  },
  isLink: function () {
   if (this.link && this.link != '') {
    return true;
   }
   return false;
  }
 },
 template: "<li v-if=(!isLink) :class=computedClass ><slot></slot></li>"
         + "<a v-else-if=(isLink) :class=computedClass :href=link ><slot></slot></a>"
});


 