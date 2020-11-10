/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style/index.scss":
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/Footer/footer.js":
/*!*****************************************!*\
  !*** ./src/Components/Footer/footer.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// const elem = document.querySelectorAll(".footer__content__elem");

// elem.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     item.style.background = "green";
//   });
// });
// elem.forEach((item) => {
//   item.addEventListener("mouseleave", () => {
//     item.style.background = "red";
//   });
// });


/***/ }),

/***/ "./src/Components/Works/works.js":
/*!***************************************!*\
  !*** ./src/Components/Works/works.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

let slider = document.querySelector(".works__content__slider"),
  bigImg = document.querySelector(".works__content__slider__img-img"),
  img = document.querySelectorAll(".works__content__elem-img"),
  right = document.querySelector(".works__content__slider__arrow-right"),
  left = document.querySelector(".works__content__slider__arrow-left"),
  slideIndex = 1,
  pathname = window.location.pathname;

const changeImg = (n) => {
  if (n > img.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = img.length;
  }

  bigImg.src = `../src/Components/Works/style/${slideIndex - 1}.png`;
};

const plusSlides = (n) => {
  changeImg((slideIndex += n));
};

img.forEach((elem, index) => {
  elem.addEventListener("click", (item) => {
    slider.classList.toggle("active");
    slideIndex = index + 1;
    bigImg.src = `./src/Components/Works/style/${index}.png`;
  });
});

slider.addEventListener("click", (elem) => {
  if (elem.target === slider) {
    slider.classList.toggle("active");
  }
});

right.addEventListener("click", (elem) => {
  plusSlides(1);
});

left.addEventListener("click", (elem) => {
  plusSlides(-1);
});


/***/ }),

/***/ "./src/Components/team/team.js":
/*!*************************************!*\
  !*** ./src/Components/team/team.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

let container = document.getElementsByClassName("team__content"),
  elem = document.getElementsByClassName("team__content__elem"),
  img = document.querySelectorAll(".team__content__elem-img"),
  name = document.querySelectorAll(
    ".team__content__elem-desc__container__top__name"
  ),
  position = document.querySelectorAll(
    ".team__content__elem-desc__container__top__position"
  ),
  desc = document.querySelectorAll(
    ".team__content__elem-desc__container__middle"
  );

let team = [
  {
    img: 0,
    name: "Anna Molik",
    position: "FrontEnd",
    desc: "Hello gello",
  },
  {
    img: 1,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 2,
    name: "Martin",
    position: "BackEnd",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 3,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 4,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
  {
    img: 5,
    name: "Al Rayhan",
    position: " UI Designer",
    desc:
      "Lorem ipsum is not simply is an action designer random text it has roots in a piece.",
  },
];

img.forEach((element, index) => {
  name[index].textContent = team[index].name;
  position[index].textContent = team[index].position;
  desc[index].textContent = team[index].desc;
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ "./style/index.scss");
/* harmony import */ var _Components_Footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Footer/footer */ "./src/Components/Footer/footer.js");
/* harmony import */ var _Components_Footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Components_Footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_team_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/team/team */ "./src/Components/team/team.js");
/* harmony import */ var _Components_team_team__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Components_team_team__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Works_works__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Works/works */ "./src/Components/Works/works.js");
/* harmony import */ var _Components_Works_works__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Components_Works_works__WEBPACK_IMPORTED_MODULE_3__);






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map