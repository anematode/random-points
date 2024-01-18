/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"src_worker_ts\"), __webpack_require__.b));\nvar workerReady = false;\nvar canvas = document.getElementById(\"canvas\");\nvar offscreen = canvas.transferControlToOffscreen();\nif (!offscreen) {\n    alert(\"OffscreenCanvas not supported\");\n}\nvar msgQ = [];\nfunction sendMessage(msg, transferable) {\n    if (transferable === void 0) { transferable = []; }\n    if (!workerReady)\n        msgQ.push([msg, transferable]);\n    else\n        worker.postMessage(msg, { transfer: transferable });\n}\nworker.onmessage = function (msg) {\n    var data = msg.data;\n    switch (data.type) {\n        case \"ready\": {\n            workerReady = true;\n            worker.postMessage({ type: \"transfer-canvas\", canvas: offscreen }, { transfer: [offscreen] });\n            msgQ.forEach(function (_a) {\n                var msg = _a[0], transferable = _a[1];\n                worker.postMessage(msg, transferable);\n            });\n            break;\n        }\n        case \"histogram-result\": {\n            displayHistogram(new Uint32Array(data.histogram));\n            break;\n        }\n    }\n};\nvar view = {\n    x: -2,\n    y: -2,\n    s: 200\n};\nvar downPos = null;\nfunction screenToWorld(view, x, y) {\n    return { x: x / view.s + view.x, y: y / view.s + view.y, };\n}\nfunction worldToScreen(view, x, y) {\n    return {\n        x: (x - view.x) * view.s,\n        y: (y - view.y) * view.s,\n    };\n}\nfunction dragView(view, mouseDownWorld, eventScreen) {\n    var world = screenToWorld(view, eventScreen.x, eventScreen.y);\n    var dx = world.x - mouseDownWorld.x;\n    var dy = world.y - mouseDownWorld.y;\n    return { x: view.x - dx, y: view.y - dy, s: view.s };\n}\nfunction clampScale(scale) {\n    return Math.max(10, Math.min(100000, scale));\n}\nfunction wheelView(view, zoomPointWorld, mouseRawDeltaY) {\n    var mouse = screenToWorld(view, zoomPointWorld.x, zoomPointWorld.y);\n    var newScale = clampScale(view.s * Math.exp(-mouseRawDeltaY * 0.001));\n    if (view.s === newScale) {\n        return null;\n    }\n    return {\n        x: ((view.x - mouse.x) * view.s) / newScale + mouse.x,\n        y: ((view.y - mouse.y) * view.s) / newScale + mouse.y,\n        s: newScale,\n    };\n}\ncanvas.onpointerdown = function (evt) {\n    var clientX = evt.clientX, clientY = evt.clientY;\n    var downWorld = screenToWorld(view, clientX, clientY);\n    downPos = downWorld;\n};\ncanvas.onpointermove = function (evt) {\n    if (!downPos)\n        return;\n    var clientX = evt.clientX, clientY = evt.clientY;\n    view = dragView(view, downPos, { x: clientX, y: clientY });\n    sendMessage({ type: \"set-view\", scale: view.s, xleft: view.x, ytop: view.y });\n};\ncanvas.onpointerup = function (evt) {\n    downPos = null;\n};\ncanvas.onwheel = function (evt) {\n    var clientX = evt.clientX, clientY = evt.clientY, deltaY = evt.deltaY;\n    var world = screenToWorld(view, clientX, clientY);\n    var newView = wheelView(view, world, deltaY);\n    if (newView) {\n        view = newView;\n        sendMessage({ type: \"set-view\", scale: view.s, xleft: view.x, ytop: view.y });\n    }\n};\nObject.assign(window, { worker: worker });\nvar danger = false;\nfunction setCount(count) {\n    document.getElementById(\"slider\").value = count + \"\";\n    if (!danger) {\n        if (count > 80) {\n            count = 80;\n        }\n    }\n    count = Math.pow(10, count / 15) | 0;\n    document.getElementById(\"slider-label\").innerText = count + \"\";\n    sendMessage({ type: \"request-points\", count: count });\n}\ndocument.getElementById(\"slider\").oninput = function (e) {\n    setCount(e.target.valueAsNumber);\n};\nfunction setSize(width, height, cssWidth, cssHeight) {\n    sendMessage({ type: \"set-size\", width: width, height: height, cssWidth: cssWidth, cssHeight: cssHeight });\n}\nObject.assign(window, { setCount: setCount });\nfunction resizeCanvas() {\n    var width = (window.innerWidth * 0.6) | 0;\n    var height = window.innerHeight;\n    canvas.style.width = width + \"px\";\n    canvas.style.height = height + \"px\";\n    var dpr = window.devicePixelRatio;\n    setSize(width * dpr, height * dpr, width, height);\n    sendMessage({ type: \"set-view\", scale: view.s, xleft: view.x, ytop: view.y });\n}\nfunction displayHistogram(histogram) {\n    var elem = document.getElementById(\"histogram-bars\");\n    elem.innerHTML = \"\";\n    var sum = 0;\n    for (var i = 0; i < histogram.length; ++i) {\n        sum += histogram[i];\n    }\n    var vec4 = function (r, g, b, a) { return \"rgba(\".concat(r * 255, \", \").concat(g * 255, \", \").concat(b * 255, \", \").concat(a, \")\"); };\n    var colors = [\n        vec4(0.0, 0.0, 0.0, 0.0),\n        vec4(0.0, 0.0, 0.0, 0.0),\n        vec4(0.0, 0.0, 0.0, 1.0),\n        vec4(0.0, 0.0, 1.0, 1.0),\n        vec4(1.0, 0.0, 0.0, 1.0),\n        vec4(1.0, 0.0, 1.0, 1.0),\n        vec4(0.0, 1.0, 1.0, 1.0),\n        vec4(1.0, 0.0, 0.5, 1.0),\n        vec4(0.5, 0.0, 1.0, 1.0),\n        vec4(1.0, 1.0, 0.0, 1.0),\n        vec4(0.5, 0.0, 1.0, 1.0),\n        vec4(0.5, 0.75, 1.0, 1.0),\n        vec4(0.5, 0.5, 1.0, 1.0)\n    ];\n    var lastNonZero = 0;\n    for (var i = 0; i < histogram.length; ++i) {\n        if (histogram[i] !== 0) {\n            lastNonZero = i;\n        }\n    }\n    for (var i = 2; i <= lastNonZero; ++i) {\n        var cont = document.createElement(\"div\");\n        cont.classList.add(\"histogram-bar\");\n        var p = document.createElement(\"p\");\n        p.innerHTML = histogram[i] + \" (\" + i + \")\";\n        var bar = document.createElement(\"div\");\n        bar.style.width = (histogram[i] / sum * 100) + \"%\";\n        bar.style.height = \"100%\";\n        bar.style.backgroundColor = colors[i];\n        cont.appendChild(bar);\n        cont.appendChild(p);\n        elem.appendChild(cont);\n    }\n    var avg = document.getElementById(\"avg\");\n    var avgSum = 0;\n    var avgCount = 0;\n    for (var i = 0; i < histogram.length; ++i) {\n        avgSum += histogram[i] * i;\n        avgCount += histogram[i];\n    }\n    avg.innerHTML = \"Average cluster size: \" + (avgSum / avgCount);\n}\ndocument.getElementById(\"danger\").onclick = function (ev) {\n    danger = !danger;\n    if (danger) {\n        ev.target.innerText = \"Danger mode enabled\";\n    }\n    else {\n        ev.target.innerText = \"Enable danger mode\";\n    }\n};\nwindow.onresize = resizeCanvas;\nsetCount(10);\nresizeCanvas();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;