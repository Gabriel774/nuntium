(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"13b3":function(t,e,i){},"166a":function(t,e,i){},"36a7":function(t,e,i){},"4fef":function(t,e,i){},"63b7":function(t,e,i){},"6bc2":function(t,e,i){"use strict";i("9f48")},"8a79":function(t,e,i){"use strict";var n=i("23e7"),s=i("06cf").f,r=i("50c4"),a=i("5a34"),o=i("1d80"),c=i("ab13"),l=i("c430"),u="".endsWith,h=Math.min,d=c("endsWith"),f=!l&&!d&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!f&&!d},{endsWith:function(t){var e=String(o(this));a(t);var i=arguments.length>1?arguments[1]:void 0,n=r(e.length),s=void 0===i?n:h(r(i),n),c=String(t);return u?u.call(e,c,s):e.slice(s-c.length,s)===c}})},"8efc":function(t,e,i){},"9f48":function(t,e,i){},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),r=i("a691"),a=i("50c4"),o=i("7b0b"),c=i("65f0"),l=i("8418"),u=i("1dde"),h=u("splice"),d=Math.max,f=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var i,n,u,h,g,p,w=o(this),y=a(w.length),b=s(t,y),S=arguments.length;if(0===S?i=n=0:1===S?(i=0,n=y-b):(i=S-2,n=f(d(r(e),0),y-b)),y+i-n>m)throw TypeError(v);for(u=c(w,n),h=0;h<n;h++)g=b+h,g in w&&l(u,h,w[g]);if(u.length=n,i<n){for(h=b;h<y-n;h++)g=h+n,p=h+i,g in w?w[p]=w[g]:delete w[p];for(h=y;h>y-n+i;h--)delete w[h-1]}else if(i>n)for(h=y-n;h>b;h--)g=h+n-1,p=h+i-1,g in w?w[p]=w[g]:delete w[p];for(h=0;h<i;h++)w[h+b]=arguments[h+2];return w.length=y-n+i,u}})},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("Carousel"),i("div",{staticClass:"container"},[t._l(t.news,(function(t,e){return i("News",{key:e,attrs:{id:e,notice:t}})})),i("div",{staticStyle:{"text-align":"center"}},[t.page<=t.getNews.length?i("v-btn",{attrs:{elevation:"3"},on:{click:t.newsAdd}},[t._v("carregar mais notícias")]):t._e()],1)],2)],1)},s=[],r=i("5530"),a=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"carousel-container"}},[i("v-carousel",{staticClass:"news",attrs:{cycle:"","show-arrows-on-hover":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.carouselFilterNews,(function(e,n){return i("v-carousel-item",{key:n},[i("router-link",{attrs:{to:"noticia/"+e.i}},[i("div",{staticClass:"carousel-banner",style:{"background-image":"url("+e.value.img+")"}},[i("h1",{staticClass:"news-title"},[t._v(t._s(e.value.title))])])])],1)})),1),i("div",{staticClass:"mini-news"},[i("router-link",{staticStyle:{height:"100%",width:"100%"},attrs:{to:"noticia/"+t.sideNews[0].i}},[i("div",{staticClass:"mini-news-banner",style:{"background-image":"url("+t.sideNews[0].value.img+")"}},[i("h3",{staticClass:"news-title mini-news-title"},[t._v(" "+t._s(t.sideNews[0].value.title)+" ")])])])],1),i("div",{staticClass:"mini-news"},[i("router-link",{staticStyle:{height:"100%",width:"100%"},attrs:{to:"noticia/"+t.sideNews[1].i}},[i("div",{staticClass:"mini-news-banner",style:{"background-image":"url("+t.sideNews[1].value.img+")"}},[i("h3",{staticClass:"news-title mini-news-title"},[t._v(" "+t._s(t.sideNews[1].value.title)+" ")])])])],1),i("v-row")],1)}),o=[],c=(i("caad"),i("159b"),i("2532"),i("2f62")),l={computed:Object(r["a"])(Object(r["a"])({},Object(c["b"])(["getNews"])),{},{carouselGetNews:function(){for(var t=[],e=0;e<5;){var i=parseInt(30*Math.random());t.includes(i)||(t.push(i),e++)}return t},carouselFilterNews:function(){var t=this,e=[];return this.carouselGetNews.forEach((function(i){return e.push({value:t.getNews[i],i:i})})),e},sideNews:function(){for(var t=this,e=[],i=0;i<2;){var n=parseInt(30*Math.random());this.carouselGetNews.includes(n)||e.includes(n)||(e.push(n),i++)}var s=[];return e.forEach((function(e){return s.push({value:t.getNews[e],i:e})})),s}}),data:function(){return{model:0,colors:["primary","secondary","yellow darken-2","red","orange"]}}},u=l,h=(i("ddae"),i("2877")),d=i("6544"),f=i.n(d),m=(i("a9e3"),i("d81d"),i("63b7"),i("99af"),i("7db0"),i("c740"),i("13b3"),i("80d2")),v=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,a=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-a&&t.up(t),t.down&&s>n+a&&t.down(t))};function g(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function p(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),v(e)}function w(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function y(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return g(t,e)},touchend:function(t){return p(t,e)},touchmove:function(t){return w(t,e)}}}function b(t,e,i){var n=e.value,s=n.parent?t.parentElement:t,r=n.options||{passive:!0};if(s){var a=y(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=a,Object(m["p"])(a).forEach((function(t){s.addEventListener(t,a[t],r)}))}}function S(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var s=n._touchHandlers[i.context._uid];Object(m["p"])(s).forEach((function(t){n.removeEventListener(t,s[t])})),delete n._touchHandlers[i.context._uid]}}var I={inserted:b,unbind:S},x=I,_=i("afdd"),C=i("9d26"),$=(i("a434"),i("fb6a"),i("166a"),i("a452")),T=i("7560"),O=i("58df"),V=i("d9bd"),A=Object(O["a"])($["a"],T["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(r["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(V["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}}),j=(A.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),A.extend({name:"v-window",directives:{Touch:x},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(r["a"])(Object(r["a"])({},A.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s=this,r={click:function(t){t.stopPropagation(),s.changedByDelimiters=!0,i()}},a={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},o=null!=(n=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:r,attrs:a}))?n:[this.$createElement(_["a"],{props:{icon:!0},attrs:a,on:r},[this.$createElement(C["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},o)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}})),E=i("37c6"),B=i("480e"),N=A.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return A.options.computed.classes.call(this)}},methods:{genData:A.options.methods.genData}}),k=j.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},j.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(V["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genDefaultSlot:function(){var t,e=this;return null==(t=this.$slots.default)?void 0:t.map((function(t){return e.$createElement(B["a"],{props:{light:!e.theme.isDark,dark:e.theme.isDark}},[t])}))},genControlIcons:function(){return this.isVertical?null:j.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(_["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(C["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(N,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(E["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=j.options.render.call(this,t);return e.data.style="height: ".concat(Object(m["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),D=i("9d65"),R=i("4e82"),z=Object(O["a"])(D["a"],Object(R["a"])("windowGroup","v-window-item","v-window")),H=z.extend().extend().extend({name:"v-window-item",directives:{Touch:x},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(m["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(m["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),M=i("53ca"),G=(i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),L=(i("36a7"),i("24b2")),W=Object(O["a"])(L["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),P=W,X=i("d9f7"),Y="undefined"!==typeof window&&"IntersectionObserver"in window,F=Object(O["a"])(P,T["a"]).extend({name:"v-img",directives:{intersect:G["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(M["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!Y||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(V["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var s=t.naturalHeight,r=t.naturalWidth;s||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/s):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=P.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=P.options.render.call(this,t),i=Object(X["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:Y?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}}),q=i("1c87"),J=Object(O["a"])(H,q["a"]),K=J.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(F,{staticClass:"v-carousel__item",props:Object(r["a"])(Object(r["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(m["k"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),Q=i("0fd9"),U=Object(h["a"])(u,a,o,!1,null,"13a2696c",null),Z=U.exports;f()(U,{VCarousel:k,VCarouselItem:K,VRow:Q["a"]});var tt=i("d4de"),et={computed:Object(r["a"])(Object(r["a"])({},Object(c["b"])(["getNews"])),{},{news:function(){var t=this;return this.getNews.filter((function(e,i){return i<=t.page}))}}),components:{Carousel:Z,News:tt["a"]},data:function(){return{model:0,page:20}},methods:{newsAdd:function(){this.page<=this.getNews.length&&(this.page+=15)}}},it=et,nt=(i("6bc2"),i("8336")),st=Object(h["a"])(it,n,s,!1,null,"01d9c9eb",null);e["default"]=st.exports;f()(st,{VBtn:nt["a"]})},c740:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,r=i("44d2"),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},ddae:function(t,e,i){"use strict";i("4fef")}}]);
//# sourceMappingURL=Home.2ce9d133.js.map