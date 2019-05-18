Vue.component('md-carousel', {
 props: {'fullwidth': {
   'type': Boolean
  },
  'indicators': {
   'type': Boolean
  },
  'autoplay': {
   'type': Number
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  //console.log('aqui');
  //console.log(this.$el);
  var options = {
   fullWidth: this.computedFullWidth,
   indicators: this.computedIndicators
  };
  $(this.$el).carousel(options);
  if(this.computedAutoPlay){
   this.autoPlay();
  }
 },
 methods: {
  autoPlay: function () {
   $(this.$el).carousel('next');
   setTimeout(this.autoPlay, this.autoplay);
  }
 },
 computed: {
  computedAutoPlay: function () {
   if (this.autoplay && this.autoplay>0)
    return true;
   return false;
  },
  computedFullWidth: function () {
   if (this.fullwidth)
    return this.fullwidth;
   return false;
  },
  computedIndicators: function () {
   if (this.indicators)
    return this.indicators;
   return false;
  },
  computedClass: function () {
   if (this.fullwidth)
    return 'carousel-slider';
   return '';
  }
 },
 template: "<div class='carousel' :class=computedClass><slot></slot></div>"
});


