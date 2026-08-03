"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=v(function(f,n){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/stats-strided-dcuminabs/dist').ndarray;function c(i){var r=i[0],e=i[1];return d(q(r,0),u(r),t(r,0),a(r),u(e),t(e,0),a(e)),e}n.exports=c
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
