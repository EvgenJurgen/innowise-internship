(()=>{"use strict";const o=o=>e=>o+e;(o=>{const e=[[1,2,3],[4,5,6],[7,8,9]].map((o=>o.reduce(((o,e)=>o+e))/o.length)).reduce(((o,e)=>o+e)),t=Math.floor(e);console.log("sumAverage result: ",t)})(),(o=>{o.sort(((o,e)=>e-o));const e=[];for(const t of o)for(;e.length<3&&!e.includes(t);)e.push(t);console.log("maxTripletSum result: ",e)})([1,2,3,5,1,9,6,9]),(o=>{const e=[3,30,34,5,9].sort(((o,e)=>((o,e)=>parseInt(o.toString()+e.toString())>parseInt(e.toString()+o.toString())?-1:1)(o,e)));console.log("biggest result: ",e.join(""))})(),(o=>{const e=((o,e)=>{const t=[];for(let o=1;o<=3;o++)t.push(o);return t})(),t=[];let l=0;for(;l<e.length;)t.push(e.join("")),e.push(e.shift()),l++;console.log("pattern result: ",t)})(),console.log("arithmeticSequenceSum result: ",40),(o=>{const e=[[3,2,1],[4,6,5],[],[9,7,8]].flat().sort(((o,e)=>o-e));console.log("flattenAndSort result: ",e)})();const e=o(1);console.log("function add(1+3) result: ",e(3));const t=o(3);var l;console.log("function add(3+3) result: ",t(3)),console.log("multiplyAll result: ",(l=[1,2,3],o=>l.map((e=>e*o)))(2)),console.log("uniqueSum",(o=>{if(0===o.length)return 0;const e=o.sort(((o,e)=>o-e));let t=e[0],l=e[0];for(let o=0;o<e.length;o++)t!==e[o]&&(l+=e[o],t=e[o]);return l})([-1,-1,5,2,-7])),console.log("reduce result: ",((o,e,t)=>{t||(t=o[0],o.shift());for(const e of o)t=t*e;return t})([1,2,3,4],0,1));const n=((...o)=>e=>{o.reverse().reduce(((o,e)=>e(o)),e)})((o=>(console.log(`f returned ${o}`),o)),(o=>(console.log(`g returned ${o}`),o)),(o=>(console.log(`h returned ${o}`),o)));var s,r,c,u,g;n(1),u=1,g=2,console.log("array a+b",u+g),s=Math.pow,(r=[10,10,10,10,10,10]).length>=(c=[0,1,2,3]).length&&(r=r.slice(0,c.length),console.log(r)),console.log("ZipWith result: ",r.map(((o,e)=>s(o,c[e]))))})();