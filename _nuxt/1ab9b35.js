(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{376:function(t,e,c){"use strict";c.r(e);var n={props:["tech"]},l=c(62),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("button",{staticClass:"w-100 btn rounded bg-1 border",class:{"bg-2 text-white":t.$parent.currentResearch&&t.$parent.currentResearch.ref.id==t.tech.ref.id},attrs:{type:"button"},on:{click:function(e){return t.$parent.setCurrentResearch(t.tech)}}},[0==t.tech.isUnlocked()?c("div",[c("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"36px"}},[c("span",{staticClass:"text-gray",staticStyle:{width:"85px"}},[t._v(t._s(t.$t("techName_"+t.tech.ref.id)))])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),1==t.tech.isUnlocked()?c("div",[c("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"36px"}},[c("span",{staticStyle:{width:"85px"}},[t._v(t._s(t.$t("techName_"+t.tech.ref.id)))])]),t._v(" "),c("div",{staticClass:"mt-2"},[c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col text-start"},[c("span",{staticClass:"text-normal small"},[t._v("Lvl")]),t._v(" "),c("span",{staticClass:"ms-1 text-white"},[t._v(t._s(t.tech.level))])]),t._v(" "),c("button",{staticClass:"col-auto btn btn-sm p-0",class:{disabled:0==t.tech.canLevelUpRP(),"text-success":1==t.tech.canLevelUpRP()},attrs:{type:"button"},on:{click:function(e){return t.tech.levelUpRP()}}},[c("i",{staticClass:"fas fa-fw fa-arrow-circle-up"}),t._v("\n                    Level up\n                ")])])])]):t._e()])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"px-2 mt-2 mb-1"},[c("div",{staticClass:"row gx-2"},[c("div",{staticClass:"col small text-gray text-center"},[c("i",{staticClass:"fas fa-fw fa-lock"}),t._v(" Locked")])])])}],!1,null,null,null);e.default=component.exports}}]);