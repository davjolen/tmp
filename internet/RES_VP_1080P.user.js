// ==UserScript==
// @name         RES_VP_1080P
// @namespace    http://tampermonkey.net/
// @version      2025-05-21
// @description  Change the screen resolution and viewport resolution.
// @author       PUBLIC
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// @include      *
// @downloadURL  /
// @updateURL    /
// ==/UserScript==

(function() {
  'use strict';

// First, set the window dimensions (outer size)
window.resizeTo(1920, 1040);

// Spoof screen and window dimensions
Object.defineProperty(window, 'innerWidth', {get: function(){return 1920;}});
Object.defineProperty(window, 'innerHeight', {get: function(){return 960;}});
Object.defineProperty(window, 'outerWidth', {get: function(){return 1920;}});
Object.defineProperty(window, 'outerHeight', {get: function(){return 1040;}});

// Spoof available screen size (availWidth and availHeight)
Object.defineProperty(window.screen, 'availWidth', {get: function(){return 1920;}});
Object.defineProperty(window.screen, 'availHeight', {get: function(){return 960;}});

// Set screen properties (needed for detecting screen size)
Object.defineProperty(window.screen, 'width', {get: function(){return 1920;}});
Object.defineProperty(window.screen, 'height', {get: function(){return 1080;}});
Object.defineProperty(window, 'screen', {value: {width: 1920, height: 1080}});

// Set device pixel ratio (for high-DPI screens)
Object.defineProperty(window, 'devicePixelRatio', {get: function(){return 1;}});

// Set screen position (X and Y coordinates)
Object.defineProperty(window, 'screenX', {get: function(){return 0;}});
Object.defineProperty(window, 'screenY', {get: function(){return 0;}});
})();
