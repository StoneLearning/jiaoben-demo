// ==UserScript==
// @name         temp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
  // Your code here...
})();
