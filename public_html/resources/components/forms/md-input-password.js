Vue.component('md-input-password', {
 props: {
  'id': {
   'type': String,
   'required': true
  },
  'iconprefix': {
   'type': String
  },
  'label': {
   'type': String
  },
  'placeholder': {
   'type': String
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

 },
 computed: {
  computedId: function () {
   return '' + this.id;
  },
  hasIconPrefix: function () {
   if (this.iconprefix)
    return true;
   return false;
  },
  computedPlaceholder: function () {
   if (this.placeholder)
    return this.placeholder;
   return '';
  },
  hasPlaceholder: function () {
   if (this.placeholder)
    return true;
   return false;
  }
 },
 template: "<div class='input-field'>"
         + "<i v-show=hasIconPrefix class='material-icons prefix'>{{ iconprefix }}</i>"
         + "<input v-if=hasPlaceholder :placeholder=computedPlaceholder :id=computedId type='password' class='validate' :value='value' @input=\"$emit('input', $event.target.value)\">"
         + "<input v-else-if=!hasPlaceholder :id=computedId type='password' class='validate' :value='value' @input=\"$emit('input', $event.target.value)\">"
         + "<label :for=computedId>{{ label }}</label>"
         + "</div>"
});


