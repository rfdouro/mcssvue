Vue.component('cmp-loader', {
 props: {'tamanho': Number, 'visivel': Boolean, 'fechavel': Boolean},
 data: function () {
  return;
 },
 mounted: function () {

 },
 methods: {
  toggleVisivel: function () {
   console.log('toggleVisivel');
   if (this.visivel === true)
    this.visivel = false;
   else
    this.visivel = true;
  },
  closeLoader: function () {
   console.log('closeLoader');
   if (this.fechavel) {
    this.visivel = false;
   }
  }
 },
 computed: {
  computedTamanho: function () {
   switch (this.tamanho) {
    case 'grande':
     return 'big';
    case 'pequeno':
     return 'small';
   }
   return '';
  },
  isVisible: function () {
   console.log(this.visivel + ' = ' + (this.visivel == true));
   return this.visivel == true;
  },
  isClosable: function () {
   return this.fechavel == true;
  }
 },
 template: "<div v-show=(isVisible) @click='closeLoader' style='display: flex; align-items: center; justify-content: center; background-color: #eee; position: fixed; z-index: 10000; top: 0; left: 0;right: 0;bottom: 0;	'>"
         + "<div class='preloader-wrapper active' :class=computedTamanho >"
         + "<div class='spinner-layer spinner-blue-only'>"
         + "<div class='circle-clipper left'>"
         + "<div class='circle'></div>"
         + "</div><div class='gap-patch'>"
         + "<div class='circle'></div>"
         + "</div><div class='circle-clipper right'>"
         + "<div class='circle'></div>"
         + "</div>"
         + "</div>"
         + "</div>"
         + "</div>"
});


