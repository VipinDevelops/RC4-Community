'use strict';

var o=Object.defineProperty,p=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var j=(a,c,b)=>c in a?o(a,c,{enumerable:!0,configurable:!0,writable:!0,value:b}):a[c]=b,r=(a,c)=>{for(var b in c||(c={}))k.call(c,b)&&j(a,b,c[b]);if(f)for(var b of f(c))l.call(c,b)&&j(a,b,c[b]);return a},s=(a,c)=>p(a,q(c));var t=(a,c)=>{var b={};for(var d in a)k.call(a,d)&&c.indexOf(d)<0&&(b[d]=a[d]);if(a!=null&&f)for(var d of f(a))c.indexOf(d)<0&&l.call(a,d)&&(b[d]=a[d]);return b};var u=(a,c,b)=>new Promise((d,i)=>{var m=e=>{try{g(b.next(e));}catch(h){i(h);}},n=e=>{try{g(b.throw(e));}catch(h){i(h);}},g=e=>e.done?d(e.value):Promise.resolve(e.value).then(m,n);g((b=b.apply(a,c)).next());});

exports.a = r;
exports.b = s;
exports.c = t;
exports.d = u;
