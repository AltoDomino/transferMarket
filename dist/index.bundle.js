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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (() => {

eval("\nconst root = document.getElementById(\"root\");\nconst submitButton = document.createElement('button');\nconst form = document.createElement(\"form\");\n// const downloadbutton = document.createElement('button')\nconst input = document.createElement(\"input\");\nsubmitButton.innerHTML = \"SZUKAJ\";\ninput.placeholder = \"WPISZ LINK\";\nsubmitButton.type = \"submit\";\n// downloadbutton.innerHTML =\"POBIERZ\"\nform === null || form === void 0 ? void 0 : form.appendChild(input);\nform === null || form === void 0 ? void 0 : form.appendChild(submitButton);\n// root?.appendChild(downloadbutton)\nroot === null || root === void 0 ? void 0 : root.appendChild(form);\ninput.addEventListener('change', (e) => {\n    const inputelement = e.target;\n    form.action = `link=${inputelement.value}`;\n});\n\n\n//# sourceURL=webpack://zadanie-4/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"]();
/******/ 	
/******/ })()
;