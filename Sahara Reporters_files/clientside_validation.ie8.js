(function(){"use strict";if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};}
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement){if(this===null){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;if(len===0){return-1;}
var n=0;if(arguments.length>0){n=Number(arguments[1]);if(n!==n){n=0;}else if(n!==0&&n!==Infinity&&n!==-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n));}}
if(n>=len){return-1;}
var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement){return k;}}
return-1;};}
if(!Array.prototype.lastIndexOf)
{Array.prototype.lastIndexOf=function(searchElement)
{if(this===null){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;if(len===0){return-1;}
var n=len;if(arguments.length>1)
{n=Number(arguments[1]);if(n!==n){n=0;}
else if(n!==0&&n!==Infinity&&n!==-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n));}}
var k=n>=0?Math.min(n,len-1):len-Math.abs(n);for(;k>=0;k--)
{if(k in t&&t[k]===searchElement){return k;}}
return-1;};}
if(!Array.prototype.filter)
{Array.prototype.filter=function(fun)
{if(this===null){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;if(typeof fun!=="function"){throw new TypeError();}
var res=[];var thisp=arguments[1];for(var i=0;i<len;i++)
{if(i in t)
{var val=t[i];if(fun.call(thisp,val,i,t)){res.push(val);}}}
return res;};}
if(!Array.prototype.map){Array.prototype.map=function(callback,thisArg){var T,A,k;if(this===null){throw new TypeError(" this is null or not defined");}
var O=Object(this);var len=O.length>>>0;if({}.toString.call(callback)!=="[object Function]"){throw new TypeError(callback+" is not a function");}
if(thisArg){T=thisArg;}
A=new Array(len);k=0;while(k<len){var kValue,mappedValue;if(k in O){kValue=O[k];mappedValue=callback.call(T,kValue,k,O);A[k]=mappedValue;}
k++;}
return A;};}})();