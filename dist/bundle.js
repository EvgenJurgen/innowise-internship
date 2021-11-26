(()=>{var e={142:()=>{String.prototype.customUpperCase=String.prototype.toUpperCase}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,n),s.exports}(()=>{"use strict";const e=e=>{switch(e){case"I":return 1;case"V":return 5;case"X":return 10;case"L":return 50;case"C":return 100;case"D":return 500;case"M":return 1e3;default:return NaN}},o=e=>o=>e+o;class t{constructor(){if("object"==typeof t.instance)return t.instance;this.name="Singleton",t.instance=this}}n(142);const r=(e,o)=>e.sort(((e,n)=>n[o]-e[o]));console.log("\n//////////Array-functions//////////\n"),console.log("sumAverage() result: ",(e=>{const o=[[1,2,3],[4,5,6],[7,8,9]].map((e=>e.reduce(((e,o)=>e+o))/e.length)).reduce(((e,o)=>e+o));return Math.floor(o)})());const{threeMaxNumbers:s,sumOfThreeMaxNumbers:l}=(e=>{const o=[1,2,3,5,1,9,6,9].sort(((e,o)=>o-e)).filter(((e,o,n)=>((e,o,n)=>n.indexOf(e)===o)(e,o,n))).slice(0,3),n=o.reduce(((e,o)=>e+o));return{threeMaxNumbers:o,sumOfThreeMaxNumbers:n}})();console.log("threeMaxNumbers of maxTripletSum(): ",s),console.log("sumOfThreeMaxNumbers of maxTripletSum(): ",l),console.log("biggest() result: ",[3,30,34,5,9].sort(((e,o)=>((e,o)=>parseInt(e.toString()+o.toString())>parseInt(o.toString()+e.toString())?-1:1)(e,o))).join("")),console.log("pattern() result: ",(e=>{const o=(3,Array.from({length:3},((e,o)=>o+1))).join("");const n=[];for(let e=0;e<3;e++)n.push(o.slice(e,3)+o.slice(0,e));return n})()),console.log("arithmeticSequenceSum() result: ",(4+3*(5-1))/2*5),console.log("\n//////////String-functions//////////\n"),console.log("toMachineName() result: ",("-","Lorem        ipsum sit                                 DOLOR".replace(/^[0-9]/,"").match(/\b[a-zA-Z0-9]+\b/gi).join("-").toLocaleLowerCase())),console.log("alphabetized() result: ","The Holy      Bible.".match(/[a-zA-z0-9]/gi).sort(((e,o)=>e.toLowerCase()>o.toLocaleLowerCase()?1:e.toLowerCase()<o.toLocaleLowerCase()?-1:0)).join("")),console.log("romanToNumber() result: ",(o=>{try{o=o.replace("IV","IIII").replace("IX","VIIII").replace("XL","XXXX").replace("XC","LXXXX").replace("CD","CCCC").replace("CM","DCCCC");let n=0;for(const t of o)n+=e(t);if(isNaN(n))throw Error("Error in romanToNumber function");return n}catch(e){return console.log(e),NaN}})("XVII")),console.log("countDuplicates() result: ",(e=>{let o=0,n=(e=e.toLowerCase().split("").sort().join("")).charAt(o),t=0;for(;o<e.length;){const r=e.lastIndexOf(n);o<r&&(t+=1),o=r+1,n=e.charAt(o)}return t})("aabBcde")),console.log("\n//////////Algorithms-and-functional-programming//////////\n"),console.log("flattenAndSort() result: ",[[3,2,1],[4,6,5],[],[9,7,8]].reduce(((e,o)=>e.concat(o))).sort(((e,o)=>e-o)));const c=o(1);console.log("function add(1+3) result: ",c(3));const a=o(3);var u,i;console.log("function add(3+3) result: ",a(3)),console.log("multiplyAll() result: ",(i=[1,2,3],e=>i.map((o=>o*e)))(2)),console.log("uniqueSum() result: ",0===(u=[-1,-1,5,2,-7]).length?0:u.reduce(((e,o,n,t)=>n===t.indexOf(o)?e+o:e))),console.log("reduce() result: ",((e,o,n)=>{let t={};for(let n=0;n<e.length;n++)t=o(t,e[n],n);return t})(["H","e","l","l","o"],((e,o,n)=>(e[`${n+1}`]=o,e)))),console.log("compose() result: ");const g=((...e)=>o=>{e.reverse().reduce(((e,o)=>o(e)),o)})((e=>(console.log(`f returned ${e}`),e)),(e=>(console.log(`g returned ${e}`),e)),(e=>(console.log(`h returned ${e}`),e)));var m,p,h,f,d;g(1),console.log("\n//////////Higher-order-functions//////////\n"),console.log("spread() result: "),f=1,d=2,console.log("array a+b",f+d),console.log("ZipWith() result: ",(m=Math.pow,(p=[10,10,10,10]).length>=(h=[0,1,2,3]).length&&(p=p.slice(0,h.length)),p.map(((e,o)=>m(e,h[o]))))),console.log("\n//////////Recursion//////////\n"),console.log("sequenceSum result: ",function e(o,n,t){return o>n&&o+t>n?0:o+e(o+t,n,t)}(0,10,1));class b{constructor(e,o=null){this.data=e,this.next=o}}console.log("stringify result: ",function e(o){return null===o.next?`${o.data} -> null`:`${o.data} -> ${e(o.next)}`}(new b(0,new b(1,new b(4,new b(9,new b(16))))))),console.log("\n//////////Classes-and-patterns//////////\n");const C=new t,x=new t;console.log("Singleton Class"),console.log("singleto1 === singleto2",C===x),console.log("singleton1.name",C.name),console.log("singleton2.name",x.name),console.log("customUpperCase() result: ","test string".customUpperCase()),console.log("\n//////////Sorting//////////\n"),console.log("sort() by a",r([{a:1,b:3},{a:3,b:2},{a:2,b:40},{a:4,b:12}],"a")),console.log("sort() by b",r([{a:1,b:3},{a:3,b:2},{a:2,b:40},{a:4,b:12}],"b"))})()})();