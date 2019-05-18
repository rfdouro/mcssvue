function mdCard() {
 this.props = {
  id: {
   type: String
  }
 };
 this.data = function () {
  return;
 };
 this.mounted = function () {
  //console.log(this.$el);
 };
 this.methods = {

 };
 this.computed = {
  computedId: function () {
   return '' + this.id;
  }
 };
 this.template = "<div :id=computedId class='card'><slot></slot></div>";
}

Vue.component('md-card', new mdCard());




