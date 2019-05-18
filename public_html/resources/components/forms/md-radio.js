/*https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb*/
Vue.component('md-radio', {
 props: {
  'text': {
   'type': String,
   'required': true
  },
  'name': {
   'type': String,
   'required': true
  },
  'disabled': {
   'type': Boolean,
   'required': false
  },
  'valueof': {
   'type': String
  },
  checked: {
   // v-model
   type: [String, Object, Number, Boolean],
   default: null
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
  computedName: function () {
   if (this.name)
    return this.name;
   return '';
  },
  isDisabled: function () {
   if (this.disabled)
    return true;
   return false;
  },
  computedValue: function () {
   return this.valueof;
  },
  // Radio Groups can only have a single value, so determining if checked is simple
  isChecked: function () {
   //console.log(this.$vnode.data.model);
   return (this.valueof == this.$vnode.data.model.value);
  }
 },
 template: ""
         + "<label v-if=(!isDisabled)>"
         + "  <input type='radio' :name=computedName :checked=isChecked @change=\"$emit('input', valueof)\">"
         + "  <span>{{ text }}</span>"
         + "</label>"
         + "<label v-else-if=(isDisabled)>"
         + "  <input type='radio' :name=computedName disabled :checked=isChecked @change=\"$emit('input', valueof)\">"
         + "  <span>{{ text }}</span>"
         + "</label>"
});


