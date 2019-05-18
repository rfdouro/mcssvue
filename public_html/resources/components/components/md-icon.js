/**
 * Produces a instance to use in a md-icon component
 * {@link https://materializecss.com/icons.html} 
 * @example <md-icon icon="place"></md-icon>
 * @constructor
 * @returns {mdIcon}
 */
function mdIcon() {
 /**
  * properties of md-icon
  * @property {String} icon - indicate a Material Design Icon 
  */
 this.props = {
  'icon': {
   'type': String,
   'required': true
  }
 };
 this.data = function () {
  return;
 };
 this.mounted = function () {

 };
 this.methods = {

 };
 this.computed = {
  computedIcon: function () {
   return '';
  }
 };
 this.template = "<i class='material-icons'>{{ icon }}</i>";
}

Vue.component('md-icon', new mdIcon());


