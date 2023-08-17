function createContact(){
    const contact = document.createElement("div");
    contact.id = "contact";
    
    const firstGraph = document.createElement("p");
    
    // Create the bold text using a <span> element with inline styling
    const boldTextOne = document.createElement("span");
    boldTextOne.textContent = "New Culinary Horizon in Maine: ";
    boldTextOne.style.fontWeight = "bold";
    
    // Create a text node for the normal text
    const normalTextOne = document.createTextNode("Embark on a fresh gastronomic adventure as we unveil our extended location in the heart of Maine. Immerse yourself in the art of harmonizing nature's treasures into unforgettable dishes. Join us in our new space and discover a world of flavors inspired by the scenic beauty of Cape Cod.");
    
    // Append the elements and text nodes to the <p> element
    firstGraph.appendChild(boldTextOne);
    firstGraph.appendChild(normalTextOne);
    
    contact.appendChild(firstGraph);

    const boldTextTwo = document.createElement("span");
    boldTextTwo.textContent = "Savor the Essence: ";
    boldTextTwo.style.fontWeight = "bold";

    const secondGraph = document.createElement("p")
    const normalTextTwo = document.createTextNode("Exciting news! Our upcoming cookbook invites you to delve into the heart of our culinary philosophy. Explore recipes that capture the essence of seasonal ingredients, celebrating the harmony between land, plate, and the stunning landscapes of Maine.")
    secondGraph.appendChild(boldTextTwo);
    secondGraph.appendChild(normalTextTwo);

    contact.appendChild(secondGraph)

    const thirdGraph = document.createElement("p")

    const boldTextThree = document.createElement("span");
    boldTextThree.textContent = " Join Our Culinary Journey: ";
    boldTextThree.style.fontWeight = "bold";

    const normalTextThree = document.createTextNode("Seeking a creative Sous Chef to join our team and add their unique touch. If you're a culinary enthusiast with a flair for crafting memorable dishes, come be part of our endeavor to create remarkable dining experiences amidst the picturesque backdrop of Maine.")
    
    thirdGraph.appendChild(boldTextThree)
    thirdGraph.appendChild(normalTextThree)

    contact.appendChild(thirdGraph)

    return contact
}

export default createContact;