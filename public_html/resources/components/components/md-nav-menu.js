Vue.component('md-nav-menu', {
 props: {'id': {
   'type': String,
   'required': true
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  $("#" + this.computedIdTrigger).dropdown();
 },
 methods: {

 },
 computed: {
  computedId: function () {
   if (this.id)
    return 'md-nav-menu-' + this.id;
   return '';
  },
  computedIdTrigger: function () {
   if (this.id)
    return 'md-nav-menu-trigger' + this.id;
   return '';
  }
 },
 template: "<li>"
         + "<a class='dropdown-trigger' :id=computedIdTrigger href='#!' :data-target=computedId>"
         + "<slot name='menu'></slot>"
         + "<i class='material-icons right'>arrow_drop_down</i></a>"
         + "<ul :id=computedId class='dropdown-content'>"
         + "<slot name='items'></slot>"
         + "</ul>"
         + "</li>"
});



