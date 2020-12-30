// ==UserScript==
// @name         Netgear-blokker
// @description  Verwijder popup Netgear router
// @version      1
// @include      http://192.168.0.1/*
// @require      https://marcelv.net/jquery-1.6.4.min.js
// @grant        none
// ==/UserScript==

setInterval(function(){
 document.getElementsByName('armor_close')[0].click();
},200);


