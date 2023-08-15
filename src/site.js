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


export default function createSite (){
    document.body.appendChild(createTop())
    document.body.appendChild(createSub())
    document.body.appendChild(createTabs())
    document.body.appendChild(createContent())
    document.body.appendChild(createFooter())

}


