(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{253:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"consensus-random-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consensus-random-number","aria-hidden":"true"}},[e._v("#")]),e._v(" Consensus Random Number")]),e._v(" "),n("p",[e._v("Smart contracts need to obtain a consensus-based random number in order to work. To generate this number, the input data must be using chain related data. Here are two methods for obtaining random numbers:")]),e._v(" "),n("h2",{attrs:{id:"simple-random-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-random-number","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple random number:")]),e._v(" "),n("p",[e._v("The contract invokes an interface to obtain a random number, and provides a random number based on the current random seed.")]),e._v(" "),n("h2",{attrs:{id:"complex-random-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#complex-random-number","aria-hidden":"true"}},[e._v("#")]),e._v(" Complex random number:")]),e._v(" "),n("p",[e._v("The user first specifies a set of consecutive blocks in the contract. The system then uses the prev_secret of the block set as an input to generate a random number. The user can specify a set of blocks that have not been generated to be specified in the contract. After the block set is generated, the random number is determined.")]),e._v(" "),n("p",[e._v("Users can directly invoke the interface in the contract to get a simple random number. For this method, there is a possibility that they can choose not to package the invocation based on the results of random numbers and their own interests, should the stakeholders of execution result are the current block producer and the contract invocation is single use.")]),e._v(" "),n("p",[e._v("When users want to avoid this situation, they can use complex random numbers. A complex random number takes the 'prev_secret' of a set of continuous blocks as an input. If the block producer wants to generate a random number, the 'prev_secret' of the current block needs to be adjusted according to that of other blocks in the set. However, the 'prev_secret' will have been determined in a previous round of production blocks and cannot be modified, meaning that producers cannot control the generation of random numbers.")])])},[],!1,null,null,null);t.default=o.exports}}]);