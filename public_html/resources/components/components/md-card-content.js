function mdCardContent() {
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
 this.template = "<div class='card-content'>"
         + "<span v-if=!hasImage class='card-title'><slot name='title'></slot></span>"
         + "<div v-else-if=hasImage class='card-image'><img :src=srcImage>"
         + "<span class='card-title'><slot name='title'></slot></span>"
         + "<slot name='fab'></slot>"
         + "</div>"
         + "<slot></slot>"
         + "</div>";
}

Vue.component('md-card-content', new mdCardContent());




