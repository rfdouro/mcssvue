/*https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb*/
Vue.component('md-switch', {
 props: {
  'textoff': {
   'type': String,
   'required': true
  },
  'texton': {
   'type': String,
   'required': true
  },
  'value': {
   'type': String
  }
 },
 data: function () {
  return;
 },
 mounted: function () {

 },
 methods: {
  checa: function () {
   console.log('checa');
  }
 },
 computed: {
  
 },
 template: "<div class='switch'>"
         + "<label>"
         + "  {{ textoff }}"
         + "  <input type='checkbox' :checked='value' @change=\"$emit('input', $event.target.checked)\">"
         + "  <span class='lever'></span>"
         + "  {{ texton }}"
         + "</label>"
         + "</div>"
});


