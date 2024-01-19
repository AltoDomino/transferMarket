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
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst root = document.getElementById(\"root\");\nconst submitButton = document.createElement('button');\nconst form = document.createElement(\"form\");\nconst input = document.createElement(\"input\");\nsubmitButton.innerHTML = \"SZUKAJ\";\ninput.placeholder = \"WPISZ LINK\";\nsubmitButton.type = \"submit\";\nform === null || form === void 0 ? void 0 : form.appendChild(input);\nform === null || form === void 0 ? void 0 : form.appendChild(submitButton);\nroot === null || root === void 0 ? void 0 : root.appendChild(form);\nconst download = document.createElement(\"button\");\ndownload.innerHTML = \"download\";\nroot === null || root === void 0 ? void 0 : root.appendChild(download);\ninput.addEventListener('change', (e) => {\n    const inputelement = e.target;\n    form.action = `link=${inputelement.value}`;\n});\nform.onsubmit = () => {\n    alert(\"plik oczekuje na pobranie\");\n    download.onclick = Download;\n};\nconst Download = () => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(\"http://localhost:8080/download\");\n    return response;\n});\n\n\n//# sourceURL=webpack://zadanie-4/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"]();
/******/ 	
/******/ })()
;