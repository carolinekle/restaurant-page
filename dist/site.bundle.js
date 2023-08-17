"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["site"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout(){
    const aboutUs = document.createElement("div")
    aboutUs.id = "aboutUs"

    const firstGraph = document.createElement("p")
    firstGraph.innerText = `
    Nestled amidst the lush landscapes, our restaurant celebrates the beauty of seasonal, 
    locally sourced ingredients. With each plate, we endeavor to highlight the vibrant 
    flavors and textures that our region has to offer. 
    From hand-picked heirloom vegetables to farm-fresh meats, 
    every element of your meal is a testament to our dedication to authenticity.
    `
    aboutUs.appendChild(firstGraph)

    const secondGraph = document.createElement("p")
    secondGraph.innerText = `
    Our team of passionate chefs transforms these premium ingredients into gastronomic 
    masterpieces that ignite the senses. The harmonious marriage of flavors, colors, 
    and textures creates a symphony on your palate, celebrating the true essence 
    of farm-to-table cuisine.
    `
    aboutUs.appendChild(secondGraph)

    /*break*/

    const thirdGraph = document.createElement("p")
    thirdGraph.innerText = `
    Beyond our culinary prowess, we take pride in our sustainable practices. 
    Our farm not only supplies our kitchen but also nurtures the environment. 
    We embrace responsible farming techniques that prioritize soil health, biodiversity, 
    and ethical treatment of animals.
    `
    aboutUs.appendChild(thirdGraph)


    const fourthGraph = document.createElement("p")
    fourthGraph.innerText = 
    `
    Join us for an unforgettable culinary journey that honors the land and its bounty. 
    Our farm-to-table philosophy ensures that every dish is a tribute to nature's finest,
     served with the utmost elegance and care. Discover the art of fine dining while 
     savoring a symphony of flavors that are as fresh as the morning dew.
    `
    aboutUs.appendChild(fourthGraph)

    return aboutUs
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const contact = document.createElement("div")
    contact.id = "contact"

    const firstGraph = document.createElement("p")
    const boldText = document.createElement("b")
    boldText.innerHTML = "New Culinary Horizon in Maine"

    firstGraph.innerText = boldText + `: Embark on a fresh gastronomic adventure as we unveil our extended location in the heart of Maine. 
    Immerse yourself in the art of harmonizing nature's treasures into unforgettable dishes. 
    Join us in our new space and discover a world of flavors inspired by the scenic beauty of Cape Cod.
    `
    contact.appendChild(firstGraph)

    const secondGraph = document.createElement("p")
    secondGraph.innerText = `
    <b>Savor the Essence: </b>Exciting news! Our upcoming cookbook invites you to delve into the heart of our culinary philosophy.
    Explore recipes that capture the essence of seasonal ingredients, 
    celebrating the harmony between land, plate, and the stunning landscapes of Maine.
    `
    contact.appendChild(secondGraph)

    /*break*/

    const thirdGraph = document.createElement("p")

    thirdGraph.innerText = `
    Join Our Culinary Journey: Seeking a creative Sous Chef to join our team and add their unique touch. 
    If you're a culinary enthusiast with a flair for crafting memorable dishes, 
    come be part of our endeavor to create remarkable dining experiences amidst the picturesque backdrop of Maine.
    `
    contact.appendChild(thirdGraph)

    return contact
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

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

function createMenu() {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    menuList.forEach(item => {
        const menuItem = createItem(item.itemName, item.itemIngred);
        menu.appendChild(menuItem);
    });
    return menu
}

function createItem(name, ingredients) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h4");
    itemName.innerText = name;
    menuItem.appendChild(itemName);

    const itemIng = document.createElement("p");
    itemIng.innerText = ingredients;
    menuItem.appendChild(itemIng);

    return menuItem;
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
  
 
 

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

    return { tabWrapper, contact }

}

function createContent(){
    const contentWrapper = document.createElement("div")
    contentWrapper.id = "content"

    contentWrapper.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());
    
    contact.addEventListener("click", () => {
        console.log("yeah")
    })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ2hEMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FDcEM1QjtBQUNBLE1BQU0sdUVBQXVFO0FBQzdFLE1BQU0saUZBQWlGO0FBQ3ZGLE1BQU0sa0VBQWtFO0FBQ3hFLE1BQU0sOEZBQThGO0FBQ3BHLE1BQU0scUZBQXFGO0FBQzNGLE1BQU0saUZBQWlGO0FBQ3ZGLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDekIsQ0FBZ0M7QUFDaEMsQ0FBa0M7QUFDbEMsQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQixpREFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQWJvdXQoKXtcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGFib3V0VXMuaWQgPSBcImFib3V0VXNcIlxuXG4gICAgY29uc3QgZmlyc3RHcmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgZmlyc3RHcmFwaC5pbm5lclRleHQgPSBgXG4gICAgTmVzdGxlZCBhbWlkc3QgdGhlIGx1c2ggbGFuZHNjYXBlcywgb3VyIHJlc3RhdXJhbnQgY2VsZWJyYXRlcyB0aGUgYmVhdXR5IG9mIHNlYXNvbmFsLCBcbiAgICBsb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMuIFdpdGggZWFjaCBwbGF0ZSwgd2UgZW5kZWF2b3IgdG8gaGlnaGxpZ2h0IHRoZSB2aWJyYW50IFxuICAgIGZsYXZvcnMgYW5kIHRleHR1cmVzIHRoYXQgb3VyIHJlZ2lvbiBoYXMgdG8gb2ZmZXIuIFxuICAgIEZyb20gaGFuZC1waWNrZWQgaGVpcmxvb20gdmVnZXRhYmxlcyB0byBmYXJtLWZyZXNoIG1lYXRzLCBcbiAgICBldmVyeSBlbGVtZW50IG9mIHlvdXIgbWVhbCBpcyBhIHRlc3RhbWVudCB0byBvdXIgZGVkaWNhdGlvbiB0byBhdXRoZW50aWNpdHkuXG4gICAgYFxuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoZmlyc3RHcmFwaClcblxuICAgIGNvbnN0IHNlY29uZEdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBzZWNvbmRHcmFwaC5pbm5lclRleHQgPSBgXG4gICAgT3VyIHRlYW0gb2YgcGFzc2lvbmF0ZSBjaGVmcyB0cmFuc2Zvcm1zIHRoZXNlIHByZW1pdW0gaW5ncmVkaWVudHMgaW50byBnYXN0cm9ub21pYyBcbiAgICBtYXN0ZXJwaWVjZXMgdGhhdCBpZ25pdGUgdGhlIHNlbnNlcy4gVGhlIGhhcm1vbmlvdXMgbWFycmlhZ2Ugb2YgZmxhdm9ycywgY29sb3JzLCBcbiAgICBhbmQgdGV4dHVyZXMgY3JlYXRlcyBhIHN5bXBob255IG9uIHlvdXIgcGFsYXRlLCBjZWxlYnJhdGluZyB0aGUgdHJ1ZSBlc3NlbmNlIFxuICAgIG9mIGZhcm0tdG8tdGFibGUgY3Vpc2luZS5cbiAgICBgXG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChzZWNvbmRHcmFwaClcblxuICAgIC8qYnJlYWsqL1xuXG4gICAgY29uc3QgdGhpcmRHcmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGhpcmRHcmFwaC5pbm5lclRleHQgPSBgXG4gICAgQmV5b25kIG91ciBjdWxpbmFyeSBwcm93ZXNzLCB3ZSB0YWtlIHByaWRlIGluIG91ciBzdXN0YWluYWJsZSBwcmFjdGljZXMuIFxuICAgIE91ciBmYXJtIG5vdCBvbmx5IHN1cHBsaWVzIG91ciBraXRjaGVuIGJ1dCBhbHNvIG51cnR1cmVzIHRoZSBlbnZpcm9ubWVudC4gXG4gICAgV2UgZW1icmFjZSByZXNwb25zaWJsZSBmYXJtaW5nIHRlY2huaXF1ZXMgdGhhdCBwcmlvcml0aXplIHNvaWwgaGVhbHRoLCBiaW9kaXZlcnNpdHksIFxuICAgIGFuZCBldGhpY2FsIHRyZWF0bWVudCBvZiBhbmltYWxzLlxuICAgIGBcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKHRoaXJkR3JhcGgpXG5cblxuICAgIGNvbnN0IGZvdXJ0aEdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBmb3VydGhHcmFwaC5pbm5lclRleHQgPSBcbiAgICBgXG4gICAgSm9pbiB1cyBmb3IgYW4gdW5mb3JnZXR0YWJsZSBjdWxpbmFyeSBqb3VybmV5IHRoYXQgaG9ub3JzIHRoZSBsYW5kIGFuZCBpdHMgYm91bnR5LiBcbiAgICBPdXIgZmFybS10by10YWJsZSBwaGlsb3NvcGh5IGVuc3VyZXMgdGhhdCBldmVyeSBkaXNoIGlzIGEgdHJpYnV0ZSB0byBuYXR1cmUncyBmaW5lc3QsXG4gICAgIHNlcnZlZCB3aXRoIHRoZSB1dG1vc3QgZWxlZ2FuY2UgYW5kIGNhcmUuIERpc2NvdmVyIHRoZSBhcnQgb2YgZmluZSBkaW5pbmcgd2hpbGUgXG4gICAgIHNhdm9yaW5nIGEgc3ltcGhvbnkgb2YgZmxhdm9ycyB0aGF0IGFyZSBhcyBmcmVzaCBhcyB0aGUgbW9ybmluZyBkZXcuXG4gICAgYFxuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoZm91cnRoR3JhcGgpXG5cbiAgICByZXR1cm4gYWJvdXRVc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dDsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCJcblxuICAgIGNvbnN0IGZpcnN0R3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGJvbGRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIilcbiAgICBib2xkVGV4dC5pbm5lckhUTUwgPSBcIk5ldyBDdWxpbmFyeSBIb3Jpem9uIGluIE1haW5lXCJcblxuICAgIGZpcnN0R3JhcGguaW5uZXJUZXh0ID0gYm9sZFRleHQgKyBgOiBFbWJhcmsgb24gYSBmcmVzaCBnYXN0cm9ub21pYyBhZHZlbnR1cmUgYXMgd2UgdW52ZWlsIG91ciBleHRlbmRlZCBsb2NhdGlvbiBpbiB0aGUgaGVhcnQgb2YgTWFpbmUuIFxuICAgIEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIGFydCBvZiBoYXJtb25pemluZyBuYXR1cmUncyB0cmVhc3VyZXMgaW50byB1bmZvcmdldHRhYmxlIGRpc2hlcy4gXG4gICAgSm9pbiB1cyBpbiBvdXIgbmV3IHNwYWNlIGFuZCBkaXNjb3ZlciBhIHdvcmxkIG9mIGZsYXZvcnMgaW5zcGlyZWQgYnkgdGhlIHNjZW5pYyBiZWF1dHkgb2YgQ2FwZSBDb2QuXG4gICAgYFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZmlyc3RHcmFwaClcblxuICAgIGNvbnN0IHNlY29uZEdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBzZWNvbmRHcmFwaC5pbm5lclRleHQgPSBgXG4gICAgPGI+U2F2b3IgdGhlIEVzc2VuY2U6IDwvYj5FeGNpdGluZyBuZXdzISBPdXIgdXBjb21pbmcgY29va2Jvb2sgaW52aXRlcyB5b3UgdG8gZGVsdmUgaW50byB0aGUgaGVhcnQgb2Ygb3VyIGN1bGluYXJ5IHBoaWxvc29waHkuXG4gICAgRXhwbG9yZSByZWNpcGVzIHRoYXQgY2FwdHVyZSB0aGUgZXNzZW5jZSBvZiBzZWFzb25hbCBpbmdyZWRpZW50cywgXG4gICAgY2VsZWJyYXRpbmcgdGhlIGhhcm1vbnkgYmV0d2VlbiBsYW5kLCBwbGF0ZSwgYW5kIHRoZSBzdHVubmluZyBsYW5kc2NhcGVzIG9mIE1haW5lLlxuICAgIGBcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHNlY29uZEdyYXBoKVxuXG4gICAgLypicmVhayovXG5cbiAgICBjb25zdCB0aGlyZEdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcblxuICAgIHRoaXJkR3JhcGguaW5uZXJUZXh0ID0gYFxuICAgIEpvaW4gT3VyIEN1bGluYXJ5IEpvdXJuZXk6IFNlZWtpbmcgYSBjcmVhdGl2ZSBTb3VzIENoZWYgdG8gam9pbiBvdXIgdGVhbSBhbmQgYWRkIHRoZWlyIHVuaXF1ZSB0b3VjaC4gXG4gICAgSWYgeW91J3JlIGEgY3VsaW5hcnkgZW50aHVzaWFzdCB3aXRoIGEgZmxhaXIgZm9yIGNyYWZ0aW5nIG1lbW9yYWJsZSBkaXNoZXMsIFxuICAgIGNvbWUgYmUgcGFydCBvZiBvdXIgZW5kZWF2b3IgdG8gY3JlYXRlIHJlbWFya2FibGUgZGluaW5nIGV4cGVyaWVuY2VzIGFtaWRzdCB0aGUgcGljdHVyZXNxdWUgYmFja2Ryb3Agb2YgTWFpbmUuXG4gICAgYFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQodGhpcmRHcmFwaClcblxuICAgIHJldHVybiBjb250YWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7IiwidmFyIG1lbnVMaXN0ID0gW1xuICAgIHsgaXRlbU5hbWU6ICdHcmlsbGVkIENsYW1zJywgaXRlbUluZ3JlZDogXCJDYWxhYnJpYW4gQ2hpbGksIEJyZWFkY3J1bWJzXCIgfSxcbiAgICB7IGl0ZW1OYW1lOiAnR3JpbGxlZCBTY2FsbG9wcycsIGl0ZW1JbmdyZWQ6IFwiV2FsbnV0cywgWW9naHVydCwgTWFyam9yYW0sIEFuY2hvdnlcIiB9LFxuICAgIHsgaXRlbU5hbWU6ICdNYWZhbGRpbmknLCBpdGVtSW5ncmVkOiBcIlBpbmsgUGVwcGVyY29ybiwgUGFybWlnaWFub1wiIH0sXG4gICAgeyBpdGVtTmFtZTogXCJBZ25vbG90dGlcIiwgaXRlbUluZ3JlZDogXCJTaGVlcHMgTWlsayBDaGVlc2UgRmlsbGVkLCBTYWZmcm9uLCBEcmllZCBUb21hdG8sIEhvbmV5XCIgfSxcbiAgICB7IGl0ZW1OYW1lOiBcIkZldHR1Y2NpbmVcIiwgaXRlbUluZ3JlZDogXCJMYW1iIFNhdXNhZ2UsIFRvbWF0byBQYXNzYXRvLCBMZW1vbiwgUGVjb3Jpbm9cIiB9LFxuICAgIHsgaXRlbU5hbWU6IFwiUmljb3R0YSBHbm9jY2hpXCIsIGl0ZW1JbmdyZWQ6IFwiQnJvY2NvbGkgUGVzdG8sIFBlY29yaW5vLCBQaXN0YWNoaW9zXCIgfSxcbiAgICB7IGl0ZW1OYW1lOiBcIkdyaWxsZWQgTGFtYiBMZWcgU3RlYWtcIiwgaXRlbUluZ3JlZDogXCJSb21hbiBTcGljZXMsIENlbGVyeSBIZWFydCwgUGVjb3Jpbm9cIiB9XG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuXG4gICAgbWVudUxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVJdGVtKGl0ZW0uaXRlbU5hbWUsIGl0ZW0uaXRlbUluZ3JlZCk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiBtZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0obmFtZSwgaW5ncmVkaWVudHMpIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgY29uc3QgaXRlbUluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1JbmcuaW5uZXJUZXh0ID0gaW5ncmVkaWVudHM7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUluZyk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiIGltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIiBcbiBpbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSBcIi4vYWJvdXRcIlxuIGltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIlxuXG5mdW5jdGlvbiBjcmVhdGVUb3AoKXtcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmaXJzdC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RcIilcbiAgICBcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdG9wLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIikgXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQodG9wKVxuICAgIFxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwidWJvZ2lcIlxuICAgIHRvcC5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIGxldCByZXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHJlc0xpbmsuY2xhc3NMaXN0LmFkZChcInJlc1wiKVxuICAgIHJlc0xpbmsuaW5uZXJUZXh0PSBcInJlc2VydmF0aW9uc1wiXG4gICAgdG9wLmFwcGVuZENoaWxkKHJlc0xpbmspXG5cbiAgICByZXR1cm4gZmlyc3Rcbn07IFxuXG5mdW5jdGlvbiBjcmVhdGVTdWIoKXtcbiAgICBjb25zdCBzdWJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3ViQm94LmNsYXNzTGlzdC5hZGQoXCJzdWJzY3JpYmVcIilcblxuICAgIGNvbnN0IHRvdWNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0b3VjaC5pbm5lclRleHQgPSBcInN0YXkgaW4gdG91Y2hcIlxuICAgIHN1YkJveC5hcHBlbmRDaGlsZCh0b3VjaClcblxuICAgIGNvbnN0IGVNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZU1haWwucGxhY2Vob2xkZXIgPSBcImUtbWFpbFwiXG4gICAgc3ViQm94LmFwcGVuZENoaWxkKGVNYWlsKVxuXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBlTWFpbC5wbGFjZWhvbGRlciA9IFwibmFtZVwiXG4gICAgc3ViQm94LmFwcGVuZENoaWxkKHVzZXJOYW1lKVxuXG4gICAgY29uc3Qgc3ViQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHN1YkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0XCIpXG4gICAgc3ViQnV0dG9uLmlubmVyVGV4dD0gXCJzdWJzY3JpYmVcIlxuICAgIHN1YkJveC5hcHBlbmRDaGlsZChzdWJCdXR0b24pXG5cbiAgICByZXR1cm4gc3ViQm94XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKXtcbiAgICBjb25zdCB0YWJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRhYldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhYkJ1dHRvbnNcIilcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxuICAgIG1lbnUuaW5uZXJUZXh0ID0gXCJtZW51XCJcbiAgICB0YWJXcmFwcGVyLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgXG5cbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZChcImFib3V0LXVzXCIpXG4gICAgYWJvdXRVcy5pbm5lclRleHQgPSBcImFib3V0IHVzXCJcbiAgICB0YWJXcmFwcGVyLmFwcGVuZENoaWxkKGFib3V0VXMpXG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIilcbiAgICBjb250YWN0LmlubmVySFRNTCA9IFwiY29udGFjdCB1c1wiXG4gICAgdGFiV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0KVxuXG4gICAgcmV0dXJuIHsgdGFiV3JhcHBlciwgY29udGFjdCB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpe1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRlbnRXcmFwcGVyLmlkID0gXCJjb250ZW50XCJcblxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInllYWhcIilcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvbnRlbnRXcmFwcGVyXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKVxuICAgIFxuICAgIGNvbnN0IGNhcmVlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNhcmVlcnMuaW5uZXJUZXh0ID0gXCJjYXJlZXJzXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2FyZWVycylcblxuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcmVzZXJ2YXRpb25zLmlubmVyVGV4dCA9IFwicmVzZXJ2YXRpb25zXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zKVxuXG4gICAgY29uc3QgaGVhbHRoSW5zcGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgaGVhbHRoSW5zcGVjdC5pbm5lclRleHQgPSBcImhlYWx0aCBpbnNwZWN0aW9uc3NcIlxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChoZWFsdGhJbnNwZWN0KVxuXG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2l0ZSAoKXtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRvcCgpKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU3ViKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcblxufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==