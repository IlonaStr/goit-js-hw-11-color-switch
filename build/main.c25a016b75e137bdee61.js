(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,o){"use strict";var n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],c=(document.querySelector(".body"),document.querySelector('[data-action="start"]')),r=document.querySelector('[data-action="stop"]'),a=null;c.addEventListener("click",(function(){a=setInterval((function(){var t,e,o=(t=0,e=n.length,Math.floor(Math.random()*(e-t+1)+t));document.body.style.backgroundColor=n[o],console.log(o)}),1e3),c.setAttribute("disabled","true")})),r.addEventListener("click",(function(){clearInterval(a),c.removeAttribute("disabled")}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.c25a016b75e137bdee61.js.map