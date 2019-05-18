function mdTabContent() {
 this.props = {
  id: {
   type: String
  }
 };
 this.data = function () {
  return;
 };
 this.mounted = function () {
  if(!this.id){
   console.error('the id property of tab-content is necessary!');
   //return false;
  }
 };
 this.methods = {

 };
 this.computed = {
  computedId: function () {
   return '' + this.id;
  },
  hasFooter: function () {
   if (this.hasfooter) {
    return true;
   }
   return false;
  }
 };
 this.template = "<div :id=computedId class='col s12'><slot></slot></div>";
}

Vue.component('md-tab-content', new mdTabContent());




