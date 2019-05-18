Vue.component('md-button', {
 props: {
  'icon': {
   'type': String,
   'required': false
  },
  'iconpos': {
   'type': String,
   'required': false
  },
  'tipo': {
   'type': String,
   'required': false
  },
  'tooltiptext': {
   'type': String,
   'required': false
  },
  'tooltipposition': {
   'type': String,
   'required': false
  }
 },
 data: function () {
  return;
 },
 mounted: function () {
  if (this.tooltiptext) {
   var t = this.tooltiptext;
   var p = (this.tooltipposition) ? this.tooltipposition : 'bottom';
   $(this.$el).tooltip({
    html: '' + t,
    position: '' + p
   });
  }
 },
 methods: {

 },
 computed: {
  hasIcon: function () {
   if (this.icon)
    return true;
   return false;
  },
  classeIcon: function () {
   if (this.iconpos)
    return this.iconpos;
   return 'left';
  },
  classeTipo: function () {
   if (this.tipo) {
    switch (this.tipo) {
     case 'warning':
      return 'orange';
     case 'danger':
      return 'red';
     case 'info':
      return 'green';
     case 'success':
      return 'blue';
    }
   }
   return 'grey';
  }
 },
 template: "<button class='waves-effect waves-light btn' :class=classeTipo><i v-show=hasIcon class=' material-icons ' :class=classeIcon>{{icon}}</i><slot></slot></button>"
});


