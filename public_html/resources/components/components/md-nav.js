Vue.component('md-nav', {
 props: {
  'id': {'type': String, 'required': true},
  'fixed': {'type': Boolean, 'required': false},
  'destdiv': String,
  'classe': String,
  'iconemenuleft': String,
  'iconemenuright': String,
  'showmenuicononlarge': {'type': Boolean, 'required': false}
 },
 data: function () {
  return {

  };
 },
 mounted: function () {
  //console.log(this.computedIconeMenuLeft);
  //console.log(this.computedIconeMenuRight);
  var _this = this;
  var sLeft = $('#' + this.computedIdSideLeft).sidenav({
  });
  var sRight = $('#' + this.computedIdSideRight).sidenav({
   edge: 'right'
  });
  var pathname = window.location.pathname;
  if (this.destdiv) {
   $('.nav-wrapper').find("a[href!='#']").each(function () {
    var d = null;
    var h = $(this).attr("href");
    d = "#" + _this.destdiv;
    if (d != null && h != "#!" && h != "#") {
     var a_elem = $(this);
     var li_elem = a_elem.parent();
     var a_elems = $('a[href="' + h + '"]');
     //$(this).attr("href", "#!");
     $(this).on("click", function (evt) {
      //_this.toggleLoader();
      //console.log($(d));
      sLeft.sidenav('close');
      sRight.sidenav('close');
      $(d).load(h, null, function (rt, s, r) {
       //console.log(rt);
       //console.log(s);
       if (s == 'error') {
        //console.log('erro');
       }
       //_this.toggleLoader();
       $("li.active").removeClass("active");
       //li_elem.addClass('active');
       a_elems.each(function (i) {
        $(this).parent().addClass('active');
       });
      });
      return false;
     });
    }
   });
  } else {
   $(".nav-wrapper").find("a[href!='#']").on('click', function () {
    var a_elem = $(this);
    var li_elem = a_elem.parent();
    $("li.active").removeClass("active");
    li_elem.addClass('active');
   });
  }
 },
 methods: {
  fechaSideNav: function () {
   $('#' + this.computedIdSideLeft).sidenav('close');
  }
 },
 computed: {
  computedId: function () {
   if (this.id) {
    return 'md-nav-' + this.id;
   }
   return 'md-nav';
  },
  computedIdSideLeft: function () {
   if (this.id) {
    return 'md-nav-side-left-' + this.id;
   }
   return 'md-nav-side-left-';
  },
  computedIdSideRight: function () {
   if (this.id) {
    return 'md-nav-side-right-' + this.id;
   }
   return 'md-nav-side-right-';
  },
  computedClass: function () {
   var ret = '';
   if (this.classe != null) {
    ret += ' ' + this.classe;
   }
   return ret;
  },
  isFixed: function () {
   return this.fixed;
  },
  computedMostraIconLeft: function () {
   if (this.iconemenuleft) {
    //console.log('left = ' + this.iconemenuleft);
    return true;
   }
   return false;
  },
  computedIconeMenuLeft: function () {
   if (this.iconemenuleft)
    return this.iconemenuleft;
   else
    return 'menu';
  },
  computedMostraIconRight: function () {
   if (this.iconemenuright) {
    //console.log('right = ' + this.iconemenuright);
    return true;
   }
   return false;
  },
  computedIconeMenuRight: function () {
   //console.log('aqui');
   //console.log(this.iconemenuright);
   if (this.iconemenuright)
    return this.iconemenuright;
   else
    return 'menu';
  },
  computedShowMenuIconOnLarge: function () {
   var ret = '';
   if (this.showmenuicononlarge)
    ret = 'show-on-large';

   //console.log('ret = ' + ret);
   return ret;
  }
 },
 template: "<div v-if=(!isFixed)><nav role=\"navigation\" :class=computedClass>"
         + "<div class=\"nav-wrapper\">"
         + "<div v-show=computedMostraIconLeft>"
         + "<a href=\"#\" :data-target=computedIdSideLeft class=\"sidenav-trigger\" :class=computedShowMenuIconOnLarge><i class=\"material-icons\">{{ computedIconeMenuLeft }}</i></a>"
         + "</div>"
         + "<div v-show=computedMostraIconRight>"
         + "<a href=\"#\" :data-target=computedIdSideRight class=\"right sidenav-trigger\" :class=computedShowMenuIconOnLarge><i class=\"material-icons\">{{ computedIconeMenuRight }}</i></a>"
         + "</div>"
         + "<a href=\"#\" class=\"brand-logo logo-container\"><slot name=\"tpl-logonav\"></slot></a>"
         + "<ul class=\"right hide-on-med-and-down\">"
         + "<slot name=\"tpl-topnav\"></slot>"
         + "</ul>"
         + "<ul class='sidenav' :id=computedIdSideLeft>"
         + "<slot name=\"tpl-sidenav-left\"></slot>"
         + "</ul>"
         + "<ul class='sidenav' :id=computedIdSideRight>"
         + "<slot name=\"tpl-sidenav-right\"></slot>"
         + "</ul>"
         + "</div>"
         + "</nav></div>"

         /*navbar fixed here*/

         + "<div v-else-if=(isFixed)><div class=\"navbar-fixed\"><nav role=\"navigation\" :class=computedClass>"
         + "<div class=\"nav-wrapper\">"
         + "<div v-show=computedMostraIconLeft>"
         + "<a href=\"#\" :data-target=computedIdSideLeft class=\"sidenav-trigger\" :class=computedShowMenuIconOnLarge><i class=\"material-icons\">{{ computedIconeMenuLeft }}</i></a>"
         + "</div>"
         + "<div v-show=computedMostraIconRight>"
         + "<a href=\"#\" :data-target=computedIdSideRight class=\"right sidenav-trigger\" :class=computedShowMenuIconOnLarge><i class=\"material-icons\">{{ computedIconeMenuRight }}</i></a>"
         + "</div>"
         + "<a href=\"#\" class=\"brand-logo logo-container\"><slot name=\"tpl-logonav\"></slot></a>"
         + "<ul class=\"right hide-on-med-and-down\">"
         + "<slot name=\"tpl-topnav\"></slot>"
         + "</ul>"
         + "<ul class='sidenav' :id=computedIdSideLeft>"
         + "<slot name=\"tpl-sidenav-left\"></slot>"
         + "</ul>"
         + "<ul class='sidenav' :id=computedIdSideRight>"
         + "<slot name=\"tpl-sidenav-right\"></slot>"
         + "</ul>"
         + "</div>"
         + "</nav></div></div>"
});


