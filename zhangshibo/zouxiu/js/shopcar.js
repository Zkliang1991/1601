/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },

/***/ 15:
/***/ function(module, exports) {

	eval("/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\nvar html = document.getElementById('html');\r\nvar width = document.documentElement.clientWidth;\r\nhtml.style.fontSize = width/640*100 + \"px\";\r\n\r\nwindow.onresize = function(){\r\n\tvar html = document.getElementById('html');\r\n\tvar width = document.documentElement.clientWidth;\r\n\thtml.style.fontSize = width/640*100 + \"px\";\r\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi96b3V4aXVmaWxlL2pzL3Nob3BjYXIuanM/ZjE4OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGRlZmluZSA9IGZhbHNlO1xuXG52YXIgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodG1sJyk7XHJcbnZhciB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuaHRtbC5zdHlsZS5mb250U2l6ZSA9IHdpZHRoLzY0MCoxMDAgKyBcInB4XCI7XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpe1xyXG5cdHZhciBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h0bWwnKTtcclxuXHR2YXIgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblx0aHRtbC5zdHlsZS5mb250U2l6ZSA9IHdpZHRoLzY0MCoxMDAgKyBcInB4XCI7XHJcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi96b3V4aXVmaWxlL2pzL3Nob3BjYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });