(()=>{var e={142:()=>{String.prototype.customUpperCase=String.prototype.toUpperCase}},o={};function n(t){var l=o[t];if(void 0!==l)return l.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,n),s.exports}(()=>{"use strict";const e=e=>o=>e+o;class o{constructor(){if(o.instance)return o.instance;this.name="Singleton",o.instance=this}}n(142);const t=(e,o)=>(e.forEach((e=>{if(!Object.keys(e).includes(o))throw new Error("The object does not have such a key")})),e.sort(((e,n)=>n[o]-e[o])));var l;console.log("\n//////////Array-functions//////////\n"),console.log("sumAverage() result: ",(l=[[1,2,3],[4,5,6],[7,8,9]],Math.floor(l.reduce(((e,o)=>e+o.reduce(((e,n)=>e+n/o.length),0)),0))));const s=[1,2,3,5,1,9,6,9].sort(((e,o)=>o-e)).reduce(((e,o)=>(e.includes(o)||e.push(o),e)),[]).slice(0,3).reduce(((e,o)=>e+o));console.log("sumOfThreeMaxNumbers of maxTripletSum(): ",s),console.log("biggest() result: ",[3,30,34,5,9].sort(((e,o)=>`${o}${e}`.localeCompare(`${e}${o}`))).join("")),console.log("pattern() result: ",(3,Array.from({length:3},((e,o)=>`${o+1}`))).reduce(((e,o,n,t)=>(e.push(t.slice(n,t.length).concat(t.slice(0,n)).join("")),e)),[])),console.log("arithmeticSequenceSum() result: ",((e,o,n)=>{let t=0;for(let e=0;e<5;e++)t+=2+3*e;return t})()),console.log("\n//////////String-functions//////////\n"),console.log("toMachineName() result: ",("-","Lorem        ipsum sit                                 DOLOR".replace(/^[0-9]/,"").match(/\b[a-zA-Z0-9]+\b/gi).join("-").toLocaleLowerCase())),console.log("alphabetized() result: ",(e=>{const o="The Holy      Bible.".match(/[a-zA-z0-9]/gi);return null===o?"":o.sort(((e,o)=>e.toLowerCase()<o.toLowerCase()?-1:1)).join("")})()),console.log("romanToNumber() result: ",(e=>{try{const e={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3},o="XVII".split("").reduce(((o,n,t,l)=>e[n]<e[l[t+1]]?o-e[n]:o+e[n]),0);if(isNaN(o))throw new Error("Error in the romanToNumber function");return o}catch(e){return console.log(e),NaN}})()),console.log("countDuplicates() result: ","aabBcde".split("").filter(((e,o,n)=>o===n.indexOf(e)&&o!==n.lastIndexOf(e))).length),console.log("\n//////////Algorithms-and-functional-programming//////////\n"),console.log("flattenAndSort() result: ",[[3,2,1],[4,6,5],[],[9,7,8]].reduce(((e,o)=>e.concat(o))).sort(((e,o)=>e-o)));const r=e(1);console.log("function add(1+3) result: ",r(3));const c=e(3);var a;console.log("function add(3+3) result: ",c(3)),console.log("multiplyAll() result: ",(a=[1,2,3],e=>a.map((o=>o*e)))(2)),console.log("uniqueSum() result: ",(e=>0===e.length?0:e.reduce(((e,o,n,t)=>n===t.indexOf(o)?e+o:e)))([-1,-1,5,2,-7])),console.log("reduce() result: ",((e,o,n)=>{let t={};for(let n=0;n<e.length;n++)t=o(t,e[n],n);return t})(["H","e","l","l","o"],((e,o,n)=>(e[`${n+1}`]=o,e)))),console.log("compose() result: ");const u=((...e)=>o=>e.reverse().reduce(((e,o)=>o(e)),o))((e=>(console.log(`f returned ${e}`),e)),(e=>(console.log(`g returned ${e}`),e)),(e=>(console.log(`h returned ${e}`),e)));var i,g,h,m,p;u(1),console.log("\n//////////Higher-order-functions//////////\n"),console.log("spread() result: "),m=1,p=2,console.log("array a+b",m+p),console.log("ZipWith() result: ",(i=Math.pow,g=[10,10,10,10],h=[0,1,2,3],Array.from({length:Math.min(g.length,h.length)},((e,o)=>i(g[o],h[o]))))),console.log("\n//////////Recursion//////////\n"),console.log("sequenceSum result: ",function e(o,n,t){return o>n&&o+t>n?0:o+e(o+t,n,t)}(0,10,1));class d{constructor(e,o=null){this.data=e,this.next=o}}console.log("stringify result: ",function e(o){return null===o?`${o}`:`${o.data} -> ${e(o.next)}`}(new d(0,new d(1,new d(4,new d(9,new d(16))))))),console.log("\n//////////Classes-and-patterns//////////\n");const f=new o,b=new o;console.log("Singleton Class"),console.log("singleto1 === singleto2",f===b),console.log("singleton1.name",f.name),console.log("singleton2.name",b.name),console.log("customUpperCase() result: ","test string".customUpperCase()),console.log("\n//////////Sorting//////////\n"),console.log("sort() by a",t([{a:1,b:3},{a:3,b:2},{a:2,b:40},{a:4,b:12}],"a")),console.log("sort() by b",t([{a:1,b:3},{a:3,b:2},{a:2,b:40},{a:4,b:12}],"b"))})()})();