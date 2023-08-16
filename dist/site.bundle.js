"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["site"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var menuList = [
    { itemName: 'Grilled Clams', itemIngred: "Calabrian Chili, Breadcrumbs" },
    { itemName: 'Grilled Scallops', itemIngred: "Walnuts, Yoghurt, Marjoram, Anchovy" },
    { itemName: 'Mafaldini', itemIngred: "Pink Peppercorn, Parmigiano" },
    { itemName: "Agnolotti", itemIngred: "Sheeps Milk Cheese Filled, Saffron, Dried Tomato, Honey" },
    { itemName: "Fettuccine", itemIngred: "Lamb Sausage, Tomato Passato, Lemon, Pecorino" },
    { itemName: "Ricotta Gnocchi", itemIngred: "Broccoli Pesto, Pecorino, Pistachios" },
    { itemName: "Grilled Lamb Leg Steak", itemIngred: "Roman Spices, Celery Heart, Pecorino" }

];

function createMenu(){
    const menu = document.createElement("div")
    menu.setAttribute("id","menu")

    for(let i = 0; i < menuList.length; i++) {
        createItem(menuList.itemName, menuList.itemIngred)
    }
}

function createItem(name, ingredients){
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    const itemName = document.createElement("h4")
    itemName.innerText = name
    menuItem.appendChild(itemName)

    const itemIng = document.createElement("p")
    itemIng.innerText = ingredients
    menuItem.appendChild(itemIng)

    return menuItem
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSite)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


function createTop(){
    const first = document.createElement("div")
    first.classList.add("first")
    
    const top = document.createElement("div")
    top.classList.add("top") 
    first.appendChild(top)
    
    let title = document.createElement("header")
    title.classList.add("name")
    title.innerText = "ubogi"
    top.appendChild(title)

    let resLink = document.createElement("button")
    resLink.classList.add("res")
    resLink.innerText= "reservations"
    top.appendChild(resLink)

    return first
}; 

function createSub(){
    const subBox = document.createElement("div")
    subBox.classList.add("subscribe")

    const touch = document.createElement("p")
    touch.innerText = "stay in touch"
    subBox.appendChild(touch)

    const eMail = document.createElement("input")
    eMail.placeholder = "e-mail"
    subBox.appendChild(eMail)

    const userName = document.createElement("input")
    eMail.placeholder = "name"
    subBox.appendChild(userName)

    const subButton = document.createElement("button")
    subButton.classList.add("submit")
    subButton.innerText= "subscribe"
    subBox.appendChild(subButton)

    return subBox
}

function createTabs(){
    const tabWrapper = document.createElement("div")
    tabWrapper.classList.add("tabButtons")

    const menu = document.createElement("button")
    menu.classList.add("menu")
    menu.innerText = "menu"
    tabWrapper.appendChild(menu)
    

    const aboutUs = document.createElement("button")
    aboutUs.classList.add("about-us")
    aboutUs.innerText = "about us"
    tabWrapper.appendChild(aboutUs)

    const contact = document.createElement("button")
    contact.classList.add("contact")
    contact.innerHTML = "contact us"
    tabWrapper.appendChild(contact)

    return tabWrapper

}

function createContent(){
    const contentWrapper = document.createElement("div")
    contentWrapper.setAttribute("id","content")

    ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();

    return contentWrapper
}


function createFooter(){
    const footer = document.createElement("footer")
    
    const careers = document.createElement("p")
    careers.innerText = "careers"
    footer.appendChild(careers)

    const reservations = document.createElement("p")
    reservations.innerText = "reservations"
    footer.appendChild(reservations)

    const healthInspect = document.createElement("p")
    healthInspect.innerText = "health inspectionss"
    footer.appendChild(healthInspect)


    return footer
}


function createSite (){
    document.body.appendChild(createTop())
    document.body.appendChild(createSub())
    document.body.appendChild(createTabs())
    document.body.appendChild(createContent())
    document.body.appendChild(createFooter())

}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/site.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTSx1RUFBdUU7QUFDN0UsTUFBTSxpRkFBaUY7QUFDdkYsTUFBTSxrRUFBa0U7QUFDeEUsTUFBTSw4RkFBOEY7QUFDcEcsTUFBTSxxRkFBcUY7QUFDM0YsTUFBTSxpRkFBaUY7QUFDdkYsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ007O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFVOztBQUVkO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2l0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWVudUxpc3QgPSBbXG4gICAgeyBpdGVtTmFtZTogJ0dyaWxsZWQgQ2xhbXMnLCBpdGVtSW5ncmVkOiBcIkNhbGFicmlhbiBDaGlsaSwgQnJlYWRjcnVtYnNcIiB9LFxuICAgIHsgaXRlbU5hbWU6ICdHcmlsbGVkIFNjYWxsb3BzJywgaXRlbUluZ3JlZDogXCJXYWxudXRzLCBZb2dodXJ0LCBNYXJqb3JhbSwgQW5jaG92eVwiIH0sXG4gICAgeyBpdGVtTmFtZTogJ01hZmFsZGluaScsIGl0ZW1JbmdyZWQ6IFwiUGluayBQZXBwZXJjb3JuLCBQYXJtaWdpYW5vXCIgfSxcbiAgICB7IGl0ZW1OYW1lOiBcIkFnbm9sb3R0aVwiLCBpdGVtSW5ncmVkOiBcIlNoZWVwcyBNaWxrIENoZWVzZSBGaWxsZWQsIFNhZmZyb24sIERyaWVkIFRvbWF0bywgSG9uZXlcIiB9LFxuICAgIHsgaXRlbU5hbWU6IFwiRmV0dHVjY2luZVwiLCBpdGVtSW5ncmVkOiBcIkxhbWIgU2F1c2FnZSwgVG9tYXRvIFBhc3NhdG8sIExlbW9uLCBQZWNvcmlub1wiIH0sXG4gICAgeyBpdGVtTmFtZTogXCJSaWNvdHRhIEdub2NjaGlcIiwgaXRlbUluZ3JlZDogXCJCcm9jY29saSBQZXN0bywgUGVjb3Jpbm8sIFBpc3RhY2hpb3NcIiB9LFxuICAgIHsgaXRlbU5hbWU6IFwiR3JpbGxlZCBMYW1iIExlZyBTdGVha1wiLCBpdGVtSW5ncmVkOiBcIlJvbWFuIFNwaWNlcywgQ2VsZXJ5IEhlYXJ0LCBQZWNvcmlub1wiIH1cblxuXTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVudVwiKVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1lbnVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZUl0ZW0obWVudUxpc3QuaXRlbU5hbWUsIG1lbnVMaXN0Lml0ZW1JbmdyZWQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKG5hbWUsIGluZ3JlZGllbnRzKXtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpXG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IG5hbWVcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSlcblxuICAgIGNvbnN0IGl0ZW1JbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGl0ZW1JbmcuaW5uZXJUZXh0ID0gaW5ncmVkaWVudHNcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW5nKVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcCgpe1xuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZpcnN0LmNsYXNzTGlzdC5hZGQoXCJmaXJzdFwiKVxuICAgIFxuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b3AuY2xhc3NMaXN0LmFkZChcInRvcFwiKSBcbiAgICBmaXJzdC5hcHBlbmRDaGlsZCh0b3ApXG4gICAgXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJ1Ym9naVwiXG4gICAgdG9wLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgbGV0IHJlc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgcmVzTGluay5jbGFzc0xpc3QuYWRkKFwicmVzXCIpXG4gICAgcmVzTGluay5pbm5lclRleHQ9IFwicmVzZXJ2YXRpb25zXCJcbiAgICB0b3AuYXBwZW5kQ2hpbGQocmVzTGluaylcblxuICAgIHJldHVybiBmaXJzdFxufTsgXG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Yigpe1xuICAgIGNvbnN0IHN1YkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzdWJCb3guY2xhc3NMaXN0LmFkZChcInN1YnNjcmliZVwiKVxuXG4gICAgY29uc3QgdG91Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRvdWNoLmlubmVyVGV4dCA9IFwic3RheSBpbiB0b3VjaFwiXG4gICAgc3ViQm94LmFwcGVuZENoaWxkKHRvdWNoKVxuXG4gICAgY29uc3QgZU1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBlTWFpbC5wbGFjZWhvbGRlciA9IFwiZS1tYWlsXCJcbiAgICBzdWJCb3guYXBwZW5kQ2hpbGQoZU1haWwpXG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGVNYWlsLnBsYWNlaG9sZGVyID0gXCJuYW1lXCJcbiAgICBzdWJCb3guYXBwZW5kQ2hpbGQodXNlck5hbWUpXG5cbiAgICBjb25zdCBzdWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgc3ViQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRcIilcbiAgICBzdWJCdXR0b24uaW5uZXJUZXh0PSBcInN1YnNjcmliZVwiXG4gICAgc3ViQm94LmFwcGVuZENoaWxkKHN1YkJ1dHRvbilcblxuICAgIHJldHVybiBzdWJCb3hcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFicygpe1xuICAgIGNvbnN0IHRhYldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGFiV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFiQnV0dG9uc1wiKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpXG4gICAgbWVudS5pbm5lclRleHQgPSBcIm1lbnVcIlxuICAgIHRhYldyYXBwZXIuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBcblxuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdXNcIilcbiAgICBhYm91dFVzLmlubmVyVGV4dCA9IFwiYWJvdXQgdXNcIlxuICAgIHRhYldyYXBwZXIuYXBwZW5kQ2hpbGQoYWJvdXRVcylcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKVxuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJjb250YWN0IHVzXCJcbiAgICB0YWJXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpXG5cbiAgICByZXR1cm4gdGFiV3JhcHBlclxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKXtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250ZW50V3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGVudFwiKVxuXG4gICAgY3JlYXRlTWVudSgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRXcmFwcGVyXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKVxuICAgIFxuICAgIGNvbnN0IGNhcmVlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNhcmVlcnMuaW5uZXJUZXh0ID0gXCJjYXJlZXJzXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2FyZWVycylcblxuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcmVzZXJ2YXRpb25zLmlubmVyVGV4dCA9IFwicmVzZXJ2YXRpb25zXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zKVxuXG4gICAgY29uc3QgaGVhbHRoSW5zcGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgaGVhbHRoSW5zcGVjdC5pbm5lclRleHQgPSBcImhlYWx0aCBpbnNwZWN0aW9uc3NcIlxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChoZWFsdGhJbnNwZWN0KVxuXG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2l0ZSAoKXtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRvcCgpKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU3ViKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcblxufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==