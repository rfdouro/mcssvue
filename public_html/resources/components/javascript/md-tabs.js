function mdTabs() {
 this.props = {
  id: {
   type: String
  },
  swipe: {
   type: Boolean
  }
 };
 this.data = function () {
  return;
 };
 this.mounted = function () {
  var options = {
   swipeable: this.computedSwipe
  };
  M.Tabs.init(this.$el.getElementsByTagName('ul')[0], options);
 };
 this.methods = {

 };
 this.computed = {
  computedId: function () {
   return '' + this.id;
  },
  computedSwipe: function () {
   if (this.swipe)
    return true;
   return false;
  },
  computedTabsContents: function () {
   var tc = '';
   var tabsContents = this.$el.getElementsByTagName('div');
   for (var k = 1; k < tabsContents.length; k++) {
    //tabsContents[k].id = this.computedId + '_' + k;
    tc += tabsContents[k];
   }
   return tc;
  }
 };
 this.template = "<div class='row'>"
         + "<div class='col s12'>"
         + "<ul class='tabs'>"
         + "<slot name='head'></slot>"
         + "</ul>"
         + "</div>"
         + "<slot name='content'></slot>"
         + "</div>";
}

Vue.component('md-tabs', new mdTabs());




