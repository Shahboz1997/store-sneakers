/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\nconst main = __webpack_require__(/*! ./js/main */ \"./src/js/main.js\");\r\n\n\n//# sourceURL=webpack://store-sneakers/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

<<<<<<< HEAD
<<<<<<< HEAD
eval("{console.log(\"hello world\");\r\nconst collectionColor = document.querySelector(\".collection\");\r\nconst collectionButton = collectionColor.querySelector(\".color\");\r\nconst collectionSvg = collectionButton.querySelectorAll(\".d-none\");\r\nconsole.log(\"Hello world\");\r\ncollectionSvg.forEach((information) =>{\r\n    information.addEventListener(\"click\",(evt)=>{\r\n        const lorem = information.querySelector(\".collection-color\");\r\n        if (lorem.classList.contains(\"d-none\")) {\r\n            lorem.classList.remove(\"d-none\");\r\n        }\r\n        else{\r\n            lorem.classList.add(\"d-none\");\r\n        }\r\n    \r\n    });\r\n});\r\nconsole.log(\"hello world\");\r\n// Данные\r\nconst productData = [\r\n    {\r\n        id: 0,\r\n        img: 'img/1.webp',\r\n        name: 'nike',\r\n        price: 500,\r\n        description: 'It is the best of the best',\r\n    },\r\n    {\r\n        id: 1,\r\n        img: 'img/2.webp',\r\n        name: 'Nike',\r\n        price: 600,\r\n        description: 'It is the best of the best',\r\n    },\r\n       {\r\n        id: 2,\r\n        img: 'img/1.webp',\r\n        name: 'nike',\r\n        price: 500,\r\n        description: 'It is the best of the best',\r\n    },\r\n    {\r\n        id: 3,\r\n        img: 'img/2.webp',\r\n        name: 'Nike',\r\n        price: 600,\r\n        description: 'It is the best of the best',\r\n    },\r\n       {\r\n        id: 4,\r\n        img: 'img/1.webp',\r\n        name: 'nike',\r\n        price: 500,\r\n        description: 'It is the best of the best',\r\n    },\r\n    {\r\n        id: 5,\r\n        img: 'img/2.webp',\r\n        name: 'Nike',\r\n        price: 600,\r\n        description: 'It is the best of the best',\r\n    },\r\n]\r\n// Функция, которая создаст карточку\r\nfunction createCard() {\r\n    \r\n}\r\n\r\n\r\n\r\n//Функция, которая добавит карточки в контейнер\r\nfunction addCardToContainer() {\r\n\r\n}\r\n\r\n\r\n// При загрузке страницы \r\n\n\n//# sourceURL=webpack://store-sneakers/./src/js/main.js?\n}");
=======
eval("{// Данные\r\nconst productData = [\r\n    {\r\n        id: 0,\r\n        img: ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp', 'img/6.webp'],\r\n        name: 'Nike',\r\n        price: 500,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'красный',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Новые поступления',\r\n        rating:4,\r\n    },\r\n    {\r\n        id: 1,\r\n        img: ['img/11.webp', 'img/12.webp', 'img/13.webp', 'img/14.webp'],\r\n        name: 'Nike',\r\n        price: 600,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'зеленый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Из-за рубежа',\r\n         rating:4.5,\r\n    },\r\n       {\r\n        id: 2,\r\n        img: ['img/15.webp', 'img/16.webp', 'img/17.webp', 'img/18.webp'],\r\n        name: 'Nike',\r\n        price: 700,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'черный',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Кроссовки для детей',\r\n         rating:4.6\r\n    },\r\n    {\r\n        id: 3,\r\n        img: ['img/19.webp', 'img/20.webp', 'img/21.webp', 'img/22.webp'],\r\n        name: 'Nike',\r\n        price: 800,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'белый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Кроссовки для взрослых',\r\n         rating:3.4,\r\n    },\r\n       {\r\n        id: 4,\r\n        img: ['img/10.jpg', 'img/9.jpg', 'img/3.webp', 'img/35.webp', 'img/36.webp'],\r\n        name: 'Nike',\r\n        price: 900,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'черно-белый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Повседневные',\r\n         rating:4.9,\r\n        \r\n    },\r\n    {\r\n        id: 5,\r\n        img: ['img/23.webp', 'img/24.webp', 'img/25.webp', 'img/26.webp'],\r\n        name: 'Nike',\r\n        price: 1000,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'желтый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Фитнес',\r\n         rating:5,\r\n    },\r\n     {\r\n        id: 5,\r\n        img: ['img/27.webp', 'img/28.webp', 'img/29.webp', 'img/30.webp'],\r\n        name: 'Nike',\r\n        price: 1100,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'голубой',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Аксессуары',\r\n         rating:4.8,\r\n    },\r\n     {\r\n        id: 5,\r\n        img: ['img/31.webp', 'img/32.webp', 'img/33.webp', 'img/34.webp'],\r\n        name: 'Nike',\r\n        price: 1200,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'серый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Организация',\r\n         rating:3.4,\r\n    },\r\n     {\r\n        id: 5,\r\n        img: ['img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg'],\r\n        name: 'Nike',\r\n        price: 1300,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'молочный',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Путешествие',\r\n         rating:2.4,    },\r\n      {\r\n        id: 5,\r\n        img: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],\r\n        name: 'Nike',\r\n        price: 1400,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'синий',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n         rating:2.5\r\n    },\r\n]\r\n// Функция, которая создаст карточку\r\nfunction createCard() {\r\n    \r\n}\r\n\r\n\r\n\r\n//Функция, которая добавит карточки в контейнер\r\nfunction addCardToContainer() {\r\n\r\n}\r\n\r\n\r\n// При загрузке страницы \r\n\r\nconsole.log(\"Hello World\");\r\nconst sortedOut = document.querySelector('.sorted-Out');\r\nconst demoVersion = sortedOut.querySelector('.demo');\r\nconst demoSort = sortedOut.querySelector('.sort');\r\n\r\nsortedOut.forEach((information) =>{\r\n    information.addEvenlistener('click', (evt) => {\r\n        const lorem = information.querySelector('.sort')\r\n        if (lorem.classList.contains('d-none')) {\r\n            lorem.classList.remove('d-none');\r\n        } else{\r\n            lorem.classList.add('d-none');\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://store-sneakers/./src/js/main.js?\n}");
>>>>>>> a5611d6 (SHOP)
=======
eval("{// Данные\r\nconst productData = [\r\n    {\r\n        id: 0,\r\n        img: ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp', 'img/6.webp'],\r\n        name: 'Nike',\r\n        price: 500,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'красный',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Новые поступления',\r\n        rating:4,\r\n        overview:'Достоинства: Очень красивые. лучше, чем на фото.',\r\n    },\r\n    {\r\n        id: 1,\r\n        img: ['img/11.webp', 'img/12.webp', 'img/13.webp', 'img/14.webp'],\r\n        name: 'Nike',\r\n        price: 600,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'зеленый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Из-за рубежа',\r\n        rating:4.5,\r\n        overview:'Достоинства: Очень красивые. лучше, чем на фото.',\r\n    },\r\n       {\r\n        id: 2,\r\n        img: ['img/15.webp', 'img/16.webp', 'img/17.webp', 'img/18.webp'],\r\n        name: 'Nike',\r\n        price: 700,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'черный',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Кроссовки для детей',\r\n        rating:4.6,\r\n        overview:'Достоинства: Очень красивые. лучше, чем на фото.',\r\n    },\r\n    {\r\n        id: 3,\r\n        img: ['img/19.webp', 'img/20.webp', 'img/21.webp', 'img/22.webp'],\r\n        name: 'Nike',\r\n        price: 800,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'белый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Кроссовки для взрослых',\r\n         rating:3.4,\r\n    },\r\n       {\r\n        id: 4,\r\n        img: ['img/10.jpg', 'img/9.jpg', 'img/3.webp', 'img/35.webp', 'img/36.webp'],\r\n        name: 'Nike',\r\n        price: 900,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'черно-белый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Повседневные',\r\n         rating:4.9,\r\n        \r\n    },\r\n    {\r\n        id: 5,\r\n        img: ['img/23.webp', 'img/24.webp', 'img/25.webp', 'img/26.webp'],\r\n        name: 'Nike',\r\n        price: 1000,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'желтый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Фитнес',\r\n         rating:5,\r\n    },\r\n     {\r\n        id: 5,\r\n        img: ['img/27.webp', 'img/28.webp', 'img/29.webp', 'img/30.webp'],\r\n        name: 'Nike',\r\n        price: 1100,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'голубой',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Аксессуары',\r\n         rating:4.8,\r\n    },\r\n     {\r\n        id: 5,\r\n        img: ['img/31.webp', 'img/32.webp', 'img/33.webp', 'img/34.webp'],\r\n        name: 'Nike',\r\n        price: 1200,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'серый',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Организация',\r\n         rating:3.4,\r\n    },\r\n     {\r\n        id: 5,\r\n        img: ['img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg'],\r\n        name: 'Nike',\r\n        price: 1300,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'молочный',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Путешествие',\r\n         rating:2.4,    },\r\n      {\r\n        id: 5,\r\n        img: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],\r\n        name: 'Nike',\r\n        price: 1400,\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'синий',\r\n        size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n         rating:2.5\r\n    },\r\n]\r\n// Функция, которая создаст карточку\r\nfunction createCard() {\r\n    \r\n}\r\n\r\n\r\n\r\n//Функция, которая добавит карточки в контейнер\r\nfunction addCardToContainer() {\r\n\r\n}\r\n\r\n\r\n// При загрузке страницы \r\n\r\nconsole.log(\"Hello World\");\r\nconst sortedOut = document.querySelector('.sorted-Out');\r\nconst demoVersion = sortedOut.querySelector('.demo');\r\nconst demoSort = sortedOut.querySelector('.sort');\r\n\r\nsortedOut.forEach((information) =>{\r\n    information.addEvenlistener('click', (evt) => {\r\n        const lorem = information.querySelector('.sort')\r\n        if (lorem.classList.contains('d-none')) {\r\n            lorem.classList.remove('d-none');\r\n        } else{\r\n            lorem.classList.add('d-none');\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://store-sneakers/./src/js/main.js?\n}");
>>>>>>> 9927887 (SHOP)

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://store-sneakers/./src/main.css?\n}");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;