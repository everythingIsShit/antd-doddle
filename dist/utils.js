!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("moment")):"function"==typeof define&&define.amd?define(["moment"],n):"object"==typeof exports?exports["antd-doddle"]=n(require("moment")):t["antd-doddle"]=n(t[void 0])}(window,function(t){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([,,function(t,n,e){"use strict";e.r(n),e.d(n,"DATE_FORMAT",function(){return d}),e.d(n,"DATE_TIME_FORMAT",function(){return a}),e.d(n,"formItemLayout",function(){return f}),e.d(n,"isEmpty",function(){return c}),e.d(n,"getEnumObject",function(){return l}),e.d(n,"toFormatEnums",function(){return s}),e.d(n,"throttle",function(){return p}),e.d(n,"compileParam",function(){return m}),e.d(n,"unCompileParam",function(){return v}),e.d(n,"idCodeValid",function(){return h}),e.d(n,"getSexById",function(){return b}),e.d(n,"getAgeById",function(){return y}),e.d(n,"toDecimalNumber",function(){return $}),e.d(n,"Rules",function(){return C});var r=e(3),o=e.n(r);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var d="YYYY-MM-DD",a="YYYY-MM-DD HH:mm:ss",f={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:15}}},c=function(t){return"object"===i(t)&&0===Object.keys(t).length},l=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",r=t.filter(function(t){return t[e]===n});return r.length>0?r[0]:{}},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0;return t.map(function(t){return"string"==typeof t?{label:t,value:t}:{label:t[e],value:t[n]}})},p=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,o=new Date;return function(i){var d=u({},i),a=new Date;clearTimeout(n),a-o>=r?(t(d),o=a):n=setTimeout(function(){t(d)},e)}},g=17;function m(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=String.fromCharCode(t.charCodeAt(0)+g+t.length),e=1;e<t.length;e+=1)n+=String.fromCharCode(t.charCodeAt(e)+t.charCodeAt(e-1));return n}function v(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=String.fromCharCode(t.charCodeAt(0)-g-t.length),e=1;e<t.length;e+=1)n+=String.fromCharCode(t.charCodeAt(e)-n.charCodeAt(e-1));return n}function h(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;if(n&&t.indexOf("*")===e&&t.lastIndexOf("*")===t.length+1-r)return!0;var u=!0;if(t&&/^\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))if({11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[t.substr(0,2)])if(o()("".concat(t.substring(6,10),"-").concat(t.substring(10,12),"-").concat(t.substring(12,14)))>o()())u=!1;else{for(var i=t.split(""),d=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=0,f=0;f<17;f+=1)a+=i[f]*d[f];[1,0,"X",9,8,7,6,5,4,3,2][a%11].toString()!==i[17]&&(u=!1)}else u=!1;else u=!1;return u}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="-1";return h(t)&&(n=parseInt(t.substr(16,1),10)%2==1?"0":"1"),n}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=-1;if(h(t)){var e=o()("".concat(t.substring(6,10),"-").concat(t.substring(10,12),"-").concat(t.substring(12,14))),r=e.year(),u=e.month(),i=e.date(),d=o()(),a=d.year(),f=d.month(),c=d.date();n=a-r,(u>f||u===f&&i>c)&&(n-=1)}return n}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(+t).toFixed(n).replace(/(\d{1,3})(?=(\d{3})+(\.|$))/g,"$1,")}var C={chineseWord:/^([\u4e00-\u9fa5])+$/,normalWord:/^([\u4e00-\u9fa5-a-zA-Z0-9_-—])+$/,email:/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(?:\.[0-9A-Za-z]+)+$/,phone:/^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/,fix2:/^([1-9]\d*$)|([1-9]\d*\.(\d{1,2})$)|(0\.((0[1-9])|([1-9]\d?))$)/,positive:/(^0\.0*[1-9]+[0-9]*$)|(^[1-9]\d*(\.\d+)?$)/,positiveInteger:/^[1-9]\d*$/,notNegtive:/^\d*(\.\d+)?$/,notNegtiveInteger:/^\d*$/,rate:/^0\.0[1-9]\d{0,3}$|^0\.10{0,4}$/,rate2:/^0(\.0\d{0,4})?$|^0\.10{0,4}$/,amount:/(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/,percent:/^100$|^([1-9]|[1-9]\d)(\.\d{1,2})*$/,thousandth:/(\d{1,3})(?=(\d{3})+$)/g,thousandthWithPoint:/(\d{1,3})(?=(\d{3})+(\.|$))/g}},function(n,e){n.exports=t}])});