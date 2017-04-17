/* filter.js Date:2017-04-17 11:22:24 */
define("filter.js",["vue.js"],function(require,a,b){require("vue.js");var c={filter:function(){Vue.filter("typeAge",function(a){return a}),Vue.filter("typeSex",function(a){var b={female:"\u5973",male:"\u7537"};return b[a]})}};b.exports={filter:c.filter}});
