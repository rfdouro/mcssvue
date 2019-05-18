/*https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb*/
Vue.component('md-checkbox', {
 props: {
  'value': {
   'type': String
  },
  'filled': {
   'type': Boolean
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
  computedClass: function (){
   if(this.filled)
    return ' filled-in ';
   return '';
  }
 },
 template: ""
         + "<label>"
         + "  <input type='checkbox' :class=computedClass :checked='value' @change=\"$emit('input', $event.target.checked)\">"
         + "  <span><slot></slot></span>"
         + "</label>"
         + ""
});


