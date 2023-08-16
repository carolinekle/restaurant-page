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

export default createContact;