/**
 * Produces a instance to use in a md-a-button component
 * {@link https://materializecss.com/buttons.html} 
 * @example <md-a-button id='btn-a-button' tipo='warning' tooltiptext="bla bla" tooltipposition="top" tamanho='grande'>teste</md-a-button>
 * @example <md-a-button id='btn-a-button2' icon="face" iconpos="right">teste</md-a-button>
 * @constructor
 * @returns {mdAButton}
 */
function mdAButton() {
 /**
  * properties of md-a-button
  * @property {String} icon - indicate a Material Design Icon 
  * @property {String} iconpos - indicate a position of icon in object ['left','right']
  * @property {String} tipo - a classification of color ['success','warning','danger','info' or null] 
  * @property {String} cor - the color 
  * @property {String} tamanho - indicate size ['grande', 'pequeno' or null]
  * @property {String} tooltiptext - the text of tooltip
  * @property {String} tooltipposition - the position of tooltip ['top','left','right','bottom']
  */
 this.props = {
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
  'cor': {
   'type': String,
   'required': false
  },
  'tamanho': {
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
 };
 this.data = function () {
  return;
 };
 this.mounted = function () {
  if (this.tooltiptext) {
   var t = this.tooltiptext;
   var p = (this.tooltipposition) ? this.tooltipposition : 'bottom';
   $(this.$el).tooltip({
    html: '' + t,
    position: '' + p
   });
  }
 };
 this.methods = {

 };
 this.computed = {
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
   var ret = 'grey';
   if (this.cor) {
    ret = this.cor;
   } else {
    if (this.tipo) {
     switch (this.tipo) {
      case 'warning':
       ret = 'orange';
       break;
      case 'danger':
       ret = 'red';
       break;
      case 'info':
       ret = 'green';
       break;
      case 'success':
       ret = 'blue';
       break;
     }
    }
   }

   if (this.tamanho) {
    switch (this.tamanho) {
     case 'grande':
      ret += ' btn-large';
      break;
     case 'pequeno':
      ret += ' btn-small';
      break;
     default:
      ret = '';
      break;
    }
   }

   console.log('classe tipo');
   console.log(ret);
   return ret;
  }
 };
 this.template = "<a href='#!' class='btn waves-effect waves-light' :class=classeTipo><i v-show=hasIcon class=' material-icons ' :class=classeIcon>{{icon}}</i><slot></slot></a>";
}

Vue.component('md-a-button', new mdAButton());


