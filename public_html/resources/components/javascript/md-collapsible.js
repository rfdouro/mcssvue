Vue.component('md-collapsible', {
 props: {'id': {
   'type': String,
   'required': true
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  //console.log(this.$el);
  //var x = $('#' + this.computedId).collapsible();
  $(this.$el).collapsible();
 },
 methods: {

 },
 computed: {
  computedTamanho: function () {
   return '';
  },
  computedId: function () {
   if (this.id)
    return 'md-collapsible-' + this.id;
   return '';
  }
 },
 template: "<ul class='collapsible' :id=computedId><slot></slot></ul>"
});


