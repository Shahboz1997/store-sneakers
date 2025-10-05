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

eval("{\r\n// Данные\r\nlet productData = [\r\n    {\r\n        id: 0,\r\n        img: 'img/5.webp',\r\n        name: 'Nike',\r\n        price: '500 ₽',\r\n        stock:'9222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#ff0000',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Новые поступления',\r\n        rating:4,\r\n        overview:'Достоинства: Очень красивые. лучше, чем на фото.',\r\n        review: '51 отзыв',\r\n    },\r\n    {\r\n        id: 1,\r\n        img:'img/11.webp',\r\n        name: 'Nike',\r\n        price: '600 ₽ ',\r\n        stock:'8222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#008000',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Из-за рубежа',\r\n        rating:4.5,\r\n        overview:'Достоинства: Очень красивые. лучше, чем на фото.',\r\n        review: '51 отзыв',\r\n    },\r\n       {\r\n        id: 2,\r\n        img: 'img/15.webp',\r\n        name: 'Nike',\r\n        price: '700 ₽',\r\n        stock:'9092 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#2c2929ff',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Кроссовки для детей',\r\n        rating:4.6,\r\n        overview:'Достоинства: Очень красивые. лучше, чем на фото.',\r\n        review: '51 отзыв',\r\n    },\r\n    {\r\n        id: 3,\r\n        img:'img/19.webp',\r\n        name: 'Nike',\r\n        price: '800 ₽',\r\n        stock:'7222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#c2b5b5ff',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Кроссовки для взрослых',\r\n        rating:3.4,\r\n        review: '51 отзыв',\r\n    },\r\n       {\r\n        id: 4,\r\n        img: 'img/100.JPG',\r\n        name: 'Nike',\r\n        price: '900 ₽',\r\n        stock:'6222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#a9a9a9',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Повседневные',\r\n        rating:4.9,\r\n        review: '51 отзыв',\r\n        \r\n    },\r\n    {\r\n        id: 5,\r\n        img: 'img/23.webp',\r\n        name: 'Nike',\r\n        price: '1000 ₽',\r\n        stock:'11222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#ffff00',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Фитнес',\r\n        rating:5,\r\n        review: '51 отзыв',\r\n    },\r\n     {\r\n        id: 6,\r\n        img: 'img/27.webp',\r\n        name: 'Nike',\r\n        price: '1100 ₽',\r\n        stock:'6222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#0a0a63ff',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Аксессуары',\r\n        rating:4.8,\r\n        review: '51 отзыв',\r\n    },\r\n     {\r\n        id: 7,\r\n        img: 'img/114.jpg',\r\n        name: 'Nike',\r\n        price: '1200 ₽',\r\n        stock:'1922 ₽',\r\n        leftover: '90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#f3ebe3ff',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Организация',\r\n        rating:3.4,\r\n        review: '51 отзыв',\r\n    },\r\n     {\r\n        id: 8,\r\n        img: 'img/2.jpg',\r\n        name: 'Nike',\r\n        price: '1300 ₽',\r\n        stock:'10222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#706f67ff',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Путешествие',\r\n        rating:2.4,  \r\n        review: '51 отзыв',  \r\n    },\r\n      {\r\n        id: 9,\r\n        img: 'img/114.webp',\r\n        name: 'Nike',\r\n        price: '1400 ₽',\r\n        stock:'9322 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#d84e65ff',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n        rating:2.5,\r\n        review:'51 отзыв',\r\n    },\r\n         {\r\n        id: 10,\r\n        img: 'img/31.webp',\r\n        name: 'Nike',\r\n        price: '1400 ₽',\r\n        stock:'13222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#000000',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n        rating:1.3,\r\n        review:'51 отзыв',\r\n    },\r\n         {\r\n        id: 11,\r\n        img: 'img/113.webp',\r\n        name: 'Nike',\r\n        price: '1400 ₽',\r\n        stock:'14222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#000000',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n        rating:2,\r\n        review:'51 отзыв',\r\n    },\r\n       {\r\n        id: 12,\r\n        img: 'img/113.webp',\r\n        name: 'Nike',\r\n        price: '1400 ₽',\r\n        stock:'14222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#000000',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n        rating:2,\r\n        review:'51 отзыв',\r\n    },\r\n       {\r\n        id: 13,\r\n        img: 'img/113.webp',\r\n        name: 'Nike',\r\n        price: '1400 ₽',\r\n        stock:'14222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#000000',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n        rating:2,\r\n        review:'51 отзыв',\r\n    },\r\n       {\r\n        id: 14,\r\n        img: 'img/113.webp',\r\n        name: 'Nike',\r\n        price: '1400 ₽',\r\n        stock:'14222 ₽',\r\n        leftover:'90 штук осталось',\r\n        description: 'Для бега и прогулок по городу',\r\n        color:'Цвет ',\r\n        circle:'#000000',\r\n        // size:['36', '38', '40','42', '44', '46'],\r\n        category:'Распродажа',\r\n        rating:2,\r\n        review:'51 отзыв',\r\n    },\r\n]\r\nconst productsContainer = document.querySelector(\".products-container\");\r\nconst productsTemplate = document.querySelector(\".product-card-template\");\r\nconst fragment = document.createDocumentFragment();\r\n\r\nfunction renderProducts() {\r\n     productData.forEach(product => {                           \r\n            const clone = productsTemplate.content.cloneNode(true);                 \r\n            const card = clone.querySelector('.product-card');\r\n          \r\n            const imgContainer = card.querySelector(\".product-img\");\r\n            const productImage = imgContainer.querySelector(\".image\");\r\n            productImage.src = product.img;                 \r\n            productImage.alt = product.name;    \r\n\r\n            const productInfo = card.querySelector('.info');\r\n\r\n            productInfo.querySelector('.name').textContent = product.name;                 \r\n            productInfo.querySelector('.price').textContent = product.price;    \r\n            productInfo.querySelector('.stock').textContent = product.stock;  \r\n            productInfo.querySelector('.left-over').textContent = product.leftover;               \r\n            productInfo.querySelector('.description').textContent = product.description; \r\n            productInfo.querySelector('.color').textContent = product.color;  \r\n            productInfo.querySelector('.circle').style.backgroundColor = product.circle;\r\n            productInfo.querySelector('.category').textContent = product.category;                \r\n            productInfo.querySelector('.rating').textContent = product.rating;   \r\n            productInfo.querySelector('.re-view').textContent = product. review;   \r\n\r\n                \r\n            fragment.appendChild(card);             \r\n        });              \r\n                  \r\n        productsContainer.innerHTML = '';             \r\n        productsContainer.appendChild(fragment);         \r\n    }          \r\n\r\ndocument.addEventListener('DOMContentLoaded', renderProducts);\r\n\r\n// Поисковик\r\nconst copyProductData = productData.slice();\r\n\r\nconst search = document.querySelector(\".input-cnt\");\r\n\r\nconst productsList = document.getElementById(\"productData\");\r\nconsole.log(productsList);\r\n\r\nconst searchInput = search.querySelector(\"#search-input\");\r\nconsole.log(searchInput);\r\nconst searchIcon = search.querySelector(\".material-icons\");\r\n\r\nlet query = null;\r\n\r\n// Обработчик ввода в поле поиска \r\nsearchInput.addEventListener(\"input\", function(){\r\n    query = this.value.toLowerCase();\r\n});\r\n\r\n// Обработчик клика на кнопку поиска\r\nsearchIcon.addEventListener(\"click\", function (){\r\n    const resultArray = [];\r\n\r\n    productData.forEach(item => {\r\n       const dataItem = Object.values(item);\r\n       let isFind = false;\r\n       dataItem.forEach(str => {\r\n        if (str.toString().toLowerCase().includes(query)) {\r\n            isFind = true;\r\n            return;\r\n        };\r\n       });\r\n       if (isFind) {\r\n        resultArray.push(item);\r\n       }\r\n    });\r\n    console.log(\"resultArray\", resultArray);\r\n    productData = [...resultArray];\r\n    renderProducts();\r\n});\r\n\r\n\r\nconst dropdownBtn = document.getElementById(\"btn\");\r\nconst dropdownMenu = document.getElementById(\"dropdown\");\r\nconst toggleArrow = document.getElementById(\"arrow\");\r\n\r\n\r\nconst toggleDropdown = function () {\r\n  dropdownMenu.classList.toggle(\"show\");\r\n  toggleArrow.classList.toggle(\"arrow\");\r\n};\r\n\r\ndropdownBtn.addEventListener(\"click\", function (e) {\r\n  e.stopPropagation();\r\n  toggleDropdown();\r\n});\r\n\r\ndocument.documentElement.addEventListener(\"click\", function () {\r\n  if (dropdownMenu.classList.contains(\"show\")) {\r\n    toggleDropdown();\r\n  }\r\n});\r\n\r\n\r\n\r\nconst demo = document.getElementById(\"demo\");\r\nconsole.log(demo);\r\n\r\nconst dropdemo = document.getElementById(\"demodown\");\r\nconsole.log(dropdemo);\r\n\r\nconst togglList = document.getElementById(\"arrowlist\");\r\nconsole.log(togglList);\r\n\r\n\r\nconst togglListD = function () {\r\n  dropdemo.classList.toggle(\"shown\");\r\n   togglList.classList.toggle(\"arrowlist\");\r\n};\r\n\r\ndemo.addEventListener(\"click\", function (element) {\r\n  element.stopPropagation();\r\n  togglListD();\r\n});\r\n\r\ndocument.documentElement.addEventListener(\"click\", function (element) {\r\n  if (dropdemo.classList.contains(\"shown\")) {\r\n     togglListD();\r\n  }\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://store-sneakers/./src/js/main.js?\n}");

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