function mdCardHorizontal() {
 this.props = {
  id: {
   type: String
  },
  image: {
   type: String
  }
 };
 this.data = function () {
  return;
 };
 this.mounted = function () {
  console.log(this.$el);
 };
 this.methods = {

 };
 this.computed = {
  computedId: function () {
   return '' + this.id;
  },
  hasImage: function () {
   if (this.image)
    return true;
   return false;
  },
  srcImage: function () {
   return this.image;
  }
 };
 this.template = "<div :id=computedId class='card horizontal'>"
         + "<div v-if=!hasImage class='card-title'><slot name='title'></slot></div>"
         + "<div v-else-if=hasImage class='card-image'><img :src=srcImage>"
         + "<span class='card-title'><slot name='title'></slot></span>"
         + "</div>"
         + "<div class='card-stacked'><slot></slot></div>"
         + "</div>";
}

Vue.component('md-card-horizontal', new mdCardHorizontal());




