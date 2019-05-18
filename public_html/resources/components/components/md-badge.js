/**
 * Produces a instance to use in a md-badge component
 * {@link https://materializecss.com/badges.html} 
 * @example <md-badge new>123</md-badge>
 * @constructor
 * @returns {mdBadge}
 */
function mdBadge() {
 /**
  * properties of md-badge
  * @property {Boolean} new - indicate a badge styled by 'new' class
  */
 this.props = {
  'new': {
   'type': Boolean
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
  computedClass: function () {
   var ret = ' badge ';
   if (this.new)
    ret += ' new ';
   return ret;
  }
 };
 this.template = "<span :class=computedClass><slot></slot></span>";
}

Vue.component('md-badge', new mdBadge());


 