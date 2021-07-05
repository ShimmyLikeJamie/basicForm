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
/***/ (() => {

eval("console.log('test');\r\n\r\n(() => {\r\n  let submit = document.getElementById('submit');\r\n  let email = document.getElementById('email');\r\n  let emailError = document.getElementById('emailError');\r\n  let country = document.getElementById('country');\r\n  let zipcode = document.getElementById('zipcode');\r\n  let zipcodeError = document.getElementById('zipcodeError');\r\n  let password = document.getElementById('password');\r\n  let passwordError = document.getElementById('passwordError');\r\n  let confirmPassword = document.getElementById('confirmPassword');\r\n  let confirmPasswordError = document.getElementById('confirmPasswordError');\r\n\r\n  zipcode.oninput = () => {\r\n    if (zipcode.value.length != 6) {\r\n      zipcodeError.innerHTML = 'Use 6 digits for zipcodes';\r\n      zipcode.setAttribute('class', 'invalid');\r\n    } else {\r\n      zipcodeError.getElementById('zipcodeError').innerHTML = '';\r\n      zipcode.setAttribute('class', '');\r\n    }\r\n  };\r\n\r\n  password.oninput = () => {\r\n    if (password.value.length < 8) {\r\n      passwordError.innerHTML = 'Must be at least 8 characters long';\r\n      password.setAttribute('class', 'invalid');\r\n    } else {\r\n      passwordError.innerHTML = '';\r\n      password.setAttribute('class', '');\r\n    }\r\n  };\r\n  confirmPassword.oninput = () => {\r\n    if (confirmPassword.value != password.value) {\r\n      confirmPasswordError.innerHTML = 'Must match password';\r\n      confirmPassword.setAttribute('class', 'invalid');\r\n    } else {\r\n      confirmPasswordError.innerHTML = '';\r\n      confirmPassword.setAttribute('class', '');\r\n    }\r\n  };\r\n\r\n  email.oninput = () => {\r\n    let emailPattern = /^\\w+@\\w+\\.[A-Za-z]+$/;\r\n    if (!emailPattern.test(email.value)) {\r\n      email.setAttribute('class', 'invalid');\r\n    } else {\r\n      email.setAttribute('class', '');\r\n    }\r\n  };\r\n})();\r\n\n\n//# sourceURL=webpack://basicform/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;