/*!
 * 
 *   @hodgef/ts-library-boilerplate-basic v1.1.398
 *   https://github.com/hodgef/ts-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.MyLibrary=r():e.MyLibrary=r()}(self,()=>(()=>{"use strict";const e={d:(r,t)=>{if(Array.isArray(t))for(var o=0;o<t.length;){var n=t[o++],i=t[o++],u=0===i?{enumerable:!0,value:t[o++]}:{enumerable:!0,get:i};e.o(r,n)||Object.defineProperty(r,n,u)}else for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};let r={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,i(o.key),o)}}function n(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}e.r(r);const u=n(function e(){var r,t,o;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(){return console.log("Library method fired"),!0},(t=i(t="myMethod"))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,console.log("Library constructor loaded")});return e.d(r,["default",0,u]),r})());
//# sourceMappingURL=index.js.map