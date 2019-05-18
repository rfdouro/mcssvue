Vue.component('md-modal', {
 props: {
  id: {
   type: String
  },
  hasfooter: {
   type: Boolean
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  $(this.$el).modal();
 },
 methods: {

 },
 computed: {
  computedId: function () {
   return '' + this.id;
  },
  hasFooter: function () {
   if (this.hasfooter) {
    return true;
   }
   return false;
  }
 },
 template: "<div :id=computedId class='modal'>"
         + "<div class='modal-content'>"
         + "<slot name='content'></slot>"
         + "</div>"
         + "<div class='modal-footer'>"
         + "<slot name='footer'></slot>"
         + "</div>"
         + "</div>"
});


