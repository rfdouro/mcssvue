function mdAButton(){this.props={icon:{type:String,required:!1},iconpos:{type:String,required:!1},tipo:{type:String,required:!1},cor:{type:String,required:!1},tamanho:{type:String,required:!1},tooltiptext:{type:String,required:!1},tooltipposition:{type:String,required:!1}},this.data=function(){},this.mounted=function(){if(this.tooltiptext){var t=this.tooltiptext,e=this.tooltipposition?this.tooltipposition:"bottom";$(this.$el).tooltip({html:""+t,position:""+e})}},this.methods={},this.computed={hasIcon:function(){return!!this.icon},classeIcon:function(){return this.iconpos?this.iconpos:"left"},classeTipo:function(){var t="grey";if(this.cor)t=this.cor;else if(this.tipo)switch(this.tipo){case"warning":t="orange";break;case"danger":t="red";break;case"info":t="green";break;case"success":t="blue"}if(this.tamanho)switch(this.tamanho){case"grande":t+=" btn-large";break;case"pequeno":t+=" btn-small";break;default:t=""}return console.log("classe tipo"),console.log(t),t}},this.template="<a href='#!' class='btn waves-effect waves-light' :class=classeTipo><i v-show=hasIcon class=' material-icons ' :class=classeIcon>{{icon}}</i><slot></slot></a>"}function mdBadge(){this.props={new:{type:Boolean}},this.data=function(){},this.mounted=function(){},this.methods={},this.computed={computedClass:function(){var t=" badge ";return this.new&&(t+=" new "),t}},this.template="<span :class=computedClass><slot></slot></span>"}function mdCardActions(){this.props={id:{type:String}},this.data=function(){},this.mounted=function(){},this.methods={},this.computed={computedId:function(){return""+this.id}},this.template="<div class='card-action'><slot></slot></div>"}function mdCardContent(){this.props={id:{type:String},image:{type:String}},this.data=function(){},this.mounted=function(){},this.methods={},this.computed={computedId:function(){return""+this.id},hasImage:function(){return!!this.image},srcImage:function(){return this.image}},this.template="<div class='card-content'><span v-if=!hasImage class='card-title'><slot name='title'></slot></span><div v-else-if=hasImage class='card-image'><img :src=srcImage><span class='card-title'><slot name='title'></slot></span><slot name='fab'></slot></div><slot></slot></div>"}function mdCardHorizontal(){this.props={id:{type:String},image:{type:String}},this.data=function(){},this.mounted=function(){console.log(this.$el)},this.methods={},this.computed={computedId:function(){return""+this.id},hasImage:function(){return!!this.image},srcImage:function(){return this.image}},this.template="<div :id=computedId class='card horizontal'><div v-if=!hasImage class='card-title'><slot name='title'></slot></div><div v-else-if=hasImage class='card-image'><img :src=srcImage><span class='card-title'><slot name='title'></slot></span></div><div class='card-stacked'><slot></slot></div></div>"}function mdCard(){this.props={id:{type:String}},this.data=function(){},this.mounted=function(){},this.methods={},this.computed={computedId:function(){return""+this.id}},this.template="<div :id=computedId class='card'><slot></slot></div>"}function mdIcon(){this.props={icon:{type:String,required:!0}},this.data=function(){},this.mounted=function(){},this.methods={},this.computed={computedIcon:function(){return""}},this.template="<i class='material-icons'>{{ icon }}</i>"}function mdTabContent(){this.props={id:{type:String}},this.data=function(){},this.mounted=function(){this.id||console.error("the id property of tab-content is necessary!")},this.methods={},this.computed={computedId:function(){return""+this.id},hasFooter:function(){return!!this.hasfooter}},this.template="<div :id=computedId class='col s12'><slot></slot></div>"}function mdTabHeader(){this.props={to:{type:String}},this.data=function(){},this.mounted=function(){this.to||console.error("the to property of tab-head is necessary!")},this.methods={},this.computed={computedHref:function(){return"#"+this.to}},this.template="<li class='tab col s3'><a :href=computedHref><slot></slot></a></li>"}function mdTabs(){this.props={id:{type:String},swipe:{type:Boolean}},this.data=function(){},this.mounted=function(){var t={swipeable:this.computedSwipe};M.Tabs.init(this.$el.getElementsByTagName("ul")[0],t)},this.methods={},this.computed={computedId:function(){return""+this.id},computedSwipe:function(){return!!this.swipe},computedTabsContents:function(){for(var t="",e=this.$el.getElementsByTagName("div"),o=1;o<e.length;o++)t+=e[o];return t}},this.template="<div class='row'><div class='col s12'><ul class='tabs'><slot name='head'></slot></ul></div><slot name='content'></slot></div>"}function mapLeafletGjson(){this.props={content:{type:String,required:!0}},this.data=function(){return{map:null}},this.created=function(){},this.mounted=function(){},this.methods={},this.computed={computedContent:function(){try{return JSON.stringify(this.content)}catch(t){}return""}},this.template="<gjson :data-content=computedContent></gjson>"}function mapLeafletMarker(){this.props={lat:{type:Number,required:!0},lon:{type:Number,required:!0},texto:{type:String,required:!0}},this.data=function(){return{map:null}},this.created=function(){},this.mounted=function(){},this.methods={},this.computed={},this.template="<marker :data-lat=lat :data-lon=lon :data-texto=texto></marker>"}function mapLeafletPolygon(){this.props={points:{type:Array,required:!0},texto:{type:String,required:!0},color:{type:String,required:!1},bordercolor:{type:String,required:!1}},this.data=function(){return{map:null}},this.created=function(){},this.mounted=function(){},this.methods={},this.computed={computedPoints:function(){return JSON.stringify(this.points)}},this.template="<polygon :data-points=computedPoints :data-texto=texto :data-color=color :data-bordercolor=bordercolor></polygon>"}function mapLeafletSimple(){this.props={id:{type:String,required:!0},lat:{type:Number,required:!0},lon:{type:Number,required:!0},onClickMap:{type:Function}},this.data=function(){return{map:null}},this.created=function(){},this.mounted=function(){if(this.verificaLeaFlet){var t=this;t.map=L.map(this.computedId).setView([t.lat,t.lon],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t.map),this.onClickMap&&t.map.on("click",this.onClickMap);for(var e=this.computedMarkers,o=0;o<e.length;o++)L.marker([e[o].lat,e[o].lon]).addTo(t.map).bindPopup(""+e[o].texto);var i=this.computedPolygons;for(o=0;o<i.length;o++){for(var n=[],s=0;s<i[o].points.length;s++)n.push([i[o].points[s].lat,i[o].points[s].lon]);L.polygon(n,{color:i[o].bordercolor,fillColor:i[o].color,fillOpacity:.5}).addTo(t.map).bindPopup(i[o].texto)}}else console.log("LeaFlet não econtrado")},this.methods={},this.computed={computedId:function(){return"map-leaflet_"+this.id},verificaLeaFlet:function(){return"undefined"!=typeof L},computedMarkers:function(){for(var t=[],e=this.$el.getElementsByTagName("marker"),o=0;o<e.length;o++){var i={lat:e[o].dataset.lat,lon:e[o].dataset.lon,texto:e[o].dataset.texto};t.push(i)}return t},computedPolygons:function(){for(var t=[],e=this.$el.getElementsByTagName("polygon"),o=0;o<e.length;o++){var i=e[o].dataset.texto,n=e[o].dataset.color,s=e[o].dataset.bordercolor,a=e[o].dataset.points;a=JSON.parse(a);for(var r=[],l=0;l<a.length;l++)r.push({lat:a[l].lat,lon:a[l].lon});var c={texto:i,points:r,color:n,bordercolor:s};t.push(c)}return t}},this.template="<div v-show=verificaLeaFlet :id=computedId><slot></slot></div>"}function mapLeaflet(){this.props={id:{type:String,required:!0},lat:{type:Number,required:!0},lon:{type:Number,required:!0},onClickMap:{type:Function}},this.data=function(){return{map:null,baseLayers:null,overlayMaps:null}},this.created=function(){},this.mounted=function(){if(this.verificaLeaFlet){var t=this,e='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',o="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",i=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{id:"mapbox",attribution:e}),n=L.tileLayer(o,{id:"mapbox.light",attribution:e}),s=L.tileLayer(o,{id:"mapbox.streets",attribution:e});t.map=L.map(this.computedId).setView([t.lat,t.lon],13),i.addTo(t.map),this.onClickMap&&t.map.on("click",this.onClickMap);for(var a=this.computedMarkers,r=[],l=0;l<a.length;l++)r.push(L.marker([a[l].lat,a[l].lon]).bindPopup(""+a[l].texto));var c=L.layerGroup(r),d=this.computedPolygons,u=[];for(l=0;l<d.length;l++){for(var p=[],m=0;m<d[l].points.length;m++)p.push([d[l].points[m].lat,d[l].points[m].lon]);u.push(L.polygon(p,{color:d[l].bordercolor,fillColor:d[l].color,fillOpacity:.5}).bindPopup(d[l].texto))}var h=L.layerGroup(u),f=this.computedGjson;for(l=0;l<f.length;l++)try{L.geoJSON(f[l],{filter:function(t,e){return!!t.properties&&(void 0===t.properties.underConstruction||!t.properties.underConstruction)},onEachFeature:function(t,e){var o="<p>I started out as a GeoJSON "+t.geometry.type+", but now I'm a Leaflet vector!</p>";t.properties&&t.properties.popupContent&&(o+=t.properties.popupContent),e.bindPopup(o)}}).addTo(t.map)}catch(t){console.error(t)}this.overlayMaps={Pontos:c,"Polígonos":h},this.baseLayers={OSM:i,Grayscale:n,Streets:s},L.control.layers(this.baseLayers,this.overlayMaps).addTo(t.map)}else console.log("LeaFlet não econtrado")},this.methods={},this.computed={computedId:function(){return"map-leaflet_"+this.id},verificaLeaFlet:function(){return"undefined"!=typeof L},computedMarkers:function(){for(var t=[],e=this.$el.getElementsByTagName("marker"),o=0;o<e.length;o++){var i={lat:e[o].dataset.lat,lon:e[o].dataset.lon,texto:e[o].dataset.texto};t.push(i)}return t},computedPolygons:function(){for(var t=[],e=this.$el.getElementsByTagName("polygon"),o=0;o<e.length;o++){var i=e[o].dataset.texto,n=e[o].dataset.color,s=e[o].dataset.bordercolor,a=e[o].dataset.points;a=JSON.parse(a);for(var r=[],l=0;l<a.length;l++)r.push({lat:a[l].lat,lon:a[l].lon});var c={texto:i,points:r,color:n,bordercolor:s};t.push(c)}return t},computedGjson:function(){for(var t=[],e=this.$el.getElementsByTagName("gjson"),o=0;o<e.length;o++)try{var i=e[o].dataset.content;i=JSON.parse(i),t.push(i)}catch(t){console.error("[map-leaflet] GJson conversion error")}return t}},this.template="<div v-show=verificaLeaFlet :id=computedId><slot></slot></div>"}Vue.component("md-a-button",new mdAButton),Vue.component("md-badge",new mdBadge),Vue.component("md-button",{props:{icon:{type:String,required:!1},iconpos:{type:String,required:!1},tipo:{type:String,required:!1},tooltiptext:{type:String,required:!1},tooltipposition:{type:String,required:!1}},data:function(){},mounted:function(){if(this.tooltiptext){var t=this.tooltiptext,e=this.tooltipposition?this.tooltipposition:"bottom";$(this.$el).tooltip({html:""+t,position:""+e})}},methods:{},computed:{hasIcon:function(){return!!this.icon},classeIcon:function(){return this.iconpos?this.iconpos:"left"},classeTipo:function(){if(this.tipo)switch(this.tipo){case"warning":return"orange";case"danger":return"red";case"info":return"green";case"success":return"blue"}return"grey"}},template:"<button class='waves-effect waves-light btn' :class=classeTipo><i v-show=hasIcon class=' material-icons ' :class=classeIcon>{{icon}}</i><slot></slot></button>"}),Vue.component("md-card-actions",new mdCardActions),Vue.component("md-card-content",new mdCardContent),Vue.component("md-card-horizontal",new mdCardHorizontal),Vue.component("md-card",new mdCard),Vue.component("md-collection-item",{props:{header:{type:Boolean},link:{type:String}},data:function(){},mounted:function(){},methods:{},computed:{computedClass:function(){var t=" collection-item ";return this.header&&(t=" collection-header "),t},isLink:function(){return!(!this.link||""==this.link)}},template:"<li v-if=(!isLink) :class=computedClass ><slot></slot></li><a v-else-if=(isLink) :class=computedClass :href=link ><slot></slot></a>"}),Vue.component("md-collection",{props:{header:{type:Boolean}},data:function(){},mounted:function(){console.log(this.$children);var e=0;this.$children.filter(function(t){"md-collection-item"==t.$options._componentTag&&(++e,console.log(e),console.log(t.$options._componentTag))})},methods:{},computed:{computedClass:function(){var t="";return this.header&&(t+=" with-header "),t}},template:"<ul class='collection' :class=computedClass ><slot></slot></ul>"}),Vue.component("md-icon",new mdIcon),Vue.component("md-nav-item",{props:{href:{type:String,required:!1}},data:function(){},mounted:function(){},methods:{},computed:{computedHref:function(){return this.href?""+this.href:"#!"}},template:"<li><a :href=computedHref ><slot></slot></a></li>"}),Vue.component("md-nav-menu",{props:{id:{type:String,required:!0}},data:function(){},mounted:function(){$("#"+this.computedIdTrigger).dropdown()},methods:{},computed:{computedId:function(){return this.id?"md-nav-menu-"+this.id:""},computedIdTrigger:function(){return this.id?"md-nav-menu-trigger"+this.id:""}},template:"<li><a class='dropdown-trigger' :id=computedIdTrigger href='#!' :data-target=computedId><slot name='menu'></slot><i class='material-icons right'>arrow_drop_down</i></a><ul :id=computedId class='dropdown-content'><slot name='items'></slot></ul></li>"}),Vue.component("md-nav",{props:{id:{type:String,required:!0},fixed:{type:Boolean,required:!1},destdiv:String,classe:String,iconemenuleft:String,iconemenuright:String,showmenuicononlarge:{type:Boolean,required:!1}},data:function(){return{}},mounted:function(){var t=this,n=$("#"+this.computedIdSideLeft).sidenav({}),s=$("#"+this.computedIdSideRight).sidenav({edge:"right"});window.location.pathname;this.destdiv?$(".nav-wrapper").find("a[href!='#']").each(function(){var e,o=$(this).attr("href");if(null!=(e="#"+t.destdiv)&&"#!"!=o&&"#"!=o){$(this).parent();var i=$('a[href="'+o+'"]');$(this).on("click",function(t){return n.sidenav("close"),s.sidenav("close"),$(e).load(o,null,function(t,e,o){$("li.active").removeClass("active"),i.each(function(t){$(this).parent().addClass("active")})}),!1})}}):$(".nav-wrapper").find("a[href!='#']").on("click",function(){var t=$(this).parent();$("li.active").removeClass("active"),t.addClass("active")})},methods:{fechaSideNav:function(){$("#"+this.computedIdSideLeft).sidenav("close")}},computed:{computedId:function(){return this.id?"md-nav-"+this.id:"md-nav"},computedIdSideLeft:function(){return this.id?"md-nav-side-left-"+this.id:"md-nav-side-left-"},computedIdSideRight:function(){return this.id?"md-nav-side-right-"+this.id:"md-nav-side-right-"},computedClass:function(){var t="";return null!=this.classe&&(t+=" "+this.classe),t},isFixed:function(){return this.fixed},computedMostraIconLeft:function(){return!!this.iconemenuleft},computedIconeMenuLeft:function(){return this.iconemenuleft?this.iconemenuleft:"menu"},computedMostraIconRight:function(){return!!this.iconemenuright},computedIconeMenuRight:function(){return this.iconemenuright?this.iconemenuright:"menu"},computedShowMenuIconOnLarge:function(){var t="";return this.showmenuicononlarge&&(t="show-on-large"),t}},template:'<div v-if=(!isFixed)><nav role="navigation" :class=computedClass><div class="nav-wrapper"><div v-show=computedMostraIconLeft><a href="#" :data-target=computedIdSideLeft class="sidenav-trigger" :class=computedShowMenuIconOnLarge><i class="material-icons">{{ computedIconeMenuLeft }}</i></a></div><div v-show=computedMostraIconRight><a href="#" :data-target=computedIdSideRight class="right sidenav-trigger" :class=computedShowMenuIconOnLarge><i class="material-icons">{{ computedIconeMenuRight }}</i></a></div><a href="#" class="brand-logo logo-container"><slot name="tpl-logonav"></slot></a><ul class="right hide-on-med-and-down"><slot name="tpl-topnav"></slot></ul><ul class=\'sidenav\' :id=computedIdSideLeft><slot name="tpl-sidenav-left"></slot></ul><ul class=\'sidenav\' :id=computedIdSideRight><slot name="tpl-sidenav-right"></slot></ul></div></nav></div><div v-else-if=(isFixed)><div class="navbar-fixed"><nav role="navigation" :class=computedClass><div class="nav-wrapper"><div v-show=computedMostraIconLeft><a href="#" :data-target=computedIdSideLeft class="sidenav-trigger" :class=computedShowMenuIconOnLarge><i class="material-icons">{{ computedIconeMenuLeft }}</i></a></div><div v-show=computedMostraIconRight><a href="#" :data-target=computedIdSideRight class="right sidenav-trigger" :class=computedShowMenuIconOnLarge><i class="material-icons">{{ computedIconeMenuRight }}</i></a></div><a href="#" class="brand-logo logo-container"><slot name="tpl-logonav"></slot></a><ul class="right hide-on-med-and-down"><slot name="tpl-topnav"></slot></ul><ul class=\'sidenav\' :id=computedIdSideLeft><slot name="tpl-sidenav-left"></slot></ul><ul class=\'sidenav\' :id=computedIdSideRight><slot name="tpl-sidenav-right"></slot></ul></div></nav></div></div>'}),Vue.component("md-table",{props:{striped:{type:Boolean},highlight:{type:Boolean},centered:{type:Boolean},responsive:{type:Boolean}},data:function(){},mounted:function(){console.log(this.computedClass)},methods:{},computed:{computedClass:function(){var t="";return this.striped&&(t+=" striped "),this.highlight&&(t+=" highlight "),this.centered&&(t+=" centered "),this.responsive&&(t+=" responsive-table "),t}},template:"<table :class=computedClass><thead><slot name='head'></slot></thead><tbody><slot name='body'></slot></tbody></table>"}),Vue.component("md-autocomplete",{props:{id:{type:String,required:!0},type:{type:String},iconprefix:{type:String},label:{type:String},placeholder:{type:String},value:{type:String},msgs:{type:Array},dados:{type:Object}},data:function(){},mounted:function(){if(this.dados){M.Autocomplete.init(this.$el.getElementsByTagName("input")[0],{data:this.dados})}},methods:{},computed:{computedId:function(){return""+this.id},hasIconPrefix:function(){return!!this.iconprefix},computedType:function(){return""+this.type},computedPlaceholder:function(){return this.placeholder?this.placeholder:""},hasPlaceholder:function(){return!!this.placeholder},hasHelper:function(){return!(!this.msgs||3!=this.msgs.length)},msgHelper:function(){if(this.hasHelper)return this.msgs[0]},msgSuccess:function(){if(this.hasHelper)return this.msgs[1]},msgError:function(){if(this.hasHelper)return this.msgs[2]}},template:"<div class='input-field'><i v-show=hasIconPrefix class='material-icons prefix'>{{ iconprefix }}</i><input :id=computedId :type=computedType class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><label :for=computedId>{{ label }}</label><span v-if=hasHelper class='helper-text' :data-error=msgError :data-success=msgSuccess>{{ msgs[0] }}</span></div>"}),Vue.component("md-checkbox",{props:{value:{type:String},filled:{type:Boolean}},data:function(){},mounted:function(){},methods:{},computed:{computedClass:function(){return this.filled?" filled-in ":""}},template:"<label>  <input type='checkbox' :class=computedClass :checked='value' @change=\"$emit('input', $event.target.checked)\">  <span><slot></slot></span></label>"}),Vue.component("md-date-picker",{props:{id:{type:String,required:!0},format:{type:String},aofechar:{type:String}},data:function(){return{content:this.value,objPicker:null}},created:function(){},mounted:function(){var t=this;this.objPicker=$("#"+this.computedId).datepicker({format:t.format,autoClose:!0,showClearBtn:!1,duration:0,i18n:{cancel:"Cancelar",months:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],monthsShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],weekdays:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],weekdaysShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekdaysAbbrev:["Do","Se","Te","Qa","Qi","Sx","Sa"]},onClose:function(){t.$emit("input",this.date),"function"==typeof t.aofechar&&t.aofechar()}})},methods:{},computed:{computedId:function(){return this.id?"md-date-picker-"+this.id:""}},template:"<input type='text' readonly class='datepicker' :id=computedId />"}),Vue.component("md-input-number",{props:{id:{type:String,required:!0},iconprefix:{type:String},step:{type:String},label:{type:String},placeholder:{type:String},value:{type:String},msgs:{type:Array}},data:function(){},mounted:function(){},methods:{},computed:{computedId:function(){return"md-input-text-"+this.id},hasIconPrefix:function(){return!!this.iconprefix},computedStep:function(){return""+this.step},computedPlaceholder:function(){return this.placeholder?this.placeholder:""},hasPlaceholder:function(){return!!this.placeholder},hasHelper:function(){return!(!this.msgs||3!=this.msgs.length)},msgHelper:function(){if(this.hasHelper)return this.msgs[0]},msgSuccess:function(){if(this.hasHelper)return this.msgs[1]},msgError:function(){if(this.hasHelper)return this.msgs[2]}},template:"<div class='input-field'><i v-show=hasIconPrefix class='material-icons prefix'>{{ iconprefix }}</i><input v-if=hasPlaceholder :placeholder=computedPlaceholder :id=computedId type='number' :step=computedStep class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><input v-else-if=!hasPlaceholder :id=computedId type='number' :step=computedStep class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><label :for=computedId>{{ label }}</label><span v-if=hasHelper class='helper-text' :data-error=msgError :data-success=msgSuccess>{{ msgs[0] }}</span></div>"}),Vue.component("md-input-password",{props:{id:{type:String,required:!0},iconprefix:{type:String},label:{type:String},placeholder:{type:String},value:{type:String}},data:function(){},mounted:function(){},methods:{},computed:{computedId:function(){return""+this.id},hasIconPrefix:function(){return!!this.iconprefix},computedPlaceholder:function(){return this.placeholder?this.placeholder:""},hasPlaceholder:function(){return!!this.placeholder}},template:"<div class='input-field'><i v-show=hasIconPrefix class='material-icons prefix'>{{ iconprefix }}</i><input v-if=hasPlaceholder :placeholder=computedPlaceholder :id=computedId type='password' class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><input v-else-if=!hasPlaceholder :id=computedId type='password' class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><label :for=computedId>{{ label }}</label></div>"}),Vue.component("md-input-text",{props:{id:{type:String,required:!0},iconprefix:{type:String},label:{type:String},placeholder:{type:String},value:{type:String},msgs:{type:Array}},data:function(){},mounted:function(){console.log(this.hasIconPrefix)},methods:{},computed:{computedId:function(){return"md-input-text-"+this.id},hasIconPrefix:function(){return!!this.iconprefix},computedPlaceholder:function(){return this.placeholder?this.placeholder:""},hasPlaceholder:function(){return!!this.placeholder},hasHelper:function(){return!(!this.msgs||3!=this.msgs.length)},msgHelper:function(){if(this.hasHelper)return this.msgs[0]},msgSuccess:function(){if(this.hasHelper)return this.msgs[1]},msgError:function(){if(this.hasHelper)return this.msgs[2]}},template:"<div class='input-field'><i v-show=hasIconPrefix class='material-icons prefix'>{{ iconprefix }}</i><input v-if=hasPlaceholder :placeholder=computedPlaceholder :id=computedId type='text' class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><input v-else-if=!hasPlaceholder :id=computedId type='text' class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><label :for=computedId>{{ label }}</label><span v-if=hasHelper class='helper-text' :data-error=msgError :data-success=msgSuccess>{{ msgs[0] }}</span></div>"}),Vue.component("md-input",{props:{id:{type:String,required:!0},type:{type:String},iconprefix:{type:String},label:{type:String},placeholder:{type:String},value:{type:String},msgs:{type:Array}},data:function(){},mounted:function(){},methods:{},computed:{computedId:function(){return""+this.id},hasIconPrefix:function(){return!!this.iconprefix},computedType:function(){return""+this.type},computedPlaceholder:function(){return this.placeholder?this.placeholder:""},hasPlaceholder:function(){return!!this.placeholder},hasHelper:function(){return!(!this.msgs||3!=this.msgs.length)},msgHelper:function(){if(this.hasHelper)return this.msgs[0]},msgSuccess:function(){if(this.hasHelper)return this.msgs[1]},msgError:function(){if(this.hasHelper)return this.msgs[2]}},template:"<div class='input-field'><i v-show=hasIconPrefix class='material-icons prefix'>{{ iconprefix }}</i><input v-if=hasPlaceholder :placeholder=computedPlaceholder :id=computedId :type=computedType class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><input v-else-if=!hasPlaceholder :id=computedId :type=computedType class='validate' :value='value' @input=\"$emit('input', $event.target.value)\"><label :for=computedId>{{ label }}</label><span v-if=hasHelper class='helper-text' :data-error=msgError :data-success=msgSuccess>{{ msgs[0] }}</span></div>"}),Vue.component("md-radio",{props:{text:{type:String,required:!0},name:{type:String,required:!0},disabled:{type:Boolean,required:!1},valueof:{type:String},checked:{type:[String,Object,Number,Boolean],default:null}},data:function(){},mounted:function(){},methods:{},computed:{computedName:function(){return this.name?this.name:""},isDisabled:function(){return!!this.disabled},computedValue:function(){return this.valueof},isChecked:function(){return this.valueof==this.$vnode.data.model.value}},template:"<label v-if=(!isDisabled)>  <input type='radio' :name=computedName :checked=isChecked @change=\"$emit('input', valueof)\">  <span>{{ text }}</span></label><label v-else-if=(isDisabled)>  <input type='radio' :name=computedName disabled :checked=isChecked @change=\"$emit('input', valueof)\">  <span>{{ text }}</span></label>"}),Vue.component("md-select",{props:{id:{type:String,required:!0},multiple:{type:Boolean,required:!1}},data:function(){},mounted:function(){var t=this,e=$("#"+this.computedId).formSelect({dropdownOptions:{onCloseStart:function(){$("#"+t.computedId).formSelect("getSelectedValues");t.$emit("input",e[0].value)},onCloseEnd:function(){console.log("end")}}});console.log(e)},methods:{},computed:{computedId:function(){return this.id?"md-select-"+this.id:""}},template:"<select :id=computedId><slot></slot></select>"}),Vue.component("md-switch",{props:{textoff:{type:String,required:!0},texton:{type:String,required:!0},value:{type:String}},data:function(){},mounted:function(){},methods:{checa:function(){console.log("checa")}},computed:{},template:"<div class='switch'><label>  {{ textoff }}  <input type='checkbox' :checked='value' @change=\"$emit('input', $event.target.checked)\">  <span class='lever'></span>  {{ texton }}</label></div>"}),Vue.component("md-secondary-content",{props:{link:{type:String}},data:function(){},mounted:function(){},methods:{},computed:{computedLink:function(){return this.link&&""!=this.link?this.link:"#!"}},template:"<a class='secondary-content' :href=computedLink ><slot></slot></a>"}),Vue.component("md-carousel-item",{props:{fixed:{type:Boolean}},data:function(){},mounted:function(){},methods:{},computed:{isFixed:function(){return!!this.fixed&&this.fixed}},template:"<div v-if=(!isFixed) class='carousel-item' href='#!'><slot></slot></div><div v-else-if=(isFixed) class='carousel-fixed-item' href='#!'><slot></slot></div>"}),Vue.component("md-carousel-simple-item",{props:{},data:function(){},mounted:function(){},methods:{},computed:{computedIcon:function(){return""}},template:"<a class='carousel-item' href='#!' ><slot></slot></a>"}),Vue.component("md-carousel",{props:{fullwidth:{type:Boolean},indicators:{type:Boolean},autoplay:{type:Number}},data:function(){},mounted:function(){var t={fullWidth:this.computedFullWidth,indicators:this.computedIndicators};$(this.$el).carousel(t),this.computedAutoPlay&&this.autoPlay()},methods:{autoPlay:function(){$(this.$el).carousel("next"),setTimeout(this.autoPlay,this.autoplay)}},computed:{computedAutoPlay:function(){return!!(this.autoplay&&0<this.autoplay)},computedFullWidth:function(){return!!this.fullwidth&&this.fullwidth},computedIndicators:function(){return!!this.indicators&&this.indicators},computedClass:function(){return this.fullwidth?"carousel-slider":""}},template:"<div class='carousel' :class=computedClass><slot></slot></div>"}),Vue.component("md-collapsible-item",{props:{headerlink:{type:Boolean,required:!1}},data:function(){},mounted:function(){console.log(this.computedHeaderLink)},methods:{},computed:{computedHeaderLink:function(){return this.headerlink}},template:"<li><a v-show=(computedHeaderLink) href='#!' class='collapsible-header'><slot name='header'></slot></a><div v-show=(!computedHeaderLink) class='collapsible-header'><slot name='header'></slot></div><div class='collapsible-body'><span><slot name='body'></slot></span></div></li>"}),Vue.component("md-collapsible",{props:{id:{type:String,required:!0}},data:function(){},mounted:function(){$(this.$el).collapsible()},methods:{},computed:{computedTamanho:function(){return""},computedId:function(){return this.id?"md-collapsible-"+this.id:""}},template:"<ul class='collapsible' :id=computedId><slot></slot></ul>"}),Vue.component("md-modal",{props:{id:{type:String},hasfooter:{type:Boolean}},data:function(){},mounted:function(){$(this.$el).modal()},methods:{},computed:{computedId:function(){return""+this.id},hasFooter:function(){return!!this.hasfooter}},template:"<div :id=computedId class='modal'><div class='modal-content'><slot name='content'></slot></div><div class='modal-footer'><slot name='footer'></slot></div></div>"}),Vue.component("md-side-item",{props:{href:{type:String,required:!1}},data:function(){},mounted:function(){},methods:{},computed:{computedHref:function(){return this.href?""+this.href:"#!"}},template:"<li><a :href=computedHref ><slot></slot></a></li>"}),Vue.component("md-side-menu",{props:{id:{type:String,required:!0}},data:function(){},mounted:function(){M.Collapsible.init(this.$el.getElementsByTagName("UL")[0],{})},methods:{},computed:{computedId:function(){return this.id?"md-side-menu-"+this.id:""},computedIdTrigger:function(){return this.id?"md-side-menu-trigger"+this.id:""}},template:"<li class='no-padding'><ul class='collapsible collapsible-accordion' :id=computedId><li><a class='collapsible-header' href='#' ><slot name='header'></slot><i class='material-icons right'>arrow_drop_down</i></a><div class='collapsible-body'><ul ><slot name='items'></slot></ul></div></li></ul></li>"}),Vue.component("md-side-userview",{props:{imgsrc:{type:String,required:!1}},data:function(){},mounted:function(){},methods:{},computed:{computedHref:function(){return this.href?""+this.href:"#!"},computedSrc:function(){return this.imgsrc?this.imgsrc:""}},template:"<li><div class='user-view'> <div class='background'> </div> <a href='#'><img class='circle' :src=computedSrc alt=''/></a> <a href='#'><span class='white-text name'>sisadin</span></a> <a href='#'><span class='white-text email'>rfdouro@gmail.com</span></a></div></li>"}),Vue.component("md-tab-content",new mdTabContent),Vue.component("md-tab-header",new mdTabHeader),Vue.component("md-tabs",new mdTabs),Vue.component("cmp-loader",{props:{tamanho:Number,visivel:Boolean,fechavel:Boolean},data:function(){},mounted:function(){},methods:{toggleVisivel:function(){console.log("toggleVisivel"),!0===this.visivel?this.visivel=!1:this.visivel=!0},closeLoader:function(){console.log("closeLoader"),this.fechavel&&(this.visivel=!1)}},computed:{computedTamanho:function(){switch(this.tamanho){case"grande":return"big";case"pequeno":return"small"}return""},isVisible:function(){return console.log(this.visivel+" = "+(1==this.visivel)),1==this.visivel},isClosable:function(){return 1==this.fechavel}},template:"<div v-show=(isVisible) @click='closeLoader' style='display: flex; align-items: center; justify-content: center; background-color: #eee; position: fixed; z-index: 10000; top: 0; left: 0;right: 0;bottom: 0;\t'><div class='preloader-wrapper active' :class=computedTamanho ><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div></div>"}),Vue.component("map-leaflet-gjson",new mapLeafletGjson),Vue.component("map-leaflet-marker",new mapLeafletMarker),Vue.component("map-leaflet-one-popup",{props:{id:{type:String,required:!0},lat:{type:Number,required:!0},lon:{type:Number,required:!0},textopopup:{type:String,required:!0}},data:function(){return{map:null}},created:function(){},mounted:function(){if(this.verificaLeaFlet){var t=this;console.log(this.id),console.log(this.computedId),t.map=L.map(this.computedId).setView([t.lat,t.lon],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t.map),L.marker([t.lat,t.lon]).addTo(t.map).bindPopup(""+t.textopopup).openPopup()}else console.log("LeaFlet não econtrado")},methods:{},computed:{computedId:function(){return"map-leaflet-one-popup_"+this.id},verificaLeaFlet:function(){return"undefined"!=typeof L}},template:"<div v-show=verificaLeaFlet :id=computedId></div>"}),Vue.component("map-leaflet-polygon",new mapLeafletPolygon),Vue.component("map-leaflet-simple",new mapLeafletSimple),Vue.component("map-leaflet",new mapLeaflet);