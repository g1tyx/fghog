(window.webpackJsonp=window.webpackJsonp||[]).push([[20,8],{360:function(t,e,l){"use strict";l.r(e);l(362);var r={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.floor(Math.abs(this.value))||0,l="",symbol=null;return e>=1e36?(l=t+(e/1e36).toFixed(1),symbol="Ud"):e>=1e33?(l=t+(e/1e33).toFixed(1),symbol="Dc"):e>=1e30?(l=t+(e/1e30).toFixed(1),symbol="No"):e>=1e27?(l=t+(e/1e27).toFixed(1),symbol="Oc"):e>=1e24?(l=t+(e/1e24).toFixed(1),symbol="Sp"):e>=1e21?(l=t+(e/1e21).toFixed(1),symbol="Sx"):e>=1e18?(l=t+(e/1e18).toFixed(1),symbol="Qi"):e>=1e15?(l=t+(e/1e15).toFixed(1),symbol="Qa"):e>=1e12?(l=t+(e/1e12).toFixed(1),symbol="T"):e>=1e9?(l=t+(e/1e9).toFixed(1),symbol="B"):e>=1e6?(l=t+(e/1e6).toFixed(1),symbol="M"):e>=1e3?(l=t+(e/1e3).toFixed(1),symbol="K"):l=t+Math.abs(this.value).toFixed(1),{value:l,symbol:symbol}}}},o=l(62),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("span",[t._v(t._s(t.format.value)),t.format.symbol?l("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,l){"use strict";var r=l(3),o=l(0),n=l(4),c=l(63),v=l(363),f=l(189),_=l(5),m=o.RangeError,d=o.String,C=Math.floor,x=n(f),h=n("".slice),w=n(1..toFixed),F=function(t,e,l){return 0===e?l:e%2==1?F(t,e-1,l*t):F(t*t,e/2,l)},N=function(data,t,e){for(var l=-1,r=e;++l<6;)r+=t*data[l],data[l]=r%1e7,r=C(r/1e7)},y=function(data,t){for(var e=6,l=0;--e>=0;)l+=data[e],data[e]=C(l/t),l=l%t*1e7},$=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=d(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:_((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!_((function(){w({})}))},{toFixed:function(t){var e,l,r,o,n=v(this),f=c(t),data=[0,0,0,0,0,0],_="",C="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return d(n);if(n<0&&(_="-",n=-n),n>1e-21)if(l=(e=function(t){for(var e=0,l=t;l>=4096;)e+=12,l/=4096;for(;l>=2;)e+=1,l/=2;return e}(n*F(2,69,1))-69)<0?n*F(2,-e,1):n/F(2,e,1),l*=4503599627370496,(e=52-e)>0){for(N(data,0,l),r=f;r>=7;)N(data,1e7,0),r-=7;for(N(data,F(10,r,1),0),r=e-1;r>=23;)y(data,1<<23),r-=23;y(data,1<<r),N(data,1,1),y(data,2),C=$(data)}else N(data,0,l),N(data,1<<-e,0),C=$(data)+x("0",f);return C=f>0?_+((o=C.length)<=f?"0."+x("0",f-o)+C:h(C,0,o-f)+"."+h(C,o-f)):_+C}})},363:function(t,e,l){var r=l(4);t.exports=r(1..valueOf)},373:function(t,e,l){"use strict";l.r(e);var r={props:["travel"]},o=l(62),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row g-3"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"row gx-2 align-items-center justify-content-center"},[l("div",{staticClass:"col-auto"},[l("div",{staticClass:"h6 text-primary"},[t._v(t._s(t.travel.fleet.name))])]),t._v(" "),l("div",{staticClass:"col-auto"},[l("button",{staticClass:"w-100 btn btn-sm border",attrs:{type:"button"},on:{click:function(e){t.$parent.popupRenameName=t.travel.fleet.name,t.$parent.popupRenameFleet=t.travel.fleet}}},[l("i",{staticClass:"fas fa-fw fa-pen"})])])]),t._v(" "),"autoroute"==t.travel.type?l("div",{staticClass:"text-center"},[l("span",{staticClass:"medium text-gray"},[t._v("Autoroute")])]):t._e()]),t._v(" "),l("div",{staticClass:"col-12"},[l("div",{staticClass:"row gx-2"},[t._m(0),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[t._v(t._s(t.travel.fleet.experience))])])]),t._v(" "),l("div",{staticClass:"row gx-2"},[t._m(1),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[l("FormatNumber",{attrs:{value:t.travel.fleet.getMilitaryValue()}})],1)])]),t._v(" "),l("div",{staticClass:"row gx-2"},[t._m(2),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[l("FormatNumber",{attrs:{value:t.travel.fleet.getPower()}})],1)])]),t._v(" "),l("div",{staticClass:"row gx-2"},[t._m(3),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[l("FormatNumber",{attrs:{value:t.travel.fleet.getHP()}})],1)])]),t._v(" "),l("div",{staticClass:"row gx-2"},[t._m(4),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[l("FormatNumber",{attrs:{value:t.travel.fleet.getSpeed()}})],1)])]),t._v(" "),l("div",{staticClass:"row gx-2 mb-2"},[t._m(5),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[l("FormatNumber",{attrs:{value:t.travel.fleet.getCurrentStorage()}})],1),t._v(" "),l("small",{staticClass:"text-gray"},[t._v("/"),l("FormatNumber",{attrs:{value:t.travel.fleet.getTotalStorage()}})],1)])]),t._v(" "),t._l(t.travel.fleet.getShips(),(function(e,r){return l("div",{key:r,staticClass:"row gx-2"},[l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v(t._s(t.$t("shipName_"+r)))])]),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[l("FormatNumber",{attrs:{value:e}})],1)])])})),t._v(" "),t.travel.fleet.getAvailableResources().length>0?l("div",{staticClass:"mt-2"},t._l(t.travel.fleet.getAvailableResources(),(function(e){return l("div",{key:e.id,staticClass:"row gx-2"},[l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v(t._s(t.$t("resName_"+e.id)))])]),t._v(" "),l("div",{staticClass:"col-auto"},[l("span",{staticClass:"text-white"},[l("FormatNumber",{attrs:{value:e.count}})],1)])])})),0):t._e()],2)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v("Experience")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v("Military Value")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v("Total Power")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v("Total HP")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v("Speed")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col"},[l("span",{staticClass:"text-normal"},[t._v("Storage")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:l(360).default})}}]);