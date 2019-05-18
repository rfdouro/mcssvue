Vue.component('md-input', {
 props: {
  'id': {
   'type': String,
   'required': true
  },
  'type': {
   'type': String
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
  },
  'msgs': {
   'type': Array
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
  computedType: function () {
   return '' + this.type;
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
  },
  hasHelper: function () {
   if (this.msgs && this.msgs.length == 3)
    return true;
   return false;
  },
  msgHelper: function () {
   if (this.hasHelper) {
    return this.msgs[0];
   }
  },
  msgSuccess: function () {
   if (this.hasHelper) {
    return this.msgs[1];
   }
  },
  msgError: function () {
   if (this.hasHelper) {
    return this.msgs[2];
   }
  }
 },
 template: "<div class='input-field'>"
         + "<i v-show=hasIconPrefix class='material-icons prefix'>{{ iconprefix }}</i>"
         + "<input v-if=hasPlaceholder :placeholder=computedPlaceholder :id=computedId :type=computedType class='validate' :value='value' @input=\"$emit('input', $event.target.value)\">"
         + "<input v-else-if=!hasPlaceholder :id=computedId :type=computedType class='validate' :value='value' @input=\"$emit('input', $event.target.value)\">"
         + "<label :for=computedId>{{ label }}</label>"
         + "<span v-if=hasHelper class='helper-text' :data-error=msgError :data-success=msgSuccess>{{ msgs[0] }}</span>"
         + "</div>"
});


