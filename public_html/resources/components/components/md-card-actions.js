function mdCardActions() {
 this.props = {
  id: {
   type: String
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
  computedId: function () {
   return '' + this.id;
  }
 };
 this.template = "<div class='card-action'><slot></slot></div>";
}

Vue.component('md-card-actions', new mdCardActions());




