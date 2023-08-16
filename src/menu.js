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

export default createMenu;