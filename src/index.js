console.log("Do you hear me?")

import check from "./site";

function component(){
    const element = document.createElement("div")
    const resLink = document.createElement("button")
    resLink.addClassList.add("bad")
    resLink.innerHTML ="reservations"
    resLink.onclick = check;

    element.appendChild(resLink)

    return resLink;
}

 document.body.appendChild(component())