Vue.component('md-collapsible-item', {
 props: {'headerlink': {
   'type': Boolean,
   'required': false
  }},
 data: function () {
  return;
 },
 mounted: function () {
  console.log(this.computedHeaderLink);
 },
 methods: {

 },
 computed: {
  computedHeaderLink: function () {
   return this.headerlink;
  }
 },
 template: "<li>"
      +"<a v-show=(computedHeaderLink) href='#!' class='collapsible-header'><slot name='header'></slot></a>"
      +"<div v-show=(!computedHeaderLink) class='collapsible-header'><slot name='header'></slot></div>"
      +"<div class='collapsible-body'><span><slot name='body'></slot></span></div>"
    +"</li>"
});


