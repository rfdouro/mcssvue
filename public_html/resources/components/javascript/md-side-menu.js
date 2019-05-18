Vue.component('md-side-menu', {
 props: {'id': {
   'type': String,
   'required': true
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  /*$("#" + this.computedId).collapsible();*/
  //console.log(this.$el);
  //console.log(this.$el.getElementsByTagName("UL")[0]);
  //inicialização usando jquery
  //$(this.$el.getElementsByTagName("UL")[0]).collapsible();
  //inicialização via mcss direto
  var obj = M.Collapsible.init(this.$el.getElementsByTagName("UL")[0],{});
 },
 methods: {

 },
 computed: {
  computedId: function () {
   if (this.id)
    return 'md-side-menu-' + this.id;
   return '';
  },
  computedIdTrigger: function () {
   if (this.id)
    return 'md-side-menu-trigger' + this.id;
   return '';
  }
 },
 template: "<li class='no-padding'>"
         + "<ul class='collapsible collapsible-accordion' :id=computedId>"
         + "<li>"
         + "<a class='collapsible-header' href='#' ><slot name='header'></slot><i class='material-icons right'>arrow_drop_down</i></a>"
         + "<div class='collapsible-body'>"
         + "<ul >"
         + "<slot name='items'></slot>"
         + "</ul>"
         + "</div>"
         + "</li>"
         + "</ul>"
         + "</li>"
});



