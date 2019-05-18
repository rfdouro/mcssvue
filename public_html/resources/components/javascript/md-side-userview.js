Vue.component('md-side-userview', {
 props: {'imgsrc': {
   'type': String,
   'required': false
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
  computedHref: function () {
   if (this.href) {
    return '' + this.href;
   }
   return '#!';
  },
  computedSrc: function () {
   if (this.imgsrc) {
    //console.log(this.imgsrc);
    return this.imgsrc;
   }
   return '';
  }
 },
 template: "<li>"
         + "<div class='user-view'>"
         + " <div class='background'>"
         + " </div>"
         + " <a href='#'><img class='circle' :src=computedSrc alt=''/></a>"
         + " <a href='#'><span class='white-text name'>sisadin</span></a>"
         + " <a href='#'><span class='white-text email'>rfdouro@gmail.com</span></a>"
         + "</div>"
         + "</li>"
});


