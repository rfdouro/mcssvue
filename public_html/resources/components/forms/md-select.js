Vue.component('md-select', {
 props: {
  'id': {
   'type': String,
   'required': true
  },
  'multiple': {
   type: Boolean,
   required: false
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  var _this = this;
  //console.log('aqui');
  var sel = $('#' + this.computedId).formSelect({
   dropdownOptions: {
    onCloseStart: function () {
     //console.log(_this.getSelectedValues());
     //console.log(sel[0].value);
     //console.log(this.dropdownEl);
     //console.log(this.el.value);
     var x = $('#' + _this.computedId).formSelect('getSelectedValues');
     //console.log(x);
     /*var y = $('#' + this.computedId).formSelect().input;
      console.log(y);*/
     _this.$emit('input', sel[0].value);
    },
    onCloseEnd: function (){
     console.log('end');
    }
   }
  });
  console.log(sel);
 },
 methods: {

 },
 computed: {
  computedId: function () {
   if (this.id) {
    return 'md-select-' + this.id;
   }
   return '';
  }
 },
 template: "<select :id=computedId><slot></slot></select>"
});