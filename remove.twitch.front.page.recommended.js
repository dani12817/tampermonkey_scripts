// ==UserScript==
// @name         Remove Twitch Front Page Recommended
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Quita las secciones de Recomendades de la página principal
// @author       dani12817
// @match        https://www.twitch.tv/
// @icon         https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Front Page Recommended");

    var frontInterval = setInterval(function () {
        var frontCarousel = document.getElementsByClassName("front-page-carousel");
        if (frontCarousel.length) {
            clearInterval(frontInterval);
            frontCarousel[0].remove();
        }
    }, 1000);

    var recoInterval = setInterval(function () {
        var recoSection = document.getElementsByClassName("find-me");
        if (recoSection.length) {
            clearInterval(recoInterval);
            recoSection[0].remove();
        }
    }, 1000);
})();
