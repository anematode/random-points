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

/***/ "./src/worker.ts":
/*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkg */ \"./pkg/random_points.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg__WEBPACK_IMPORTED_MODULE_0__]);\n_pkg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar gl, canvas;\nvar instance;\npostMessage({ type: \"ready\" });\nvar messages = [];\nself.addEventListener(\"message\", function (msg) {\n    var data = msg.data;\n    messages.push(data);\n});\nfunction sendHistogram() {\n    postMessage({ type: \"histogram-result\", histogram: Array.from(instance.read_histogram()) });\n}\nfunction processMessages() {\n    // Remove all but most recent point request\n    var lastIdx = messages.length - 1;\n    for (; lastIdx >= 0; lastIdx--) {\n        if (messages[lastIdx].type === \"request-points\") {\n            break;\n        }\n    }\n    if (lastIdx !== -1)\n        for (var i = 0; i < lastIdx - 1; ++i) {\n            if (messages[i].type === \"request-points\") {\n                messages.splice(i, 1);\n                lastIdx -= 1;\n                --i;\n            }\n        }\n    if (messages.length === 0)\n        return;\n    var msg = messages.shift();\n    switch (msg.type) {\n        case \"request-points\": {\n            instance.request_points(msg.count);\n            sendHistogram();\n            break;\n        }\n        case \"set-view\": {\n            instance.set_view(msg.xleft, msg.ytop, msg.scale);\n            break;\n        }\n        case \"transfer-canvas\": {\n            canvas = msg.canvas;\n            gl = canvas.getContext(\"webgl2\");\n            if (!gl) {\n                alert(\"Offscreen WebGL2 not supported\");\n            }\n            else {\n                console.info(\"Offscreen WebGL2 supported\");\n            }\n            instance = new _pkg__WEBPACK_IMPORTED_MODULE_0__.RandomPoints(canvas, gl);\n            var frame_1 = function () {\n                instance.render();\n                requestAnimationFrame(frame_1);\n            };\n            frame_1();\n            break;\n        }\n        case \"set-size\": {\n            canvas.width = msg.width;\n            canvas.height = msg.height;\n            instance.set_size(msg.width, msg.height, msg.cssWidth, msg.cssHeight);\n            break;\n        }\n    }\n}\nsetInterval(processMessages, 0);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://my-webpack-project/./src/worker.ts?");

/***/ }),

/***/ "./pkg/external/external.js":
/*!**********************************!*\
  !*** ./pkg/external/external.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.create_program = void 0;\nvar CHECK_GL_ERRORS = true;\nfunction create_program(ctx, vertex, fragment, setupTransformFeedback) {\n    console.log(\"hiii\")\n    var vertexShader = ctx.createShader(ctx.VERTEX_SHADER);\n    ctx.shaderSource(vertexShader, vertex);\n    ctx.compileShader(vertexShader);\n    var fragmentShader = ctx.createShader(ctx.FRAGMENT_SHADER);\n    ctx.shaderSource(fragmentShader, fragment);\n    ctx.compileShader(fragmentShader);\n    if (CHECK_GL_ERRORS) {\n        if (!ctx.getShaderParameter(vertexShader, ctx.COMPILE_STATUS)) {\n            console.error(\"Error compiling vertex shader\", ctx.getShaderInfoLog(vertexShader));\n        }\n        if (!ctx.getShaderParameter(fragmentShader, ctx.COMPILE_STATUS)) {\n            console.error(\"Error compiling fragment shader\", ctx.getShaderInfoLog(fragmentShader));\n        }\n    }\n    var program = ctx.createProgram();\n    ctx.attachShader(program, vertexShader);\n    ctx.attachShader(program, fragmentShader);\n    setupTransformFeedback === null || setupTransformFeedback === void 0 ? void 0 : setupTransformFeedback(program);\n    ctx.linkProgram(program);\n    if (CHECK_GL_ERRORS) {\n        if (!ctx.getProgramParameter(program, ctx.LINK_STATUS)) {\n            console.error(ctx.getProgramInfoLog(program));\n        }\n    }\n    ctx.deleteShader(vertexShader);\n    ctx.deleteShader(fragmentShader);\n    return program;\n}\nexports.create_program = create_program;\n\n\n//# sourceURL=webpack://my-webpack-project/./pkg/external/external.js?");

/***/ }),

/***/ "./pkg/random_points.js":
/*!******************************!*\
  !*** ./pkg/random_points.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RandomPoints: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.RandomPoints),\n/* harmony export */   __wbg_bindAttribLocation_ff0dc5b546d9c8b0: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bindAttribLocation_ff0dc5b546d9c8b0),\n/* harmony export */   __wbg_bindBuffer_ac939bcab5249160: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bindBuffer_ac939bcab5249160),\n/* harmony export */   __wbg_bufferData_21fd2e82fb775352: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bufferData_21fd2e82fb775352),\n/* harmony export */   __wbg_buffer_5d1b598a01b41a42: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_buffer_5d1b598a01b41a42),\n/* harmony export */   __wbg_createBuffer_a95c59cc2c1750e7: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createBuffer_a95c59cc2c1750e7),\n/* harmony export */   __wbg_createprogram_1dff91c605385cd1: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createprogram_1dff91c605385cd1),\n/* harmony export */   __wbg_deleteBuffer_b8aaa61f9bb13617: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_deleteBuffer_b8aaa61f9bb13617),\n/* harmony export */   __wbg_drawArrays_2f37c32534dffd91: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_drawArrays_2f37c32534dffd91),\n/* harmony export */   __wbg_drawElements_a3781a76e2ccb054: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_drawElements_a3781a76e2ccb054),\n/* harmony export */   __wbg_enableVertexAttribArray_c2bfb733e87824c8: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_enableVertexAttribArray_c2bfb733e87824c8),\n/* harmony export */   __wbg_getUniformLocation_7b435a76db4f3128: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getUniformLocation_7b435a76db4f3128),\n/* harmony export */   __wbg_newwithbyteoffsetandlength_aeed38cac7555df7: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithbyteoffsetandlength_aeed38cac7555df7),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbg_timeEnd_4f57793c122d4a01: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_timeEnd_4f57793c122d4a01),\n/* harmony export */   __wbg_time_0deab8794c3029d6: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_time_0deab8794c3029d6),\n/* harmony export */   __wbg_uniformMatrix3fv_5b337adcad4a038d: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniformMatrix3fv_5b337adcad4a038d),\n/* harmony export */   __wbg_useProgram_53de6b084c4780ce: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_useProgram_53de6b084c4780ce),\n/* harmony export */   __wbg_vertexAttribIPointer_24c9254053dd8ab4: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_vertexAttribIPointer_24c9254053dd8ab4),\n/* harmony export */   __wbg_vertexAttribPointer_3133080603a92d4c: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_vertexAttribPointer_3133080603a92d4c),\n/* harmony export */   __wbg_viewport_afd5166081d009b2: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_viewport_afd5166081d009b2),\n/* harmony export */   __wbindgen_memory: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_memory),\n/* harmony export */   __wbindgen_object_clone_ref: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_clone_ref),\n/* harmony export */   __wbindgen_object_drop_ref: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _random_points_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random_points_bg.wasm */ \"./pkg/random_points_bg.wasm\");\n/* harmony import */ var _random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random_points_bg.js */ \"./pkg/random_points_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_random_points_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_random_points_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_random_points_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_random_points_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://my-webpack-project/./pkg/random_points.js?");

/***/ }),

/***/ "./pkg/random_points_bg.js":
/*!*********************************!*\
  !*** ./pkg/random_points_bg.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RandomPoints: () => (/* binding */ RandomPoints),\n/* harmony export */   __wbg_bindAttribLocation_ff0dc5b546d9c8b0: () => (/* binding */ __wbg_bindAttribLocation_ff0dc5b546d9c8b0),\n/* harmony export */   __wbg_bindBuffer_ac939bcab5249160: () => (/* binding */ __wbg_bindBuffer_ac939bcab5249160),\n/* harmony export */   __wbg_bufferData_21fd2e82fb775352: () => (/* binding */ __wbg_bufferData_21fd2e82fb775352),\n/* harmony export */   __wbg_buffer_5d1b598a01b41a42: () => (/* binding */ __wbg_buffer_5d1b598a01b41a42),\n/* harmony export */   __wbg_createBuffer_a95c59cc2c1750e7: () => (/* binding */ __wbg_createBuffer_a95c59cc2c1750e7),\n/* harmony export */   __wbg_createprogram_1dff91c605385cd1: () => (/* binding */ __wbg_createprogram_1dff91c605385cd1),\n/* harmony export */   __wbg_deleteBuffer_b8aaa61f9bb13617: () => (/* binding */ __wbg_deleteBuffer_b8aaa61f9bb13617),\n/* harmony export */   __wbg_drawArrays_2f37c32534dffd91: () => (/* binding */ __wbg_drawArrays_2f37c32534dffd91),\n/* harmony export */   __wbg_drawElements_a3781a76e2ccb054: () => (/* binding */ __wbg_drawElements_a3781a76e2ccb054),\n/* harmony export */   __wbg_enableVertexAttribArray_c2bfb733e87824c8: () => (/* binding */ __wbg_enableVertexAttribArray_c2bfb733e87824c8),\n/* harmony export */   __wbg_getUniformLocation_7b435a76db4f3128: () => (/* binding */ __wbg_getUniformLocation_7b435a76db4f3128),\n/* harmony export */   __wbg_newwithbyteoffsetandlength_aeed38cac7555df7: () => (/* binding */ __wbg_newwithbyteoffsetandlength_aeed38cac7555df7),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbg_timeEnd_4f57793c122d4a01: () => (/* binding */ __wbg_timeEnd_4f57793c122d4a01),\n/* harmony export */   __wbg_time_0deab8794c3029d6: () => (/* binding */ __wbg_time_0deab8794c3029d6),\n/* harmony export */   __wbg_uniformMatrix3fv_5b337adcad4a038d: () => (/* binding */ __wbg_uniformMatrix3fv_5b337adcad4a038d),\n/* harmony export */   __wbg_useProgram_53de6b084c4780ce: () => (/* binding */ __wbg_useProgram_53de6b084c4780ce),\n/* harmony export */   __wbg_vertexAttribIPointer_24c9254053dd8ab4: () => (/* binding */ __wbg_vertexAttribIPointer_24c9254053dd8ab4),\n/* harmony export */   __wbg_vertexAttribPointer_3133080603a92d4c: () => (/* binding */ __wbg_vertexAttribPointer_3133080603a92d4c),\n/* harmony export */   __wbg_viewport_afd5166081d009b2: () => (/* binding */ __wbg_viewport_afd5166081d009b2),\n/* harmony export */   __wbindgen_memory: () => (/* binding */ __wbindgen_memory),\n/* harmony export */   __wbindgen_object_clone_ref: () => (/* binding */ __wbindgen_object_clone_ref),\n/* harmony export */   __wbindgen_object_drop_ref: () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var external_external_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! external/external.js */ \"./pkg/external/external.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\nfunction __wbg_adapter_8(arg0, arg1, arg2) {\n    wasm.wasm_bindgen__convert__closures__invoke1_mut__h92e4a0da9f5f5eb6(arg0, arg1, addHeapObject(arg2));\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nlet cachedFloat32Memory0 = null;\n\nfunction getFloat32Memory0() {\n    if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {\n        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);\n    }\n    return cachedFloat32Memory0;\n}\n\nfunction getArrayF32FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n/**\n*/\nclass RandomPoints {\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_randompoints_free(ptr);\n    }\n    /**\n    * @param {OffscreenCanvas} canvas\n    * @param {WebGL2RenderingContext} gl\n    */\n    constructor(canvas, gl) {\n        const ret = wasm.randompoints_new(addHeapObject(canvas), addHeapObject(gl));\n        this.__wbg_ptr = ret >>> 0;\n        return this;\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} scale\n    */\n    set_view(x, y, scale) {\n        wasm.randompoints_set_view(this.__wbg_ptr, x, y, scale);\n    }\n    /**\n    * @returns {Uint32Array}\n    */\n    read_histogram() {\n        const ret = wasm.randompoints_read_histogram(this.__wbg_ptr);\n        return takeObject(ret);\n    }\n    /**\n    * @param {number} count\n    */\n    request_points(count) {\n        wasm.randompoints_request_points(this.__wbg_ptr, count);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} css_width\n    * @param {number} css_height\n    */\n    set_size(width, height, css_width, css_height) {\n        wasm.randompoints_set_size(this.__wbg_ptr, width, height, css_width, css_height);\n    }\n    /**\n    */\n    render() {\n        wasm.randompoints_render(this.__wbg_ptr);\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_createprogram_1dff91c605385cd1(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    try {\n        var state0 = {a: arg5, b: arg6};\n        var cb0 = (arg0) => {\n            const a = state0.a;\n            state0.a = 0;\n            try {\n                return __wbg_adapter_8(a, state0.b, arg0);\n            } finally {\n                state0.a = a;\n            }\n        };\n        const ret = (0,external_external_js__WEBPACK_IMPORTED_MODULE_0__.create_program)(takeObject(arg0), getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), cb0);\n        return addHeapObject(ret);\n    } finally {\n        state0.a = state0.b = 0;\n    }\n};\n\nfunction __wbg_time_0deab8794c3029d6(arg0, arg1) {\n    console.time(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbg_timeEnd_4f57793c122d4a01(arg0, arg1) {\n    console.timeEnd(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_bufferData_21fd2e82fb775352(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).bufferData(arg1 >>> 0, getArrayU8FromWasm0(arg2, arg3), arg4 >>> 0);\n};\n\nfunction __wbg_uniformMatrix3fv_5b337adcad4a038d(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).uniformMatrix3fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));\n};\n\nfunction __wbg_vertexAttribIPointer_24c9254053dd8ab4(arg0, arg1, arg2, arg3, arg4, arg5) {\n    getObject(arg0).vertexAttribIPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);\n};\n\nfunction __wbg_bindAttribLocation_ff0dc5b546d9c8b0(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).bindAttribLocation(getObject(arg1), arg2 >>> 0, getStringFromWasm0(arg3, arg4));\n};\n\nfunction __wbg_bindBuffer_ac939bcab5249160(arg0, arg1, arg2) {\n    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));\n};\n\nfunction __wbg_createBuffer_a95c59cc2c1750e7(arg0) {\n    const ret = getObject(arg0).createBuffer();\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_deleteBuffer_b8aaa61f9bb13617(arg0, arg1) {\n    getObject(arg0).deleteBuffer(getObject(arg1));\n};\n\nfunction __wbg_drawArrays_2f37c32534dffd91(arg0, arg1, arg2, arg3) {\n    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);\n};\n\nfunction __wbg_drawElements_a3781a76e2ccb054(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);\n};\n\nfunction __wbg_enableVertexAttribArray_c2bfb733e87824c8(arg0, arg1) {\n    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);\n};\n\nfunction __wbg_getUniformLocation_7b435a76db4f3128(arg0, arg1, arg2, arg3) {\n    const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_useProgram_53de6b084c4780ce(arg0, arg1) {\n    getObject(arg0).useProgram(getObject(arg1));\n};\n\nfunction __wbg_vertexAttribPointer_3133080603a92d4c(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);\n};\n\nfunction __wbg_viewport_afd5166081d009b2(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).viewport(arg1, arg2, arg3, arg4);\n};\n\nfunction __wbg_buffer_5d1b598a01b41a42(arg0) {\n    const ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_newwithbyteoffsetandlength_aeed38cac7555df7(arg0, arg1, arg2) {\n    const ret = new Uint32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    const ret = wasm.memory;\n    return addHeapObject(ret);\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./pkg/random_points_bg.js?");

/***/ }),

/***/ "./pkg/random_points_bg.wasm":
/*!***********************************!*\
  !*** ./pkg/random_points_bg.wasm ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./random_points_bg.js */ \"./pkg/random_points_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"2175a987dc7eb6f669e0\", {\n\t\"./random_points_bg.js\": {\n\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\"__wbg_createprogram_1dff91c605385cd1\": WEBPACK_IMPORTED_MODULE_0.__wbg_createprogram_1dff91c605385cd1,\n\t\t\"__wbg_time_0deab8794c3029d6\": WEBPACK_IMPORTED_MODULE_0.__wbg_time_0deab8794c3029d6,\n\t\t\"__wbg_timeEnd_4f57793c122d4a01\": WEBPACK_IMPORTED_MODULE_0.__wbg_timeEnd_4f57793c122d4a01,\n\t\t\"__wbindgen_object_clone_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,\n\t\t\"__wbg_bufferData_21fd2e82fb775352\": WEBPACK_IMPORTED_MODULE_0.__wbg_bufferData_21fd2e82fb775352,\n\t\t\"__wbg_uniformMatrix3fv_5b337adcad4a038d\": WEBPACK_IMPORTED_MODULE_0.__wbg_uniformMatrix3fv_5b337adcad4a038d,\n\t\t\"__wbg_vertexAttribIPointer_24c9254053dd8ab4\": WEBPACK_IMPORTED_MODULE_0.__wbg_vertexAttribIPointer_24c9254053dd8ab4,\n\t\t\"__wbg_bindAttribLocation_ff0dc5b546d9c8b0\": WEBPACK_IMPORTED_MODULE_0.__wbg_bindAttribLocation_ff0dc5b546d9c8b0,\n\t\t\"__wbg_bindBuffer_ac939bcab5249160\": WEBPACK_IMPORTED_MODULE_0.__wbg_bindBuffer_ac939bcab5249160,\n\t\t\"__wbg_createBuffer_a95c59cc2c1750e7\": WEBPACK_IMPORTED_MODULE_0.__wbg_createBuffer_a95c59cc2c1750e7,\n\t\t\"__wbg_deleteBuffer_b8aaa61f9bb13617\": WEBPACK_IMPORTED_MODULE_0.__wbg_deleteBuffer_b8aaa61f9bb13617,\n\t\t\"__wbg_drawArrays_2f37c32534dffd91\": WEBPACK_IMPORTED_MODULE_0.__wbg_drawArrays_2f37c32534dffd91,\n\t\t\"__wbg_drawElements_a3781a76e2ccb054\": WEBPACK_IMPORTED_MODULE_0.__wbg_drawElements_a3781a76e2ccb054,\n\t\t\"__wbg_enableVertexAttribArray_c2bfb733e87824c8\": WEBPACK_IMPORTED_MODULE_0.__wbg_enableVertexAttribArray_c2bfb733e87824c8,\n\t\t\"__wbg_getUniformLocation_7b435a76db4f3128\": WEBPACK_IMPORTED_MODULE_0.__wbg_getUniformLocation_7b435a76db4f3128,\n\t\t\"__wbg_useProgram_53de6b084c4780ce\": WEBPACK_IMPORTED_MODULE_0.__wbg_useProgram_53de6b084c4780ce,\n\t\t\"__wbg_vertexAttribPointer_3133080603a92d4c\": WEBPACK_IMPORTED_MODULE_0.__wbg_vertexAttribPointer_3133080603a92d4c,\n\t\t\"__wbg_viewport_afd5166081d009b2\": WEBPACK_IMPORTED_MODULE_0.__wbg_viewport_afd5166081d009b2,\n\t\t\"__wbg_buffer_5d1b598a01b41a42\": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_5d1b598a01b41a42,\n\t\t\"__wbg_newwithbyteoffsetandlength_aeed38cac7555df7\": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithbyteoffsetandlength_aeed38cac7555df7,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\"__wbindgen_memory\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory\n\t}\n});\n\n//# sourceURL=webpack://my-webpack-project/./pkg/random_points_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/worker.ts");
/******/ 	
/******/ })()
;