webpackJsonp([2],{"5VKM":function(t,i,e){t.exports=e.p+"static/img/summary5.d23b328.png"},D0Pm:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={data:function(){return{activeIndex:"1",theme:"dark",time:["06.06","06.07","06.08","06.09","06.10","06.11","06.12"],historIsShow:!1,dragNum:0,dots:[2,3,4,5,6,7,8]}},mounted:function(){},methods:{handleSelect:function(t,i){console.log(t,i),"7-1"===t?this.$i18n.locale="zh":"7-2"===t&&(this.$i18n.locale="en")},changeDot:function(t){document.getElementById("timeline_title"+t).style.color="#50FFB3",document.getElementById("timeline_word"+t).style.color="#50FFB3"},recoverDot:function(t){document.getElementById("timeline_title"+t).style.color="#218176",document.getElementById("timeline_word"+t).style.color="#218176"}}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home"},[s("div",{staticClass:"summary_up"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"135px"}})]),t._v(" "),s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{width:"12.7%"}}),t._v(" "),s("div",[s("img",{attrs:{width:"721",height:"564",src:e("F6AI")}})]),t._v(" "),s("div",{staticClass:"summary_word"},[s("div",{staticClass:"title"},[t._v("HyperExchange"),s("br")]),t._v(" "),s("div",{staticClass:"words"},[s("p",[t._v("2018.11.16 Launched")]),t._v(" "),s("p",{staticStyle:{"margin-top":"50px","line-height":"30px"}},[t._v(t._s(t.$t("summary.intro1"))),s("br"),t._v("\n            "+t._s(t.$t("summary.intro2"))),s("br"),t._v("\n            "+t._s(t.$t("summary.intro3"))),s("br"),t._v("\n            "+t._s(t.$t("summary.intro4")))])])])])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"title",staticStyle:{"text-align":"center","line-height":"180px",height:"230px"}},[t._v(t._s(t.$t("summary.features")))])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{width:"22%"}}),t._v(" "),s("div",{staticStyle:{width:"20%","margin-top":"60px"}},[s("p",{staticClass:"text_title"},[t._v(t._s(t.$t("summary.crosschain")))]),t._v(" "),s("p",{staticClass:"summary2_words"},[t._v(t._s(t.$t("summary.crosschain_intro1"))),s("br"),t._v("\n          "+t._s(t.$t("summary.crosschain_intro2"))),s("br"),t._v("\n          "+t._s(t.$t("summary.crosschain_intro3"))),s("br"),t._v("\n          "+t._s(t.$t("summary.crosschain_intro4")))])]),t._v(" "),s("div",{staticStyle:{"margin-left":"100px"}},[s("img",{attrs:{width:"491",height:"388",src:e("EfUJ")}})])])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"110px"}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{width:"20%"}}),t._v(" "),s("div",[s("img",{attrs:{width:"491",height:"422",src:e("ODd4")}})]),t._v(" "),s("div",{staticStyle:{"margin-left":"130px","margin-top":"90px"}},[s("p",{staticClass:"text_title"},[t._v(t._s(t.$t("summary.reserve")))]),t._v(" "),s("p",{staticClass:"summary2_words",staticStyle:{width:"516px"}},[t._v(t._s(t.$t("summary.reserve_intro")))])]),t._v(" "),s("div",{staticStyle:{width:"10%"}})])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"110px"}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{width:"21%"}}),t._v(" "),s("div",{staticStyle:{width:"26.4%","margin-top":"155px"}},[s("p",{staticClass:"text_title"},[t._v(t._s(t.$t("summary.efficiency")))]),t._v(" "),s("p",{staticClass:"summary2_words"},[t._v(t._s(t.$t("summary.efficiency_intro")))])]),t._v(" "),s("div",{staticStyle:{"margin-left":"90px"}},[s("img",{attrs:{width:"491",height:"548",src:e("e51x")}})])])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"110px"}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{width:"20%"}}),t._v(" "),s("div",[s("img",{attrs:{width:"491",height:"462",src:e("5VKM")}})]),t._v(" "),s("div",{staticStyle:{"margin-left":"130px","margin-top":"90px"}},[s("p",{staticClass:"text_title"},[t._v(t._s(t.$t("summary.smart_contract")))]),t._v(" "),s("p",{staticClass:"summary2_words",staticStyle:{width:"516px"}},[t._v(t._s(t.$t("summary.smart_contract_intro")))])]),t._v(" "),s("div",{staticStyle:{width:"10%"}})])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"110px"}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{width:"21%"}}),t._v(" "),s("div",{staticStyle:{width:"26.4%","margin-top":"155px"}},[s("p",{staticClass:"text_title"},[t._v(t._s(t.$t("summary.fee")))]),t._v(" "),s("p",{staticClass:"summary2_words"},[t._v(t._s(t.$t("summary.fee_intro")))])]),t._v(" "),s("div",{staticStyle:{"margin-left":"90px"}},[s("img",{attrs:{width:"491",height:"372",src:e("Dgi6")}})])])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"110px"}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"80px"}},[s("p",{staticClass:"title",staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("summary.roadmap")))])]),t._v(" "),s("div",[s("p",{staticClass:"words",staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("summary.slogan")))])])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticStyle:{height:"50px"}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"container",staticStyle:{"margin-left":"18%","margin-bottom":"40px"}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticClass:"timeline_event",staticStyle:{"margin-left":"8%"}},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title1"}},[t._v("2016")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word1"}},[t._v("Base platform construction")])]),t._v(" "),s("div",{staticClass:"timeline_event"},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title3"}},[t._v("2018")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word3"}},[t._v("Initiate cross-chain technology development")])]),t._v(" "),s("div",{staticClass:"timeline_event"},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title5"}},[t._v("2018")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word5"}},[t._v("Complete integrated development environment（IDE）")])]),t._v(" "),s("div",{staticClass:"timeline_event"},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title7"}},[t._v("2019")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word7"}},[t._v("Complete the development of high performance parallel computing functionality")])])])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticStyle:{display:"flex",height:"80px","align-items":"center"}},[s("div",{staticStyle:{flex:"1",display:"flex"}},[s("div",{staticStyle:{flex:"1"}}),t._v(" "),s("div",{staticClass:"dot",on:{mouseover:function(i){return t.changeDot(1)},mouseout:function(i){return t.recoverDot(1)}}}),t._v(" "),s("div",{staticClass:"item"})]),t._v(" "),t._l(t.dots,function(i,e){return s("div",{key:e,staticStyle:{flex:"1",display:"flex"}},[s("div",{staticClass:"item"}),t._v(" "),s("div",{staticClass:"dot",on:{mouseover:function(e){return t.changeDot(i)},mouseout:function(e){return t.recoverDot(i)}}}),t._v(" "),s("div",{staticClass:"item"})])})],2)]),t._v(" "),s("div",{staticClass:"container",staticStyle:{"margin-left":"25%",height:"200px"}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticClass:"timeline_event",staticStyle:{"margin-left":"8%"}},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title2"}},[t._v("2017")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word2"}},[t._v("Complete virtual machine architecture")])]),t._v(" "),s("div",{staticClass:"timeline_event"},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title4"}},[t._v("2018")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word4"}},[t._v("Complete cross-chain development，commence main net testing")])]),t._v(" "),s("div",{staticClass:"timeline_event"},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title6"}},[t._v("2019")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word6"}},[t._v("Parallel transaction verification")])]),t._v(" "),s("div",{staticClass:"timeline_event"},[s("p",{staticClass:"timeline_title",attrs:{id:"timeline_title8"}},[t._v("2019")]),t._v(" "),s("p",{staticClass:"timeline_words",attrs:{id:"timeline_word8"}},[t._v("POV consensus upgrade")])])])])])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"summary_bg2"})])],1)],1)])},staticRenderFns:[]};var l=e("VU/8")(s,a,!1,function(t){e("r5qE")},"data-v-5580c972",null);i.default=l.exports},Dgi6:function(t,i,e){t.exports=e.p+"static/img/summary6.6f5b9d1.png"},EfUJ:function(t,i,e){t.exports=e.p+"static/img/summary2.b0d88e0.png"},F6AI:function(t,i,e){t.exports=e.p+"static/img/summary1.028dd08.png"},ODd4:function(t,i,e){t.exports=e.p+"static/img/summary3.6016ca2.png"},e51x:function(t,i,e){t.exports=e.p+"static/img/summary4.b15cba1.png"},r5qE:function(t,i){}});
//# sourceMappingURL=2.53015efadea42cbd5439.js.map