// ==UserScript==
// @name         Remove Twitch Sidebar Recommended
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Quita la sección de Recomendados de la barra lateral
// @author       dani12817
// @match        https://www.twitch.tv/*
// @icon         https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Sidebar Recommended");

    var sideInterval = setInterval(function () {
        var sideSections = document.getElementsByClassName("side-nav-section");
        if (sideSections.length) {
            clearInterval(sideInterval);
            sideSections[1].remove();
        }
    }, 1000);
})();
