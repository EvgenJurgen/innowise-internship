(()=>{var e={142:()=>{String.prototype.customUpperCase=String.prototype.toUpperCase}},r={};function o(t){var a=r[t];if(void 0!==a)return a.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,o),s.exports}(()=>{"use strict";const e=e=>{switch(e){case"I":return 1;case"V":return 5;case"X":return 10;case"L":return 50;case"C":return 100;case"D":return 500;case"M":return 1e3;default:return NaN}};o(142),console.log("\n//////////String-functions//////////\n"),console.log("toMachineName() result: ",("-","Lorem        ipsum sit                                 DOLOR".replace(/^[0-9]/,"").match(/\b[a-zA-Z0-9]+\b/gi).join("-").toLocaleLowerCase())),console.log("alphabetized() result: ","The Holy      Bible.".match(/[a-zA-z0-9]/gi).sort(((e,r)=>e.toLowerCase()>r.toLocaleLowerCase()?1:e.toLowerCase()<r.toLocaleLowerCase()?-1:0)).join("")),console.log("romanToNumber() result: ",(r=>{try{r=r.replace("IV","IIII").replace("IX","VIIII").replace("XL","XXXX").replace("XC","LXXXX").replace("CD","CCCC").replace("CM","DCCCC");let o=0;for(const t of r)o+=e(t);if(isNaN(o))throw Error("Error in romanToNumber function");return o}catch(e){return console.log(e),NaN}})("XVII")),console.log("countDuplicates() result: ",(e=>{let r=0,o=(e=e.toLowerCase().split("").sort().join("")).charAt(r),t=0;for(;r<e.length;){const a=e.lastIndexOf(o);r<a&&(t+=1),r=a+1,o=e.charAt(r)}return t})("aabBcde"))})()})();